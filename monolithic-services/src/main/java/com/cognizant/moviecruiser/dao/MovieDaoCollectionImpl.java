package com.cognizant.moviecruiser.dao;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Component;

import com.cognizant.moviecruiser.model.Movie;

@Component
public class MovieDaoCollectionImpl implements MovieDao{

	public static List<Movie> MOVIE_LIST;
	
	
	public MovieDaoCollectionImpl() {
		super();
		// TODO Auto-generated constructor stub
		ApplicationContext context = new ClassPathXmlApplicationContext("moviecruiser.xml");
		MOVIE_LIST = context.getBean("listOfMovie", ArrayList.class);
	}

	@Override
	public List<Movie> getMovieListAdmin() {
		//System.out.println("From MovieDao Collection : " + MOVIE_LIST);
		return MOVIE_LIST;
	}

	public List<Movie> getMovieListCustomer() {
		List<Movie> movieListCustomer = new ArrayList<Movie>();
		for (Movie movie : MOVIE_LIST) {
			Date launchDate = movie.getDateOfLaunch();
			Date today = new Date();
			boolean isActive = movie.isActive();
			if ((launchDate.before(today) || launchDate.equals(today)) && isActive) {
				movieListCustomer.add(movie);
			}
		}
		return movieListCustomer;
	}

	@Override
	public void modifyMovie(Movie movie) {
		for (int i = 0; i < MOVIE_LIST.size(); i++) {
			if (MOVIE_LIST.get(i).getId() == movie.getId()) {
				MOVIE_LIST.set(i, movie);
				break;
			}
		}
	}

	@Override
	public Movie getMovie(long movieId) {
		Movie movie = null;
		for (Movie item : MOVIE_LIST) {
			if (item.getId() == movieId) {
				movie = item;
				break;
			}
		}
		return movie;
	}
	
}
