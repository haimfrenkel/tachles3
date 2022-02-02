package com.tachles.users.service;

import com.tachles.users.models.User;
import com.tachles.users.repositorys.UserRepository;
import org.apache.poi.ss.usermodel.*;
import org.apache.poi.ss.usermodel.DataFormatter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    @Autowired
    UserRepository userRepository;
    @Autowired
    UploadService uploadService;
    User user;

    public User create(User user) {
        return userRepository.save(user);
    }

    public User getOneByID(long id) {
        System.out.println("id:" + id);
        return userRepository.findById(id).orElseThrow();
    }

    public void saveMany(MultipartFile file) {
        try {
            List<User> users = uploadService.csvToUsers(file.getInputStream());
            userRepository.saveAll(users);
        } catch (IOException e) {
            throw new RuntimeException("fail to store csv data: " + e.getMessage());
        }
    }


    public ArrayList<User> getAll() {
        System.out.println("user");
        return (ArrayList<User>) userRepository.findAll();
    }

    public ResponseEntity<?> deleteUser(long id) {
        System.out.println("delete User " + id);
        User user = getOneByID(id);
        userRepository.delete(user);
        return ResponseEntity.ok().build();

    }
}
