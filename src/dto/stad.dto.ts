import { BookingDTO } from "./booking.dto";

export class StadDTO{
    constructor(
        public _id:string,
        public name:string,
        public description:string,
        public capacity:number,
        public type:string,
        public pricePerPlayer:number,
        public bookings:BookingDTO[],
    ){}
}