package com.cognizant.moviecruiser.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.BAD_REQUEST, reason = "User already exists")
public class UserAlreadyExistsException extends Exception {

	private static final long serialVersionUID = 1L;
	
	public UserAlreadyExistsException() {
		super();
	}
}
