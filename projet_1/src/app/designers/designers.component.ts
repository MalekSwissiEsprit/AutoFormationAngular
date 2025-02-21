import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-designers',
  templateUrl: './designers.component.html',
  styleUrls: ['./designers.component.css']
})

export class DesignersComponent {
  sc2 = "color:brown;"
  getname=""
  getid=""

  constructor(private route:ActivatedRoute) {
    this.route.params.subscribe( data =>{
           this.getid=data['name']
            this.getname=data['id']
            

      }

    )
    
  }
}



