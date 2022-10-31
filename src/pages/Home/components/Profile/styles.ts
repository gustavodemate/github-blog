import styled from 'styled-components';

export const ProfileContainer = styled.section`
    width: 100%;
    max-height: 13.25rem;
    background: ${props => props.theme.colors['base-profile']};
    box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    position: relative;
    margin-top: -6.25rem;
    display: flex;
    
    img {
        width: 9.25rem;
        height: 9.25rem;
        border-radius: 8px;
        margin-top: 2rem;
        margin-bottom: 2rem;
        margin-left: 2.5rem;
    }

    > div {
        margin: 2.8rem 2rem 2rem;
    }

    p {
        color: ${props => props.theme.colors['base-text']};
    }

`;

export const InfoProfileContainer = styled.div`
    display: flex;
    justify-content: space-between;
    font-weight: 700;
    margin-bottom: 0.5rem;
    
    
    > div {
        width: 4.18rem;
        height: 1.18rem;
        font-size: 0.75rem;
        text-transform: uppercase;
        color: ${props => props.theme.colors['blue']};
        font-style: normal;
        line-height: 160%;
        border-bottom: 1px solid transparent;

       &:hover {
        border-color: ${props => props.theme.colors['blue']};
       }
    }
    

    a {
        text-decoration: none;
        color: ${props => props.theme.colors['blue']};
        margin-right: 0.5rem;

        
   }    
`;

export const ProfileAdditionalInfo = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 1.5rem;
    gap: 1.5rem;
    color: ${props => props.theme.colors['base-subtitle']};
    
    
    div {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    svg {
        
    }
`;