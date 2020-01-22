
package com.cognizant.moviecruiser.security;

import java.util.HashSet;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.cognizant.moviecruiser.exception.UserAlreadyExistsException;
import com.cognizant.moviecruiser.model.Role;
import com.cognizant.moviecruiser.model.User;
import com.cognizant.moviecruiser.repository.RoleRepository;
import com.cognizant.moviecruiser.repository.UserRepository;
import com.cognizant.moviecruiser.service.AppUser;


@Service
public class AppUserDetailsService implements UserDetailsService {

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private RoleRepository roleRepository;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

		User user = userRepository.findByUsername(username);

		if (user == null) {
			throw new UsernameNotFoundException("Username is not found");
		}

		return new AppUser(user);
	}

	public void signup(User newUser) throws UserAlreadyExistsException {

		User user = userRepository.findByUsername(newUser.getUsername());
		if (user != null) {
			throw new UserAlreadyExistsException();
		} else {
			Role role = roleRepository.findById(1).get();
			newUser.setRoleList(new HashSet<Role>());
			newUser.getRoleList().add(role);
			userRepository.save(newUser);
		}
	}

}
