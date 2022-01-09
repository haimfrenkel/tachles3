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

public class BankAccount extends BaseModel {
    private int bankNo;
    private String bankName;
    private int branchNo;
    private int accountNo;
}
