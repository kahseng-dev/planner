package com.kahseng.planner.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.kahseng.planner.models.Goal;

@Repository
public interface GoalRepository extends JpaRepository<Goal, Long> {
    
}
