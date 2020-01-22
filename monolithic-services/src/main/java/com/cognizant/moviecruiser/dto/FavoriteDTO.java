package com.cognizant.moviecruiser.dto;

import java.util.List;

import com.cognizant.moviecruiser.model.Movie;

public class FavoriteDTO {

	private List<Movie> favoriteList;
	private long noOfFavorites;
	
	public FavoriteDTO() {
		super();
		// TODO Auto-generated constructor stub
	}

	public FavoriteDTO(List<Movie> favoriteList, long noOfFavorites) {
		super();
		this.favoriteList = favoriteList;
		this.noOfFavorites = noOfFavorites;
	}

	public List<Movie> getFavoriteList() {
		return favoriteList;
	}

	public void setFavoriteList(List<Movie> favoriteList) {
		this.favoriteList = favoriteList;
	}

	public long getNoOfFavorites() {
		return noOfFavorites;
	}

	public void setNoOfFavorites(long noOfFavorites) {
		this.noOfFavorites = noOfFavorites;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((favoriteList == null) ? 0 : favoriteList.hashCode());
		result = prime * result + (int) (noOfFavorites ^ (noOfFavorites >>> 32));
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		FavoriteDTO other = (FavoriteDTO) obj;
		if (favoriteList == null) {
			if (other.favoriteList != null)
				return false;
		} else if (!favoriteList.equals(other.favoriteList))
			return false;
		if (noOfFavorites != other.noOfFavorites)
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "FavoriteDTO [favoriteList=" + favoriteList + ", noOfFavorites=" + noOfFavorites + "]";
	}
	
}
