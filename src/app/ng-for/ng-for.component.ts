import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  names = [
    'Ana',
    'Joao',
    'Pedro',
    'Paulo'
  ];

  cities = [
    {name:"São Paulo", state:"SP"},
    {name:"Curitiba", state:"PR"},
    {name:"Porto Alegre", state:"RS"},
    {name:"Blumenau", state:"SC"},
  ];

  constructor() { }

  ngOnInit() {
  }

}
