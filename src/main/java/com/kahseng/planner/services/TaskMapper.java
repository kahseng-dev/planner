package com.kahseng.planner.services;

import org.mapstruct.Mapper;

import com.kahseng.planner.dtos.TaskDto;
import com.kahseng.planner.models.Task;

@Mapper(componentModel = "spring")
public interface TaskMapper {

    TaskDto toTaskDto(Task task); 

}
