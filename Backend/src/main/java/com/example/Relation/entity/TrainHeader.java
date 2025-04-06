package com.example.Relation.entity;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name="trainHeader")
public class TrainHeader 
{
   
   @Id
   @Column(name = "id")
   @GeneratedValue(strategy = GenerationType.SEQUENCE)
   private int trainNo;
   private String trainName;
   private Date date;
   private String source;
   private String destinaction;
   private int amount;
//   @OneToMany(mappedBy = "trainHeader", cascade = CascadeType.ALL, orphanRemoval = true)
//   private List<BookingDetails> bookingDetails = new ArrayList<>();
 
   
   
public String getSource() 
   {
	return source;
}
public void setSource(String source)
{
	this.source = source;
}
public int getTrainNo()
{
	return trainNo;
}
public void setPersonNo(int trainNo) 
{
	this.trainNo = trainNo;
}
public String getTrainName() 
{
	return trainName;
}
public void setTrainName(String trainName) 
{
	this.trainName = trainName;
}
public Date getDate()
{
	return date;
}
public void setDate(Date date) 
{
	this.date = date;
}

public String getDestinaction() 
{
	return destinaction;
}
public void setDestinaction(String destinaction) 
{
	this.destinaction = destinaction;
}
public int getAmount()
{
	return amount;
}
public void setAmount(int amount) 
{
	this.amount = amount;
}
   
}
