import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  mensajes: any;
  constructor(public data: DataService) { }

  ngOnInit() {
    this.mensajes = this.data.getPosts();
  //   .subscribe((data: any[]) => {
  //     this.mensajes = data;
  //     console.log(this.mensajes);
  //   });
   }
   escuchaClick( id ){
     console.log('click en ',id);
     
   }
}
