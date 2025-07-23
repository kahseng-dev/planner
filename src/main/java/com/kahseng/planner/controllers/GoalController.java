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

import com.kahseng.planner.dtos.GoalDto;
import com.kahseng.planner.dtos.GoalRequest;
import com.kahseng.planner.services.GoalService;

@RestController
@RequestMapping("/api/goals")
public class GoalController {

    @Autowired
    private GoalService goalService;

    @GetMapping("/user")
    public ResponseEntity<List<GoalDto>> getGoalsByUserId(@RequestParam String id) {
        return ResponseEntity.ok(goalService.getGoalsByUserId(id));
    }

    @PostMapping("/create")
    public ResponseEntity<GoalDto> createGoal(@RequestBody GoalRequest request) {
        return ResponseEntity.ok(goalService.createGoal(request.getUserId(), request.getDate()));
    }

    @PutMapping("/replace")
    public ResponseEntity<GoalDto> replaceGoalTitle(@RequestBody GoalRequest request) {
        return ResponseEntity.ok(goalService.replaceGoalTitle(request.getId(), request.getTitle()));
    }

    @DeleteMapping("/delete")
    public void deleteGoal(@RequestBody GoalRequest request) {
        goalService.deleteGoal(request.getId(), request.getUserId());
    }
}
