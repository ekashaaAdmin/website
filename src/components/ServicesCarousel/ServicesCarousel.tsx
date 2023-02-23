import {
    FinanceLogo,
    LeasingLogo,
    LoansLogo,
    LegalServicesLogo,
    PropertyHuntLogo,
    Legal_Services,
    Finance
} from "@src/assets";
import { ReactNode } from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { FlexBox } from "../FlexBox";
import { ServicesCard } from "../ServicesCard";

type serviceType = {
    logo: ReactNode;
    name: string;
};

const services: serviceType[] = [
    {
        logo: <PropertyHuntLogo />,
        name: "Property Scouting"
    },
    // {
    //     logo: <LoansLogo />,
    //     name: "Loans"
    // },
    {
        logo: <Legal_Services />,
        name: "Legal Services"
    },
    {
        logo: <Finance />,
        name: "Finance"
    }
    // {
    //     logo: <LeasingLogo />,
    //     name: "Leasing"
    // }
];

export const ServicesCarousel = () => {
    return (
        <FlexBox
            css={{
                width: "$full"
            }}
        >
            <Swiper
                slidesPerView={1}
                loop={true}
                pagination={{ dynamicBullets: true }}
                modules={[ Pagination ]}
                watchOverflow={true}
                breakpoints={{
                    480: {
                        slidesPerView: 2
                    },
                    640: {
                        slidesPerView: 3
                    }
                    // 768: {
                    //     slidesPerView: 4
                    // },
                    // 1024: {
                    //     slidesPerView: 5,
                    //     loop: false,
                    //     enabled: false
                    // }
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
    );
};
