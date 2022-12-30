import { StadDTO } from "./stad.dto";


export class ClubDTO{
    constructor(
        public _id:string,
        public name:string,
        public description:string,
        public city:string,
        public zipCode:string,
        public adress:string,
        public phone:string,
        public stads:StadDTO[],
    ){}
}