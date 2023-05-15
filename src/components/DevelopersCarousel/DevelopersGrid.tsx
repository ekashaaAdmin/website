import { useDeveloperLogo } from "@src/hooks";
import { Grid } from "../Grid";
import { ImgContainer } from "../ImgContainer";
import { Section } from "../Section";

export const DevelopersGrid = () => {
    const { data: developers } = useDeveloperLogo();

    return developers ? (
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
                {developers?.map( ( dev, key ) => {
                    return (
                        <ImgContainer
                            key={key}
                            src={dev.logo?.url}
                            alt="developer-logo"
                            fullHeight={false}
                            css={{
                                margin: "$3 auto",
                                filter: "grayScale(100%)",
                                transition: "filter 0.5s ease-in-out",
                                "&:hover": {
                                    filter: "grayScale(0%)"
                                }
                            }}
                        />
                    );
                } )}
            </Grid>
        </Section>
    ) : null;
};
