import { Movie } from "../movie";

export type movieListResponse = {
    page: number;
    results: Array<Movie>;
    total_pages: number;
    total_results: number;
}