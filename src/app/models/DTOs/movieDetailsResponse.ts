export type movieDetailsResponse = {
    title: string,
    id: number,
    poster_path: string,
    overview: string;
    release_date: string;
    runtime: number;
    video: boolean;
    genres: { id: number; name: string }[]
}