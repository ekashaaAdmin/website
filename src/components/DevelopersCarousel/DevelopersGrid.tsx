import {
    Lodha,
    Piramal,
    Rustomjee,
    Shapoorji_Po,
    Birla_Estates
} from "@assets";
import { Grid } from "../Grid";
import { ImgContainer } from "../ImgContainer";
import { Section } from "../Section";

const developers: string[] = [
    Lodha,
    Piramal,
    Birla_Estates,
    Rustomjee,
    Shapoorji_Po
];

export const DevelopersGrid = () => {
    return (
        <Section>
            <Grid
                css={{ width: "$full" }}
                gap={"5"}
                columns={{
                    "@initial": "1",
                    "@bp2": "3",
                    "@bp3": "5"
                }}
                justify={"center"}
                align={"center"}
            >
                {developers.map( ( dev, key ) => {
                    return (
                        <ImgContainer
                            key={key}
                            src={dev}
                            alt="developer-logo"
                            css={{
                                margin: "$3 auto"
                            }}
                        />
                    );
                } )}
            </Grid>
        </Section>
    );
};
