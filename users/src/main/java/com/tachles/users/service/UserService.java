package com.tachles.users.service;

import com.tachles.users.models.UserM;
import com.tachles.users.repositorys.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;

import java.util.List;

@Service
public class UserService {
    @Autowired
    UserRepository userRepository;
    @Autowired
    UploadService uploadService;
    UserM user;

    public UserM create(UserM user) {
        return userRepository.save(user);
    }

    public UserM getOneByID(long id) {
        System.out.println("id:" + id);
        return userRepository.findById(id).orElseThrow();
    }


    public void saveMany(MultipartFile file) {
        try {
            List<UserM> users = uploadService.csvToUsers(file.getInputStream());
            userRepository.saveAll(users);
        } catch (IOException e) {
            throw new RuntimeException("fail to store csv data: " + e.getMessage());
        }
    }


    public ArrayList<UserM> getAll() {
        System.out.println("user");
        return (ArrayList<UserM>) userRepository.findAll();
    }

    public ResponseEntity<?> deleteUser(long id) {
        System.out.println("delete User " + id);
        UserM user = getOneByID(id);
        userRepository.delete(user);
        return ResponseEntity.ok().build();

    }
}
