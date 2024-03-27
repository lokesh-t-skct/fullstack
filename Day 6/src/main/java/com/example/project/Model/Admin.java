package com.example.project.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

    
@Data
@Builder
@NoArgsConstructor
@Entity 
@Table(name ="UserTable")
@AllArgsConstructor
public class Admin {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private long userId;
    private String email;
    private String password;
    private String  username;
    private String mobileNumber;
    private String userRole;
    
}
