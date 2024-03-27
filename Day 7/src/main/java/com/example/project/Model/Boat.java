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
@Table(name = "Boat")
public class Boat {
    @Id
    private long id;
    private String boatName;
    private String boatLocation;
    private String boatImageUrl;
    private String boatCategory;
    private String boatAvailable;
    private long price;
    private int capacity;
}
