export interface Trands {
    id: number;
    heading: string;
    text: string;
    image: string;
}

export interface TrandsData {
    trandData: Trands[];
    status?: string;
}

export interface trandsReducerType {
    trandsData: TrandsData;
}