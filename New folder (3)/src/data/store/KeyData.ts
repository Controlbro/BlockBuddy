// IMPORT ASSETS
import keyCommon from '../../assets/store/key.png'; 
// Later you can add other files like key_rare.webp, key_mythic.webp

export const keyData = [
  {
    id: 'key_vote',
    name: 'Vote Crate Key',
    price: 1.50,
    image: keyCommon,
    description: "Dapatkan item basic resource dan uang in-game.",
    amount: 1
  },
  {
    id: 'key_rare',
    name: 'Rare Crate Key',
    price: 4.50,
    image: keyCommon,
    description: "Kesempatan mendapatkan gear enchant level menengah.",
    amount: 1,
    isPopular: true
  },
  {
    id: 'key_mythic',
    name: 'Mythic Crate Key',
    price: 9.99,
    image: keyCommon,
    description: "Gacha tier tertinggi! Berisi item legendary dan rank upgrade.",
    amount: 1
  },
  {
    id: 'key_bundle',
    name: '5x Mythic Bundle',
    price: 39.99,
    image: keyCommon,
    description: "Paket hemat 5 kunci Mythic sekaligus.",
    amount: 5,
    discount: "20% OFF"
  }
];