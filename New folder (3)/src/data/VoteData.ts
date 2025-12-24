// IMPORT ASSETS 
import planetMc from '../assets/vote/planetminecraft.webp';
import mcMp from '../assets/vote/minecraft-mp.webp';
import topG from '../assets/vote/topg.webp';
import mcServerList from '../assets/vote/minecraft-servernet.webp';
import serverPact from '../assets/vote/serverpact.webp';

export interface VoteSite {
  id: number;
  name: string;
  url: string; 
  image: string; 
  reward: string;
}

export const voteData: VoteSite[] = [
  {
    id: 1,
    name: "Planet Minecraft",
    url: "https://www.planetminecraft.com/",
    image: planetMc,
    reward: "1x Vote Crate Key + $500"
  },
  {
    id: 2,
    name: "Minecraft-MP",
    url: "https://minecraft-mp.com/",
    image: mcMp,
    reward: "1x Vote Crate Key + $500"
  },
  {
    id: 3,
    name: "TopG",
    url: "https://topg.org/minecraft-servers/",
    image: topG,
    reward: "1x Vote Crate Key + $500"
  },
  {
    id: 4,
    name: "Minecraft Server Net",
    url: "https://minecraft-server.net/",
    image: mcServerList,
    reward: "1x Vote Crate Key + $500"
  },
  {
    id: 5,
    name: "ServerPact",
    url: "https://www.serverpact.com/",
    image: serverPact,
    reward: "1x Vote Crate Key + $500"
  }
];