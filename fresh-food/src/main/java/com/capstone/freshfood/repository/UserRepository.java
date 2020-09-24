package com.capstone.freshfood.repository;

import com.capstone.freshfood.model.User;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository <User, Long> {

	Optional<User> findByEmail(String email);

	Optional<User> findByEmailAndPassword(String email, String password);
	
}
