package com.kahseng.planner.services;

import org.mapstruct.Mapper;

import com.kahseng.planner.dtos.GoalDto;
import com.kahseng.planner.models.Goal;

@Mapper(componentModel = "spring")
public interface GoalMapper {
    
    GoalDto toGoalDto(Goal goal);

}
