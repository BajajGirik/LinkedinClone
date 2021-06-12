import { Avatar } from "@material-ui/core";
import PhotoIcon from '@material-ui/icons/Photo';
import YouTubeIcon from '@material-ui/icons/YouTube';
import EventNoteIcon from '@material-ui/icons/EventNote';
import AssignmentIcon from '@material-ui/icons/Assignment';
import styled from "styled-components"

function Contents() {
    return (
        <ContentsContainer>
            <div className='shadow'>
                <Posting>
                    <ContentInput>
                        <Avatar src="https://i.guim.co.uk/img/media/2bfc61f76154bd557b13b1b7041fcf4f4ebcd904/227_0_3006_1804/master/3006.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=10753871c86a360f1faebd9cf911b46a" />
                        <input type="text" placeholder='Start a post'/>
                    </ContentInput>
                </Posting>
                <MediaPosting>
                    <Media>
                        <PhotoIcon />
                        <p>Photo</p>
                    </Media>
                    <Media>
                        <YouTubeIcon />
                        <p>Video</p>
                    </Media>
                    <Media>
                        <EventNoteIcon />
                        <p>Event</p>
                    </Media>
                    <Media>
                        <AssignmentIcon />
                        <p>Article</p>
                    </Media>
                </MediaPosting>
            </div>    
            {/* Posts */}
        </ContentsContainer>
    )
}

export default Contents

const ContentsContainer = styled.div`
    flex: 0.6;

    > .shadow {
        padding: 1rem;
    }


`;

const ContentInput = styled.div`
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


const Posting = styled.div``;

const MediaPosting = styled.div`
    display: flex;
    justify-content: space-around;
`;

const Media = styled.div`
    display: flex;
    align-items: center;
`;