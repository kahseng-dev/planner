package com.kahseng.planner.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.kahseng.planner.models.Task;
import com.kahseng.planner.services.TaskService;

@RestController
@RequestMapping("/api/tasks")
public class TaskController {

    @Autowired
    private TaskService taskService;

    @GetMapping("/goal/{id}")
    public List<Task> getTasksByGoal(@PathVariable Long id) {
        return taskService.getTasksByGoalId(id);
    }

    @PostMapping("/create")
    public void createTask(@RequestParam Long goalId, @RequestParam String text) {
        taskService.createTask(goalId, text);
    }

    @DeleteMapping("/delete")
    public void deleteTask(@RequestParam Long id) {
        taskService.deleteTask(id);
    }

    @PutMapping("/toggle/{id}")
    public void toggleTask(@PathVariable Long id) {
        taskService.toggleTask(id);
    }
}
