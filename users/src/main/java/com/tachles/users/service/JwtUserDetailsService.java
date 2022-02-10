package com.tachles.users.service;

import java.util.ArrayList;

import com.tachles.users.models.User;
import com.tachles.users.repositorys.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;


@Service
public class JwtUserDetailsService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder bcryptEncoder;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        User user = userRepository.findByUserName(username);
        if (user == null) {
            throw new UsernameNotFoundException("User not found with username: " + username);
        }
//  return new org.springframework.security.core.userdetails.User("haim frenkell", bcryptEncoder.encode("123456"),
        return new org.springframework.security.core.userdetails.User(user.getUserName(), user.getPassword(),
                new ArrayList<>());
    }


}