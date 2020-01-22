
package com.cognizant.moviecruiser.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.cognizant.moviecruiser.model.Movie;
import com.cognizant.moviecruiser.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

	User findByUsername(String username);

	@Query(value = "SELECT u.favoriteList from User u where u.username=:username")
	List<Movie> getAllFavoriteMovies(@Param("username") String usernmae);

	@Query(value = "SELECT COUNT(m.id) from User u INNER JOIN u.favoriteList m where u.username=:username")
	long getTotalFavorites(@Param("username") String username);

}
