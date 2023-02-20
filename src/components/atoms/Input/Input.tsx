import { useTheme } from "@emotion/react";
import styled from "@emotion/styled"

type InputProps = {
    width?: string;
}

const Input = styled.input((props : InputProps) => ({
    width: props?.width ?? "100%",
    borderRadius: "1rem",
    padding: "1rem",
    border: "1px solid " + useTheme().primary,
    backgroundColor: useTheme().inputBackground,
    fontSize: "1.125rem",
    "&::placeholder": {
        color: useTheme().inputPlaceholder,
    },
    "&:focus": {
        outline: "none",
    }
}))

export default Input