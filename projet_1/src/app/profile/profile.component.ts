import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent   {
   //form template
  add(f:NgForm)
  {
    console.log(f)
  }

//form reactive 
//  FormGroup

forma=new FormGroup({
  nom: new FormControl ,
  age : new FormControl 
})

envoyer(){
  console.log(this.forma.value)
}


myform: any 
constructor(private frb : FormBuilder)
{
  this.myform=this.frb.group(
    {
      name:['loka',[Validators.required,Validators.minLength(3)]],
      lastname : ['',[Validators.required,Validators.maxLength(8)]],
      mail : ['',[Validators.required,Validators.email]] 
    
    }
  )
}
//setters: method(lifeCycle)
ngOnInit()
{
 this.myform.patchValue(
  {
    lastname : 'swissi',
    mail : 'maleksw88@gmail.com'
   
    
  }
 )
  
  
}

//getters
get lastname(){
  return this.myform.get('lastname')
}
get email()
{
  return this.myform.get('mail')
}


}

