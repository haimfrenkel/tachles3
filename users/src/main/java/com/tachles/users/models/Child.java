package com.tachles.users.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.*;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Table
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class Child extends BaseModel {
    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private Name name;
    private Date DOB;
    private String sex;
    private String maritalStatus;
    private String placeOfStudy;
    @ManyToOne
    @JsonBackReference
    private User user;
}
