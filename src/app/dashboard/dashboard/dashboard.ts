import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {

  dateandtime: string = "08:35 AM, 11 Mar 2025"

  btnstatus: number = 0


  punchIn() {
    this.btnstatus = 1;
  }
  punchOut() {
    this.btnstatus = 0;
  }

}
