import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledSideBar = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    overflow: scroll;
    padding: 15px;

    .input {
        width: 100%;
    }
`;

export const SideBarContainer = styled.div`
    flex: 1.1;
    height: 100vh;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    overflow-y: scroll;
    overflow-x: hidden;
    box-shadow: 3px 0px 5px rgba(112, 112, 112, 0.4);
    transition: flex 0.3s linear;
    z-index: 999;
    min-width: 260px;
`;

export const StyledTopBar = styled.div`
    padding: 15px;
    box-shadow: 0px 3px 5px #eaeaea;
`;

export const StyledLink = styled(Link)`
    margin-right: 10px;

    color: black;
    :hover {
        color: green;
    }

    a {
        color: black;
        :hover {
            color: green;
        }
    }
`;

export const StyledALink = styled.a`
    color: black;
    margin-right: 10px;
    :hover {
        color: green;
    }
`;
