export interface Blog {
    _createdAt: string;
    _id: string;
    _rev: string;
    _type: string;
    _updatedAt: string;
    authorName: {
        name: string;
    };
    body: unknown;
    subTitle: string;
    categories: [
        {
            title: string;
        }
    ];
    featuredblog: boolean;
    publishedAt: string;
    slug: {
        _type: string;
        current: string;
    };
    title: string;
    mainImage: {
        url: string;
    };
}
