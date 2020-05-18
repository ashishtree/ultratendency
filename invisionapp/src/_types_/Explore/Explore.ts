export interface Explore {
    id: number;
    text: string;
    followers: string;
    mainImage: string;
    follow: boolean;
    image: [];
}

export interface ExploreData {
    exploreData: Explore[];
    status?: string;
}

export interface exploreReducerType {
    exploreData: ExploreData;
}