import { Avatar } from "@material-ui/core";
import styled from "styled-components"

function HeaderOp({ Icon, title, avatar }) {
    return (
        <HeaderOpContainer>
            {Icon && <Icon />}
            {avatar && <AvatarS src={avatar} /> }
            <p>{ title }</p>
        </HeaderOpContainer>
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
`;

const AvatarS = styled(Avatar)`
    object-fit: contain !important;
    margin-left: 1.5625rem;
    margin-bottom: 1px;
    width: 1.5625rem !important;
    height: 1.5625rem !important;
`;