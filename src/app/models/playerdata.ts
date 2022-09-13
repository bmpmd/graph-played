import { NumberValue } from "d3";
import { last } from "rxjs";

interface DataResponse{
    steamid: string; 
    communityvisibilitystate: number; 
    profilestate: number; 
    personaname: string; 
    commentpermission:number;
    profileurl: string; 
    avatar: string;
    avatarmedium: string; 
    avatarfull: string;
    avatarhash: string; 
    lastlogoff: number;
    personastate:number; 
    primaryclanid:number;
    timecreated: number; 
    personastateflags:number; 
}

export class PlayerData {
    steamid: string; 
    communityvisibilitystate: number; 
    profilestate: number; 
    personaname: string; 
    commentpermission:number;
    profileurl: string; 
    avatar: string;
    avatarmedium: string; 
    avatarfull: string;
    avatarhash: string; 
    lastlogoff: number;
    personastate:number; 
    primaryclanid:number;
    timecreated: number; 
    personastateflags:number; 
    

    

    constructor(rawResponse: DataResponse) {
        this.steamid = rawResponse.steamid;
        this.communityvisibilitystate = rawResponse.communityvisibilitystate;
        this.profilestate = rawResponse.profilestate;

        this.personaname = rawResponse.personaname;
        this.commentpermission = rawResponse.commentpermission;

        this.profileurl = rawResponse.profileurl;
        this.avatar = rawResponse.avatar;
        this.avatarmedium = rawResponse.avatarmedium;
        this.avatarfull = rawResponse.avatarfull;
        this.avatarhash = rawResponse.avatarhash;
        this.lastlogoff = rawResponse.lastlogoff;
        this.personastate = rawResponse.personastate;
        this.primaryclanid = rawResponse.primaryclanid;
        this.timecreated = rawResponse.timecreated;
        this.personastateflags = rawResponse.personastateflags;
    }
}