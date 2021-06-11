import { Avatar, Button } from "@material-ui/core"
import styled from "styled-components"

function SidebarL() {
    return (
        <SidebarLContainer>
            <SidebarTop></SidebarTop>
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
        </SidebarLContainer>
    )
}

export default SidebarL

const SidebarLContainer = styled.div`
    flex: 0.2;
    box-shadow: 0px 1px 3px lightgray;
`;

const SidebarTop = styled.div`
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
    padding: 1.4rem 0.5rem;
    font-size: 0.75rem;
    border-bottom: solid 1px lightgray;
    
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
`;
