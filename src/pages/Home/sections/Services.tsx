import {
    FinanceLogo,
    LeasingLogo,
    LegalServicesLogo,
    LoansLogo,
    PropertyHuntLogo
} from "@assets";
import { FlexBox, Section, ServicesCard, Text } from "@components";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

let slidesPerView = 1;
let looped = true;
let isInfinity = true;
const viewPortWidth: number = window.innerWidth;
if ( viewPortWidth > 1024 ) {
    slidesPerView = 5;
    looped = false;
    isInfinity = false;
} else if ( viewPortWidth > 768 ) {
    slidesPerView = 3;
} else if ( viewPortWidth > 425 ) {
    slidesPerView = 2;
}

export const Services = () => {
    return (
        <Section direction={"column"} align={"center"}>
            <Text>
                Ekaasha <Text>Exclusive</Text>
            </Text>
            <Text>SERVICES</Text>

            <FlexBox
                css={{
                    width: "$full"
                }}
            >
                <Swiper
                    slidesPerView={slidesPerView}
                    pagination={{ dynamicBullets: true }}
                    modules={[ Pagination ]}
                    loop={looped}
                >
                    <SwiperSlide>
                        <ServicesCard
                            logo={<PropertyHuntLogo />}
                            name="Property Hunt"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ServicesCard
                            logo={<LegalServicesLogo />}
                            name="Legal Services"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ServicesCard logo={<LoansLogo />} name="Loans" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ServicesCard logo={<FinanceLogo />} name="Financial" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ServicesCard logo={<LeasingLogo />} name="Leasing" />
                    </SwiperSlide>
                </Swiper>
            </FlexBox>
        </Section>
    );
};
