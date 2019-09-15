import styled from 'styled-components';
import { minTablet } from '../../globals/constants';

export const ProfileContainer = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    ${minTablet} {
        height: 100vh;
        overflow: scroll;
    }
`;

export const UserImage = styled.img`
    border-radius: 20px;
    min-width: 40px;
    height: 40px;
`;
