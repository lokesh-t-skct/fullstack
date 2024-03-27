package com.example.project.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "Passenger")
public class Passenger {
    @Id
    private long passengerId;
    private String firstName;
    private String lastName;
    private Integer age;
    private String gender;
}
