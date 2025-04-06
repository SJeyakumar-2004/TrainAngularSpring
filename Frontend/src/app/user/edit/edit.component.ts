import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';
// import { __param } from 'tslib';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{

  constructor(private us:UserService,
    private rou:ActivatedRoute,
    private router:Router)
  {

  }

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
      trainNo: 0,
      name: '',
      age: '',
      gender: '',
      adharNo: '',
      phoneNo: '',
      amount: ''
    }],
    
  }
 
  ngOnInit()
  {
    this.rou.paramMap.subscribe((param)=>
    {
      let id=Number(param.get('id'))
      this.getBy(id)
    })
  }

  getBy(id:number)
  {
    this.us.edit(id).subscribe((data)=>
    {
      this.form=data;
    })
  }
  
  update()
  {
    this.us.update(this.form).subscribe({next:(data)=>
    {
      this.router.navigate(['/home'])
    }
    })
  }

}
