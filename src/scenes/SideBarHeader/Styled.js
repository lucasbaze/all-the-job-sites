import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledSideBarHeader = styled.div`
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
