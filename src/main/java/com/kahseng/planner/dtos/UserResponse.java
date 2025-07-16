package com.kahseng.planner.dtos;

import java.util.Set;

import com.kahseng.planner.models.Goal;

import lombok.Data;

@Data
public class UserResponse {
    private String id;
    private String name;
    private String email;
    private String password;
    private Set<Goal> goals;
}
