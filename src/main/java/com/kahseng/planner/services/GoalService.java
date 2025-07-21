package com.kahseng.planner.services;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.stereotype.Service;

import com.kahseng.planner.models.Goal;
import com.kahseng.planner.models.User;
import com.kahseng.planner.repositories.GoalRepository;
import com.kahseng.planner.repositories.UserRepository;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class GoalService {

    private GoalRepository goalRepository;
    private UserRepository userRepository;

    public List<Goal> getGoalsByUserId(String userId) {
        return goalRepository.findByUserId(userId);
    }

    public void createGoal(String title, String userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));

        Goal goal = new Goal();
        LocalDateTime date = LocalDateTime.now();
        
        goal.setTitle(title);
        goal.setDate(date);
        goal.setUser(user);

        goalRepository.save(goal);
    }

    public void deleteGoal(Long id, String userId) {
        goalRepository.deleteByIdAndUserId(id, userId);
    }

    public boolean replaceGoalTitle(Long id, String newTitle) {
        Goal goal = goalRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Goal not found"));
        
        goal.setTitle(newTitle);
        goalRepository.save(goal);

        return true;
    }
}
