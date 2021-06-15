import { useState } from "react"
import styled from "styled-components"
import { auth } from "../firebase";
import Loginlogo from "../Statics/Loginlogo.jpeg"

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const submitIt = () => {

    }

    return (
        <LoginContainer>
            <div className='shadow'>
                <img src={Loginlogo} alt="" />
                <form onSubmit={submitIt}>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email} onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password} onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit">LogIn</button>
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
        padding: 5rem;

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

        >form > button {
            margin-top: 1rem;
            width: 100%;
            background-color: #0d6efd;
            color: white;
            border-radius: 5px;
            border: none;
            font-size: 1.2rem;
            padding: 0.6rem 0;
        }
    }
`;