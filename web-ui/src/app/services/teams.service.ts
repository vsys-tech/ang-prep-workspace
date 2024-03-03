import {Injectable, signal} from "@angular/core";
import {Team} from "../model/cricket/teams/team.model";


@Injectable({
  providedIn:'root'
})
export class TeamsService{

   teams =signal<Team[]>([]);
   constructor() {
     this.teams.set(
       [
         new Team("100", "West Indies", "Viv Richards", 15, new Date("2022-11-12")),
         new Team("200", "India", "Rohit Sharma", 20, new Date("2021-01-10")),
         new Team("300", "Australia", "Steve Smith", 16, new Date("2023-01-23")),
         new Team("400", "England", "Joe Root", 12, new Date("2002-07-31")),
         new Team("500", "South Africa", "Abbie De Williars", 11, new Date("2000-19-18")),
       ]
     )
   }

   getTeam(id: string): Team  {
     const team: Team[] =this.teams()?.filter( (team) =>{
          return team.teamId == id;
     });

     return team[0];
   }


}
