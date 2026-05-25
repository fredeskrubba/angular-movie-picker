export type movieDetailsResponse = {
    overview: string;
    release_date: string;
    runtime: number;
    video: boolean;
    genres: { id: number; name: string }[]
}