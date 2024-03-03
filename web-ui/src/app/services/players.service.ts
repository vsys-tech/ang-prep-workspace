import {Injectable, signal} from "@angular/core";
import {Player} from "../model/cricket/teams/players.model";


@Injectable({
  providedIn: "root"
})
export class PlayersService {

  players = signal<Player[]>([]);

  constructor() {
    this.players.set([

      // windies
      new Player("100", "101", "Viv", "richard", 25, "Batting"),
      new Player("100", "102", "Garry", "Sobbers", 34, "Batting"),
      new Player("100", "103", "des", "hens", 31, "Bowling"),
      new Player("100", "104", "Coutley", "Ambrose", 30, "Bowling"),
      new Player("100", "1055", "Logi", "Logi", 40, "Wicket Keeping"),


      // india
      new Player("200", "2001", "Rohit", "Sharma", 37, "Batting"),
      new Player("200", "2002", "Virat", "Kohli", 34, "Batting"),
      new Player("200", "2003", "Jaspreet", "Bumrah", 31, "Bowling"),
      new Player("200", "2004", "Mohd.", "Shami", 30, "Bowling"),
      new Player("200", "2005", "Mahindra Singh", "Dhoni", 40, "Wicket Keeping"),

      //Aus
      new Player("300", "3001", "Steve", "Smith", 37, "Batting"),
      new Player("300", "3002", "Steve", "Waugh", 34, "Batting"),
      new Player("300", "3003", "Allen", "Border", 31, "Bowling"),
      new Player("300", "3004", "Bruce", "Lee", 30, "Bowling"),
      new Player("300", "3005", "David", "Boon", 40, "Wicket Keeping"),

      //Eng

      new Player("400", "4001", "Joe", "Root", 37, "Batting"),
      new Player("400", "4002", "Jimmy", "Anderson", 34, "Batting"),
      new Player("400", "4003", "Alester", "Cook", 31, "Bowling"),
      new Player("400", "4004", "Jos", "Butler", 30, "Bowling"),
      new Player("400", "4005", "Curan", "Curan", 40, "Wicket Keeping"),

      //SA
      new Player("500", "5001", "Abbie", "De Villiars", 37, "Batting"),
      new Player("500", "5002", "J", "MarkRam", 34, "Batting"),
      new Player("500", "5003", "Quintin", "De Cock", 31, "Bowling"),
      new Player("500", "5004", "Daryl", "Sten", 30, "Bowling"),
      new Player("500", "5005", "Keshav", "Maharaj", 40, "Wicket Keeping"),


    ])
  }

  getPlayersByTeamId(teamId: string): Player [] {
    const players =
      this.players().filter((player: Player) => {
        return player.teamId == teamId;
      });
    return players;
  }

}
