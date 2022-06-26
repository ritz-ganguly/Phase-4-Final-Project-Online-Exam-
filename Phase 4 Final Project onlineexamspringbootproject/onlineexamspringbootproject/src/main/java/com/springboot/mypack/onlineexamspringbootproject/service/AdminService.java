package com.springboot.mypack.onlineexamspringbootproject.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.springboot.mypack.onlineexamspringbootproject.entity.Question;
import com.springboot.mypack.onlineexamspringbootproject.entity.Result;
import com.springboot.mypack.onlineexamspringbootproject.entity.User;
import com.springboot.mypack.onlineexamspringbootproject.repository.AdminRepository;
import com.springboot.mypack.onlineexamspringbootproject.repository.QuestionRepository;
import com.springboot.mypack.onlineexamspringbootproject.repository.ResultRepository;



@Service
public class AdminService {
	@Autowired
	AdminRepository adminRepository;
	
	@Autowired
	QuestionRepository questionRepository;
	
	@Autowired
	ResultRepository resultRepository;
	
	
	
	
	@Transactional
	public boolean adminSignIn(User u){
		boolean status = false;
		try {
		List<User> users = adminRepository.getAllAdmins();
		
		for(User us:users) {
			if(us.getUserName().equals(u.getUserName()) && us.getPassword().equals(u.getPassword())) {
				status =true;
				break;
				
			}
			
		}
		return status;
	    }
	    catch(Exception e) {
	    	
	    	return status;
	    }
		
	}

	
	
	@Transactional
	public List<Question> adminGetAllquestions(){
		
		return questionRepository.adminGetAllquestions();
		
	} 
	
	
	
	@Transactional
	public int editAdminPassword( String userName,User u) {
		
		
		return adminRepository.editAdminPassword(userName,u.getPassword());
	}
	
	
	@Transactional
	public List<Question> getQuestionById(int questionId){
		
		return questionRepository.getQuestionById(questionId);
	}
	
	@Transactional
	public List<Result> adminGetAllResults(){
		
		return resultRepository.adminGetAllResults();
	}
	
	@Transactional
	public List<User> getAllRegisteredStudents(){
		
		return adminRepository.getAllRegisteredStudents();
	}
	
	
	@Transactional
	public boolean adminAddQuestion(Question q) {
		try {
		questionRepository.save(q);
		return true;
		}
		catch(Exception e) {
			
			return false;
		}

			
		
	}
	
	@Transactional
	public boolean adminEditQuestion(Question q) {
		try {
			questionRepository.save(q);
			return true;
			}
			catch(Exception e) {
				
				return false;
			}
		
	}
	
	@Transactional
	public boolean adminDeleteQuestion(Question q) {
		try {
			questionRepository.delete(q);
			return true;
			}
			catch(Exception e) {
				
				return false;
			}
		
	}
}


