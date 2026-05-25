import { Movie } from "../movie";

export type apiResponse = {
    page: number;
    results: Array<Movie>;
    total_pages: number;
    total_results: number;
}