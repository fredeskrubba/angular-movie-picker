import { CastMember } from "../castMember";
import { Director } from "../director";
export type movieCastResponse = {
    id: number;
    cast: CastMember[];
    crew: Director[];
}