import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {
  indice : number = 0

  carro: any

  carros = [{
    indice: 0,
    img :'../../../assets/img/carroHonda.jpg',
    title: 'HONDA FIT',
    desc: '1.5 DX 16V FLEX 4P AUTOMÁTICO',
    preco: 'R$ 73.990',
    modelo : 'Fit',
    marca: 'Honda',
    ano: '2016',
    cor: 'Preto',
    combustivel: 'Flex'
  },
  {
    indice: 1,
    img :'../../../assets/img/fordEcosport.jpg',
    title: 'FORD ECOSPORT',
    desc: '1.5 TI-VCT FLEX FREESTYLE AUTOMÁTICO',
    preco: 'R$ 82.990',
    modelo : 'Ecosporte',
    marca: 'Ford',
    ano: '2018',
    cor: 'Branco',
    combustivel: 'Flex'
  },
  {
    indice: 2,
    img :'../../../assets/img/volksGol.jpg',
    title: 'VOLKSWAGEN GOL',
    desc: '1.0 12V MPI TOTALFLEX 4P MANUAL',
    preco: ' 57.900',
    modelo : 'Gol',
    marca: 'VolksWagen',
    ano: '2018',
    cor: 'Branco',
    combustivel: 'Flex'
  }
]
  constructor(
    private rota : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.indice = this.rota.snapshot.params['indice']
    this.carro = this.carros[this.indice]
  }

}
