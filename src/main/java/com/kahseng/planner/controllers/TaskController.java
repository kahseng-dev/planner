package com.kahseng.planner.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.kahseng.planner.dtos.TaskDto;
import com.kahseng.planner.dtos.TaskRequest;
import com.kahseng.planner.services.TaskService;

@RestController
@RequestMapping("/api/tasks")
public class TaskController {

    @Autowired
    private TaskService taskService;

    @GetMapping("/goal")
    public ResponseEntity<List<TaskDto>> getTasksByGoal(@RequestParam Long id) {
        return ResponseEntity.ok(taskService.getTasksByGoalId(id));
    }

    @PostMapping("/create")
    public ResponseEntity<TaskDto> createTask(@RequestBody TaskRequest request) {
        return ResponseEntity.ok(taskService.createTask(request.getGoalId()));
    }

    @PutMapping("/toggle")
    public ResponseEntity<TaskDto> toggleTask(@RequestBody TaskRequest request) {
        return ResponseEntity.ok(taskService.toggleTask(request.getId()));
    }

    @PutMapping("/replace")
    public ResponseEntity<TaskDto> replaceTaskText(@RequestBody TaskRequest request) {
        return ResponseEntity.ok(taskService.replaceTaskText(request.getId(), request.getText()));
    }

    @DeleteMapping("/delete")
    public void deleteTask(@RequestBody TaskRequest request) {
        taskService.deleteTask(request.getId());
    }

}
