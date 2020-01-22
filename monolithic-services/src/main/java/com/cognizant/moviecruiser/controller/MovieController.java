package com.cognizant.moviecruiser.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.moviecruiser.model.Movie;
import com.cognizant.moviecruiser.security.AppUserDetailsService;
import com.cognizant.moviecruiser.service.MovieService;


@RestController
@RequestMapping("/movies")
public class MovieController {

	@Autowired
	private MovieService movieService;

	/*
	 * @Autowired private InMemoryUserDetailsManager inMemoryUserDetailsManager;
	 */
	
	private static final Logger LOGGER = LoggerFactory.getLogger(MovieController.class);
	
	@Autowired
	private AppUserDetailsService appUserDetailsService;
	
	
	@GetMapping
	public List<Movie> getAllMovies() {

		LOGGER.debug("In Movie Controller......");

		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		String user = authentication.getName();
		LOGGER.debug("USER LOGGED IN -> " + user);

		if (user != "anonymousUser") {
			UserDetails userDetails = appUserDetailsService.loadUserByUsername(user);
			String role = userDetails.getAuthorities().toArray()[0].toString();
			LOGGER.debug("ROLE OF LOGGED IN USER -> " + role);
			if (role.equalsIgnoreCase("ADMIN")) {
				LOGGER.debug("Movie from Movie Controller : " + movieService.getMovieListAdmin());
				return movieService.getMovieListAdmin();
			} else {
				return movieService.getMovieListCustomer();
			}
		} else {
			return movieService.getMovieListCustomer();
		}
	}

	@PutMapping
	public void modifyMovie(@RequestBody Movie movie) {
		LOGGER.debug("modifyMovie in MovieController ..." + movie);
		movieService.modifyMovie(movie);
	}

	@GetMapping("/{id}")
	public Movie getMovie(@PathVariable int id) {
		return movieService.getMovie(id);
	}
}
