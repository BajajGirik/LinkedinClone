import styled from "styled-components"
import Loginlogo from "../Statics/Loginlogo.jpeg"
function Login() {
    return (
        <LoginContainer>
            <div className='shadow'>
            <img src={Loginlogo} alt="" />
            </div>
        </LoginContainer>
    )
}

export default Login

const LoginContainer = styled.div``;