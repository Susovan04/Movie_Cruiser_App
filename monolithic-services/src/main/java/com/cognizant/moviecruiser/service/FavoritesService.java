package com.cognizant.moviecruiser.service;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cognizant.moviecruiser.dao.FavoritesDao;
import com.cognizant.moviecruiser.dto.FavoriteDTO;
import com.cognizant.moviecruiser.exception.FavoriteEmptyException;
import com.cognizant.moviecruiser.model.Favorite;
import com.cognizant.moviecruiser.model.Movie;
import com.cognizant.moviecruiser.model.User;
import com.cognizant.moviecruiser.repository.MovieRepository;
import com.cognizant.moviecruiser.repository.UserRepository;

@Service
public class FavoritesService {

	private static final Logger LOGGER = LoggerFactory.getLogger(FavoritesService.class);

	@Autowired
	private FavoritesDao favoritesDao;

	@Autowired
	private UserRepository userRepository;

	@Autowired
	MovieRepository movieRepository;

	@Transactional
	public void addFavoriteMovie(String username, int movieId) {
		User user = userRepository.findByUsername(username);
		Movie movie = movieRepository.findById(movieId).get();
		if (user.getFavoriteList() == null) {
			user.setFavoriteList(new ArrayList<Movie>());
		}
		user.getFavoriteList().add(movie);
		userRepository.save(user);
	}

	@Transactional
	public FavoriteDTO getAllFavoriteMovies(String username) throws FavoriteEmptyException {
		FavoriteDTO favoriteDTO = new FavoriteDTO();
		List<Movie> favoritesList = userRepository.getAllFavoriteMovies(username);
		if (favoritesList.isEmpty() || favoritesList == null) {
			throw new FavoriteEmptyException();
		} else {
			favoriteDTO.setFavoriteList(favoritesList);
			favoriteDTO.setNoOfFavorites(userRepository.getTotalFavorites(username));
			return favoriteDTO;
		}
	}

	@Transactional
	public void removeFavoriteMovie(String username, int movieId) {
		User user = userRepository.findByUsername(username);
		Movie movie = movieRepository.findById(movieId).get();
		user.getFavoriteList().remove(movie);
		userRepository.save(user);
	}
	 

	/*
	 * public void addFavoriteMovie(String user, long movieId) {
	 * favoritesDao.addFavoriteMovie(user, movieId); }
	 * 
	 * public Favorite getAllFavoriteMovies(String user) throws
	 * FavoriteEmptyException { return favoritesDao.getAllFavoriteMovies(user); }
	 * 
	 * public void removeFavoriteMovie(String user, long movieId) {
	 * favoritesDao.removeFavoriteMovie(user, movieId); }
	 */

}
