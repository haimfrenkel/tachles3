package com.tachles.users.controllers;


import com.tachles.users.ResponseMessage;
import com.tachles.users.models.UserM;
import com.tachles.users.service.UploadService;
import com.tachles.users.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("users")

public class UserController {
    @Autowired
    UserService userService;
    @Autowired
    UploadService uploadService;

    @PostMapping()
    public UserM createOne(@RequestBody UserM user) {
        return userService.create(user);
    }

    @PostMapping("uploadFile")
    public ResponseEntity<ResponseMessage> uploadFile(@RequestParam("file") MultipartFile file) {
        String message = "";
        if (uploadService.hasCSVFormat(file)) {
            System.out.println("file: " + file.getContentType());

            try {
                userService.saveMany(file);
                message = "Uploaded the file successfully: " + file.getOriginalFilename();
                return ResponseEntity.status(HttpStatus.OK).body(new ResponseMessage(message));
            } catch (Exception e) {
                message = "Could not upload the file: " + file.getOriginalFilename() + "!";
                return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(new ResponseMessage(message));
            }
        }
        message = "Please upload a csv file!";
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ResponseMessage(message));
    }

    @GetMapping("/{id}")
    public ResponseEntity<UserM> getOne(@PathVariable(value = "id") long id) {
        return new ResponseEntity<UserM>(userService.getOneByID(id), HttpStatus.OK);
    }

    @GetMapping()
    public ArrayList<UserM> getAllUsers() {
        return userService.getAll();
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable(value = "id") Long id) {
        System.out.println("delete User " + id);
        return userService.deleteUser(id);
    }
}


