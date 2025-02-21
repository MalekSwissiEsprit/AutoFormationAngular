import { Component } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { ServiceService } from '../Dservices/service.service';

@Component({
  selector: 'app-toiles',
  templateUrl: './toiles.component.html',
  styleUrls: ['./toiles.component.css']
})

export class ToilesComponent {

wd1="200px"
    ht1="200px"

    src1="https://www.connaissancedesarts.com/wp-content/thumbnails/uploads/2022/03/cda22_vangoghtxt-tt-width-620-height-522-fill-0-crop-0-bgcolor-eeeeee.jpg"
    src2="https://images.prismic.io/barnebys/b62277df-12b9-47c5-8f2b-e82a469bfc9e_hero.webp?w=1200&h=600&fit=crop&crop=faces&auto=format%2Ccompress&cs=tinysrgb"






mail=''
//appel service 
    constructor(private route : ActivatedRoute , private ser: ServiceService ){
    this.route.queryParams.subscribe(data =>{
      console.log(data['mail'])
      
      this.ser.affiche() 
      
      })
      

}

  
    

}
