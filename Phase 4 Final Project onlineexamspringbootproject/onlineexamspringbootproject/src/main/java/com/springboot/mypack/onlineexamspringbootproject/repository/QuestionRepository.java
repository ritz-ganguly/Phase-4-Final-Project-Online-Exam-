package com.springboot.mypack.onlineexamspringbootproject.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.springboot.mypack.onlineexamspringbootproject.entity.Question;

public interface QuestionRepository extends JpaRepository<Question, Integer> {
	@Query(value = "select * from question q where q.question_type=:testType",nativeQuery=true)
	List<Question> getTestQuestions(String testType);
	
	@Query(value = "select * from question q",nativeQuery=true)
	List<Question> adminGetAllquestions();
	
	@Query(value = "select DISTINCT q.question_type from question q",nativeQuery =true)
	List<Object[]> getUniqueQuestionType();
	
	
	@Query(value = "select * from question q where q.question_id=:questionId",nativeQuery=true)
	List<Question> getQuestionById(int questionId);
}
