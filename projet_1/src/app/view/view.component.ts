import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {

 
  constructor(private route : ActivatedRoute)
  {
    this.route.params.subscribe(data=>{
       
       console.log(data['id'])
    })
  }
 



}
