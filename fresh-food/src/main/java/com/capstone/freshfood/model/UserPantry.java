package com.capstone.freshfood.model;
//
import javax.persistence.*;
//
@Entity
public class UserPantry {
//	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	@ManyToOne
	private User user;
	
	@ManyToOne
	@JoinColumn(name="fruit_id")
	private Fruits fruit;
	
	@ManyToOne
	@JoinColumn(name="veggie_id")
	private Veggies veggie;
//	
//	//id
	public Long getId() {
		return this.id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	public Fruits getFruit() {
		return fruit;
	}
	public void setFruit(Fruits fruit) {
		this.fruit = fruit;
	}
	public Veggies getVeggie() {
		return veggie;
	}
	public void setVeggie(Veggies veggie) {
		this.veggie = veggie;
	}
	
	
	
}
