package com.capstone.freshfood.model;

import javax.persistence.*;

@Entity
@Table(name = "fruits")
public class Fruits {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@Column(name = "image")
	private String image;
	@Column(name = "name", unique = true)
	private String name;
	@Column(name = "clean")
	private String clean;
	@Column(name = "storage")
	private String storage;
	@Column(name = "fresh_time")
	private String freshTime;
	@Column(name = "fresh_prep")
	private String freshPrep;
	@Column(name = "freeze_time")
	private String freezeTime;
	@Column(name = "freeze_prep")
	private String freezePrep;
	
	//constructor
	public Fruits() {}
	
	//id
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	
	//image
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	
	//name
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	
	//clean
	public String getClean() {
		return clean;
	}
	public void setClean(String clean) {
		this.clean = clean;
	}
	
	//storage
	public String getStorage() {
		return storage;
	}
	public void setStorage(String storage) {
		this.storage = storage;
	}
	
	//freshness length
	public String getFreshTime() {
		return freshTime;
	}
	public void setFreshTime(String freshTime) {
		this.freshTime = freshTime;
	}
	
	//freshness prep
	public String getFreshPrep() {
		return freshPrep;
	}
	public void setFreshPrep(String freshPrep) {
		this.freshPrep = freshPrep;
	}
	
	//freezer time
	public String getFreezeTime() {
		return freezeTime;
	}
	public void setFreezeTime(String freezeTime) {
		this.freezeTime = freezeTime;
	}
	
	//freezer prep
	public String getFreezePrep() {
		return freezePrep;
	}
	public void setFreezePrep(String freezePrep) {
		this.freezePrep = freezePrep;
	}
	
	

}
