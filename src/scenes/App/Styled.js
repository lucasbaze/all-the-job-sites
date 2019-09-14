import styled from 'styled-components';
import { flexBoxMixin } from '../../globals/styles';
import { minTablet } from '../../globals/constants';

export const MainContainer = styled.div`
    ${flexBoxMixin('row', 'flex-start', 'stretch')}
`;

export const MainContentContainer = styled.div`
    flex: 3;
    overflow: scroll;
`;

export const SideBarContainer = styled.div`
    flex: 1.1;
    ${minTablet} {
        height: 100vh;
        overflow-y: scroll;
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-between;
    }

    overflow-x: hidden;
    box-shadow: 3px 0px 5px rgba(112, 112, 112, 0.4);
    transition: flex 0.3s linear;
    z-index: 999;
    min-width: 260px;
`;

export const StyledSideBar = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;

    ${minTablet} {
        overflow: scroll;
    }

    .input {
        width: 100%;
    }
`;
