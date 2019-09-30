import styled from 'styled-components';
import { flexBoxMixin } from '../../globals/styles';
import { minTablet } from '../../globals/constants';

/* Wraps the entire HomePage */
export const Container = styled.div`
    ${minTablet} {
        height: 100vh;
        overflow: scroll;
    }
`;

// export const StyledHomePage = styled.div`
//     display: flex;
//     flex-direction: column;
//     justify-content: flex-end;
//     height: 100vh;
//     width: 100%;
// `;

// export const StyledContainer = styled.div`
//     height: 100vh;
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;
// `;

// export const StyledValueProp = styled.div`
//     text-align: center;
// `;

/* Section Header */
export const StyledSectionHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
    h2 {
        margin-bottom: 0 !important;
    }
`;

/* Section */
export const StyledSection = styled.div`
    width: 90%;
    margin: 0 auto;
    margin-top: 40px;

    /* section 1: description */
    .description {
        ul {
            list-style: none;
            margin: 0;
            padding: 0;
            margin-bottom: 10px;

            li {
                font-size: 15px;
                margin-bottom: 7px;
                margin-left: 10px;
            }
        }
    }
`;

/* Share buttons */
export const ShareButtons = styled.div`
    ${flexBoxMixin('column', 'center', 'center')};
    ${minTablet} {
        ${flexBoxMixin('row', 'center', 'center')};
    }

    margin-top: 45px;
`;

/* Jumbotron at top */
export const Jumbotron = styled.div`
    /* min-height: 40vh; */
    width: 100%;
    background-image: url('./all-the-job-sites-header.jpg');
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
        text-align: center;
    }

    .cta {
        padding-top: 55px;
        padding-bottom: 30px;

        h1 {
            font-size: 40px;
            line-height: 54px;
            max-width: 750px; /* enforce wrapping properly */
            margin-bottom: 15px; /* break between h1 and p */
            margin: 0 auto;

            ${minTablet} {
                font-size: 50px;
            }
            color: #ffffff;
        }

        p.subtitle {
            font-size: 17px;
            color: #ffffff;
            max-width: 300px;
            margin: 0 auto;
            padding: 5px 0 20px 0;

            ${minTablet} {
                max-width: 400px;
            }
        }
    }
`;

export const StyledMenuContainer = styled.div`
    padding: 7px 15px; /* line the menu up with logo */
`;
