import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  dataArray: {
    fname: string;
    lname: string;
    contact: string;
    email: string;
  }[] = [];
  // Model to bind to input fields
  fname: string = '';
  lname: string = '';
  contact: string = '';
  email: string = '';

  // Method to add data from input fields to the table
  addData() {
    // Check if the fields are not empty
    if (this.fname && this.lname && this.contact && this.email) {
      const newData = {
        fname: this.fname,
        lname: this.lname,
        contact: this.contact,
        email: this.email,
      };

      // Push new data to the dataArray
      this.dataArray.push(newData);

      // Clear input fields after adding the data
      this.fname = '';
      this.lname = '';
      this.contact = '';
      this.email = '';
    } else {
      alert('Please fill out all fields!');
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
