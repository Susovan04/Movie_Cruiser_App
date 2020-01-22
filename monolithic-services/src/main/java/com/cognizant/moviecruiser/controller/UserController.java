package com.cognizant.moviecruiser.controller;

import java.util.ArrayList;

import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
//import org.springframework.security.core.userdetails.User;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.moviecruiser.exception.UserAlreadyExistsException;
import com.cognizant.moviecruiser.model.User;
import com.cognizant.moviecruiser.repository.UserRepository;
import com.cognizant.moviecruiser.security.AppUserDetailsService;

@RestController
@RequestMapping("/users")
public class UserController {

	/*
	 * @Autowired InMemoryUserDetailsManager inMemoryUserDetailsManager;
	 */
	
	private static final Logger LOGGER = LoggerFactory.getLogger(UserController.class);
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private AppUserDetailsService appUserDetailsService;

		
	@PostMapping
	public void signup(@RequestBody @Valid User user) throws UserAlreadyExistsException {
		LOGGER.debug("user:{}", user);
		user.setPassword(passwordEncoder().encode(user.getPassword()));
		appUserDetailsService.signup(user);

	}
	
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}

	/*
	 * @PostMapping public void signup(@RequestBody @Valid
	 * com.cognizant.moviecruiser.model.User user) throws UserAlreadyExistsException
	 * { System.out.println(user); boolean isUserExist =
	 * inMemoryUserDetailsManager.userExists(user.getUsername());
	 * System.out.println(isUserExist); if (isUserExist) { throw new
	 * UserAlreadyExistsException(); } else { ArrayList<GrantedAuthority>
	 * grantedAuthoritiesList = new ArrayList<>(); grantedAuthoritiesList.add(new
	 * SimpleGrantedAuthority("USER"));
	 * inMemoryUserDetailsManager.createUser(User.withUsername(user.getUsername())
	 * .password(passwordEncoder().encode(user.getPassword())).roles("USER").build()
	 * ); } }
	 */
}
