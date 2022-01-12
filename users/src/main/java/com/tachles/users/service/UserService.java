package com.tachles.users.service;

import com.tachles.users.models.PersonalInformation;
import com.tachles.users.models.User;
import com.tachles.users.repositorys.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    @Autowired
    UserRepository userRepository;
    User user;

    public User create(User user) {
        return userRepository.save(user);
    }

    public User getOneByID(long id) {
        System.out.println(id);
        return userRepository.findById(id).get();
    }

    public ArrayList<User> getAll(){
        System.out.println("user");
        return (ArrayList<User>) userRepository.findAll();
    }
}
