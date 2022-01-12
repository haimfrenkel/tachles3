package com.tachles.users.controllers;


import com.tachles.users.models.PersonalInformation;
import com.tachles.users.models.User;
import com.tachles.users.repositorys.UserRepository;
import com.tachles.users.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("users")
public class UserController {
    @Autowired
    UserService userService;

    @PostMapping()
    public User createOne(@RequestBody User user) {
        return userService.create(user);
    }

    @GetMapping("/{id}")
    public User getOne(@PathVariable(value = "id")long id){
        System.out.println("id");
        return userService.getOneByID(id);
    }

    @GetMapping()
    public ArrayList<User> getAllUsers(){
        return userService.getAll();
    }
}
