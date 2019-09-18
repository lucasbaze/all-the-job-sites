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

    .featured-jobs-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 15px;
        h2 {
            margin-bottom: 0 !important;
        }
    }
`;

export const ShareButtons = styled.div`
    ${flexBoxMixin('column', 'center', 'center')};
    ${minTablet} {
        ${flexBoxMixin('row', 'center', 'center')};
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
    /* min-height: 40vh; */
    width: 100%;
    background-image: linear-gradient(rgba(255, 94, 94, 1), rgba(255, 46, 74, 1));
    background-repeat: no-repeat;
    background-position: 100% 40%;
    background-size: cover;

    /* */
    .menu > .item {
        color: #ffffff;
        text-transform: none !important;

        :hover {
            color: #ffffff !important;
        }
    }


    .wrapped {
        /* move text to align with menu items */
        /* padding-left: 27px; */
        /* padding-right: 27px; */
        padding-left: 50px;
        padding-right: 50px;
        padding-top: 15px;
        padding-bottom: 15px;
    }

    .cta {
        padding-top: 15px;
        padding-bottom: 20px;

        h1 {
            font-size: 35px;
            line-height: 54px;
            max-width: 750px; /* enforce wrapping properly */
            margin-bottom: 15px; /* break between h1 and p */

            ${minTablet} {
                font-size: 50px;
            }
            /* padding: 25px 0 30px 0; */
            color: #ffffff;
        }

        p.subtitle {
            font-size: 17px;
            color: #ffffff;
        }
    }
`;

export const StyledMenuContainer = styled.div`
    padding: 7px 15px; /* line the menu up with logo */
`;

// background-image: url(${process.env.PUBLIC_URL +
//     'all-the-job-sites-jumbotron-img.jpg'});
