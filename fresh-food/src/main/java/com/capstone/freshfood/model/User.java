package com.capstone.freshfood.model;

import java.util.List;

import javax.persistence.*;

@Entity
@Table(name = "users")
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name = "email", unique = true)
	private String email;
	@Column(name = "first_name")
	private String firstName;
	@Column(name = "last_name")
	private String lastName;
	@Column(name = "password")
	private String password;
//	@Column(name = "password2")
//	private String password2;
//	@Column(name = "isAdmin")
//	private boolean isAdmin = false;
//	private String telephone;  -for texts in future
	
//	@OneToMany(mappedBy="user", cascade=CascadeType.ALL)
//	private List<UserPantry> pantry;

	
	public User() {}
	
	
	//id
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}

	//first name
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	
	//last name
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	
	//email
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	
	//password
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
//	//password2
//	public String getPassword2() {
//		return password2;
//	}
//	public void setPassword2(String password2) {
//		this.password2 = password2;
//	}
	
//	//admin
//	public boolean getIsAdmin() {
//		return isAdmin;
//	}
//	public void setIsAdmin(boolean isAdmin) {
//		this.isAdmin = isAdmin;
//	}
	
}
