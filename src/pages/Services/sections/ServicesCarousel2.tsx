import {
    FinanceLogo,
    LeasingLogo,
    LegalServicesLogo,
    LoansLogo,
    PropertyHuntLogo
} from "@src/assets";
import { Flex, FlexBox, Section, ServicesCard, Text } from "@src/components";
import { ReactNode, useState } from "react";
import { Pagination, Swiper as SwiperS } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "./ServicesCarousel2.css";

type serviceType = {
    logo: ReactNode;
    name: string;
    description: string;
};

const services: serviceType[] = [
    {
        logo: <PropertyHuntLogo />,
        name: "Property Hunt",
        description: "Property Hunt Desc"
    },
    {
        logo: <LoansLogo />,
        name: "Loans",
        description: "Loop Desc"
    },
    {
        logo: <LegalServicesLogo />,
        name: "Legal Services",
        description: "Legal Services Desc"
    },
    {
        logo: <FinanceLogo />,
        name: "Finance",
        description: "Finance Desc"
    },
    {
        logo: <LeasingLogo />,
        name: "Leasing",
        description: "Leasing Desc"
    }
];

export const ServicesCarousel2 = () => {
    const [ activeService, setActiveService ] = useState<serviceType>(
        services[ 0 ]
    );

    const handleChange = ( swiper: SwiperS ) => {
        const activeIndex = swiper.activeIndex % services.length;
        setActiveService( services[ activeIndex ] );
    };

    return (
        <Section id="services-carousel2" center direction={"column"} gap="10">
            <Flex direction={"column"} center>
                <Text
                    typography={{
                        "@initial": "mbHeading1",
                        "@bp3": "dtHeading1"
                    }}
                    css={{ textAlign: "center" }}
                >
                    Ekaasha{" "}
                    <Text css={{ fontWeight: "$dtPara1" }}>Exclusive</Text>
                </Text>
                <Text
                    typography={{
                        "@initial": "mbSubHeading1",
                        "@bp3": "dtSubHeading1"
                    }}
                >
                    SERVICES
                </Text>
            </Flex>
            <FlexBox
                css={{
                    width: "$full"
                }}
            >
                <Swiper
                    slidesPerView={1}
                    loop={true}
                    centeredSlides={true}
                    slideToClickedSlide={true}
                    pagination={{ dynamicBullets: true, clickable: true }}
                    modules={[ Pagination ]}
                    onActiveIndexChange={handleChange}
                    breakpoints={{
                        1024: {
                            slidesPerView: 4,
                            pagination: { enabled: false }
                        },
                        1200: {
                            slidesPerView: 5
                        }
                    }}
                >
                    {services.map( ( service, key ) => {
                        const { logo, name } = service;
                        return (
                            <SwiperSlide key={key}>
                                <ServicesCard logo={logo} name={name} />
                            </SwiperSlide>
                        );
                    } )}
                </Swiper>
            </FlexBox>
            {activeService && (
                <Flex center direction="column">
                    <Text
                        typography={{
                            "@initial": "mbHeading1",
                            "@bp3": "dtHeading1"
                        }}
                    >
                        {activeService.name}
                    </Text>
                    <Text typography={"dtPara1"}>
                        {activeService.description}
                    </Text>
                </Flex>
            )}
        </Section>
    );
};
