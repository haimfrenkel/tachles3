package com.tachles.users.controllers;


import com.tachles.users.models.User;
import com.tachles.users.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")

public class UserController {
    @Autowired
    UserService userService;

    @PostMapping("")
    public User createOne(@RequestBody User user) {
        return userService.create(user);
    }

    @GetMapping("{id}")
    public User getOne(@PathVariable(value = "id") long id){
        return userService.getOneByID(id);
    }

    @GetMapping("")
    public List<User> getAllUsers(){
        return userService.getAll();
    }
}
