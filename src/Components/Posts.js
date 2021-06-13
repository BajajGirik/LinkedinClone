import { Avatar } from "@material-ui/core";
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
        </PostContainer>
    )
}

export default Posts

const PostContainer = styled.div``;
const UserInfo = styled.div`
    display: flex;
`;
