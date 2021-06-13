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

function Contents() {

    const [inpu, setInpu] = useState('');
    const [posts, setPosts] = useState([]);

    const changeIt = e => {
        setInpu(e.target.value);
    }

    useEffect(() => {
        db.collection("posts").onSnapshot(snapshot => {
            setPosts(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
        });
    },[])

    const submitIt = e => {
        e.preventDefault();
        if (inpu) {
            db.collection('posts').add({
                userimg: "https://i.guim.co.uk/img/media/2bfc61f76154bd557b13b1b7041fcf4f4ebcd904/227_0_3006_1804/master/3006.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=10753871c86a360f1faebd9cf911b46a",
                name: "Kong",
                desc: "Inspiring to be an actor",
                post: inpu,
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            });
        }

        else {
            alert('Input field should not be empty!');
        }
       
    }

    return (
        <ContentsContainer>
            <div className='shadow'>
                <ContentInput onSubmit={submitIt}>
                    <Avatar src="https://i.guim.co.uk/img/media/2bfc61f76154bd557b13b1b7041fcf4f4ebcd904/227_0_3006_1804/master/3006.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=10753871c86a360f1faebd9cf911b46a" />
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
            <Posts userimg="https://i.guim.co.uk/img/media/2bfc61f76154bd557b13b1b7041fcf4f4ebcd904/227_0_3006_1804/master/3006.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=10753871c86a360f1faebd9cf911b46a"
                name="kong"
                desc="Actor...Currently shooting GodzillaVsKong"
                timestamp="21:00:00"
                post="Pls like share and go watch my new movie godzilla vs kong in which first we are enemies and then we become besties forever...Very romantic right?? #KongGodzilla"
            />
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