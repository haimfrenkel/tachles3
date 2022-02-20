package com.tachles.users.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.*;
import org.springframework.security.crypto.password.PasswordEncoder;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.*;

@Entity
@Table
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class User extends BaseModel {
    private String userName;
    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private PersonalInformation men;
    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private PersonalInformation women;
    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private Role role;
    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private Address address;
    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private BankAccount bankAccount;
    private LocalDate dateOfMarriage;
    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY, mappedBy = "user")
    @JsonManagedReference
    private List<Child> children;
    private String shtibel;
    private String password;


}




