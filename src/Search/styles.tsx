import styled from "styled-components";

export const StyledMovieList = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 16px;
    margin-top: 16px;
    @media (max-width: 560px) {
        grid-template-columns: 1fr;
        grid-gap: 8px;
        margin-top: 8px;
    }
`
export const StyledForm = styled.form`
    margin-top: 16px;
    display: flex;
    align-items: start;
    height: 48px;
    & > div {
        flex: auto;
        display: flex;
        flex-direction: column;
    }

    & > div > div {
        color: #6e6e6e;
    }

    & > div > input {
        width: auto;
        height: 24px;
    }

    & > button {
        width: 100px;
        height: 30px;
        color: white;
        background-color: #008CBA;
        border: none;
        
        &:hover {
            background-color: #61aac2;
        }
        &:active {
            background-color: #008CBA;
        }
    }
`

export const StyledMovieCard = styled.div`
    & > img {
        width: 100%;
        max-height:200px;
        object-fit: cover;
    }
`