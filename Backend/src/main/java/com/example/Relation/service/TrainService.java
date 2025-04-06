package com.example.Relation.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Relation.entity.BookingDetails;
import com.example.Relation.entity.TrainHeader;
import com.example.Relation.entity.Trains;
import com.example.Relation.repository.DetailRepository;
import com.example.Relation.repository.HeaderRepository;

import jakarta.transaction.Transactional;

@Service
public class TrainService 
{
  @Autowired
  DetailRepository detailRepository;
  
  @Autowired
  HeaderRepository headerRepository;
  
  //getAll
  public  List<Trains> getAll()
  {
	   List<TrainHeader> headers=headerRepository.findAll();
	   List<Trains> trains=new ArrayList<>();
	   
	   for(TrainHeader header:headers)
	   {
		   List<BookingDetails> details=detailRepository.findByTrainNo(header.getTrainNo());
				   Trains train=new Trains();
		   train.setTrainHeader(header);
		   train.setBookingDetails(details);
		   trains.add(train);
	   }
	   return trains;
  }
  
  
  //GetById
  public Optional<Trains> getById(int trainNo)
  {
	  Optional<TrainHeader> header=headerRepository.findById(trainNo);
	  if(header.isPresent())
	  {
		  List<BookingDetails> details=detailRepository.findByTrainNo(trainNo);
		  Trains train=new Trains();
		  train.setTrainHeader(header.get());
		  train.setBookingDetails(details);
		  return Optional.of(train);
		  
	  }else
	  {
		  return Optional.empty();
	  }
  }
  
  
  //Create
  public Trains create(Trains trains)
  { 
	  TrainHeader header=headerRepository.save(trains.getTrainHeader());
	  if(trains.getBookingDetails()!=null)
	  {
		  for(BookingDetails details:trains.getBookingDetails())
		  {
			  details.setTrainNo(header.getTrainNo());
			  detailRepository.save(details);
		  }
	  }
	  trains.setTrainHeader(header);
	  trains.setBookingDetails(trains.getBookingDetails());
	return trains;
  }


  
  
//  @Transactional
//  public Trains create(Trains trains) 
//  {
//      // Step 1: Retrieve the TrainHeader by trainNo
//      Optional<TrainHeader> optionalTrainHeader = headerRepository.findById(trains.getTrainHeader().getTrainNo());
//      if (optionalTrainHeader.isEmpty()) {
//          throw new RuntimeException("Train not found for trainNo: " + trains.getTrainHeader().getTrainNo());
//      }
//
//      TrainHeader trainHeader = optionalTrainHeader.get();
//
//      // Step 2: Set the TrainHeader in each BookingDetail and save them
//      for (BookingDetails booking : trains.getBookingDetails())
//      {
//          booking.setTrainHeader(trainHeader); // Link the BookingDetails to the existing TrainHeader
//          detailRepository.save(booking); // Save each BookingDetail
//      }
//
//      return trains; // Return the Trains object containing TrainHeader and the saved BookingDetails
//  }
//}


//  
  //update
  // Update train and booking details
  public Trains update(int trainNo, Trains trains) 
  {
      Optional<TrainHeader> existingHeader = headerRepository.findById(trainNo);
      if (existingHeader.isPresent()) 
      {
          // Update the TrainHeader
          TrainHeader header = existingHeader.get();
          header.setTrainName(trains.getTrainHeader().getTrainName());
          header.setDate(trains.getTrainHeader().getDate());
          header.setSource(trains.getTrainHeader().getSource());
          header.setDestinaction(trains.getTrainHeader().getDestinaction());
          header.setAmount(trains.getTrainHeader().getAmount());
          headerRepository.save(header);

          // Update the BookingDetails for this train
          List<BookingDetails> updatedBookingDetails = trains.getBookingDetails();
          for (BookingDetails details : updatedBookingDetails) 
          {
              BookingDetails existingBooking = detailRepository.findById(details.getId()).orElse(null);
              if (existingBooking != null) 
              {
                  existingBooking.setName(details.getName());
                  existingBooking.setAge(details.getAge());
                  existingBooking.setGender(details.getGender());
                  existingBooking.setAdharNo(details.getAdharNo());
                  existingBooking.setPhoneNo(details.getPhoneNo());
                  existingBooking.setAmount(details.getAmount());
                  detailRepository.save(existingBooking);
              } 
             
          }

          // Return the updated Trains object
          Trains updatedTrain = new Trains();
          updatedTrain.setTrainHeader(header);
          updatedTrain.setBookingDetails(updatedBookingDetails);
          return updatedTrain;
      } 
      else 
      {
          throw new RuntimeException("Train not found");
      }
  }
  

//  
  //delete
  @Transactional
  public void del(int trainNo)
  {
	  Optional<TrainHeader> header=headerRepository.findById(trainNo);
	  if(header.isPresent())
	  {
		  detailRepository.deleteById(trainNo);
		  headerRepository.delete(header.get());
	  }
  }
}

