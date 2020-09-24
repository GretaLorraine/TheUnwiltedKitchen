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
import com.capstone.freshfood.model.Fruits;
import com.capstone.freshfood.repository.FruitRepository;

@CrossOrigin
@RestController
@RequestMapping("/api/v1")
public class FruitController {

	@Autowired
	private FruitRepository fruitRepository;
	
	//find all fruits
	@GetMapping("/fruits")
	public List<Fruits> getAllFruits() {
		return fruitRepository.findAll();
	}
	
	//create fruit rest API
	@PostMapping("/fruits")
	public Fruits createFruit(Fruits fruit) {
		return fruitRepository.save(fruit);
	}
	
	//get fruit by id rest api
	@GetMapping("/fruits/{name}")
	public ResponseEntity<Fruits> getFruitByName(@PathVariable String name) {
		Fruits fruit = fruitRepository.findByName(name).orElseThrow(() -> new ResourceNotFoundException("Fruit not found with id: " + name));
		return ResponseEntity.ok(fruit);
	}
	
	//update user rest api
	@PutMapping("/fruits/{name}")
	public ResponseEntity<Fruits> updateFruit(@PathVariable String name, @RequestBody Fruits fruitDetails) {
		Fruits fruit = fruitRepository.findByName(name).orElseThrow(() -> new ResourceNotFoundException("Fruit not found with id: " + name));
			
		fruit.setImage(fruitDetails.getImage());
		fruit.setName(fruitDetails.getName());
		fruit.setClean(fruitDetails.getClean());
		fruit.setStorage(fruitDetails.getStorage());
		fruit.setFreshTime(fruitDetails.getFreshTime());
		fruit.setFreshPrep(fruitDetails.getFreshPrep());
		fruit.setFreezeTime(fruitDetails.getFreezeTime());
		fruit.setFreezePrep(fruitDetails.getFreezePrep());
			
		Fruits updatedFruit = fruitRepository.save(fruit);
		return ResponseEntity.ok(updatedFruit);
	}
	
}
