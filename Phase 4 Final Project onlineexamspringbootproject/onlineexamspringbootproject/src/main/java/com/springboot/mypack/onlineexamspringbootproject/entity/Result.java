package com.springboot.mypack.onlineexamspringbootproject.entity;

import java.io.Serializable;
import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity(name = "res")
@Table(name="results")
public class Result implements Serializable{

	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name= "result_id")
	private int resultId;
	
	
	@Column(name= "total_marks")
	private int totalMarks;
	
	
	@Column(name= "marks_obtained")
	private int marksObtained;
	
	
	@Column(name= "test_type")
	private String testType;
	
	@Column(name= "test_date")
	private LocalDate testDate;
	
@ManyToOne(fetch = FetchType.EAGER )
	
	@JoinColumn(name = "user_id")
	@JsonIgnoreProperties("results")
	
	private User user;
	
	public Result() {
		// TODO Auto-generated constructor stub
	}

	public Result(int totalMarks, int marksObtained, String testType, LocalDate testDate) {
		this.totalMarks = totalMarks;
		this.marksObtained = marksObtained;
		this.testType = testType;
		this.testDate = testDate;
	}

	public int getResultId() {
		return resultId;
	}

	public void setResultId(int resultId) {
		this.resultId = resultId;
	}

	public int getTotalMarks() {
		return totalMarks;
	}

	public void setTotalMarks(int totalMarks) {
		this.totalMarks = totalMarks;
	}

	public int getMarksObtained() {
		return marksObtained;
	}

	public void setMarksObtained(int marksObtained) {
		this.marksObtained = marksObtained;
	}

	public String getTestType() {
		return testType;
	}

	public void setTestType(String testType) {
		this.testType = testType;
	}

	public LocalDate getTestDate() {
		return testDate;
	}

	public void setTestDate(LocalDate testDate) {
		this.testDate = testDate;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}
	
	
	
}
