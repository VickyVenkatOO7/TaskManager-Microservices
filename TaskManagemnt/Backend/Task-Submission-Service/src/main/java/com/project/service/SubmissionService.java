package com.project.service;

import java.util.List;

import com.project.model.Submission;

public interface SubmissionService {
	
	Submission submitTask(Long taskId, String githubLink, Long userId, String jwt) throws Exception;
	
	Submission getTaskSubmissionById(Long submissionId) throws Exception;
	
	List<Submission> getAllTaskSubmissions();
	
	List<Submission> getTaskSubmissionByTaskId(Long taskId);
	
	Submission acceptDeclineSubmission(Long id, String status) throws Exception;

}
