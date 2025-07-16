package com.kahseng.planner.models;

import java.time.LocalDateTime;
import java.util.Set;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import lombok.Data;

@Data
@Entity
public class Goal {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String title;
    private LocalDateTime createdDateTime;

    @ManyToOne
    @JoinColumn(name="user_id", nullable = false)
    private User user;
    
    @OneToMany(mappedBy = "goal",
                cascade = CascadeType.ALL,
                fetch = FetchType.LAZY)
    private Set<Task> tasks;

}
