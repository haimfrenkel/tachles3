package com.tachles.users.models;


import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.*;
import javax.persistence.*;

@Entity
@Table
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Job extends BaseModel {
    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private Address address;
    private String companyName;
    private String job;
    @ManyToOne
    @JsonBackReference
    private PersonalInformation jobs;


}
