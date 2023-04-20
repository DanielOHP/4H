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
protected usuarios=[{usr:"Daniel",psw:"123",nombre:"Daniel"},
                    {usr:"Acebedo",psw:"123",nombre:"Acebedo"},
                    {usr:"Yuli",psw:"123",nombre:"Yuli"}
] ;
  login(){
    for (let i=0; i<this.usuarios.length; i++) {
      if (this.usuarios[i].usr == this.correo && this.usuarios[i].psw == this.contra) 
      alert(this.usuarios[i].nombre +" bienvenidos")
      return;
      
    }
    {
      alert("Usuario o contraseña incorrectos")
    }
  }
}
