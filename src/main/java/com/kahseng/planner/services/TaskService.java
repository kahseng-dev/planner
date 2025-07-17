package com.kahseng.planner.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.kahseng.planner.models.Goal;
import com.kahseng.planner.models.Task;
import com.kahseng.planner.repositories.GoalRepository;
import com.kahseng.planner.repositories.TaskRepository;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class TaskService {

    private TaskRepository taskRepository;
    private GoalRepository goalRepository;

    public List<Task> getTasksByGoalId(Long id) {
        return taskRepository.findByGoalId(id);
    }

    public void createTask(Long goalId, String text) {
        Task task = new Task();

        Goal goal = goalRepository.findById(goalId)
                .orElseThrow(() -> new IllegalArgumentException("Invalid Goal Id"));
        
        task.setText(text);
        task.setCompleted(false);
        task.setGoal(goal);

        taskRepository.save(task);
    }

    public void deleteTask(Long id) {
        taskRepository.deleteById(id);
    }

    public void toggleTask(Long id) {
        Task task = taskRepository.findById(id)
            .orElseThrow(() -> new IllegalArgumentException("Invalid Task Id"));
        
        task.setCompleted(!task.isCompleted());
        taskRepository.save(task);
    }
}
