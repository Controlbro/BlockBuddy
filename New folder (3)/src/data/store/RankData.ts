// IMPORT ASSETS
import rankGold from '../../assets/store/gold.png';
import rankSilver from '../../assets/store/silver.png';
import rankDiamond from '../../assets/store/ephemeral.png'; 

export const rankData = [
  {
    id: 'rank_coal',
    name: 'Coal Rank',
    price: 5.00,
    image: rankSilver,
    features: [
      'Prefix [Coal] di chat',
      'Akses /kit coal',
      '2x sethome limit',
      'White chat color'
    ]
  },
  {
    id: 'rank_gold',
    name: 'Gold Rank',
    price: 15.00,
    image: rankGold,
    features: [
      'Prefix [Gold] di chat',
      'Akses /kit gold',
      '5x sethome limit',
      'Akses /workbench virtual',
      'Yellow chat color'
    ],
    isPopular: true
  },
  {
    id: 'rank_diamond',
    name: 'Diamond Rank',
    price: 30.00,
    image: rankDiamond,
    features: [
      'Prefix [Diamond] di chat',
      'Akses /kit diamond',
      '10x sethome limit',
      'Akses /fly di lobby',
      'Akses /ec (Enderchest)',
      'Blue chat color'
    ]
  }
];