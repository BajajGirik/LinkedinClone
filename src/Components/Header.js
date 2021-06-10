import styled from "styled-components"
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import SearchIcon from '@material-ui/icons/Search';

function Header() {
    return (
        <HeaderContainer>
            <HeaderL>
                <LinkedInIcon fontSize='large' />
                <SearchIcon />
                <input type="text" placeholder='Search' />
            </HeaderL>
            <HeaderR>
                
            </HeaderR>
        </HeaderContainer>
    )
}

export default Header

const HeaderContainer = styled.div``;
const HeaderL = styled.div`
  display: flex;
  align-items: center;
`;
const HeaderR = styled.div``;
