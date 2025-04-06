export interface User 
{
   
    trainHeader:
    {
    trainNo:number, 
    trainName:string,
    date:Date,
    source:string,
    destinaction:string,
    amount:''
    },
    bookingDetails:
    {
        id:number,
        trainNo:number,
        name:string,
        age:'',
        gender:string,
        adharNo:'',
        phoneNo:'',
        amount:''
    }[];
}
