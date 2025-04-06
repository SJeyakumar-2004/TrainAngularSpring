package com.example.Relation.entity;

import java.util.List;

public class Trains 
{
	    private TrainHeader trainHeader;
	    private List<BookingDetails> bookingDetails;
		public TrainHeader getTrainHeader() {
			return trainHeader;
		}
		public void setTrainHeader(TrainHeader trainHeader) {
			this.trainHeader = trainHeader;
		}
		public List<BookingDetails> getBookingDetails() {
			return bookingDetails;
		}
		public void setBookingDetails(List<BookingDetails> bookingDetails) {
			this.bookingDetails = bookingDetails;
		}
	    
}
