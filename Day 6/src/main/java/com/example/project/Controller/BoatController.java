package com.example.project.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.project.Repository.BoatRepo;
import com.example.project.Model.Boat;

import io.swagger.v3.oas.annotations.parameters.RequestBody;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.AllArgsConstructor;

import static com.example.project.Util.MyConstant.AUTH;

@RestController
@RequestMapping(AUTH)
@PreAuthorize("hasanyRole('ADMIN')")
@Tag(name="BOAT_ADMIN")
@AllArgsConstructor
public class BoatController {
    
    @Autowired
    private final BoatRepo s;

    @GetMapping("/dasboard")
    List<Boat> getBoats(){
        return s.findAll();
    }
    @DeleteMapping("/boat/{boatid}")
    Optional<Boat> deleteBoat(@PathVariable("boatid") long id){
        Optional<Boat> temp = s.findById(id);
        s.deleteById(id);
        return temp;
    }
    @PostMapping("/boat")
    String addBoat(@RequestBody Boat a){
        s.save(a);
        return "Boat Added";
    }
    @PutMapping("/boat/{boatid}")
    String updateBoatData(@PathVariable long id,@RequestBody Boat update){
        s.findById(id);
        s.save(update);
        return "Updated the boat "+id;
    }




}
