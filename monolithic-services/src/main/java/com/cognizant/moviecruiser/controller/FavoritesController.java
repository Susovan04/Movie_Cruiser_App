package com.cognizant.moviecruiser.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.moviecruiser.dto.FavoriteDTO;
import com.cognizant.moviecruiser.exception.FavoriteEmptyException;
import com.cognizant.moviecruiser.model.Favorite;
import com.cognizant.moviecruiser.service.FavoritesService;

@RestController
@RequestMapping("/favorites")
public class FavoritesController {

	public static final Logger LOGGER = LoggerFactory.getLogger(FavoritesController.class);

	@Autowired
	private FavoritesService favoritesService;

	@PostMapping("/{user}/{movieId}")
	public void addFavoriteMovie(@PathVariable String user, @PathVariable int movieId) {
		LOGGER.info("inside the addFavoriteMovie method in Favoritecontroller");
		favoritesService.addFavoriteMovie(user, movieId);
	}

	@GetMapping("/{user}")
	public FavoriteDTO getAllFavoriteMovies(@PathVariable String user) throws FavoriteEmptyException {
		return favoritesService.getAllFavoriteMovies(user);
	}

	@DeleteMapping("/{user}/{movieId}")
	public void removeFavoriteMovie(@PathVariable String user, @PathVariable int movieId) {
		LOGGER.info("inside the removeFavoriteMovie in the FavoriteController");
		favoritesService.removeFavoriteMovie(user, movieId);
	}
	 

	/*
	 * @PostMapping("/{user}/{movieId}") public void addFavoriteMovie(@PathVariable
	 * String user, @PathVariable long movieId) {
	 * LOGGER.info("inside the addFavoriteMovie method in Favoritecontroller");
	 * favoritesService.addFavoriteMovie(user, movieId); }
	 * 
	 * @GetMapping("/{user}") public Favorite getAllFavoriteMovies(@PathVariable
	 * String user) throws FavoriteEmptyException { LOGGER.debug(user+"jjjj");
	 * return favoritesService.getAllFavoriteMovies(user); }
	 * 
	 * @DeleteMapping("/{user}/{movieId}") public void
	 * removeFavoriteMovie(@PathVariable String user, @PathVariable long movieId) {
	 * LOGGER.info("inside the removeFavoriteMovie in the FavoriteController");
	 * favoritesService.removeFavoriteMovie(user, movieId); }
	 */

}
