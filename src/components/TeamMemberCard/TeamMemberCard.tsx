import { FC } from "react";
import { Flex } from "../Flex";
import { ImgContainer } from "../ImgContainer";
import { Text } from "../Text";

export type TeamMemberCardProps = {
    name: string;
    profilePicture: string;
    description: string;
};

export const TeamMemberCard: FC<TeamMemberCardProps> = ( {
    name,
    profilePicture,
    description
} ) => {
    return (
        <Flex direction={"column"} center>
            <ImgContainer
                src={profilePicture}
                alt="blog-thubnail"
                css={{
                    flex: 1,
                    width: "20rem",
                    maxHeight: "20rem",
                    borderRadius: "50%",
                    overflow: "hidden"
                }}
            />
            <Flex
                direction="column"
                gap="2"
                css={{ flex: 2, p: "$3" }}
                align={"flexStart"}
            >
                <Text
                    typography={{
                        "@initial": "mbPara1",
                        "@bp3": "dtHeading2"
                    }}
                    align={"center"}
                    css={{ fontWeight: "$dtHeading1", alignSelf: "center" }}
                >
                    {name}
                </Text>
                <Text
                    typography={{
                        "@initial": "mbPara1",
                        "@bp3": "dtPara1"
                    }}
                >
                    {description}
                </Text>
            </Flex>
        </Flex>
    );
};
