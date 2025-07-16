package com.kahseng.planner.services;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kahseng.planner.models.Goal;
import com.kahseng.planner.repositories.GoalRepository;

@Service
public class GoalService {

    @Autowired
    private GoalRepository goalRepository;

    public List<Goal> getAllGoals() {
        return goalRepository.findAll();
    }

    public void createGoal(String title) {
        Goal goal = new Goal();
        LocalDateTime createdDateTime = LocalDateTime.now();
        
        goal.setTitle(title);
        goal.setCreatedDateTime(createdDateTime);
        goalRepository.save(goal);
    }

    public void deleteGoal(Long id) {
        goalRepository.deleteById(id);
    }

    public void replaceGoalTitle(Long id, String newTitle) {
        Goal goal = goalRepository.findById(id)
            .orElseThrow(() -> new IllegalArgumentException("Invalid Goal Id"));
        
        goal.setTitle(newTitle);
        goalRepository.save(goal);
    }
}
