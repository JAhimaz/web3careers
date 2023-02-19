import Typography from "@components/atoms/Typography";
import { useTheme } from "@emotion/react";

type StatisticDataProps = {
    header: string | number;
    subheader: string | number;
}

const Statistic = (props : StatisticDataProps) => {
    return (
        <section css={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
            gap: "-0.5rem"
        }}>
            <Typography size="xl" weight={600}>{props?.header ?? ""}</Typography>
            <Typography size="lg" weight={600} color={useTheme().secondary}>{props?.subheader ?? ""}</Typography>
        </section>
    )
}

export default Statistic