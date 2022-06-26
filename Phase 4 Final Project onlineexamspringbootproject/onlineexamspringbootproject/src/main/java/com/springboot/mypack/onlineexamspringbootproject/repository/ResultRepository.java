package com.springboot.mypack.onlineexamspringbootproject.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;


import com.springboot.mypack.onlineexamspringbootproject.entity.Result;

public interface ResultRepository extends JpaRepository<Result, Integer> {
	@Query(value = "select * from results r where r.user_id= :userId",nativeQuery=true)
	List<Result> studentTestHistory(int userId);
	
	@Query(value = "select * from results r", nativeQuery=true)
	List<Result> adminGetAllResults();
}
