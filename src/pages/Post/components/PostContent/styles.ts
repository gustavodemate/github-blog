import styled from 'styled-components';

export const PostContainer = styled.div`
    width: 54rem;
    padding: 2.5rem 2rem 0;
    margin: 0 auto;
    color: ${props => props.theme.colors['base-text']};
    line-height: 1.6rem;
    
    p {
        margin-bottom: 1.5rem;
    }

`;