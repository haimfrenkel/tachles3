package com.tachles.users.controllers;


import com.tachles.users.models.PersonalInformation;
import com.tachles.users.models.User;
import com.tachles.users.repositorys.UserRepository;
import com.tachles.users.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.annotation.ResponseStatusExceptionResolver;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*")
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
    public ResponseEntity<User> getOne(@PathVariable(value = "id")long id){
       return new ResponseEntity<User>(userService.getOneByID(id), HttpStatus.OK);
    }
    @GetMapping()
    public ArrayList<User> getAllUsers(){
        return userService.getAll();
    }
}


