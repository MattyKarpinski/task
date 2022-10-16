import { Component, OnInit } from '@angular/core';
import { PostService } from './services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  title = 'psintagram';
  posts:any = []

  constructor(private api:PostService) {}

  ngOnInit() {
    this.api.apiCall().subscribe(data => {
        this.posts = data;
      });
  }
  
}
