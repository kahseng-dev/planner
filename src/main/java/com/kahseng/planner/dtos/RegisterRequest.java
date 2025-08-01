package com.kahseng.planner.dtos;

import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
public class RegisterRequest {
    
    @NotEmpty
    private String name;

    @NotEmpty
    private String email;

    @NotEmpty
    private char[] password;
}
