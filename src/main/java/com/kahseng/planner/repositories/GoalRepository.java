package com.kahseng.planner.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.kahseng.planner.models.Goal;

public interface GoalRepository extends JpaRepository<Goal, Long> {
    
}
