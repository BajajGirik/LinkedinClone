import { Avatar, Button } from "@material-ui/core";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components"
import { logout, selectUser } from "../features/userSlice";
import { auth } from '../firebase';

function HeaderOp({ Icon, title, use }) {
    const [zin, setZin] = useState(false);
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    const logoutNow = () => {
        if (use) {
            dispatch(logout());
            auth.signOut();
        }
    }

    return (
        <>
            <HeaderOpContainer onClick={e => setZin(!zin)}>
                {Icon && <Icon />}
                {use && <AvatarS src={user?.photo} >{user?.displayname[0]}</AvatarS> }
                <p>{title}</p>
                {use && <Arrow />}
            </HeaderOpContainer>
            {use &&
                <PopDown className='shadow' zin={zin}>
                    <h3>{user.displayname}</h3>
                    <p>{user.email}</p>
                   <Button onClick={logoutNow}>Sign Out</Button>
                </PopDown>
            }
        </>
    )
}

export default HeaderOp

const HeaderOpContainer = styled.div`
    text-align: center;
    width: 5rem;
    opacity: 0.7;
    cursor: pointer;
    position: relative;
    
    > p {
        font-size: 0.75rem;
    }
    
    :hover {
        opacity: 1;
    }
    
    :hover::after {
        transform: scaleX(1);
    }
    
    ::after {
        content: "";
        background-color: black;
        display: block;
        height: 2px;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -0.5rem;
        transform: scaleX(0);
        transition: transform 300ms ease-in-out;
    }
    
    @media screen and (max-width: 46.25rem) {
        > p {
            display: none;
        }
        
        ::after {
            display: none;
        }
    }

    @media screen and (max-width: 39.5rem) {
        width: 2.4rem;
    }
`;

const AvatarS = styled(Avatar)`
    object-fit: contain !important;
    margin: 0 auto;
    color: black !important;
    font-weight: 700;
    margin-bottom: 1px;
    width: 1.5625rem !important;
    height: 1.5625rem !important;
`;

const Arrow = styled(ArrowDropDownIcon)`
    position: absolute;
    bottom: -11.5%;
    right: 12%;

    @media screen and (max-width: 46.25rem) {
        bottom: -60%;
        right: 35%;
    }
`;

const PopDown = styled.div`
    position: absolute;
    top: 3.7rem;
    right: 0;
    transition: opacity 400ms ease-in-out;
    visibility: ${props => props.zin ? "visible" : "hidden"};
    opacity: ${props => props.zin ? 1 : 0};
    text-align: center;
    padding: 1rem 1rem 0.3rem;
    line-height: 1.6;

    > .MuiButton-root {
        width: 100%;
        margin-top: 0.5rem;
        border: solid 1px #0a66c2;
        color: #0a66c2;
        border-radius: 50%;
    }
`;
