package com.project.model;

import lombok.Data;

@Data

public class UserDto {
	
	private Long id;
	
	private String password;
	
	private String email;
	
	private String role;
	
	private String fullName;

}
