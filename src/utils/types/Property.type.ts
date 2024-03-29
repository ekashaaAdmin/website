export interface Property {
    _id: string;
    amenities: [
        {
            _id: string;
            amenityName: string;
        }
    ];
    configuration: [
        {
            _key: string;
            carpetArea: number;
            rooms: number;
            configurationType: string;
            configurationPrice: string;
        }
    ];
    developer: {
        description: string;
        developerName: string;
        logo: {
            url: string;
        };
    };
    imageUrls: [
        {
            url: string;
        }
    ];
    location: {
        address: string;
        link: string;
        pincode: number;
        shortAddress: string;
    };
    name: string;
    possessionDate: string;
    priceInfo: {
        price: number;
        priceUnit: string;
    };
    projectInfo: {
        plotArea: number;
        projectDescription: string;
        projectStatus: string;
        projectType: string;
        totalFloor: number;
        reraId: [
            {
                _key: string;
                towerReraId: string;
                towerName?: string;
            }
        ];
        brochureLink: string;
    };
    reraVerified: true;
}
