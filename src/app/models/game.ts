interface GameResponse{
    appid: number; 
    name: string; 
    playtime_forever: number;
    playtime_windows_forever: number;
    playtimeMac: number;
    playtime_linux_forever: number;
    rtime_last_played: number;
}

export class Game {
    appid: number;
    name: string;
    playtime_forever: number;
    playtime_windows_forever: number;
    playtimeMac: number;
    playtime_linux_forever: number;
    rtime_last_played: number;
    

    //additional props 
    value: number;

    constructor(rawResponse: GameResponse) {
        this.appid = rawResponse.appid;
        this.name = rawResponse.name;
        this.playtime_forever = rawResponse.playtime_forever;
        this.playtime_windows_forever = rawResponse.playtime_windows_forever;
        this.playtimeMac = rawResponse.playtimeMac;
        this.playtime_linux_forever = rawResponse.playtime_linux_forever;
        this.rtime_last_played = rawResponse.rtime_last_played;

        this.value = rawResponse.playtime_forever + rawResponse.playtime_windows_forever;
        

    }
}
