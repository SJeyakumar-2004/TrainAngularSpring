import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-homes',
  templateUrl: './homes.component.html',
  styleUrls: ['./homes.component.css']
})
export class HomesComponent  implements OnInit
{
    pro:User[]=[];
       constructor(private use:UserService)
       {
    
       }
    
       gets()
       {
        this.use.get().subscribe((data)=>
        {
          this.pro=data;
        })
       }
    
       ngOnInit()
       {
        this.gets();
       }

      //  delete(id:number)
      //  {
      //   this.pro.forEach(user => {
      //     user.bookingDetails = user.bookingDetails.filter(booking => booking.id !== id);
      //   });
      //  }

      delete(id: number) {
        this.use.del(id).subscribe({
          next: (data) => {
            this.pro = this.pro.map(user => {
              user.bookingDetails = user.bookingDetails.filter(person => person.id !== id);
              return user; 
            });
          }
        });
      }
}
