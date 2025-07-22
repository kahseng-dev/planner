package com.kahseng.planner.dtos;

import lombok.Data;

@Data
public class GoalRequest {

    private Long id;

    private String userId;
    
    private String title;

}
