import styled from 'styled-components';
import { flexBoxMixin } from '../../globals/styles';
import { minTablet } from '../../globals/constants';

export const RootContainer = styled.div`
    ${flexBoxMixin('column', 'flex-start', 'stretch')}
    ${minTablet} {
        ${flexBoxMixin('row')}
    }
`;

export const MainContentContainer = styled.div`
    flex: 3;
    height: 100vh;
    overflow: scroll;
`;

export const SideBarContainer = styled.div`
    flex: 1;
    box-shadow: 3px 0px 5px rgba(112, 112, 112, 0.4);
    z-index: 999;
    min-width: 260px;
    overflow: scroll;
`;

export const StyledJobSitesContainer = styled.div`
    height: 70vh;
    overflow: scroll;
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
`;
