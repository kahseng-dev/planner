package com.kahseng.planner.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.kahseng.planner.models.Goal;
import com.kahseng.planner.services.GoalService;

@Controller
@RequestMapping("/goals")
public class GoalController {

    @Autowired
    private GoalService goalService;

    @GetMapping
    public String getGoals(Model model) {
        List<Goal> goals = goalService.getAllGoals();
        model.addAttribute("goals", goals);
        return "board";
    }

    @PostMapping
    public String createGoal(@RequestParam String title) {
        goalService.createGoal(title);
        return "redirect:/board";
    }

    @GetMapping("/{id}/delete")
    public String deleteGoal(@PathVariable Long id) {
        goalService.deleteGoal(id);
        return "redirect:/board";
    }

    @GetMapping("/{id}/replace/{title}")
    public String replaceGoalTitle(@PathVariable Long id, @PathVariable String title) {
        goalService.replaceGoalTitle(id, title);
        return "redirect:/board";
    }
}
