import { Component, OnInit } from '@angular/core';
import { Joke } from 'src/app/models/joke';
import { JokeService } from 'src/app/services/joke.service';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {

  public joke:Joke={
    id:0,
    category:'',
    joke:'',
    lang:'',
    safe:false,
    type:''
  };
  public categories:string[]=[];
  public selectedCategory:string="";

  public isLoading:boolean=false;
  public isError:boolean=false;
  public noJoke:boolean=true;

  constructor(private jokeService:JokeService) {  }


  ngOnInit(): void {
   // this.loadJoke();
    this.categories=this.jokeService.getCategories();
  }

  private loadJoke(){
    this.jokeService.loadJoke(this.selectedCategory).subscribe({
      next:(response)=>{
        this.joke=response;
        this.isLoading=false;
        this.noJoke=false;
      },
      error:(error)=>{
        this.isLoading=false;
        this.isError=true;
      }
    });
  }
    

  nextJoke(){
    this.loadJoke();
  }

}