package com.cognizant.moviecruiser.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.cognizant.moviecruiser.model.Movie;

@Repository
public interface MovieRepository extends JpaRepository<Movie, Integer> {

	@Query(value="FROM Movie m WHERE m.active = 1 and m.dateOfLaunch <= current_date()")
	List<Movie> getMovieListCustomer();
}
