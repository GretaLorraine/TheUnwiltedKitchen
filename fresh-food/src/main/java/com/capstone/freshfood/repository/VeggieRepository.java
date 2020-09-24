package com.capstone.freshfood.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.capstone.freshfood.model.Veggies;

@Repository
public interface VeggieRepository extends JpaRepository <Veggies, Long> {

	Optional<Veggies> findByName(String name);
	
}
