package com.kahseng.planner.services;

import java.nio.CharBuffer;
import java.util.Optional;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.kahseng.planner.dtos.LoginRequest;
import com.kahseng.planner.dtos.RegisterRequest;
import com.kahseng.planner.dtos.UserDto;
import com.kahseng.planner.models.User;
import com.kahseng.planner.repositories.UserRepository;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class UserService {

    private final UserRepository userRepository;

    private final PasswordEncoder passwordEncoder;

    private final UserMapper userMapper;

    public UserDto register(RegisterRequest request) {

        Optional<User> optionalUser = userRepository.findByEmail(request.getEmail());

        if (optionalUser.isPresent()) {
            throw new RuntimeException("Account already exists");
        }

        User user = userMapper.registerRequestToUser(request); 

        user.setPassword(passwordEncoder.encode(CharBuffer.wrap(request.getPassword())));

        User savedUser = userRepository.save(user);

        return userMapper.toUserDto(savedUser);
    }

    public UserDto login(LoginRequest request) {
        User user = userRepository.findByEmail(request.getEmail())
            .orElseThrow(() -> new RuntimeException("User not found"));
        
        boolean passwordMatches = passwordEncoder.matches(CharBuffer.wrap(request.getPassword()), user.getPassword());

        if (passwordMatches) {
            return userMapper.toUserDto(user);
        }

        throw new RuntimeException("Invalid password");
    }

    public UserDto findByEmail(String email) {
        User user = userRepository.findByEmail(email)
            .orElseThrow(() -> new RuntimeException("User not found"));

        return userMapper.toUserDto(user);
    }
}
