import styled from 'styled-components';
import { flexBoxMixin } from '../../globals/styles';
import { computerOnly, tabletOnly, minTablet } from '../../globals/constants';

export const StyledHomePage = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 100vh;
    width: 100%;
`;

export const StyledContainer = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const StyledValueProp = styled.div`
    text-align: center;
`;

export const StyledFeaturedJobs = styled.div`
    width: 90%;
    margin: 0 auto;
    margin-top: 40px;
`;

export const ShareButtons = styled.div`
    ${computerOnly} {
        ${flexBoxMixin('row', 'center')}
    }

    ${tabletOnly} {
        ${flexBoxMixin('column', 'center', 'center')}
    }

    margin-top: 45px;
`;

export const Container = styled.div`
    ${minTablet} {
        height: 100vh;
        overflow: scroll;
    }
`;

export const Jumbotron = styled.div`
    min-height: 55vh;
    width: 100%;
    background-image: linear-gradient(rgb(255, 94, 94), rgb(255, 46, 74));
    background-repeat: no-repeat;
    background-position: 100% 40%;
    background-size: cover;
    text-align: center;

    .menu > .item{
        color: #ffffff
    }

    h1{
        font-size: 50px;
        margin-top: 25
        color: #ffffff;
    }
`;

// background-image: url(${process.env.PUBLIC_URL +
//     'all-the-job-sites-jumbotron-img.jpg'});
