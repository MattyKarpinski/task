import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
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
    this.api.apiCall()
    .pipe(
        map((response:any) => {
            const parsedData:any = []
            
            Object.keys(response.message)
                .forEach(key => {
                    parsedData.push({
                        breed: key, 
                        data: response.message[key]
                    })
                })
            console.log(response, parsedData);
            return parsedData
    
        })
    )
    .subscribe(data => {
        this.posts = data;
    });
  }
  
}
