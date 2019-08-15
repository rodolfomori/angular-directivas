import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-forms',
  templateUrl: './ng-for-forms.component.html',
  styleUrls: ['./ng-for-forms.component.css']
})
export class NgForFormsComponent implements OnInit {

  name: string = "";
  address: string = "";
  phone: string = "";
  city: string = "";
  age: number = 0;

  cities = [
    { name: "São Paulo", state: "SP" },
    { name: "Curitiba", state: "PR" },
    { name: "Porto Alegre", state: "RS" },
    { name: "Blumenau", state: "SC" },
  ];

  clients = [];

  constructor() { }

  ngOnInit() {
  }

  save() {
    this.clients.push(
      {
        name: this.name,
        address: this.address,
        city: this.city,
        age: this.age,
        phone: this.phone
      }
    )
    this.cancel()
    alert("Dados Inseridos com Sucesso")
    console.log(this.clients)
  }

  cancel() {
    this.name = ""
    this.address = ""
    this.city = ""
    this.age = 0
    this.phone = ""
  }

  delete(i: number){
    this.clients.splice(i,1); 
  }

}
