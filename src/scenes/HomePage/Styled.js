import styled from 'styled-components';

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
    display: flex;
    justify-content: center;
    margin-top: 45px;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    overflow: scroll;
`;

export const Jumbotron = styled.div`
    height: 30vh;
    width: 100%;
    background-image: url(${process.env.PUBLIC_URL +
        'all-the-job-sites-jumbotron-img.jpg'});
    background-repeat: no-repeat;
    background-position: 100% 40%;
    background-size: cover;
    text-align: center;
`;
