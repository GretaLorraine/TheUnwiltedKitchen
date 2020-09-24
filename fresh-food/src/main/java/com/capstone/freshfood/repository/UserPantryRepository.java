package com.capstone.freshfood.repository;
import java.util.List;
//
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.capstone.freshfood.model.Fruits;
import com.capstone.freshfood.model.User;
import com.capstone.freshfood.model.UserPantry;
import com.capstone.freshfood.model.Veggies;
//
//@Repository
public interface UserPantryRepository extends JpaRepository<UserPantry, Long> {
//
	List<UserPantry> findByFruitAndUser(Fruits fruit, User user);
	List<UserPantry> findByVeggieAndUser(Veggies veggie, User user);
	List<UserPantry> findByUser(User user);
//	
}
