import { Avatar } from "@material-ui/core";
import styled from "styled-components"

function Contents() {
    return (
        <ContentsContainer>
            <ContentInput className='shadow'>
                <Avatar src="https://i.guim.co.uk/img/media/2bfc61f76154bd557b13b1b7041fcf4f4ebcd904/227_0_3006_1804/master/3006.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=10753871c86a360f1faebd9cf911b46a" />
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