package com.kahseng.planner.dtos;

import java.time.LocalDateTime;

import lombok.Data;

@Data
public class GoalRequest {

    private Long id;

    private String userId;
    
    private String title;

    private LocalDateTime date;

}
