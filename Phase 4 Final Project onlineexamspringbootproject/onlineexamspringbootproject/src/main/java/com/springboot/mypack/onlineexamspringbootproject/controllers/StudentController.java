package com.springboot.mypack.onlineexamspringbootproject.controllers;

import java.time.LocalDate;
import java.util.HashMap;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
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
import com.springboot.mypack.onlineexamspringbootproject.service.StudentService;

@CrossOrigin("*")
@RestController
@RequestMapping("/student")
public class StudentController {
	@Autowired
	StudentService studentService;
	
	@GetMapping("/getTestQuestions/{testType}")
	public List<Question> getTestQuestions(@PathVariable String testType){
		
		System.out.println(studentService.getTestQuestions(testType));
		return studentService.getTestQuestions(testType);
	}
	
	
	@PostMapping("/signIn")
	public String studentSignIn(@RequestBody User user) {
		
		boolean status = studentService.studentSignIn(user);
		
		if(status == false)
			return "failed";
		else {
			
			
			return user.getUserName();
			
		}
		
		
	}
	
	/*
	@GetMapping("/signOut")
	public String studentSignOut(HttpSession session) {
		
		if(session.getAttribute("studentUserName") !=null) {
			session.invalidate();
			
			return "Signed Out Successfully at " +LocalDate.now();
		    
		}
		else return null;
		
	}
	
	*
	
	@GetMapping("/getStudentUserName")
	public String getStudentUserName(HttpSession session) {

		
		    
		if(session.getAttribute("studentUserName") !=null) {
			return (String) session.getAttribute("studentUserName");
		    	
		    	
		}
		
		return null;
		    
		 
		
		
	}
	
	*/
	
	
	
	@PostMapping("/signUp")
	public boolean userSignup(@RequestBody User user) {
		user.setUserType("student");
		return studentService.studentSignup(user);
		
		
	}
	
	
	@PutMapping("/editstudentPassword")
	public boolean editstudentPassword(@RequestBody User u,
			@RequestParam(name="uname") String uname) {
		
			 try {
				  
			 studentService.editStudentPassword(uname,u);
			 
			 return true;
			 }
			 
			 catch(Exception e) {
				 
				 return false;
			 }
		
		
	}
	
	
	@PostMapping("/generateResult")
	public boolean generateResult(@RequestBody Result r, @RequestParam(name="uname") String uname) {
		
		
			 try {
			 studentService.generateResult(r,(String ) uname);
			 return true;
			 }
			 
			 catch(Exception e) {
				 
				 return false;
			 }
		
		
		
	}
	
	
	@GetMapping("/studentTestHistory")
	public List<Result> studentTestHistory(@RequestParam(name="uname") String uname){
		
			
			try {
				
				return studentService.studentTestHistory((String) 
						uname );
			}
			catch(Exception e) {
				
			return null;
			}
			
		
	}
	
	
	@GetMapping("/getUniqueQuestionType")
	public HashMap<String,String> getUniqueQuestionType(){
			
			
			try {
				
				
				List<Object[]> s =  studentService.getUniqueQuestionType();
				HashMap<String,String> map=new HashMap<String,String>();
				
				for (Object[] result : s) {
				    String item = (String)result[0];
				    String name =  item;
				    map.put(name,item);
				}
				
				return map;
			}
			catch(Exception e) {
				
			return null;
			}
			
		
	}
		
	
}
