package com.tachles.users.service;

import com.tachles.users.models.User;
import com.tachles.users.repositorys.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
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

    @Autowired
    private PasswordEncoder passwordEncoder;



    public User create(User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        System.out.println(user.getMen().getPhones());
        User userRes = userRepository.save(user);
        userRes.setPassword("*********");
        return userRes;
    }

    public User getOneByID(long id) {
        System.out.println("id:" + id);
        User user = userRepository.findById(id).orElseThrow();
        user.setPassword("**********");
        return user;
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
        return (ArrayList<User>) userRepository.findAll();
    }

    public ResponseEntity<?> deleteUser(long id) {
        User user = getOneByID(id);
        userRepository.delete(user);
        return ResponseEntity.ok().build();

    }
}
