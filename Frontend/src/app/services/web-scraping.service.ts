import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class WebScrapingService {
  constructor() {}
  // async scrapeWebPage(url: string): Promise<string> {
  //   const response = await axios.get(url);
  //   return "";
  // }

  async getData() {
    return await axios.get('http://localhost:3000/api/data');
  }
}
