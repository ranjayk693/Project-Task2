import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class WebScrapingService {
  constructor() {}
  // sendData(data:string){
  //   return axios.post("http://localhost:3000/submit",{url:data})
  // }

  // sendData(data: string) {
  //   return axios.post("http://localhost:3000/submit", { url: data })
  //     .then((response) => {
  //       console.log("response from server side :", response);
  //       return response;
  //     })
  //     .catch((error) => {
  //       console.log("Failed to connect with Server");
  //       // throw error;
  //     });
  // }
  sendData(data: string) {
    return axios.post("http://localhost:3000/submit", { url: data })
    
  }
}
