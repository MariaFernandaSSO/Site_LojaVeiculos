import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-veiculos',
  templateUrl: './veiculos.component.html',
  styleUrls: ['./veiculos.component.css']
})
export class VeiculosComponent implements OnInit {
  
  carros = [
    {
      indice : 0,
      img :'../../../assets/carros/carro1.jpg',
      title: 'CHERY ARRIZO 6',
      desc: '',
      preco: 'R$ 125.990'
    },
    {
      indice : 1,
      img :'../../../assets/carros/carro2.jpg',
      title: 'CHERY TIGGO 2',
      desc: '',
      preco: 'R$ 96.990'
    },
    {
      indice : 2,
      img :'../../../assets/carros/carro3.jpg',
      title: 'CHERY ARRIZO 6 PRO',
      desc: '',
      preco: 'R$ 136.990'
    },
    {
      indice : 3,
      img :'../../../assets/carros/carro4.jpeg',
      title: 'CHERY TIGGO 7',
      desc: '',
      preco: 'R$ 126.990'
    },
    {
      indice : 4,
      img :'../../../assets/carros/carro5.jpg',
      title: 'CHERY TIGGO 2',
      desc: '',
      preco: 'R$ 77.990'
    },
    {
      indice : 5,
      img :'../../../assets/carros/carro6.jpg',
      title: 'CHERY TIGGO 6',
      desc: '',
      preco: 'R$ 77.990'
    },
    {
      indice : 6,
      img :'../../../assets/carros/carro7.jpg',
      title: 'CHERY TIGGO 2',
      desc: '',
      preco: 'R$ 56.990'
    },
    {
      indice : 7,
      img :'../../../assets/carros/carro8.png',
      title: 'CHERY TIGGO 2',
      desc: '',
      preco: 'R$ 59.990'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
