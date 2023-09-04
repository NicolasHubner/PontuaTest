interface Thumbnail {
    path: string;
    extension: string;
}

interface Comic {
    resourceURI: string;
    name: string;
}

interface Series {
    resourceURI: string;
    name: string;
}

interface Story {
    resourceURI: string;
    name: string;
    type: string;
}

interface Event {
    resourceURI: string;
    name: string;
}

interface Url {
    type: string;
    url: string;
}

export interface Character {
    id: number;
    name: string;
    description: string;
    modified: string;
    thumbnail: Thumbnail;
    resourceURI: string;
    comics: {
        available: number;
        collectionURI: string;
        items: Comic[];
        returned: number;
    };
    series: {
        available: number;
        collectionURI: string;
        items: Series[];
        returned: number;
    };
    stories: {
        available: number;
        collectionURI: string;
        items: Story[];
        returned: number;
    };
    events: {
        available: number;
        collectionURI: string;
        items: Event[];
        returned: number;
    };
    urls: Url[];
}

export interface CharactersFromApi {
    data: {
        data: {
            offset: number;
            limit: number;
            total: number;
            count: number;
            results: Character[];
        };
    };
}
