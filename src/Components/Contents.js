import { Avatar } from "@material-ui/core";
import styled from "styled-components"

function Contents() {
    return (
        <ContentsContainer>
            <ContentInput className='shadow'>
                <Avatar />
                <input type="text" placeholder='Start a post'/>
            </ContentInput>

            {/* Posts */}
        </ContentsContainer>
    )
}

export default Contents

const ContentsContainer = styled.div`
    flex: 0.6;
`;

const ContentInput = styled.div`
    margin-left: 0.5rem;
    padding: 1rem;
    display: flex;

    > input {
        outline: none;
        font-size: 0.9rem;
        font-weight: 700;
        border: solid 1px lightgray;
        border-radius: 30px;
        flex-grow: 1;
        margin-left: 1rem;
        padding: 0.4rem 1rem;  
    }
`;