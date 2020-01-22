package com.cognizant.moviecruiser.model;

import java.util.List;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

@Entity
@Table(name = "user")
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "us_id")
	private int id;

	@Column(name = "us_username")
	private String username;

	@Column(name = "us_password")
	private String password;

	@Column(name = "us_firstname")
	private String firstName;

	@Column(name = "us_lastname")
	private String lastName;

	@ManyToMany(fetch = FetchType.EAGER)
	@JoinTable(name = "user_role", joinColumns = @JoinColumn(name = "ur_us_id"), inverseJoinColumns = @JoinColumn(name = "ur_ro_id"))
	private Set<Role> roleList;

	@ManyToMany(fetch = FetchType.EAGER)
	@JoinTable(name = "favorites", joinColumns = @JoinColumn(name = "fv_us_id"), inverseJoinColumns = @JoinColumn(name = "fv_mv_id"))
	private List<Movie> favoriteList;

	public User() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Set<Role> getRoleList() {
		return roleList;
	}

	public void setRoleList(Set<Role> roleList) {
		this.roleList = roleList;
	}

	public List<Movie> getFavoriteList() {
		return favoriteList;
	}

	public void setFavoriteList(List<Movie> favoriteList) {
		this.favoriteList = favoriteList;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	@Override
	public String toString() {
		return "User [id=" + id + ", username=" + username + ", password=" + password + ", firstName=" + firstName
				+ ", lastName=" + lastName + ", roleList=" + roleList + ", favoriteList=" + favoriteList + "]";
	}

}
