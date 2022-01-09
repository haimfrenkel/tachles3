package com.tachles.users.service;

import com.tachles.users.models.User;
import com.tachles.users.repositorys.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    @Autowired
    UserRepository userRepository;

    public User create(User user) {
        return userRepository.save(user);
    }

    public User getOneByID(long id) {
        return userRepository.getById(id);
    }

    public List<User> getAll(){
        return userRepository.findAll();
    }
}
