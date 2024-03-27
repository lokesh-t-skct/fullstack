package com.example.project.Controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation. RestController;

import com.example.project.Model.Booking;
import com.example.project.Repository.BookingRepo;

import io.swagger.v3.oas.annotations.parameters.RequestBody;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

import static com.example.project.Util.MyConstant.USER;

@RestController
@RequestMapping(USER)
@PreAuthorize("hasAnyRole('USER','ADMIN')")
@Tag(name="BOOKING")
@RequiredArgsConstructor
public class BookingController {

    @Autowired
    private final BookingRepo book;

    @GetMapping("/AllBooking")
    List<Booking> viewBookings(){
        return book.findAll();
    }

    @PutMapping("/Booking/{bookingid}")
    long EditBooking(@PathVariable("bookingid") long id, @RequestBody Booking b){
        book.findById(id);
        Booking s = book.save(b);
        return s.getBookingId();
    }

    @PostMapping("/Booking")
    Booking addBooking(@RequestBody Booking a){
        return book.save(a);
    }

    @DeleteMapping("/booking/{bookingid}")
    long deleteBooking(@PathVariable("bookingid") long id){
        book.deleteById(id);
        return id;
    }


}
