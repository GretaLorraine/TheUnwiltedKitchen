package com.capstone.freshfood.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.capstone.freshfood.model.Fruits;

@Repository
public interface FruitRepository extends JpaRepository <Fruits, Long> {

	Optional<Fruits> findByName(String name);
	
}
