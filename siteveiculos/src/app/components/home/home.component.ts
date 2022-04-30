import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  carros = [
    {
      indice: 0,
      img :'../../../assets/img/carroHonda.jpg',
      title: 'HONDA FIT',
      desc: '1.5 DX 16V FLEX 4P AUTOMÁTICO',
      preco: 'R$ 73.990'
    },
    {
      indice: 1,
      img :'../../../assets/img/fordEcosport.jpg',
      title: 'FORD ECOSPORT',
      desc: '1.5 TI-VCT FLEX FREESTYLE AUTOMÁTICO',
      preco: 'R$ 82.990'
    },
    {
      indice: 2,
      img :'../../../assets/img/volksGol.jpg',
      title: 'VOLKSWAGEN GOL',
      desc: '1.0 12V MPI TOTALFLEX 4P MANUAL',
      preco: ' 57.900'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
