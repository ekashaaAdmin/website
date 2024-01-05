import { teamData } from "@src/data";
import {
    Flex,
    ImgContainer,
    Section,
    TeamMemberCard,
    Text
} from "@src/components";

export const Management = () => {
    return (
        <Section
            id="management"
            direction={"column"}
            align="center"
            css={{ px: "$0", maxWidth: "$full" }}
        >
            <Text
                typography={{ "@initial": "mbHeading1", "@bp3": "dtHeading1" }}
            >
                Meet <Text css={{ fontWeight: "$dtPara1" }}>the Team</Text>
            </Text>
            <Text
                typography={{
                    "@initial": "mbSubHeading1",
                    "@bp3": "dtSubHeading1"
                }}
            >
                MANAGEMENT
            </Text>

            <Flex
                center
                direction="column"
                gap={"6"}
                css={{
                    mt: "$7",
                    "@mobileM": {
                        width: "$mobileS"
                    },
                    "@bp1": {
                        width: "$full",
                        flexDirection: "column"
                    },
                    "@bp3": {
                        width: "998px"
                    }
                }}
            >
                {teamData.map(
                    ( { description, name, profilePicture }, index ) => (
                        <TeamMemberCard
                            name={name}
                            description={description}
                            profilePicture={profilePicture}
                            key={`${name}_${index}`}
                        />
                    )
                )}
            </Flex>
        </Section>
    );
};
