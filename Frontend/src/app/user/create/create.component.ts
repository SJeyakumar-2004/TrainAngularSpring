import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent 
{
form: User=
{
  trainHeader: {
    trainNo:0,
    trainName: '',
    date:new Date,
    source: '',
    destinaction: '',
    amount:''
  },
  bookingDetails:[]
};

isChecked: boolean = false;

constructor(private In:UserService,
  private route:Router,
  private ngbmodal : NgbModal,
  private ng:NgbActiveModal
  ) 

{

}

method(a:any)
{
    console.log(a,"formmmm")
    
  this.In.create(this.form).subscribe({next:(data)=>
  {
    this.route.navigate(['/home']);
  }
  })
}


navigateBack()
 {
  console.log('Navigating back to Home...');
  this.ng.close(); 
}

}
