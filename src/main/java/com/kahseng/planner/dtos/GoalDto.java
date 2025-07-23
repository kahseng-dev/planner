package com.kahseng.planner.dtos;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import lombok.Data;

@Data
public class GoalDto {

    private Long id;
    
    private String title;
    
    private LocalDateTime date;

    private List<TaskDto> tasks = new ArrayList<>();

}
