import styled from 'styled-components';
import { minTablet } from '../../globals/constants';
import { flexBoxMixin } from '../../globals/styles';

export const ProfileContainer = styled.div`
    padding: 20px;
    ${flexBoxMixin('column')};
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
