import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) 
  { }

  get()
  {
    return this.http.get<User[]>("http://localhost:8089/trains/getAll");
  }

  create(data:User)
  {
    return this.http.post("http://localhost:8089/trains/post",data);
  }

  getTrainDetails(trainNo:number)
  {
    return this.http.get<any>(`http://localhost:8089/trains/get/${trainNo}`);
  }

  edit(id:number)
  {
    return this.http.get<User>(`http://localhost:8089/trains/get/${id}`);
  }
  update(data:User)
  {
    // const bookingDetailId = data.bookingDetails[0].id;
    return this.http.put<User>(`http://localhost:8089/trains/update/${data.bookingDetails[0].id}`, data);
    // return this.http.put<User>(`http://localhost:8089/trains/,${data.bookingDetails[0].id}`,data);
  }

  edit1(trainNo:number)
  {
    return this.http.get<User>(`http://localhost:8089/trains/get/${trainNo}`);
  }
  update1(data:User)
  {
    const bookingDetailtrain = data.trainHeader.trainNo;
    return this.http.put<User>(`http://localhost:8089/trains/update/${bookingDetailtrain}`, data);
    // return this.http.put<User>(`http://localhost:8089/trains/update/${data.trainHeader.trainNo}`,data);
  }

del(id:number)
{
  return this.http.delete<User>(`http://localhost:8089/trains/del/${id}`);
}
}
