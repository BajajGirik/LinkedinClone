import styled from "styled-components"

function HeaderOp({ Icon, title }) {
    return (
        <HeaderOpContainer>
            {Icon && <Icon />}
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
`;