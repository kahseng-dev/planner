package com.kahseng.planner.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.kahseng.planner.models.Task;

public interface TaskRepository extends JpaRepository<Task, Long> {

}
