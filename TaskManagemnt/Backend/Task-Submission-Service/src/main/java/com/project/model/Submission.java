package com.project.model;

import java.time.LocalDateTime;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Data
public class Submission {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	private Long taskId;
	
	private String githubLink;
	
	private Long userId;
	
	private String status = "PENDING";
	
	private LocalDateTime submissionTime;

}
