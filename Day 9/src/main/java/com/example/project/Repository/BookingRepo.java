package com.example.project.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.project.Model.Booking;
public interface BookingRepo extends JpaRepository<Booking,Long>{
    
}
