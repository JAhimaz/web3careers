import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";

const StyledSpinner = styled.div((props: any) => ({
  display: "inline-block",
  position: "relative",
  width: "80px",
  height: "80px",
  div: {
    boxSizing: "border-box",
    display: "block",
    position: "absolute",
    width: "64px",
    height: "64px",
    margin: "8px",
    border: "8px solid " + useTheme().primary,
    borderRadius: "50%",
    animation: "lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite",
    borderColor: useTheme().primary + " transparent transparent transparent",
  },

  'div:nth-of-type(1)': {
    animationDelay: '-0.45s',
  },

  'div:nth-of-type(2)': {
    animationDelay: '-0.3s',
  },

  'div:nth-of-type(3)': {
    animationDelay: '-0.15s',
  },

  "@keyframes lds-ring": {
    "0%": {
      transform: "rotate(0deg)",
    },
    "100%": {
      transform: "rotate(360deg)",
    },
  }
}));

const Spinner = () => {
  return <StyledSpinner>
    <div></div><div></div><div></div><div></div>
  </StyledSpinner>;
};

export default Spinner;