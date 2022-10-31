import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const PostPreviewContainer = styled(Link)`
    
    color: ${props => props => props.theme.colors['base-text']};
    cursor: pointer;
    text-decoration: none;

    div {
        max-width: 26rem;
        max-height: 16.25rem;
        overflow: hidden;
        text-overflow: ellipsis; 
        background: ${props => props.theme.colors['base-post']};
        padding: 2rem;
        margin-bottom: 2rem;
        border-radius: 10px;
        
        &:hover {
            border:  2px solid ${props => props.theme.colors['base-label']};
        }
    }

    p {
        max-height: 7rem;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        line-clamp: 4;
        -webkit-box-orient: vertical;
    }
`;

export const SectionTitleContainer = styled.section`
    margin-bottom: 1.25rem;
    display: flex;
    align-items: flex-start;
    line-height: 2rem;
    
    

    span {
        font-size: 0.875rem;
        color: ${props => props.theme.colors['base-span']}; 
    }

    h2 {
        font-size: 1.25rem;
        color: ${props => props => props.theme.colors['base-title']};
        max-width: 17.68rem;
    }
    
`;
