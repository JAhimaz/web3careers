import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";

type TypographyProps = {
    size?: "xl" | "lg" | "md" | "sm" | "xs";
    weight?: number;
    color?: string;
    children: React.ReactNode;
}

const Typography = styled.div((props : TypographyProps) => ({
    fontSize: 
        props.size === "xl" ? "2.25rem" // 36px
        : props.size === "lg" ? "1.5rem" // 24px
        : props.size === "md" ? "1.125rem"  // 18px
        : props.size === "sm" ? "1rem" // 16px
        : props.size === "xs" ? "0.6rem" // 10px
        : "1rem",
    fontWeight: props.weight || 400,
    color: props.color || useTheme().primary,
}))

export default Typography