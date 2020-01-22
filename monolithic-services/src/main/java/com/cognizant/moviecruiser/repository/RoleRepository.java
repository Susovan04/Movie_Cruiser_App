package com.cognizant.moviecruiser.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cognizant.moviecruiser.model.Role;



@Repository
public interface RoleRepository extends JpaRepository<Role, Integer>{

}
