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
                <Avatar src={userimg}>{name[0]}</Avatar>
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
        color: black;
        width: 3rem;
        height: 3rem;
        font-size: 1.3rem;
        font-weight: 900;
        margin-right: 0.5rem;
    }

    > div {
        font-size: 0.8rem;
   
        > :last-child {
            color: gray;
            font-size: 0.6rem;
        }
    }

`;

const SocialActions = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 1rem;
    padding-top: 0.3rem;
    border-top: solid 1px #d3d3d370;
    
    > div {
        padding: 0.5rem;
        display: flex;
        align-items: center;
        border-radius: 7px;
        color: #777777;
        font-size: 0.875rem;
        cursor: pointer;

        :hover {
            background-color: lightgray;
        }

        > p {
            margin-left: 0.5rem;
        }
    }
`;