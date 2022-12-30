import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PitchService {

  API_URL = 'http://localhost:3001/'
  constructor(private readonly http:HttpClient) { }


  oneClub(id:string){
    return this.http.get(this.API_URL+'club/'+id)
  }

  allClubs(){
    return this.http.get(this.API_URL+'clubs')
  }

  addClub(data:any){
    return this.http.post(this.API_URL+'addClub',data)
  }
  upClub(data:any){
    return this.http.post(this.API_URL+'upClub',data)
  }
}
