import { TeamDTO } from "./team.dto";

export class RoomDTO{
    constructor(
        public _id:string,
        public teams:TeamDTO[],
        public owner:string,
        public title:string,
        public description:string,
        public type:number,
        public city:string,
        public zone:string,
        public date:string,
        public time:string,
    ){}
}