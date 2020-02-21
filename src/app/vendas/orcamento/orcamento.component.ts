import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orcamento',
  templateUrl: './orcamento.component.html',
  styleUrls: ['./orcamento.component.css']
})
export class OrcamentoComponent implements OnInit {

  planos = [
    {id: 1, name: "Amil", src: ""},
    {id: 2, name: "Bradesco", src: ""},
    {id: 3, name: "Allianz", src: ""},
    {id: 4, name: "Care Plus", src: ""},
    {id: 5, name: "Unimed Central", src: ""},
    {id: 6, name: "NotreDame", src: ""},
    {id: 7, name: "OMINT", src: ""},
    {id: 8, name: "Porto Seguro", src: ""},
    {id: 9, name: "Unimed Seguros", src: ""},
    {id: 10, name: "Sompo Seguros", src: ""},
    {id: 11, name: "Sul América", src: ""},
  ]
  constructor() { }

  ngOnInit() {
  }

}