export interface FaqItem {
  id: number;
  question: string;
  asker: string; 
  answer: string;
  responder: string;
}

export const faqData: FaqItem[] = [
  {
    id: 1,
    asker: "Steve",
    question: "How do I claim land to protect my builds?",
    responder: "Agnes",
    answer: "It's simple! You can use a Golden Shovel to claim land. Just right-click one corner of your area, then right-click the opposite corner. You can also use /claim for more info."
  },
  {
    id: 2,
    asker: "Alex",
    question: "Is griefing allowed on the server?",
    responder: "Jeb_",
    answer: "It depends on the server mode! On Survival Earth, griefing is strictly prohibited. However, on Donut SMP and Anarchy servers, griefing and raiding are fully allowed."
  },
  {
    id: 3,
    asker: "Dream",
    question: "Can I play on Bedrock Edition (PE/Console)?",
    responder: "Dinnerbone",
    answer: "Yes, absolutely! We support GeyserMC. Bedrock players can join using the same IP: play.moonveil.net with the default port (19132)."
  },
  {
    id: 4,
    asker: "Techno",
    question: "How do I get money in the Survival server?",
    responder: "Grumm",
    answer: "There are many ways! You can join a Job (/jobs), sell items to the server shop (/shop), or trade with other players in the Global Market (/ah)."
  },
  {
    id: 5,
    asker: "Grian",
    question: "I found a hacker/cheater. How do I report them?",
    responder: "Sunny",
    answer: "Please do not call them out in public chat. Instead, use /report <player> <reason> in-game, or open a ticket on our Discord server with video evidence."
  },
  {
    id: 6,
    asker: "MumboJumbo",
    question: "Are Redstone clocks allowed?",
    responder: "Kai",
    answer: "Small redstone mechanisms are fine, but massive lag machines or ultra-fast clocks that drop TPS will be removed by our anti-lag system."
  }
];