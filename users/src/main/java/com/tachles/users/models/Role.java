package com.tachles.users.models;
import lombok.*;
import javax.persistence.*;

@Entity
@Table
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor


public class Role extends BaseModel{
private String name;
private int value;
}
