import { Movie } from "src/app/movie/movie";

export interface Favorites {
    favoriteList:Movie[];
    noOfFavorites: number;

    // items: [{
    //     favoriteId: string;
    //     movie: Movie,
    //     quantity?: number
    // }];
    // total: number;
}