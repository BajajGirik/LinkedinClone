import styled from "styled-components";
import linkedin from '../Statics/linkedin.svg';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import HeaderOp from "./HeaderOp";

function Header() {
    return (
        <HeaderContainer>
            <HeaderL>
                <img src={linkedin} alt="" />
                <Searchbar>
                    <SearchIcon />
                    <input type="text" placeholder='Search' />
                </Searchbar>
            </HeaderL>
            <HeaderR>
                <HeaderOp Icon={ HomeIcon } title='Home' />
                <HeaderOp Icon={ SupervisorAccountIcon } title='My Network' />
                <HeaderOp Icon={ BusinessCenterIcon } title='Jobs' />
                <HeaderOp Icon={ ChatIcon } title='Messaging' />
                <HeaderOp Icon={NotificationsIcon} title='Notifications' />
                <HeaderOp avatar='https://i.guim.co.uk/img/media/2bfc61f76154bd557b13b1b7041fcf4f4ebcd904/227_0_3006_1804/master/3006.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=10753871c86a360f1faebd9cf911b46a' title='me' />
            </HeaderR>
        </HeaderContainer>
    )
}

export default Header

const HeaderContainer = styled.div`
  padding: 0 1.75rem;
  height: 3.625rem;
  border-bottom: solid 1px rgba(0, 0, 0, 0.08);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const HeaderL = styled.div`
  display: flex;
  align-items: center;

  > img {
      object-fit: contain;
      height: 2.125rem;
  }
`;

const Searchbar = styled.div`
    display: flex;
    align-items: center;
    background-color: #eef3f8;
    height: 2.125rem;
    margin-left: 0.5rem;
    > .MuiSvgIcon-root {
        margin: 0 0.3rem 0 0.9rem;
        font-size: 1.3rem;
        opacity: 0.7;
    }

    > input {
      outline: none;
      border: none;
      background-color: transparent;
      width: 12.5rem;
      padding-right: 0.5rem;
  }
`;

const HeaderR = styled.div`
    display: flex;
`;
