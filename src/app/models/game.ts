export class Game {
    appid: number;
    name: string;
    playtime_forever: number;
    //imgUrl: string;
    playtime_windows_forever: number;
    playtimeMac: number;
    playtime_linux_forever: number;
    rtime_last_played: number;

    constructor(appid: number,
        name: string,
        playtime_forever: number,
        playtime_windows_forever: number,
        playtimeMac: number,
        playtime_linux_forever: number,
        rtime_last_played: number) {
        this.appid = appid;
        this.name = name;
        this.playtime_forever = playtime_forever;
        //this.imgUrl = `https://steamcdn-a.akamaihd.net/steam/apps/240/header.jpg`;
        this.playtime_windows_forever = playtime_windows_forever;
        this.playtimeMac = playtimeMac;
        this.playtime_linux_forever = playtime_linux_forever;
        this.rtime_last_played = rtime_last_played;


    }
}
