import styled from 'styled-components';

export const SearchFormContainer = styled.form`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 4.5rem 0 3rem 0;
    flex-wrap: wrap;

    h2 {
        font-size: 1.125rem;
        line-height: 160%;
        color: ${props => props.theme.colors['base-subtitle']};
    }

    span {
        color: ${props => props.theme.colors['base-span']};
        font-size: 0.875rem;
        line-height: 160%;
    }

    input {
        width: 54rem;
        height: 3.125rem;
        background: ${props => props.theme.colors['base-input']};
        border: 1px solid ${props => props.theme.colors['base-border']};
        border-radius: 6px;
        font-size: 1rem;
        padding: 0.5rem;
        margin-top: 0.75rem;
        color: ${props => props.theme.colors['base-text']};
        
        &::placeholder {
            color: ${props => props.theme.colors['base-label']};
        }

        &:focus {
            border: 1px solid ${props => props.theme.colors['blue']};
            outline: none;
        }
    }
`;
