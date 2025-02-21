import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  //data
  voiture={
    prix:'1528',
    couleur:'rouge',
    matricule:'587965'
  }
   

  //Routing Graude : verification par BD 
   verfiadmin=true
  //methode
  affiche()
  {
    console.log(this.voiture.prix)
    console.log(this.voiture.couleur)
    console.log(this.voiture.matricule)
  }



  
}
