import { Component } from '@angular/core';

@Component({
  selector: 'app-eje1',
  templateUrl: './eje1.component.html',
  styleUrls: ['./eje1.component.css']
})
export class Eje1Component {

  protected titulo: string = 'empresas Dani´s inc';
  protected correo: string = '';
  protected contra: string = '';

  login(){
    if(this.correo=="Dani" && this.contra=="123"){
      alert("Bienvenidos a "+ this.titulo);
      
    }
    else{
      alert("Usuario o contraseña incorrectos");
    }
  }
}
