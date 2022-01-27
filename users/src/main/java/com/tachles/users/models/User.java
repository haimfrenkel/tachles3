package com.tachles.users.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.*;
import javax.persistence.*;
import java.io.Serializable;
import java.util.*;

@Entity
@Table
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class User extends BaseModel {
    public String userName;
//    private int ID;
    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private PersonalInformation men;
    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private PersonalInformation women;
    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private Role role;
    //password
    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private Address address;
    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private BankAccount bankAccount;
    private Date dateOfMarriage;
    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY, mappedBy = "user")
    @JsonManagedReference
    private List<Child> children;
    private String shtibel;
}




