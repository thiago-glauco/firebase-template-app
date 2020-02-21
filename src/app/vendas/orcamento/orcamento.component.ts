import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orcamento',
  templateUrl: './orcamento.component.html',
  styleUrls: ['./orcamento.component.css']
})
export class OrcamentoComponent implements OnInit {

  planos = [
    {id: 1, name: "Amil"},
    {id: 2, name: "Bradesco"},
    {id: 2, name: "Notre Dame"},
    {id: 2, name: "Inter Medica"},
    {id: 2, name: "Medial"},
    {id: 2, name: "Greeline"},
    {id: 2, name: "QQ um"},
    {id: 2, name: "QQ um"},
    {id: 2, name: "QQ um"},
    {id: 2, name: "QQ um"},
  ]
  constructor() { }

  ngOnInit() {
  }

}