package com.kahseng.planner.services;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import com.kahseng.planner.dtos.RegisterRequest;
import com.kahseng.planner.dtos.UserDto;
import com.kahseng.planner.models.User;

@Mapper(componentModel = "spring")
public interface UserMapper {

    UserDto toUserDto(User user);

    @Mapping(target = "password", ignore = true)
    User registerRequestToUser(RegisterRequest request);

}
