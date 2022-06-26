package com.springboot.mypack.onlineexamspringbootproject.service;

import java.time.LocalDate
;
import java.util.List;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


import com.springboot.mypack.onlineexamspringbootproject.entity.Question;
import com.springboot.mypack.onlineexamspringbootproject.entity.Result;
import com.springboot.mypack.onlineexamspringbootproject.entity.User;
import com.springboot.mypack.onlineexamspringbootproject.repository.QuestionRepository;
import com.springboot.mypack.onlineexamspringbootproject.repository.ResultRepository;
import com.springboot.mypack.onlineexamspringbootproject.repository.StudentRepository;

@Service
public class StudentService {
	@Autowired
	QuestionRepository questionRepository;
	@Autowired
	StudentRepository studentRepository;
	@Autowired
	ResultRepository resultRepository;
	
@Transactional	
public List<Question> getTestQuestions(String testType){
		
		return questionRepository.getTestQuestions(testType);
	}

@Transactional
public boolean studentSignIn(User u){
	boolean status = false;
	try {
	List<User> users = studentRepository.getAllStudents();
	
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
public boolean studentSignup(User u){
    try {
    	boolean status = false;
    	List<User> users = studentRepository.getAllStudents();
    	for(User us:users) {
			if(us.getUserName().equals(u.getUserName()) ) {
				status =true;
				break;
				
			}
    	}
    	if(status  == false) {
	studentRepository.save(u);
	return true;
	
    	}
    	
    	else
    		return false;
    }
    catch(Exception e) {
    	
    	return false;
    }
	
}




@Transactional
public int editStudentPassword( String userName,User u) {
	
	
	return studentRepository.editStudentPassword(userName,u.getPassword());
}





@Transactional
public String generateResult(Result r,String userName) {
	Result result = new Result();
	
	result.setTestDate(LocalDate.now());
    result.setMarksObtained(r.getMarksObtained());
    result.setTotalMarks(r.getTotalMarks());
	
	result.setTestType(r.getTestType());
	
	User u = new User();
	int uid = studentRepository.getStudentUserId(userName);
	u.setUserId(uid);
	
	result.setUser(u);
	System.out.println(result);
	resultRepository.save(result);
	

	
	return "Result generated succesully";
    
	
}



@Transactional
public List<Result> studentTestHistory(String userName){
	int uid = studentRepository.getStudentUserId(userName);
	return resultRepository.studentTestHistory(uid);
	
}


@Transactional
public List<Object[]> getUniqueQuestionType(){
	
	return questionRepository.getUniqueQuestionType();
}


}
