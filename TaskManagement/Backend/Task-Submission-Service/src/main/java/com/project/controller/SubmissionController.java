package com.project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.project.model.Submission;
import com.project.model.UserDto;
import com.project.service.SubmissionService;
import com.project.service.TaskService;
import com.project.service.UserService;

@RestController
@RequestMapping("/api/submission")
public class SubmissionController {
	
	@Autowired
	private SubmissionService submissionService;
	
	@Autowired
	private UserService userService;
	
	@Autowired
	private TaskService taskService;
	
	
	@PostMapping()
	public ResponseEntity<Submission> submitTask(
			@RequestParam Long task_id,
			@RequestParam String github_link,
			@RequestHeader ("Authorization") String jwt
	) throws Exception {
		UserDto user = userService.getUserProfile(jwt);
		System.out.println("From submission Controller : " + task_id);
		Submission submission = submissionService.submitTask(task_id, github_link, user.getId(), jwt);
		return new ResponseEntity<>(submission, HttpStatus.CREATED);
	}
	
	
	
	@GetMapping("/{id}")
	public ResponseEntity<Submission> getSubmissionById(
			@RequestParam Long id,
			@RequestHeader ("Authorization") String jwt
	) throws Exception {
		UserDto user = userService.getUserProfile(jwt);
		Submission submission = submissionService.getTaskSubmissionById(id);
		return new ResponseEntity<>(submission, HttpStatus.CREATED);
	}
	
	
	
	@GetMapping("/task/{taskId}")
	public ResponseEntity<List<Submission>> getAllSubmissions(
			@PathVariable Long taskId,
			@RequestHeader ("Authorization") String jwt
	) throws Exception {
		UserDto user = userService.getUserProfile(jwt);
		List<Submission> submissions = submissionService.getTaskSubmissionByTaskId(taskId);
		return new ResponseEntity<>(submissions, HttpStatus.CREATED);
	}
	
	
	
	@PutMapping("/{id}")
	public ResponseEntity<Submission> acceptOrDeclineSubmission(
			@PathVariable Long id,
			@RequestParam("status") String status,
			@RequestHeader ("Authorization") String jwt
	) throws Exception {
		UserDto user = userService.getUserProfile(jwt);
		Submission submission = submissionService.acceptDeclineSubmission(id, status);
		return new ResponseEntity<>(submission, HttpStatus.CREATED);
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

}
