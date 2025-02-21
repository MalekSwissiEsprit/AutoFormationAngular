import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private route: Router ) { 
    
  }

  ngOnInit(): void {
    // initialisation du composant
  }

    
  personne = {
    name:'malek ',
    lastname :'swissi',age : ""
  }

 
  linkimg1 ="https://cdn.britannica.com/78/43678-050-F4DC8D93/Starry-Night-canvas-Vincent-van-Gogh-New-1889.jpg"
  titlestyle = "blue"; 
  fonty="font-size:40px";
  disp="block";
  stylish="pink"
  
  number=0
  nomcolor=""

  //dierctives
  //si
  x=5
  y=5
  w=6
  verif=true
  //for
  tabpays=['Tunisia','Morocoo','France','Brazil','Italie']
 //Switch
  num=0
  //class css 
  cl1= "classy1"
  //ng Style 
  st1="green"
  st2="20px"

  //pipes 
  animal = "chat"
  dt1= '15/01/2023 '//problème date

  
  



//les méthodes enventbinding
  incr(){
    return this.number++
  }

  dec(){
    this.number--
  }


  affiche(){
   this.disp="block"
}

nonaffiche(){
  this.disp="none"
}

toyellow(){
 this.stylish="color:yellow; font-size:30px"
 this.nomcolor="yellow"
}
topink(){
  this.stylish="color:#FF1493;font-size:50px"
  this.nomcolor="pink"
  
}

gotoview(){
  this.route.navigate(['/contact/view'])
}
gotodetails(){
  this.route.navigate(['/contact/details/'+this.personne.name])
}



}
