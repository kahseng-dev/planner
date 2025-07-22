package com.kahseng.planner.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.kahseng.planner.models.Goal;
import com.kahseng.planner.services.GoalService;

@RestController
@RequestMapping("/api/goals")
public class GoalController {

    @Autowired
    private GoalService goalService;

    @GetMapping("/user")
    public ResponseEntity<List<Goal>> getGoalsByUserId(@RequestParam String id) {
        return ResponseEntity.ok(goalService.getGoalsByUserId(id));
    }

    @PostMapping("/create")
    public void createGoal(@RequestBody String title, @RequestBody String userId) {
        goalService.createGoal(title, userId);
    }

    @DeleteMapping("/delete")
    public void deleteGoal(@RequestBody Long id, @RequestBody String userId) {
        goalService.deleteGoal(id, userId);
    }

    @PutMapping("/{id}/replace/{title}")
    public void replaceGoalTitle(@PathVariable Long id, @PathVariable String title) {
        goalService.replaceGoalTitle(id, title);
    }
}
