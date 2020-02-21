import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orcamento',
  templateUrl: './orcamento.component.html',
  styleUrls: ['./orcamento.component.css']
})
export class OrcamentoComponent implements OnInit {

  planos = [
    {id: 1, name: "Amil", src: "https://firebasestorage.googleapis.com/v0/b/template-56c3b.appspot.com/o/logos_operadoras%2FAmil%20Novo%202.png?alt=media&token=341de93a-ab47-463a-8b07-a4139ecbf0f7"},
    {id: 2, name: "Bradesco", src: "https://firebasestorage.googleapis.com/v0/b/template-56c3b.appspot.com/o/logos_operadoras%2Fbradesco.jpg?alt=media&token=8a1c4450-dc7f-4511-bed2-87233dd307be"},
    {id: 3, name: "Allianz", src: "https://firebasestorage.googleapis.com/v0/b/template-56c3b.appspot.com/o/logos_operadoras%2Fallianz%202.jpg?alt=media&token=9ae7d9b0-9ff4-4a7f-a4a9-e27779d336f6"},
    {id: 4, name: "Care Plus", src: "https://firebasestorage.googleapis.com/v0/b/template-56c3b.appspot.com/o/logos_operadoras%2Fcare_plus.png?alt=media&token=b0db2567-fc14-4e60-8eb7-69109dff56f3"},
    {id: 5, name: "Unimed Central", src: "https://firebasestorage.googleapis.com/v0/b/template-56c3b.appspot.com/o/logos_operadoras%2FCNU%20Central%20Nacional%20Unimed.png?alt=media&token=4a21fade-1fb2-4b33-8ce7-4295040bdc76"},
    {id: 6, name: "Notre Dame", src: "https://firebasestorage.googleapis.com/v0/b/template-56c3b.appspot.com/o/logos_operadoras%2FGNDI.jpg?alt=media&token=5aa22f8f-3c04-4c4b-876f-cbf1facfa710"},
    {id: 7, name: "OMINT", src: "https://firebasestorage.googleapis.com/v0/b/template-56c3b.appspot.com/o/logos_operadoras%2Flogo-Omint-Saude-Seguros.jpg?alt=media&token=79ed35fb-5796-473a-b11a-875fa9fbb763"},
    {id: 8, name: "Porto Seguro", src: "https://firebasestorage.googleapis.com/v0/b/template-56c3b.appspot.com/o/logos_operadoras%2Fporto.jpg?alt=media&token=6a2f5fda-396d-4d09-a64a-3ab02118d667"},
    {id: 9, name: "Unimed Seguros", src: "https://firebasestorage.googleapis.com/v0/b/template-56c3b.appspot.com/o/logos_operadoras%2Fseguros_unimed.jpg?alt=media&token=41d7a6a4-51ac-4015-8e7c-c912a7d19ecf"},
    {id: 10, name: "Sompo Seguros", src: "https://firebasestorage.googleapis.com/v0/b/template-56c3b.appspot.com/o/logos_operadoras%2Fsompo-seguros.jpg?alt=media&token=6f28fd3b-2e7c-4cbe-8b0d-86aa2b8846e6"},
    {id: 11, name: "Sul América", src: "https://firebasestorage.googleapis.com/v0/b/template-56c3b.appspot.com/o/logos_operadoras%2FSulAmerica.jpg?alt=media&token=a35179c0-3680-4f2d-b249-70ef8d87b08e"},
  ]
  constructor() { }

  ngOnInit() {
  }

}