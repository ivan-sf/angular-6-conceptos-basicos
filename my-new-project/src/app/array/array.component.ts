import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-array',
  templateUrl: './array.component.html',
  styleUrls: ['./array.component.css']
})
export class ArrayComponent implements OnInit {

  users = ['Ryan', 'Mark', 'Pet', 'Bruce', 'Tony', 'Elon'];
  pulse = true;

  constructor() { }

  ngOnInit() {
  }

}
