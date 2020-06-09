import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css'],
})
export class CollectionsHomeComponent implements OnInit {
  data = [
    { name: 'Shaila', age: '27', job: 'Banker', employed: true },
    { name: 'Asim', age: '28', job: 'Engineer', employed: true },
    { name: 'Adnan', age: '100', job: 'Educator', employed: true },
  ];

  headers = [
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'job', label: 'Job' },
    { key: 'employed', label: 'Employed' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
