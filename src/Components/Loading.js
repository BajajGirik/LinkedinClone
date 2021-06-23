import styled from "styled-components";
import { Circle } from "better-react-spinkit";
    
function Loading() {
    return (
        <LoadingContainer>
            <div className='shadow'>
                <img src={process.env.PUBLIC_URL + '/Statics/Loginlogo.jpeg'} alt="" />
                <Circle color="#0a66c2" size={50}/>
             </div>   
        </LoadingContainer>
    )
}

export default Loading

const LoadingContainer = styled.div`
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

            @media screen and (max-width: 39.5rem) {
                width: 14.5rem;
            }
        }
    }    
`;