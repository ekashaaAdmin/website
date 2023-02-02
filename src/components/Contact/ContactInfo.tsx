import { FlexBox } from "../FlexBox";
import { Text } from "../Text";
import { ContactFields } from "./ContactFields";

export const ContactInfo = () => {
    return (
        <FlexBox>
            <Text>Get in touch</Text>
            <Text>Get your queries resolved from our experts</Text>
            <ContactFields />
            <Text>
                or reach us at <br />
                +91 982045677
            </Text>
        </FlexBox>
    );
};
