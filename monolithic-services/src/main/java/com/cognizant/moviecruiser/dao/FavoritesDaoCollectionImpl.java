package com.cognizant.moviecruiser.dao;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import org.springframework.stereotype.Component;

import com.cognizant.moviecruiser.exception.FavoriteEmptyException;
import com.cognizant.moviecruiser.model.Favorite;
import com.cognizant.moviecruiser.model.Movie;

@Component
public class FavoritesDaoCollectionImpl implements FavoritesDao{

	private static HashMap<String, Favorite> userFavorites;

	public FavoritesDaoCollectionImpl() {
		if (userFavorites == null) {
			userFavorites = new HashMap<String, Favorite>();
		}
	}

	@Override
	public void addFavoriteMovie(String user, long movieId) {
		MovieDao movieDao = new MovieDaoCollectionImpl();
		Movie movie = movieDao.getMovie(movieId);
		if (userFavorites.containsKey(user)) {
			Favorite favorite = userFavorites.get(user);
			List<Movie> favoriteList = favorite.getFavoriteList();
			favoriteList.add(movie);
		} else {
			Favorite favorite = new Favorite(new ArrayList<Movie>(), 0);
			List<Movie> favoriteList = favorite.getFavoriteList();
			favoriteList.add(movie);
			userFavorites.put(user, favorite);
		}

	}

	@Override
	public Favorite getAllFavoriteMovies(String user) throws FavoriteEmptyException {
		if (userFavorites.containsKey(user)) {
			Favorite favorite = userFavorites.get(user);
			List<Movie> favorites = favorite.getFavoriteList();
			if (favorites.isEmpty()) {
				throw new FavoriteEmptyException();
			} else {
				long noOfFavorites = 0;
				for (Movie favoriteItem : favorites) {
					noOfFavorites++;
				}
				favorite.setNoOfFavorites(noOfFavorites);
			}
			return favorite;
		} else {
			throw new FavoriteEmptyException();
		}
	}


	@Override
	public void removeFavoriteMovie(String user, long movieId) {
		List<Movie> favorites = userFavorites.get(user).getFavoriteList();
		for (Movie favorite : favorites) {
			if (favorite.getId() == movieId) {
				favorites.remove(favorite);
				break;
			}
		}

	}

}
