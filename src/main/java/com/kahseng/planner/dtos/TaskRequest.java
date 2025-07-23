package com.kahseng.planner.dtos;

import lombok.Data;

@Data
public class TaskRequest {

    private Long id;

    private Long goalId;
    
    private String text;

    private boolean isCompleted;

}
