package com.kahseng.planner.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
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

    @GetMapping
    public List<Goal> getGoalsByUserId(@RequestParam String userId) {
        return goalService.getGoalsByUserId(userId);
    }

    @PostMapping("/create")
    public void createGoal(@RequestParam String title, @RequestParam String userId) {
        goalService.createGoal(title, userId);
    }

    @PostMapping("/delete")
    public void deleteGoal(@RequestParam Long id, @RequestParam String userId) {
        goalService.deleteGoal(id, userId);
    }

    @PutMapping("/{id}/replace/{title}")
    public void replaceGoalTitle(@RequestParam Long id, @RequestParam String title) {
        goalService.replaceGoalTitle(id, title);
    }
}
