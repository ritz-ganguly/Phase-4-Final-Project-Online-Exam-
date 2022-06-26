package com.springboot.mypack.onlineexamspringbootproject.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.springboot.mypack.onlineexamspringbootproject.entity.User;

public interface AdminRepository extends JpaRepository<User,Integer> {
	@Query(
			value ="select * from user u where u.user_type = '" + "admin" +"'",nativeQuery = true
			)
	List<User> getAllAdmins();
	
	
	
	@Modifying(clearAutomatically = true)
	@Query(value = "update user u set u.password = :password where u.username = :userName",nativeQuery = true)
	int editAdminPassword(String userName, String password);
	
	
	@Query(value = "select * from user u where u.user_type = '" + "student" + "'",nativeQuery = true)
	List<User> getAllRegisteredStudents();
}
