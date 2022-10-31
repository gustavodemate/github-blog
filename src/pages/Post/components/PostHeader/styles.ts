import styled from 'styled-components';

export const PostInfoContainer = styled.div`
    width: 54rem;
    max-height: 10.5rem;
    margin: 0 auto;
    background: ${props => props.theme.colors['base-profile']};
    box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    position: relative;
    margin-top: -5.5rem;
    display: flex;

    > div {
        width: 100%;
        padding: 2rem;
    }

    h1 {
        font-size: 1.5rem;
        line-height: 2rem;
        margin-bottom: 0.5rem;
    }
`;

export const PostHeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    font-size: 0.75rem;
    color: ${props => props.theme.colors['blue']};
    margin-bottom: 1.25rem;
    align-items: center;
    line-height: 1.25rem;

    a {
        text-decoration: none;
        color: ${props => props.theme.colors['blue']};   
        margin: 0 0.5rem 0 0.5rem;
        font-weight: 700;
        text-transform: uppercase;
        
    }
`;

export const PostAdditionalInfo = styled.div`
    display: flex;
    gap: 2rem;
    color: ${props => props.theme.colors['base-span']};
    

    div {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
`;