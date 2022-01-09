package com.tachles.users.models;


import lombok.*;
import javax.persistence.*;
import java.sql.Date;
import java.util.List;

@Entity
@Table
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class PersonalInformation extends BaseModel {
    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private Name name;
    private String fatherName;
    private String grandfatherName;
    private String greatGrandfatherName;
    private Date DOB;
    private String email;
    private String maritalStatus;
    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Phone> phones;
    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Job> jobs;


}
