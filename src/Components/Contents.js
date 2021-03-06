import { Avatar } from "@material-ui/core";
import PhotoIcon from '@material-ui/icons/Photo';
import YouTubeIcon from '@material-ui/icons/YouTube';
import EventNoteIcon from '@material-ui/icons/EventNote';
import AssignmentIcon from '@material-ui/icons/Assignment';
import styled from "styled-components"
import Posts from "./Posts";
import { useEffect, useState, useRef } from "react";
import firebase from "firebase";
import { db, storage } from "../firebase";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

function Contents() {
    const user = useSelector(selectUser);
    const [inpu, setInpu] = useState('');
    const [posts, setPosts] = useState([]);
    const [img, setImg] = useState(null);
    const [vid, setVid] = useState(null);
    const imgpicker = useRef(null);
    const videopicker = useRef(null);

    const changeIt = e => {
        setInpu(e.target.value);
    }

    const addImage = e => {
        if (vid) {
            setVid(null);
        }
        const reader = new FileReader();
        const f = e.target.files[0];
        if (f) {
            reader.readAsDataURL(f);
            reader.onload = (readerevent) => {
                setImg(readerevent.target.result);
            };
        }
        e.target.value = '';
    }

    const addVideo = e => {
        if (img) {
            setImg(null);
        }
        const reader = new FileReader();
        const f = e.target.files[0];
        if (f) {
            reader.readAsDataURL(f);
            reader.onload = (readerevent) => {
                setVid(readerevent.target.result);
            };
        }
        e.target.value = '';
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
            })
            .then((doc) => {
                if (img) {
                    const upload = storage.ref(`posts/${doc.id}`).putString(img, 'data_url');
                    setImg(null);
                    upload.on('state_change',
                        null,
                        error => alert(error),
                        () => {
                            storage.ref(`posts/${doc.id}`).getDownloadURL()
                            .then((url) => {
                                db.collection('posts').doc(doc.id).set({
                                    postImg: url
                                }, { merge: true });
                            })
                        }
                    );
                }
                if (vid) {
                    const upload = storage.ref(`posts/${doc.id}`).putString(vid, 'data_url');
                    setVid(null);
                    upload.on('state_change',
                        null,
                        error => alert(error),
                        () => {
                            storage.ref(`posts/${doc.id}`).getDownloadURL()
                            .then((url) => {
                                db.collection('posts').doc(doc.id).set({
                                    postVid: url
                                }, { merge: true });
                            })
                        }
                    );
                }
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
                    <div>
                        <Avatar src={user?.photo}>{user.displayname[0]}</Avatar>
                        <input type="text" placeholder='Start a post' value={inpu} onChange={changeIt} />
                    </div>    
                    {img &&
                        <Preview>
                            <img src={img} alt="" />
                            <p onClick={() => setImg(null)}>REMOVE</p>
                        </Preview>
                    }
                    {vid &&
                        <Preview>
                            <video src={vid} controls>Your browser doesn't support video preview</video>
                            <p onClick={() => setVid(null)}>REMOVE</p>
                        </Preview>
                    }
                </ContentInput>

                <MediaPosting>
                    <Media onClick={() => imgpicker.current.click() }>
                        <PhotoIcon style={{ color: "skyblue" }} />
                        <p>Photo</p>
                        <input type="file" ref={imgpicker} accept="image/*"  
                            onChange={addImage}  hidden
                        />
                    </Media>
                    <Media onClick={() => videopicker.current.click() }>
                        <YouTubeIcon style={{ color: "#7fc15e" }} />
                        <p>Video</p>
                        <input type="file" ref={videopicker} accept="video/*"  
                            onChange={addVideo}  hidden
                        />
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
                    postImg={data.postImg}
                    postVid={data.postVid}
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
    flex-direction: column;

    > :nth-child(1) {
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
    } 
`;

const Preview = styled.div`
    margin-top: 1rem;
    text-align: center;

    > img {
        max-width: 100%;
        object-fit: cover;
        background-position: center;
        border-radius: 10px;
    }

    > video {
        max-width: 100%;
        border-radius: 10px;
    }

    > p {
        margin-top: 0.2rem;
        padding: 0.5rem;
        color: red;
        border-radius: 10px;
        cursor: pointer;
        transition: background-color 400ms ease-in-out;

        :hover {
            background-color: lightgray;
        }
    } 
`;

const MediaPosting = styled.div`
    margin-top: 0.5rem;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;

    @media screen and (max-width: 39.5rem) {
        justify-content: space-between;
    }    
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

    @media screen and (max-width: 39.5rem) {
        flex-basis: 50%;
    }
`;