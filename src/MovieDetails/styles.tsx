import styled from "styled-components";

export const StyledMovieDetails = styled.div`
    margin-top: 16px;
    display: flex;
    flex-direction: row;
    @media (max-width: 560px) {
        flex-direction: column;
    }
`
export const StyledMovieInfo = styled.div`
    flex: auto;
    margin-left: 16px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    @media (max-width: 560px) {
        margin-top: 8px;
    }
`
export const StyledLabel = styled.label`
    color: gray;
    margin-top: 16px;
`
export const StyledTitle = styled.div`
    font-size: 24px;
`