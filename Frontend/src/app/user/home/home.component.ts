import { Component, createComponent } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { CreateComponent } from '../create/create.component';
import { CreatesComponent } from '../creates/creates.component';
import { Router } from '@angular/router';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  pro:User[]=[];
   constructor
   (private use:UserService, 
    private route : Router,
    private ngbmodal : NgbModal
  )
   {

   }

   popup()
   {
      this.ngbmodal.open(CreateComponent,{size:'xl'});
     
   }
   po()
   {
    this.ngbmodal.open(CreatesComponent,{size:'xl'});
   
   }

   get()
   {
    this.use.get().subscribe((data)=>
    {
      this.pro=data;
    })
   }

   ngOnInit()
   {
    this.get();
   }
}
