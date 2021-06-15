import { Button } from "@material-ui/core";
import { useState } from "react"
import { useDispatch } from "react-redux";
import styled from "styled-components"
import { login } from "../features/userSlice";
import { auth } from "../firebase";
import Loginlogo from "../Statics/Loginlogo.jpeg"

function Login() {
    const [loginstate, setLoginstate] = useState(true);
    const [name, setName] = useState('');
    const [photo, setPhoto] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repassword, setRepassword] = useState('');
    const dispatch = useDispatch();

    const submitIt = () => {
        auth.signInWithEmailAndPassword(email, password)
            .then(userAuth => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayname: userAuth.user.displayName,
                    photo: userAuth.user.photoURL,
                }));
            })
    }

    return (
        <LoginContainer>
            <div className='shadow'>
                <img src={Loginlogo} alt="" />
                <form onSubmit={submitIt}>
                    <input
                        type="text"
                        placeholder="Full Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <input
                        type="url"
                        placeholder="PhotoURL"
                        value={photo}
                        onChange={(e) => setPhoto(e.target.value)}
                    />
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
                    <input
                        type="password"
                        placeholder="Re-Enter Password"
                        value={repassword}
                        onChange={(e) => setRepassword(e.target.value)}
                        required
                    />
                    <Button type="submit">LogIn</Button>
                    <p>New to Linkedin? <a href="#">Register Now</a></p>
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
        padding: 2rem;

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

            > a {
                color: blue;
            }
        }
    }
`;