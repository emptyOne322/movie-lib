import styled from "styled-components";

export const StyledLoader = styled.div`
    & {
        display: block;
        position: relative;
        width: 80px;
        height: 80px;
        margin-left: auto;
        margin-right: auto;
    }
    & > div {
        box-sizing: border-box;
        display: block;
        position: absolute;
        width: 64px;
        height: 64px;
        margin: 8px;
        border: 8px solid #555555;
        border-radius: 50%;
        animation: loader 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        border-color: #c1c1c1 transparent transparent transparent;
    }
    & > div:nth-child(1) {
        animation-delay: -0.45s;
    }
    & > div:nth-child(2) {
        animation-delay: -0.3s;
    }
    & > div:nth-child(3) {
        animation-delay: -0.15s;
    }
    @keyframes loader {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;