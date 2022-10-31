import styled from 'styled-components';
import effectBeforeImg from '../../assets/cover-left.svg'
import effectAfterImg from '../../assets/cover-right.svg'  

export const HeaderContainer = styled.header`
    width: 100%;
    height: 18.5rem;
    background: ${props => props.theme.colors['base-profile']};
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    img {
        width: 9.25rem;
        height: 6.125rem;
        margin-bottom: 2.875rem;
    }
    
    
    
    &::before {
        content: '';
        width: 25.56rem;
        height: 11.75rem;
        left: 0;
        position: absolute;
        background-image: url(${effectBeforeImg});
    }
  
    &::after {
        content: '';
        width: 23.1875rem;
        height: 14.75rem;
        position: absolute;
        right: 0;
        background-image: url(${effectAfterImg});
        
  }
`;
