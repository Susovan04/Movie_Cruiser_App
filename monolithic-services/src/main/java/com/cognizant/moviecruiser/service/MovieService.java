package com.cognizant.moviecruiser.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cognizant.moviecruiser.dao.MovieDao;
import com.cognizant.moviecruiser.model.Movie;
import com.cognizant.moviecruiser.repository.MovieRepository;

@Service
public class MovieService {

	@Autowired
	private MovieDao movieDao;

	@Autowired
	private MovieRepository movieRepository;

	
	@Transactional
	public List<Movie> getMovieListCustomer() {
		// TODO Auto-generated method stub
		return movieRepository.getMovieListCustomer();
	}

	@Transactional
	public List<Movie> getMovieListAdmin() {
		// TODO Auto-generated method stub
		return movieRepository.findAll();
	}

	@Transactional
	public Movie modifyMovie(Movie movie) {
		// TODO Auto-generated method stub
		return movieRepository.save(movie);
	}

	@Transactional
	public Movie getMovie(int id) {
		Optional<Movie> movie = movieRepository.findById(id);
		if(movie.isPresent())
			return movie.get();
		return null;
	}
	
	
	
	/*
	 * public List<Movie> getMovieListAdmin() { // TODO Auto-generated method stub
	 * return movieDao.getMovieListAdmin(); }
	 * 
	 * public List<Movie> getMovieListCustomer() { // TODO Auto-generated method
	 * stub return movieDao.getMovieListCustomer(); }
	 * 
	 * 
	 * public void modifyMovie(Movie movie) { // TODO Auto-generated method stub
	 * movieDao.modifyMovie(movie); }
	 * 
	 * 
	 * public Movie getMovie(int id) { // TODO Auto-generated method stub return
	 * movieDao.getMovie(id); }
	 */

}
