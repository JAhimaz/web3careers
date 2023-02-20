import { useTheme } from "@emotion/react"
import styled from "@emotion/styled"

type PillProps = {
  active?: boolean
  children: string
  onClick?: (value: string) => void
}

const StyledPill = styled.div((props : PillProps) => ({
  display: "inline-block",
  padding: "0.25rem 1.5em",
  backgroundColor: props.active ? useTheme().primary : useTheme().secondary,
  color: useTheme().white,
  borderRadius: "1rem",
  fontSize: "1rem",
  transition: "all 0.2s ease-in-out",
  textAlign: "center",
  "&:hover": {
    cursor: "pointer",
    backgroundColor: props.active ? useTheme().primary : useTheme().dim,
  }
}))

const Pill = (props : PillProps) => {

  const handleClick = () => {
    if(props.onClick) props.onClick(props?.children ?? '')
  }

  return (
    <StyledPill
      active={props.active}
      onClick={handleClick}
    >
      {props.children}
    </StyledPill>
  )
}

export default Pill