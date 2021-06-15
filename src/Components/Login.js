import { Button } from "@material-ui/core";
import { useState } from "react"
import { useDispatch } from "react-redux";
import styled from "styled-components"
import { login } from "../features/userSlice";
import { auth } from "../firebase";
import Loginlogo from "../Statics/Loginlogo.jpeg"

function Login() {
    const [registerstate, setRegisterstate] = useState(false);
    const [name, setName] = useState('');
    const [photo, setPhoto] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repassword, setRepassword] = useState('');
    const dispatch = useDispatch();
    
    const clickMe = () => {
        setRegisterstate(!registerstate);
        setName('');
        setPhoto('');
        setEmail('');
        setPassword('');
        setRepassword('');
    }

    const submitIt = (e) => {
        e.preventDefault();

        if (registerstate) {
            if (password != repassword) {
                alert("Passwords don't match");
                return false;
            }

            auth.createUserWithEmailAndPassword(email, password)
                .then(userAuth => {
                    userAuth.user.updateProfile({
                        displayName: name,
                        photoURL: photo
                    })
                }).then(() => {
                    clickMe();
                })
                .catch(e => alert(e.message));
        }

        else {
            auth.signInWithEmailAndPassword(email, password)
            .then(userAuth => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayname: userAuth.user.displayName,
                    photo: userAuth.user.photoURL
                }));
            }).catch(e => alert(e.message));
        }
    }

    return (
        <LoginContainer>
            <div className='shadow'>
                <img src={Loginlogo} alt="" />
                <form onSubmit={submitIt}>
                    {registerstate &&
                        <input
                            type="text"
                            placeholder="Full Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required />
                    }
                    {registerstate &&
                        <input
                            type="url"
                            placeholder="PhotoURL"
                            value={photo}
                            onChange={(e) => setPhoto(e.target.value)} />
                    }
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    {registerstate &&
                        <input
                            type="password"
                            placeholder="Re-Enter Password"
                            value={repassword}
                            onChange={(e) => setRepassword(e.target.value)}
                            required />
                    }
                    
                    {registerstate ? (
                        <>
                            <Button type="submit">Register</Button>
                            <p>Already have an account <span onClick={clickMe}>Login Now</span></p> 
                        </>
                    ) : (
                        <>
                            <Button type="submit">LogIn</Button>
                            <p>New to Linkedin? <span onClick={clickMe}>Register Now</span></p>                        
                        </>  
                    )
                    }
                </form>
            </div>
        </LoginContainer>
    )
}

export default Login

const LoginContainer = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0rem 2rem 2rem 2rem;
        box-shadow: 2px 2px 10px gray;

        > img {
            object-fit: contain;
            width: 26.25rem;
        }

        > form > input {
            width: 100%;
            outline: none;
            border: solid 1px lightgray;
            padding: 1rem;
            border-radius: 10px;
            font-size: 1.2rem;
            margin-bottom: 0.6rem;
        }

        >form > .MuiButton-root {
            margin-top: 1rem;
            width: 100%;
            background-color: #0d6efd;
            color: white;
            border-radius: 5px;
            border: none;
            font-size: 1.2rem;
            padding: 0.6rem 0;
        }

        >form > p {
            margin-top: 0.8rem;
            text-align: center;

            > span {
                color: blue;
                text-decoration: underline;
                cursor: pointer;
            }
        }
    }
`;