package com.capstone.freshfood.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.capstone.freshfood.exception.ResourceNotFoundException;
import com.capstone.freshfood.model.Veggies;
import com.capstone.freshfood.repository.VeggieRepository;

@CrossOrigin
@RestController
@RequestMapping("/api/v1")
public class VeggieController {
	
	@Autowired
	private VeggieRepository veggieRepository;
	
	//find all fruits
	@GetMapping("/veggies")
	public List<Veggies> getAllVeggies() {
		return veggieRepository.findAll();
	}
	
	//create veggie rest API
	@PostMapping("/veggies")
	public Veggies createVeggie(Veggies veggie) {
		return veggieRepository.save(veggie);
	}
	
	//get veggie by id rest api
	@GetMapping("/veggies/{name}")
	public ResponseEntity<Veggies> getVeggieByName(@PathVariable String name) {
		Veggies veggie = veggieRepository.findByName(name).orElseThrow(() -> new ResourceNotFoundException("Veggie not found with id: " + name));
		return ResponseEntity.ok(veggie);
	}
	
	//update veggie rest api
	@PutMapping("/veggies/{name}")
	public ResponseEntity<Veggies> updateVeggie(@PathVariable String name, @RequestBody Veggies veggieDetails) {
		Veggies veggie = veggieRepository.findByName(name).orElseThrow(() -> new ResourceNotFoundException("Veggie not found with id: " + name));
			
		veggie.setImage(veggieDetails.getImage());
		veggie.setName(veggieDetails.getName());
		veggie.setClean(veggieDetails.getClean());
		veggie.setStorage(veggieDetails.getStorage());
		veggie.setFreshTime(veggieDetails.getFreshTime());
		veggie.setFreshPrep(veggieDetails.getFreshPrep());
		veggie.setFreezeTime(veggieDetails.getFreezeTime());
		veggie.setFreezePrep(veggieDetails.getFreezePrep());
			
		Veggies updatedVeggie = veggieRepository.save(veggie);
		return ResponseEntity.ok(updatedVeggie);
	}

}
