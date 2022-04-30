import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhes2',
  templateUrl: './detalhes2.component.html',
  styleUrls: ['./detalhes2.component.css']
})
export class Detalhes2Component implements OnInit {
  indice : number = 0

  carro : any

  carros = [ {
    indice : 0,
    img :'../../../assets/carros/carro1.jpg',
    title: 'CHERY ARRIZO 6',
    desc: '',
    preco: 'R$ 125.990',
    modelo : 'Arrizo',
    marca: 'Chery',
    ano: '2016',
    cor: 'Cinza',
    combustivel: 'Flex',
    obs: 'O carro é muito bom.'
  },
  {
    indice : 1,
    img :'../../../assets/carros/carro2.jpg',
    title: 'CHERY TIGGO 2',
    desc: '',
    preco: 'R$ 96.990',
    modelo : 'Tiggo',
    marca: 'Chery',
    ano: '2016',
    cor: 'Preto',
    combustivel: 'Flex',
    obs: 'O carro é excelente.'
  },
  {
    indice : 2,
    img :'../../../assets/carros/carro3.jpg',
    title: 'CHERY ARRIZO 6 PRO',
    desc: '',
    preco: 'R$ 136.990',
    modelo : 'Arrizo',
    marca: 'Chery',
    ano: '2016',
    cor: 'Preto',
    combustivel: 'Flex',
    obs: 'Este vendedor não deixou nenhuma observação'
  },
  {
    indice : 3,
    img :'../../../assets/carros/carro4.jpeg',
    title: 'CHERY TIGGO 7',
    desc: '',
    preco: 'R$ 126.990',
    modelo : 'Tiggo',
    marca: 'Chery',
    ano: '2019',
    cor: 'Preto',
    combustivel: 'Flex',
    obs: 'O carro é excelente.'
  },
  {
    indice : 4,
    img :'../../../assets/carros/carro5.jpg',
    title: 'CHERY TIGGO 2',
    desc: '',
    preco: 'R$ 77.990',
    modelo : 'Tiggo',
    marca: 'Chery',
    ano: '2016',
    cor: 'Preto',
    combustivel: 'Flex',
    obs: 'Este vendedor não deixou nenhuma observação'
  },
  {
    indice : 5,
    img :'../../../assets/carros/carro6.jpg',
    title: 'CHERY TIGGO 6',
    desc: '',
    preco: 'R$ 77.920',
    modelo : 'Tiggo',
    marca: 'Chery',
    ano: '2018',
    cor: 'Branco',
    combustivel: 'Flex',
    obs: 'O carro é excelente.'
  },
  {
    indice : 6,
    img :'../../../assets/carros/carro7.jpg',
    title: 'CHERY TIGGO 2',
    desc: '',
    preco: 'R$ 56.990',
    modelo : 'Tiggo',
    marca: 'Chery',
    ano: '2016',
    cor: 'Vermelho',
    combustivel: 'Flex',
    obs: 'Este vendedor não deixou nenhuma observação'
  },
  {
    indice : 7,
    img :'../../../assets/carros/carro8.png',
    title: 'CHERY TIGGO 2',
    desc: '',
    preco: 'R$ 59.990',
    modelo : 'Tiggo',
    marca: 'Chery',
    ano: '2017',
    cor: 'Branco',
    combustivel: 'Flex',
    obs: 'O carro é excelente.'
  }]

  constructor(
    private rota : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.indice = this.rota.snapshot.params['indice']
    this.carro = this.carros[this.indice]
  }
}
