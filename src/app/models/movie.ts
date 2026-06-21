export type Movie = {
    id: number;
    title: string;
    poster_path: string;
    onWatchList: boolean;
    overview?: string;
    release_date?: string;
    runtime?: number;
    video?: boolean;
    isWatched?: boolean;
    userRating: number;
    genres?: { id: number; name: string }[]
}