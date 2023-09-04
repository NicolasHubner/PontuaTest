export interface ComicData {
    id: number;
    digitalId: number;
    title: string;
    issueNumber: number;
    variantDescription: string;
    description: string;
    modified: string;
    isbn: string;
    upc: string;
    diamondCode: string;
    ean: string;
    issn: string;
    format: string;
    pageCount: number;
    textObjects: any[]; // You can replace 'any' with a specific type if needed
    resourceURI: string;
    urls: { type: string; url: string }[];
    series: {
        resourceURI: string;
        name: string;
    };
    variants: { resourceURI: string; name: string }[];
    collections: any[]; // You can replace 'any' with a specific type if needed
    collectedIssues: any[]; // You can replace 'any' with a specific type if needed
    dates: { type: string; date: string }[];
    prices: { type: string; price: number }[];
    thumbnail: {
        path: string;
        extension: string;
    };
    images: any[]; // You can replace 'any' with a specific type if needed
    creators: {
        available: number;
        collectionURI: string;
        items: {
            resourceURI: string;
            name: string;
            role: string;
        }[];
        returned: number;
    };
    characters: {
        available: number;
        collectionURI: string;
        items: any[]; // You can replace 'any' with a specific type if needed
        returned: number;
    };
    stories: {
        available: number;
        collectionURI: string;
        items: {
            resourceURI: string;
            name: string;
            type: string;
        }[];
        returned: number;
    };
    events: {
        available: number;
        collectionURI: string;
        items: any[]; // You can replace 'any' with a specific type if needed
        returned: number;
    };
}

export interface ComicsFromApi {
    data: {
        data: {
            offset: number;
            limit: number;
            total: number;
            count: number;
            results: ComicData[];
        };
    };
}
