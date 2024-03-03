

export class Team {

  private _teamId : string ='';
  private _teamName : string ='';
  private _captainName : string ='';
  private _noOfPlayers : number =0;
  private _teamCreated : Date = new Date();

  constructor(teamId: string, teamName: string, captainName: string, noOfPlayers: number, teamCreated: Date) {
    this._teamId = teamId;
    this._teamName = teamName;
    this._captainName = captainName;
    this._noOfPlayers = noOfPlayers;
    this._teamCreated = teamCreated;
  }

  get teamId(): string {
    return this._teamId;
  }

  set teamId(value: string) {
    this._teamId = value;
  }

  get teamName(): string {
    return this._teamName;
  }

  set teamName(value: string) {
    this._teamName = value;
  }

  get captainName(): string {
    return this._captainName;
  }

  set captainName(value: string) {
    this._captainName = value;
  }

  get noOfPlayers(): number {
    return this._noOfPlayers;
  }

  set noOfPlayers(value: number) {
    this._noOfPlayers = value;
  }

  get teamCreated(): Date {
    return this._teamCreated;
  }

  set teamCreated(value: Date) {
    this._teamCreated = value;
  }
}
