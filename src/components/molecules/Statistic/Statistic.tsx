import Typography from "@components/atoms/Typography";
import { useTheme } from "@emotion/react";
import CountUp from "react-countup";

type StatisticDataProps = {
    header: number;
    subheader: string;
}

const statisticValue = (value: number) => {
    return (
        <CountUp
            start={0}
            end={
 
                value > 10000 ? Math.round(value / 100) * 100 : value
            }
            duration={0.5}
            separator=","
            suffix={value > 10000 ? "+" : ""}
        />
    )
}

const Statistic = (props : StatisticDataProps) => {
    
    return (
        <section css={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            minWidth: "10rem",
            height: "100%",
            gap: "-0.5rem"
        }}>
            <Typography size="xl" weight={600}>{statisticValue(props?.header ?? 0)}</Typography>
            <Typography size="lg" weight={600} color={useTheme().secondary}>{props?.subheader ?? ""}</Typography>
        </section>
    )
}

export default Statistic