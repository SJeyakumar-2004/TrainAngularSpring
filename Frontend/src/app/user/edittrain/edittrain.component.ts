import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-edittrain',
  templateUrl: './edittrain.component.html',
  styleUrls: ['./edittrain.component.css']
})
export class EdittrainComponent implements OnInit {
constructor(private tra:UserService,
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
      let trainNo=Number(param.get('trainNo'))
      this.getBy(trainNo)
    })
  }

  getBy(trainNo:number)
  {
    this.tra.edit1(trainNo).subscribe((data)=>
    {
      this.form=data;
    })
  }
  
  update()
  {
    this.tra.update1(this.form).subscribe({next:(data)=>
    {
      this.router.navigate(['/home'])
    }
    })
  }

}


