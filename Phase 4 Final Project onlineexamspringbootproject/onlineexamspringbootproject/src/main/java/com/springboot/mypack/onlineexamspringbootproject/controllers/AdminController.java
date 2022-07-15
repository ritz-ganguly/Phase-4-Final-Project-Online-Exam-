package com.springboot.mypack.onlineexamspringbootproject.controllers;

import java.time.LocalDate;
import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.springboot.mypack.onlineexamspringbootproject.entity.Question;
import com.springboot.mypack.onlineexamspringbootproject.entity.Result;
import com.springboot.mypack.onlineexamspringbootproject.entity.User;
import com.springboot.mypack.onlineexamspringbootproject.service.AdminService;

@CrossOrigin("*")
@RestController
@RequestMapping("/admin")
public class AdminController {
	@Autowired
	AdminService adminService;
	
	
	@PostMapping("/signIn")
	public String adminSignIn(@RequestBody User user) {
		
		boolean status = adminService.adminSignIn(user);
		
		if(status == false)
			return "failed";
		else {
			
			return user.getUserName();
			
		}
		
		
	}
	
	
	/*
	
	@GetMapping("/signOut")
	public String adminSignOut() {
		
		    
			return "Signed Out Successfully at " +LocalDate.now();
		    
		   
		
		
	}
	
	
	
	
	
	@GetMapping("/getAdminUserName")
	public String getAdminUserName(HttpSession session) {
		
		    if(session.getAttribute("adminUserName") !=null) {
			
			return (String) session.getAttribute("adminUserName");
		    }
		    
		   return null;
		
		
	}
	
	*/
	@GetMapping("/adminGetAllquestions")
	public List<Question> adminGetAllquestions(){
		 
		return adminService.adminGetAllquestions();
		
	}
	
	
	
	
	
	@PutMapping("/editAdminPassword")
	public boolean editAdminPassword(@RequestBody User u,@RequestParam(name="uname") String uname) {
		
			 try {
			 adminService.editAdminPassword((String ) uname,u);
			 return true;
			 }
			 
			 catch(Exception e) {
				 
				 return false;
			 }
		
		
	}
	
	
	
	@GetMapping("/getQuestionById/{questionId}")
	public List<Question> getQuestionById(@PathVariable int questionId){
		 
		return adminService.getQuestionById(questionId);
		 
		 
	}
	
	@GetMapping("/adminGetAllResults")
	public List<Result> adminGetAllResults(){
		
		return adminService.adminGetAllResults();
	
		
	}
	
	
	@GetMapping("/getAllRegisteredStudents")
	public List<User> getAllRegisteredStudents(){
		
		
			return adminService.getAllRegisteredStudents();
		
		
		
		}
	
	@PostMapping("/adminAddQuestion")
	public boolean adminAddQuestion( @RequestBody Question q) {
		
		return adminService.adminAddQuestion(q);
		
		
	}
	
	
	@PutMapping("/adminEditQuestion")
	public boolean adminEditQuestion(@RequestBody Question q) {
		
		
			return adminService.adminEditQuestion(q);
		
		
		}
	

   @DeleteMapping("/adminDeleteQuestion")
   public boolean adminDeleteQuestion(@RequestBody Question q) {
	   
		   return adminService.adminDeleteQuestion(q);
	   
	   
   }
}
		
	

