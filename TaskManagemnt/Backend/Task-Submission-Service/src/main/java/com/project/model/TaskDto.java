package com.project.model;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
public class TaskDto {
	
	private Long id;
	
	private String title;
	
	private String description;
	
	private String image;
	
	private Long assignedUserId;
	
	private List<String> tag = new ArrayList<>();
	
	private TaskStatus status;
	
	private LocalDateTime deadline;
	
	private LocalDateTime createdAt;

}
