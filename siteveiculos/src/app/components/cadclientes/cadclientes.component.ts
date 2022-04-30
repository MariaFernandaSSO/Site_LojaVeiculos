import { ApiveiculosService } from './../../services/apiveiculos/apiveiculos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadclientes',
  templateUrl: './cadclientes.component.html',
  styleUrls: ['./cadclientes.component.css']
})
export class CadclientesComponent implements OnInit {

  usuario = ''
  email = ''
  senha = ''

  constructor(
    private vServ: ApiveiculosService
  ) { }

  ngOnInit(): void {
  }

  salvar(){
    let c = {
      usuario: this.usuario,
      email: this.email,
      senha: this.senha
    }

    this.vServ.cadastrar(c).subscribe(
      (dados) => {
        console.log(dados)
      },
      (erro) => {
        console.error(erro)
      }
    );
  }
}
