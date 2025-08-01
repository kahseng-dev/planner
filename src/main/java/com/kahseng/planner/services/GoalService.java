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

    private final TaskService taskService;

    private final GoalMapper goalMapper;

    public List<GoalDto> getGoalsByUserId(String userId) {
        List<Goal> goals = goalRepository.findByUserId(userId);

        return goals.stream().map(goalMapper::toGoalDto).toList();
    }

    public GoalDto createGoal(String userId, LocalDateTime date) {

        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));

        Goal goal = new Goal();
        
        goal.setTitle("");
        goal.setDate(date);
        goal.setUser(user);

        goalRepository.save(goal);

        return goalMapper.toGoalDto(goal);
    }

    public GoalDto replaceGoalTitle(Long id, String newTitle) {

        Goal goal = goalRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Goal not found"));
        
        goal.setTitle(newTitle);

        goalRepository.save(goal);

        return goalMapper.toGoalDto(goal);
    }
    
    public void deleteGoal(Long id) {
        Goal goal = goalRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Goal not found"));
        
        taskService.deleteTasksByGoalId(id);

        goalRepository.delete(goal);
    }

}
