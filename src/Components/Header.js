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
                <img src={ linkedin } alt="" />
                <SearchIcon />
                <input type="text" placeholder='Search' />
            </HeaderL>
            <HeaderR>
                <HeaderOp />
            </HeaderR>
        </HeaderContainer>
    )
}

export default Header

const HeaderContainer = styled.div``;
const HeaderL = styled.div`
  display: flex;
  align-items: center;

  > img {
      object-fit: contain;
      height: 34px;
  }
`;
const HeaderR = styled.div``;
