import styled from "styled-components"
import Loginlogo from "../Statics/Loginlogo.jpeg"
function Login() {
    return (
        <LoginContainer>
            <div className='shadow'>
                <img src={Loginlogo} alt="" />
                <form>
                    <input type="email" placeholder="Email"/>
                    <input type="password" placeholder="Password"/>
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
            border-radius: 10px;
            font-size: 1.5rem;
            margin-bottom: 1rem;
        }
    }
`;