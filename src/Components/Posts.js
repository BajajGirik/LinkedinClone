import { Avatar } from "@material-ui/core";
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import CommentOutlinedIcon from '@material-ui/icons/CommentOutlined';
import MobileScreenShareIcon from '@material-ui/icons/MobileScreenShare';
import SendIcon from '@material-ui/icons/Send';
import styled from "styled-components"

function Posts({ userimg, name, desc, timestamp, post }) {
    return (
        <PostContainer className='shadow'>
            <UserInfo>
                <Avatar src={userimg} />
                <div>
                    <h3>{name}</h3>
                    <p>{desc}</p>
                    <p>{timestamp}</p>
                </div>
            </UserInfo>

            <div>
                { post }
            </div>

            <SocialActions>
                <div>
                    <ThumbUpAltOutlinedIcon />
                    <p>Like</p>
                </div>
                <div>
                    <CommentOutlinedIcon />
                    <p>Comment</p>
                </div>
                <div>
                    <MobileScreenShareIcon />
                    <p>Share</p>
                </div>
                <div>
                    <SendIcon />
                    <p>Send</p>
                </div>
            </SocialActions>
        </PostContainer>
    )
}

export default Posts

const PostContainer = styled.div``;

const UserInfo = styled.div`
    display: flex;
    margin-bottom: 1rem;

    > .MuiAvatar-root {
        width: 3rem;
        height: 3rem;
        margin-right: 0.5rem;
    }

    > div {
        font-size: 0.8rem;
    }

    > div > :last-child {
        color: gray;
        font-size: 0.6rem;
    }
`;

const SocialActions = styled.div`
    display: flex;
    justify-content: space-around;
`;