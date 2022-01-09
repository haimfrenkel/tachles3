package com.tachles.users.models;

import lombok.*;

import javax.persistence.Entity;
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
}
