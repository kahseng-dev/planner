package com.kahseng.planner.services;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.stereotype.Service;

import com.kahseng.planner.dtos.GoalDto;
import com.kahseng.planner.models.Goal;
import com.kahseng.planner.models.User;
import com.kahseng.planner.repositories.GoalRepository;
import com.kahseng.planner.repositories.UserRepository;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class GoalService {

    private final GoalRepository goalRepository;

    private final UserRepository userRepository;

    private final GoalMapper goalMapper;

    public List<GoalDto> getGoalsByUserId(String userId) {
        List<Goal> goals = goalRepository.findByUserId(userId);

        return goals.stream().map(goalMapper::toGoalDto).toList();
    }

    public GoalDto createGoal(String userId, String title) {

        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));

        Goal goal = new Goal();
        LocalDateTime date = LocalDateTime.now();
        
        goal.setTitle(title);
        goal.setDate(date);
        goal.setUser(user);

        goalRepository.save(goal);

        return goalMapper.toGoalDto(goal);
    }

    public void deleteGoal(Long id, String userId) {
        goalRepository.deleteByIdAndUserId(id, userId);
    }

    public GoalDto replaceGoalTitle(Long id, String newTitle) {

        Goal goal = goalRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Goal not found"));
        
        goal.setTitle(newTitle);

        goalRepository.save(goal);

        return goalMapper.toGoalDto(goal);
    }
    
}
