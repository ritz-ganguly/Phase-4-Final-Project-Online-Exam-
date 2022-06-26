package com.springboot.mypack.onlineexamspringbootproject.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.springboot.mypack.onlineexamspringbootproject.entity.User;



public interface StudentRepository  extends JpaRepository<User,Integer>{
	@Query(
			value ="select * from user u where u.user_type = '" + "student" +"'",nativeQuery = true
			)
	List<User> getAllStudents();
	
	@Modifying(clearAutomatically = true)
	@Query(value = "update user u set u.password = :password where u.username = :userName",nativeQuery = true)
	int editStudentPassword(String userName, String password);

	
	@Query(value = "select u.user_id from user u where u.username = :userName",nativeQuery = true)
	int getStudentUserId(String userName);
	


   
}
