package com.example.Relation.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.Relation.entity.BookingDetails;
import com.example.Relation.entity.TrainHeader;
import com.example.Relation.entity.Trains;
import com.example.Relation.service.TrainService;
@RestController
@RequestMapping("/trains")
@CrossOrigin(origins="http://localhost:4200/")
public class Controller 
{
   @Autowired
   TrainService trainService;
   
   @GetMapping("/getAll")
   public List<Trains> get()
   {
	   return trainService.getAll();
   }
   
   
   @GetMapping("/get/{trainNo}")
   public Optional<Trains> getBY(@PathVariable("trainNo") int trainNo)
   {
	   return trainService.getById(trainNo);
   }
   
   
   @PostMapping("/post")
   public Trains post(@RequestBody Trains trains)
   {
	   return trainService.create(trains);
   }
   
   
 
   
   @PutMapping("/update/{trainNo}")
   public Trains updateById(@PathVariable("trainNo") int trainNo, @RequestBody Trains trains) 
   {
       return trainService.update(trainNo, trains);
   }
   
   
   
//   @PostMapping("/cancelBooking")
//   public String cancelBooking(@RequestParam int trainNo, 
//                               @RequestParam int id, 
//                               @RequestParam boolean replaceBooking, 
//                               @RequestBody BookingDetails newBooking) 
//   {
//       return trainService.cancelBookingAndRefund(trainNo, id, replaceBooking, newBooking);
//   }
//   
//   
//   
   @DeleteMapping("/del/{trainNo}")
   public void delete(@PathVariable("trainNo") int trainNo)
   {
	   trainService.del(trainNo);
   }
   
}
