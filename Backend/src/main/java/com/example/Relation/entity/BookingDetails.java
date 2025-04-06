package com.example.Relation.entity;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
//import jakarta.persistence.JoinColumn;
//import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="bookingDetails")
public class BookingDetails 
{
   @Id
   @GeneratedValue(strategy = GenerationType.SEQUENCE)
	private int id;
	
//   @ManyToOne
//   @JoinColumn(name = "trainNo") 
//   @JoinColumn(name = "trainNo", referencedColumnName = "trainNo", nullable = false)
    private int trainNo;

	private String name;
	private int age;
	private String gender;
	private long adharNo;
	private long phoneNo;
	private long amount;
	
	public int getId()
	{
		return id;
	}
	public void setId(int id) 
	{
		this.id = id;
	}
	
	public int getTrainNo()
	{
	return trainNo;
    }
    public void setTrainNo(int trainNo)
    {
	this.trainNo = trainNo;
    }
	public String getName() 
	{
		return name;
	}
	public void setName(String name) 
	{
		this.name = name;
	}
	public int getAge() 
	{
		return age;
	}
	public void setAge(int age) 
	{
		this.age = age;
	}
	
	public String getGender()
	{
		return gender;
	}
	public void setGender(String gender)
	{
		this.gender=gender;
	}
	
	public long getAdharNo() 
	{
		return adharNo;
	}
	public void setAdharNo(long adharNo) 
	{
		this.adharNo = adharNo;
	}
	
	public long getPhoneNo() 
	{
		return phoneNo;
	}
	public void setPhoneNo(long phoneNo) 
	{
		this.phoneNo = phoneNo;
	}
	public long getAmount() 
	{
		return amount;
	}
	public void setAmount(long amount) 
	{
		this.amount = amount;
	}
	
//	public TrainHeader getTrainHeader() {
//		return trainHeader;
//	}
//	public void setTrainHeader(TrainHeader trainHeader) {
//		this.trainHeader = trainHeader;
//	}
	
}
