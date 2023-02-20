import styled from "@emotion/styled"

type InputProps = {
    width?: string;
}

const Input = styled.input((props : InputProps) => ({
    width: props?.width ?? "100%",
}))

export default Input