import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-eje3',
  templateUrl: './eje3.component.html',
  styleUrls: ['./eje3.component.css']
})
export class Eje3Component {
  protected title:string="empresas dani";
  passwordForm:FormGroup;
  constructor(private formbuilder:FormBuilder){
    this.passwordForm=this.formbuilder:formbuilder({
      password:['',[
        Validators.required,
        Validators.pattern ()
      ]

      ]
    })
  }

}
