package com.tachles.users.controllers;


import com.tachles.users.models.PersonalInformation;
import com.tachles.users.models.User;
import com.tachles.users.repositorys.UserRepository;
import com.tachles.users.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.annotation.ResponseStatusExceptionResolver;

import lombok.extern.java.Log;

import java.io.IOException;
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

    @PostMapping("uploadFile")
        public String submit(@RequestParam("file") MultipartFile file) {
        System.out.println("file" + file.getName());
        System.out.println("file" + file.getContentType());
        System.out.println("file" + file.getSize());
        System.out.println("file" + file.getOriginalFilename());
        System.out.println();
        try {
            file.getInputStream();
        } catch (IOException e) {
            e.printStackTrace();
        }

        return "fileUploadView";
        }



    @GetMapping("/{id}")
    public ResponseEntity<User> getOne(@PathVariable(value = "id")long id){
       return new ResponseEntity<User>(userService.getOneByID(id), HttpStatus.OK);
    }
    @GetMapping()
    public ArrayList<User> getAllUsers(){
        return userService.getAll();
    }
    @DeleteMapping("/{id}")
    public  ResponseEntity<?> deleteUser(@PathVariable(value = "id") Long id)  {
        System.out.println("delete User "+id);

        return userService.deleteUser(id);

    }
}


