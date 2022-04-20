import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Joke } from '../models/joke';

@Injectable({
  providedIn: 'root'
})
export class JokeService {
  private jokeType:string="single";
  private categories:string[]=[
    "Programming",
    "Misc",
    "Dark",
    "Pun"
  ];
  constructor(private http:HttpClient) { }

  public loadJoke(category:string){
    return this.http.get<Joke>("https://v2.jokeapi.dev/joke/"+category, {
      params:{
        type:this.jokeType
      }
    });
  }

  public getCategories(){
    return this.categories;
  }

}