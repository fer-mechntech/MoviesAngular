import { Component, OnInit, Output } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl, MinLengthValidator} from "@angular/forms";
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core';
import { Contact } from '../interfaces/contact';

@Component({
  selector: 'app-contac-form',
  templateUrl: './contac-form.component.html',
  styleUrls: ['./contac-form.component.css']
})
export class ContacFormComponent implements OnInit {

  form: FormGroup;
  hide: boolean = true;
  @Output() cellClicked = new EventEmitter<Contact>();

  constructor(private _fbService: FormBuilder, 
              private _router: Router) {
    this.form = this._fbService.group({
      name: [null, [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      email: [null, [Validators.required, Validators.email]],
      phone: [null,  [Validators.minLength(10),Validators.maxLength(10),Validators.pattern('[1-9]*'), Validators.required]],
      message: [null, Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onSend(): void{
    if(this.form.invalid){
      this.form.markAllAsTouched();
      return;
    }else{
      Swal.fire({ icon: 'success',  title: "Message was send successfully", text: JSON.stringify(this.form.value)}).then(()=>{
        this._router.navigateByUrl('');
      });
      
    }   
  }
  

  get name(): FormControl {
    return <FormControl>this.form.get('name');
  }

  get email(): FormControl {
    return <FormControl>this.form.get('email');
  }

  get phone(): FormControl {
    return <FormControl>this.form.get('phone');
  }

  get message(): FormControl {
    return <FormControl>this.form.get('message');
  }
  

}
