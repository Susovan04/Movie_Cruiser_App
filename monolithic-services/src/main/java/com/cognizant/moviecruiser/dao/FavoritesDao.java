package com.cognizant.moviecruiser.dao;

import com.cognizant.moviecruiser.exception.FavoriteEmptyException;
import com.cognizant.moviecruiser.model.Favorite;

public interface FavoritesDao {

	public void addFavoriteMovie(String user, long movieId);

	public Favorite getAllFavoriteMovies(String user) throws FavoriteEmptyException;

	public void removeFavoriteMovie(String user, long movieId);

}
