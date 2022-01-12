package com.tachles.users.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.*;

import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Phone extends BaseModel {
    private long number;
    private boolean whatsapp;
    @ManyToOne
    @JsonBackReference
    private PersonalInformation phones;
}
