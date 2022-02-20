package com.tachles.users.models;


import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.*;
import org.apache.tomcat.jni.Local;

import javax.persistence.*;
import java.sql.Date;
import java.time.LocalDate;
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
    private Long taz;
    private String fatherName;
    private String grandfatherName;
    private String greatGrandfatherName;
    private LocalDate DOB;
    private String email;
    private String maritalStatus;
    @OneToMany(cascade = CascadeType.ALL,  mappedBy = "personalInformation_phone")
    @JsonManagedReference
    private List<Phone> phones;
    @OneToMany(cascade = CascadeType.ALL,  mappedBy = "personalInformation_job")
    @JsonManagedReference
    private List<Job> jobs;
}
