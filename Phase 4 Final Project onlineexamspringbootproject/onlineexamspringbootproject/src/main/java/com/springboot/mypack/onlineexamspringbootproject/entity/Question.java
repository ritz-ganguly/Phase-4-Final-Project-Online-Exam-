package com.springboot.mypack.onlineexamspringbootproject.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity(name= "question")
@Table(name="question")
public class Question implements Serializable{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name= "question_id",unique = true)
	private int questionId;
	
	@Column(name = "question_statement")
	private String questionStatement;
	
	
	@Column(name = "option_1")
	private String option1;
	
	
	@Column(name = "option_2")
	private String option2;
	
	
	@Column(name = "option_3")
	private String option3;
	
	
	@Column(name = "option_4")
	private String option4;
	
	
	@Column(name = "answer")
	private String answer;
	
	
	@Column(name = "question_type")
	private String questionType;
	
	public Question() {
		
	}

	public int getQuestionId() {
		return questionId;
	}

	public void setQuestionId(int questionId) {
		this.questionId = questionId;
	}

	public String getQuestionStatement() {
		return questionStatement;
	}

	public void setQuestionStatement(String questionStatement) {
		this.questionStatement = questionStatement;
	}

	public String getOption1() {
		return option1;
	}

	public void setOption1(String option1) {
		this.option1 = option1;
	}

	public String getOption2() {
		return option2;
	}

	public void setOption2(String option2) {
		this.option2 = option2;
	}

	public String getOption3() {
		return option3;
	}

	public void setOption3(String option3) {
		this.option3 = option3;
	}

	public String getOption4() {
		return option4;
	}

	public void setOption4(String option4) {
		this.option4 = option4;
	}

	public String getAnswer() {
		return answer;
	}

	public void setAnswer(String answer) {
		this.answer = answer;
	}

	public String getQuestionType() {
		return questionType;
	}

	public void setQuestionType(String questionType) {
		this.questionType = questionType;
	}
	
	
	
	

}
