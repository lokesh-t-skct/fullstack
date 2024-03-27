package com.example.project.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.project.Model.Boat;

public interface BoatRepo extends JpaRepository<Boat,Long>{
    
}
