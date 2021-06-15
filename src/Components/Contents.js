import { Avatar } from "@material-ui/core";
import PhotoIcon from '@material-ui/icons/Photo';
import YouTubeIcon from '@material-ui/icons/YouTube';
import EventNoteIcon from '@material-ui/icons/EventNote';
import AssignmentIcon from '@material-ui/icons/Assignment';
import styled from "styled-components"
import Posts from "./Posts";
import { useEffect, useState } from "react";
import firebase from "firebase";
import { db } from "../firebase";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

function Contents() {
    const user = useSelector(selectUser);
    const [inpu, setInpu] = useState('');
    const [posts, setPosts] = useState([]);

    const changeIt = e => {
        setInpu(e.target.value);
    }

    useEffect(() => {
        db.collection("posts").orderBy('timestamp','desc').onSnapshot(snapshot => {
            setPosts(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })));
        });
    }, []);

    const submitIt = e => {
        e.preventDefault();
        if (inpu) {
            db.collection('posts').add({
                userimg: user.photo,
                name: user.displayname,
                desc: "A new user trying out linkedinclone",
                post: inpu,
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            });
        
            setInpu('');
        }

        else {
            alert('Input field should not be empty!');
        }
       
    }

    return (
        <ContentsContainer>
            <div className='shadow'>
                <ContentInput onSubmit={submitIt}>
                    <Avatar src={user?.photo}>{user.displayname[0]}</Avatar>
                    <input type="text" placeholder='Start a post' value={inpu} onChange={changeIt}/>
                </ContentInput>

                <MediaPosting>
                    <Media>
                        <PhotoIcon style={{ color: "skyblue" }} />
                        <p>Photo</p>
                    </Media>
                    <Media>
                        <YouTubeIcon style={{ color: "#7fc15e" }} />
                        <p>Video</p>
                    </Media>
                    <Media>
                        <EventNoteIcon style={{ color: "orange" }} />
                        <p>Event</p>
                    </Media>
                    <Media>
                        <AssignmentIcon style={{ color: "tomato" }} />
                        <p>Write article</p>
                    </Media>
                </MediaPosting>
            </div>    
            {posts.map(({ id, data }) => (
                <Posts
                    key={id}
                    userimg={data.userimg}
                    name={data.name}
                    desc={data.desc}
                    post={data.post}
                    timestamp={data.timestamp?.toDate().toString()}
                />
            ))}
        </ContentsContainer>
    )
}

export default Contents

const ContentsContainer = styled.div`
    flex: 0.6;

    > .shadow {
        padding: 1rem 1rem 0.3rem 1rem;
    }
`;

const ContentInput = styled.form`
    display: flex;

    > .MuiAvatar-root {
        color: black;
        font-weight: 700;
    }

    > input {
        outline: none;
        font-size: 0.9rem;
        font-weight: 700;
        border: solid 1px lightgray;
        border-radius: 30px;
        flex-grow: 1;
        margin-left: 0.6rem;
        padding: 0.4rem 1rem;  
    }
`;

const MediaPosting = styled.div`
    margin-top: 0.5rem;
    display: flex;
    justify-content: space-around;
`;

const Media = styled.div`
    display: flex;
    font-size: 0.9rem;
    align-items: center;
    padding: 0.7rem;
    cursor: pointer;
    border-radius: 5px;

    :hover {
        background-color: lightgray;
    }

    > p {
        margin-left: 0.5rem;
    }

    > .MuiSvgIcon-root {
        font-size: 1.8rem;
    }
`;