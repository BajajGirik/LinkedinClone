import { Avatar, Button } from "@material-ui/core"
import styled from "styled-components"
import TurnedInIcon from '@material-ui/icons/TurnedIn';

function SidebarL() {

    const hashTag = (s) => (
        <Hash>
            <h4>#</h4>
            <p>{s}</p>
        </Hash>
    );

    return (
        <SidebarLContainer>
            <SidebarTop>
                <SidebarT></SidebarT>
                <UserInfo>
                    <Button>
                        <Avatar src="https://i.guim.co.uk/img/media/2bfc61f76154bd557b13b1b7041fcf4f4ebcd904/227_0_3006_1804/master/3006.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=10753871c86a360f1faebd9cf911b46a" />
                    </Button>
                    <h2>Welcome, Mr.Kong!</h2>
                </UserInfo>
                <ConnectionInfo>
                    <div>
                        <p>Connections</p>
                        <h3>Grow your connections</h3>
                    </div>
                    <p>29</p>
                </ConnectionInfo>
                <LastSec>
                    <TurnedInIcon />
                    <p>My items</p>
                </LastSec>
            </SidebarTop>
            <SidebarBottom>
                {hashTag("India")}
                {hashTag("AWS")}
                {hashTag("Nasa")}
                {hashTag("Tesla")}
            </SidebarBottom>
        </SidebarLContainer>
    )
}

export default SidebarL

const SidebarLContainer = styled.div`
    flex: 0.2;
`;

const SidebarTop = styled.div`
    background-color: white;
    box-shadow: 0px 1px 3px lightgray;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    margin-bottom: 1rem;
`;

const SidebarT = styled.div`
    background-image: url(https://devblogs.microsoft.com/xamarin/wp-content/uploads/sites/44/2020/03/CssSample1.png);
    height: 3.375rem;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
`;

const UserInfo = styled.div`
    text-align: center;
    margin-top: -1.5rem;
    border-bottom: solid 1px lightgray;
    > h2{
        font-size: 1rem;
        margin-top: 1.4rem;
        margin-bottom: 0.7rem;
    }
`;

const ConnectionInfo = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 0.5rem;
    margin: 1.4rem 0;
    font-size: 0.75rem;
    cursor: pointer;

    > p {
        color: #0a66c2;
        font-weight: 700;
    }

    > div > p {
        color: #00000099;
        font-weight: 700;
    }

    > div > h3 {
        margin-top: 2px;
        font-size: 0.75rem;
    }

    :hover {
        background-color: lightgray;
    }
`;

const LastSec = styled.div`
    display: flex;
    padding: 0.8rem 0.5rem;
    border-top: solid 1px lightgray;
    font-size: 0.75rem;
    font-weight: 700;
    cursor: pointer;

    > .MuiSvgIcon-root {
        color: gray;
        font-size: 1.2rem;
        margin-right: 0.2rem;
    }

    :hover {
        background-color: lightgray;
    }
`;

const SidebarBottom = styled.div`
    padding: 1rem 0.5rem;
    background-color: white;
    box-shadow: 0px 1px 3px lightgray;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
`;

const Hash = styled.div`
    display: flex;
    margin: 0.5rem 0;
`;