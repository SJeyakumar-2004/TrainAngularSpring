package com.example.Relation.repository;



import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.Relation.entity.BookingDetails;



public interface DetailRepository extends JpaRepository<BookingDetails,Integer>
{

	List<BookingDetails> findByTrainNo(int trainNo);

	
	
	
}
