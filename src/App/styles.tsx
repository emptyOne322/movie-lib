import styled from "styled-components";

export const Layout = styled.div`
    width: 980px;
    margin: auto;
    @media (max-width: 560px) {
        width: calc( 100% - 16px );
        margin: 8px;
    }
`;