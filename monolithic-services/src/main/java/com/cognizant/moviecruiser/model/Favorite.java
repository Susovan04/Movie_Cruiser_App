package com.cognizant.moviecruiser.model;

import java.util.List;

public class Favorite {

	private List<Movie> favoriteList;
	private long noOfFavorites;
	
	public Favorite() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Favorite(List<Movie> favoriteList, long noOfFavorites) {
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
		Favorite other = (Favorite) obj;
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
		return "Favorite [favoriteList=" + favoriteList + ", noOfFavorites=" + noOfFavorites + "]";
	}

	
}
