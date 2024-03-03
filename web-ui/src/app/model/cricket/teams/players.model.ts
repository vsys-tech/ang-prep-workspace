export class Player {

  private _teamId : string;
  private _playerId: string;
  private _firstName: string;
  private _lastName: string;
  private _age: number;
  private _speciality: string;


  constructor(teamId: string, playerId: string, firstName: string, lastName: string, age: number, speciality: string) {
    this._teamId = teamId;
    this._playerId = playerId;
    this._firstName = firstName;
    this._lastName = lastName;
    this._age = age;
    this._speciality = speciality;
  }


  public get teamId(): string {
    return this._teamId;
  }

  public  set teamId(value: string) {
    this._teamId = value;
  }

  public  get playerId(): string {
    return this._playerId;
  }

  public  set playerId(value: string) {
    this._playerId = value;
  }

  public  get firstName(): string {
    return this._firstName;
  }

  public  set firstName(value: string) {
    this._firstName = value;
  }

  public  get lastName(): string {
    return this._lastName;
  }

  public  set lastName(value: string) {
    this._lastName = value;
  }

  public  get age(): number {
    return this._age;
  }

  public set age(value: number) {
    this._age = value;
  }

  public  get speciality(): string {
    return this._speciality;
  }

  public  set speciality(value: string) {
    this._speciality = value;
  }
}
