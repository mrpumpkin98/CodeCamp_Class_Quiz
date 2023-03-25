import styled from "@emotion/styled";

export const BlueButton = styled.button`
background-color: ${(props) => {
        return props.setIsActive ? "yellow" : ""
    }};
`

