import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-creates',
  templateUrl: './creates.component.html',
  styleUrls: ['./creates.component.css']
})
export class CreatesComponent implements OnInit{
   form: User=
{
  trainHeader: {
    trainNo: 0,
    trainName: '',
    date: new Date(),
    source: '',
    destinaction: '',
    amount: ''
  },
  bookingDetails: [{
    id: 0,
    trainNo:0,
    name: '',
    age: '',
    gender: '',
    adharNo: '',
    phoneNo: '',
    amount: ''
  }],
  
}

  
constructor(private In:UserService,private route:Router,private ngb:NgbActiveModal
)
{
   
}



ngOnInit() {}

onTrainNoChange() {
  const trainNo = this.form.trainHeader.trainNo;
  if (trainNo) {
    this.In.getTrainDetails(trainNo).subscribe(
      (data) => {
        if (data) {
          this.form.trainHeader.trainName = data.trainHeader.trainName;
          this.form.trainHeader.date = new Date(data.trainHeader.date);
          this.form.trainHeader.source = data.trainHeader.source;
          this.form.trainHeader.destinaction = data.trainHeader.destinaction;
          this.form.trainHeader.amount = data.trainHeader.amount;
          this.form.bookingDetails[0].amount=data.trainHeader.amount;
          this.form.bookingDetails[0].trainNo=data.trainHeader.trainNo;
        } 
      }
    )
  }
}

addBooking() 
{
  this.form.bookingDetails.push({
    id: 0,
    trainNo: this.form.trainHeader.trainNo,
    name: '',
    age: '',
    gender: 'Male',
    adharNo: '',
    phoneNo: '',
    amount: this.form.trainHeader.amount
  });
}

isFormValid(): boolean
 {
  return this.form.bookingDetails.every(person => 
    person.name && person.age && person.gender && person.adharNo && person.phoneNo);
}
methods()
{
  // console.log(a,"formmmm");
  console.log(this.form,"formmmm");
  this.In.create(this.form).subscribe({next:(data)=>
  {
    this.route.navigate(['/homes']);
  }
  })
}





navigateBack() 
{ 
  this.route.navigate(['/home']);
  this.ngb.close();
}


 }
