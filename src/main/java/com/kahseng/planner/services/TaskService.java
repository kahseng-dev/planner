package com.kahseng.planner.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.kahseng.planner.dtos.TaskDto;
import com.kahseng.planner.models.Goal;
import com.kahseng.planner.models.Task;
import com.kahseng.planner.repositories.GoalRepository;
import com.kahseng.planner.repositories.TaskRepository;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class TaskService {

    private final TaskRepository taskRepository;

    private final GoalRepository goalRepository;

    private final TaskMapper taskMapper;

    public List<TaskDto> getTasksByGoalId(Long id) {
        List<Task> tasks = taskRepository.findByGoalId(id);

        return tasks.stream().map(taskMapper::toTaskDto).toList();
    }

    public TaskDto createTask(Long goalId) {

        Goal goal = goalRepository.findById(goalId)
                .orElseThrow(() -> new IllegalArgumentException("Invalid Goal Id"));

        Task task = new Task();
        
        task.setText("");
        task.setCompleted(false);
        task.setGoal(goal);

        taskRepository.save(task);
        
        return taskMapper.toTaskDto(task);
    }

    public TaskDto toggleTask(Long id) {

        Task task = taskRepository.findById(id)
            .orElseThrow(() -> new IllegalArgumentException("Invalid Task Id"));
        
        task.setCompleted(!task.isCompleted());
        
        taskRepository.save(task);

        return taskMapper.toTaskDto(task);

    }

    public TaskDto replaceTaskText(Long id, String text) {

        Task task = taskRepository.findById(id)
            .orElseThrow(() -> new IllegalArgumentException("Invalid Task Id"));
        
        task.setText(text);
        
        taskRepository.save(task);

        return taskMapper.toTaskDto(task);
    }

    public void deleteTask(Long id) {
        Task task = taskRepository.findById(id)
            .orElseThrow(() -> new IllegalArgumentException("Invalid Task Id"));

        taskRepository.delete(task);
    }

    public void deleteTasksByGoalId(Long goalId) {
        List<Task> tasks = taskRepository.findByGoalId(goalId);

        taskRepository.deleteAll(tasks);
    }

}
