import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  nombre: 'Hola amigos de youtube';
  password: 'aqui el password';
  constructor(public navCtrl: NavController) {
    console.log('HOLAAAAAAAAAAAAAA');
  }

  validarFormulario(formulario) {
    console.log(formulario);
  }

}
