package com.project.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.model.Task;

public interface TaskRepository extends JpaRepository<Task, Long>{
	
	public List<Task> findByAssignedUserId(Long userId);

}
