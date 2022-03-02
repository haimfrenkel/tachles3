package com.tachles.users.controllers;


import com.tachles.users.ResponseMessage;
import com.tachles.users.models.User;
import com.tachles.users.models.UserCSVUploadRes;
import com.tachles.users.service.UploadService;
import com.tachles.users.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;

@CrossOrigin()
@RestController
@RequestMapping("users")

public class UserController {
    @Autowired
    UserService userService;
    @Autowired
    UploadService uploadService;

    @PostMapping()
    public User createOne(@RequestBody User user) {
        return userService.create(user);
    }

    @PostMapping("uploadFile")
    public ResponseEntity<UserCSVUploadRes> uploadFile(@RequestParam("file") MultipartFile file) {
        if (UploadService.hasCSVFormat(file)) {
            UserCSVUploadRes response = userService.uploadUserFromCSV(file);
            if (response.isSuccess())
                return ResponseEntity.status(HttpStatus.OK).body(response);
            else {
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
            }
        }
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
    }


    @GetMapping("/{id}")
    public ResponseEntity<User> getOne(@PathVariable(value = "id") long id) {
        return new ResponseEntity<User>(userService.getOneByID(id), HttpStatus.OK);
    }

    @GetMapping()
    public ArrayList<User> getAllUsers() {
        return userService.getAll();
    }

    @PutMapping("/{id}")
    public User updateUser(@PathVariable(value = "id") Long id, @RequestBody User user) {
        return userService.updateOne(id, user);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable(value = "id") Long id) {
        System.out.println("delete User " + id);
        return userService.deleteUser(id);
    }
}


