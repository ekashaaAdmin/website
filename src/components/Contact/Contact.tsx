import { FlexBox } from "../FlexBox";
import { ImgContainer } from "../ImgContainer";
import { HomeBg } from "@assets";
import { ContactInfo } from "./ContactInfo";
import { ContactFields } from "./ContactFields";
export const Contact = () => {
    return (
        <FlexBox>
            <ContactFields />
            <ContactInfo />
        </FlexBox>
    );
};
