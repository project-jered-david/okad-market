import styled, { css } from "styled-components";

export const mobile = (props) => {
    return css`
        @media only screen and (max-width: 680px) {
            ${props}
        }
    `;
};

export const COLOR_GRAY = "#e2e2e2";
export const PRIMARY_COLOR = "#57bf27";

export const ContainerStagium = styled.div``;
