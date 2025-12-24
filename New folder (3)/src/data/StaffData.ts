export interface StaffMember {
  name: string;
  role: string; 
  description: string;
  customImage?: string;
}

export interface StaffCategory {
  title: string;
  color: string;
  members: StaffMember[];
}

export const staffData: StaffCategory[] = [
  {
    title: "High Management",
    color: "bg-red-100 text-red-600 border-red-200",
    members: [
      {
        name: "gaeuly",
        role: "Founder & Owner",
        description: "The mastermind behind Moonveil. Overseeing all server operations and development direction.",
        customImage: "https://i.imgur.com/IwLa5S0.png"
      },
      {
        name: "Jeb_",
        role: "Co-Founder",
        description: "Ensures the server runs smoothly and handles high-level administrative tasks.",
      }
    ]
  },
  {
    title: "Development Team",
    color: "bg-blue-100 text-blue-600 border-blue-200",
    members: [
      {
        name: "Dinnerbone",
        role: "Lead Developer",
        description: "Coding plugins, fixing bugs, and creating custom mechanics for the server.",
      },
      {
        name: "Grumm",
        role: "Web Developer",
        description: "Maintains the website and store infrastructure.",
      }
    ]
  },
  {
    title: "Administration",
    color: "bg-purple-100 text-purple-600 border-purple-200",
    members: [
      {
        name: "Agnes",
        role: "Head Admin",
        description: "Manages the staff team and handles ban appeals.",
      },
      {
        name: "Vu_Bui",
        role: "Admin",
        description: "In-game supervision and event coordination.",
      }
    ]
  },
  {
    title: "Moderation",
    color: "bg-green-100 text-green-600 border-green-200",
    members: [
      {
        name: "Sunny",
        role: "Senior Mod",
        description: "Keeps the chat clean and helps players with issues.",
      },
      {
        name: "Kai",
        role: "Moderator",
        description: "Enforcing rules and monitoring gameplay.",
      },
      {
        name: "Makena",
        role: "Helper",
        description: "New staff member assisting with basic player questions.",
      }
    ]
  }
];