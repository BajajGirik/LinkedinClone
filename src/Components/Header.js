import styled from "styled-components";
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
                <img src={process.env.PUBLIC_URL + '/Statics/linkedin.png'} alt="" />
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
                <HeaderOp use title='me' />
            </HeaderR>
        </HeaderContainer>
    )
}

export default Header

const HeaderContainer = styled.div`
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
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
    border-radius: 5px;

    > .MuiSvgIcon-root {
        margin: 0 0.3rem 0 0.9rem;
        font-size: 1.3rem;
        opacity: 0.8;
    }

    > input {
      outline: none;
      border: none;
      background-color: transparent;
      width: 16rem;
      padding-right: 0.5rem;
  }

  @media screen and (max-width: 64.0625rem) {
      background-color: white;
      flex-direction: column;
      width: 5rem;
      cursor: pointer;

      > input {
          display: none;
      }

      > .MuiSvgIcon-root {
        margin: 0;
        font-size: 1.5rem;
        opacity: 0.7;
     }
      
      ::after {
          display: block;
          content: "Search";
          font-size: 0.75rem;  
      }
  }

  @media screen and (max-width: 46.25rem) {
      justify-content: center;
       ::after {
            display: none;
      }
  }
`;

const HeaderR = styled.div`
    display: flex;
`;
