package com.project.service;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestHeader;

import com.project.model.TaskDto;

@FeignClient(name = "SUBMISSION-SERVICE", url = "http://localhost:5002/")
public interface TaskService {
	
	@GetMapping("/api/task/{id}")
	public TaskDto getTaskById(
			@PathVariable Long id,
			@RequestHeader("Authorization") String jwt) throws Exception;
	
	
	@PutMapping("/api/task/{id}/complete")
	public TaskDto completeTask(
			@PathVariable Long id) throws Exception;

}
