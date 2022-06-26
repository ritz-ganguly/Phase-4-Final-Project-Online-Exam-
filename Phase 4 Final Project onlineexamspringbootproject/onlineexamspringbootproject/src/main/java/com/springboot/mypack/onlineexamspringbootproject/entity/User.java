package com.springboot.mypack.onlineexamspringbootproject.entity;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;




@Entity(name = "us")
@Table(name="user")
public class User implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name= "user_id",unique = true)
	private int userId;	
    
    
    @Column(name= "username")
	private String userName;
    
    
    @Column(name= "password")
	private String password;
    
    
    @Column(name= "user_type")
	private String userType;
    
    
    @OneToMany(mappedBy="user", fetch = FetchType.EAGER, 
			
			 targetEntity=Result.class)
	@JsonIgnoreProperties("user")
    
    private List<Result> results = new ArrayList<>();
    
    
    public User() {
		// TODO Auto-generated constructor stub
	}


	public int getUserId() {
		return userId;
	}


	public void setUserId(int userId) {
		this.userId = userId;
	}


	public String getUserName() {
		return userName;
	}


	public void setUserName(String userName) {
		this.userName = userName;
	}


	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
	}


	public String getUserType() {
		return userType;
	}


	public void setUserType(String userType) {
		this.userType = userType;
	}


	public List<Result> getResults() {
		return results;
	}
	
	
	
	public void addResult(Result result) {
		results.add(result);
	}

	
	public void removeresult(Result result)
	
	{
		
		results.remove(result);
	}
    
	
}
