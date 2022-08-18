export class Game {
    id: number;
    name: string;
    playtimeAlltime: number;
    imgUrl: string;
    playtimeWindows: number;
    playtimeMac: number;
    playtimeLinux: number;
    lastPlayed: number;

    constructor(id: number,
        name: string,
        playtimeAlltime: number,
        imgUrl: string,
        playtimeWindows: number,
        playtimeMac: number,
        playtimeLinux: number,
        lastPlayed: number){
    this.id = id;
    this.name = name;
    this.playtimeAlltime = playtimeAlltime;
    this.imgUrl = `https://media.steampowered.com/steamcommunity/public/images/apps/${id}/header.jpg`;
    this.playtimeWindows = playtimeWindows;
    this.playtimeMac = playtimeMac;
    this.playtimeLinux = playtimeLinux;
    this.lastPlayed = lastPlayed;


}
}
