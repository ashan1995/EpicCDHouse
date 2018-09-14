import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.css']
})
export class ContentsComponent implements OnInit {
  posts:Post[];
  
  constructor( private dataService:DataService) { 
    
  }

  ngOnInit() {
    this.dataService.getPosts().subscribe((posts)=>{
    console.log(posts);
      this.posts=posts;
  });
  } 
  


}

interface Post{
  totalHits:number
}
  



