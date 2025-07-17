package com.kahseng.planner.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.kahseng.planner.models.Goal;

@Repository
public interface GoalRepository extends JpaRepository<Goal, Long> {

    List<Goal> findByUserId(String userId);

    Goal findByIdAndUserId(Long id, String userId);

    void deleteByIdAndUserId(Long id, String userId);

}
