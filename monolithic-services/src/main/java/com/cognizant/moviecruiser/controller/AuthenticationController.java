package com.cognizant.moviecruiser.controller;

import java.util.Base64;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import io.jsonwebtoken.JwtBuilder;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;


@RestController
public class AuthenticationController {

	private static final Logger LOGGER = LoggerFactory.getLogger(AuthenticationController.class);
	
	@GetMapping("/authenticate")
	public Map<String, String> authenticate(@RequestHeader("Authorization") String authHeader) {
		
		Map<String, String> jwt = new HashMap<String, String>();
		String user = getUser(authHeader);
		String token = generateJwt(user);
		String role = SecurityContextHolder.getContext().getAuthentication().getAuthorities().toArray()[0].toString();
		jwt.put("role", role);
		jwt.put("token", token);
		jwt.put("user", user);
		LOGGER.info("End from authenticate method");
		// tokens.put("token", "");
		return jwt;
	}
	
	private String getUser(String authHeader) {
		LOGGER.info("Start from get user method");
		String encodedCredentials = authHeader.split(" ")[1];
		byte[] credentials = Base64.getDecoder().decode(encodedCredentials);
		String user = new String(credentials).split(":")[0];
		LOGGER.debug("User -> " + user);
		LOGGER.info("End from get user method");

		return user;
	}
	
	private String generateJwt(String user) {
		   JwtBuilder builder = Jwts.builder();
	        builder.setSubject(user);

	        // Set the token issue time as current time
	        builder.setIssuedAt(new Date());

	        // Set the token expiry as 20 minutes from now
	        builder.setExpiration(new Date((new Date()).getTime() + 1200000));
	        builder.signWith(SignatureAlgorithm.HS256, "secretkey");

	        String token = builder.compact();

	        return token;
	}
}
