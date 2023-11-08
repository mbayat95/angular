// src/app/app.component.ts
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data: string = '';  
  receivedData: string = '';  

  constructor(private http: HttpClient) {}

  sendData() {
    this.http.post('http://localhost:3000/data', { data: this.data })
      .subscribe(response => console.log(response));
  }

  getData() {
    this.http.get('http://localhost:3000/data')
      .subscribe((response: any) => this.receivedData = response.data);
  }
}
