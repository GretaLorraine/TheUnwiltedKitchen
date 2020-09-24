package com.capstone.freshfood.controller;

import java.util.List;

//
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
//
import com.capstone.freshfood.model.User;
import com.capstone.freshfood.model.UserPantry;
import com.capstone.freshfood.model.Veggies;
import com.capstone.freshfood.repository.FruitRepository;
import com.capstone.freshfood.repository.UserPantryRepository;
import com.capstone.freshfood.repository.UserRepository;
import com.capstone.freshfood.repository.VeggieRepository;

//
@CrossOrigin
@RestController
@RequestMapping("/api/v1")
public class UserPantryController {
//	
	@Autowired
	private UserPantryRepository pantryRepo;
	@Autowired
	private VeggieRepository veggieRepo;
	@Autowired
	private FruitRepository fruitRepo;
	@Autowired 
	private UserRepository userRepo;

//	//find user pantry
	@PostMapping("/pantry/veggie")
	public ResponseEntity<List<UserPantry>> findUserPantry(@RequestParam Long veggieId, @RequestParam Long userId) {
		userRepo.findById(userId).ifPresent(user -> {
			veggieRepo.findById(veggieId).ifPresent(veggie -> {
				UserPantry pantry = new UserPantry();
				pantry.setUser(user);
				pantry.setVeggie(veggie);
				pantryRepo.save(pantry);
			});
		});
		return new ResponseEntity<>( pantryRepo.findByUser(userRepo.findById(userId).get()) , HttpStatus.OK);
	}
	
	@PostMapping("/pantry/fruit")
	public ResponseEntity<List<UserPantry>> findUserPantryFruit(@RequestParam Long fruitId, @RequestParam Long userId) {
		userRepo.findById(userId).ifPresent(user -> {
			fruitRepo.findById(fruitId).ifPresent(fruit -> {
				UserPantry pantry = new UserPantry();
				pantry.setUser(user);
				pantry.setFruit(fruit);
				pantryRepo.save(pantry);
			});
		});
		return new ResponseEntity<>( pantryRepo.findByUser(userRepo.findById(userId).get()) , HttpStatus.OK);
	}
	
	@PostMapping("/pantry/veggies")
	public ResponseEntity<List<UserPantry>> findUserPantryVeggie(@RequestParam Long veggieId, @RequestParam Long userId) {
		userRepo.findById(userId).ifPresent(user -> {
			veggieRepo.findById(veggieId).ifPresent(veggie -> {
				UserPantry pantry = new UserPantry();
				pantry.setUser(user);
				pantry.setVeggie(veggie);
				pantryRepo.save(pantry);
			});
		});
		return new ResponseEntity<>( pantryRepo.findByUser(userRepo.findById(userId).get()) , HttpStatus.OK);
	}
	
	@GetMapping("/pantry")
	public ResponseEntity<List<UserPantry>> getUserPantry( @RequestParam Long userId) {
		return new ResponseEntity<>( pantryRepo.findByUser(userRepo.findById(userId).get()) , HttpStatus.OK);
	}
	
	@DeleteMapping("/pantry")
	public ResponseEntity<String> deletetUserPantryItem( @RequestParam Long pantryItemId) {
		pantryRepo.deleteById(pantryItemId);
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
}
