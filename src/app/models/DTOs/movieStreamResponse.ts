import { WatchProviderResult } from "../watchProviderResult";

export type movieStreamResponse = {
    id: number;
    results: {
        [countryCode: string]: WatchProviderResult;
    }
}