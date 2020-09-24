package com.capstone.freshfood.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.capstone.freshfood.exception.ResourceNotFoundException;
import com.capstone.freshfood.model.User;
import com.capstone.freshfood.repository.UserRepository;

@CrossOrigin
@RestController
@RequestMapping("/api/v1")
public class UserController {

	@Autowired
	private UserRepository userRepository;
	
	//find all users
	@GetMapping("/users")
	public List<User> getAllUsers() {
		return userRepository.findAll();
	}
	
	//create user rest API
	@PostMapping("/users")
	public User createUser(@RequestBody User user) {
		return userRepository.save(user);
	}
	
	//get user by id rest api
	@GetMapping("/users/{id}")
	public ResponseEntity<User> getUserById(@PathVariable Long id) {
		User user = userRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + id));
		return ResponseEntity.ok(user);
	}
	
	//update user rest api
	@PutMapping("/users/{id}")
	public ResponseEntity<User> updateUser(@PathVariable Long id, @RequestBody User userDetails) {
		User user = userRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + id));
		
		user.setFirstName(userDetails.getFirstName());
		user.setLastName(userDetails.getLastName());
		user.setEmail(userDetails.getEmail());
		
		User updatedUser = userRepository.save(user);
		return ResponseEntity.ok(updatedUser);
	}
	
	//delete user rest api
	@DeleteMapping("/users/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteUser(@PathVariable Long id) {
		User user = userRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + id));
		
		userRepository.delete(user);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
	//user login
	@RequestMapping(value = "submitUserDetails", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
	public void submitUserDetails(@RequestBody User user) {
		Optional<User> userAccount = userRepository.findByEmail(user.getEmail());
		if(!userAccount.isPresent()) { 
			this.userRepository.save(user);
		}
	}
	
	@PostMapping("login") public ResponseEntity<User> logIn(@RequestBody User user){ 
		System.out.println(user.toString());
		Optional<User> userAccount = userRepository.findByEmailAndPassword(user.getEmail(), user.getPassword());
		if(userAccount.isPresent()) { 
			return new ResponseEntity<User>(userAccount.get(), HttpStatus.OK);
		}
		return new ResponseEntity<User>(HttpStatus.UNAUTHORIZED);
	}
	
	
}
