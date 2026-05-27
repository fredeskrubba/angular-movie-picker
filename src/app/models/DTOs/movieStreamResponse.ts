import { StreamProvider } from "../streamProvider";
export type movieStreamResponse = {
    id: number;
    results: {
        [countryCode: string]: {
         flatrate:   StreamProvider[];
        };
        
    }
}