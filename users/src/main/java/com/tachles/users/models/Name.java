package com.tachles.users.models;


import lombok.*;
import javax.persistence.*;

@Entity
@Table
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class Name extends BaseModel{

    private String startName;
    private String firstName;
    private String lastName;
    private String endName;

}
