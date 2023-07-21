import images from './images';

const wines = [
  {
    title: 'Neer Mor',
    price: ' ₹80',
    tags: 'buttermilk|ginger|green chilies|curry leaves | Bottle',
  },
  {
    title: 'Panakam',
    price: ' ₹100',
    tags: 'Jaggery| ginger|cardamom| Bottle',
  },
  {
    title: 'Nannari Sharbat',
    price: ' ₹120',
    tags: 'Roots of Nannari| sugar or jaggery| 750 ml',
  },
  {
    title: 'Tender Coconut Water',
    price: ' ₹60',
    tags: 'Fresh and Natural| 750 ml',
  },
  {
    title: 'Karupatti Coffee',
    price: ' ₹90',
    tags: 'Palm Jaggery| Cup',
  },
  {
    title: 'Pulicha Kaapi',
    price: ' ₹90',
    tags: 'Tamarind-infused coffee | Cup',
  },
];

const cocktails = [
  {
    title: 'Madras Mule',
    price: ' ₹220',
    tags: 'Vodka | Ginger beer|limejuice |Mango Pulp | 500 ml',
  },
  {
    title: "Chettinad Sour",
    price: ' ₹250',
    tags: 'Whiskey | lime Juice| Homemade Spicy Syrup | 250ml',
  },
  {
    title: 'Jigarthanda Delight',
    price: ' ₹280',
    tags: 'Bourbon | Coffee Liqueur | Sugar| almond syrup| 250ml',
  },
  {
    title: 'Kovil THenga',
    price: ' ₹200',
    tags: 'Coconut Rum | Pineapple Juice | A Splash of Lime',
  },
  {
    title: 'Kurinji Sangria',
    price: ' ₹250',
    tags: 'Red Wine | Mixed Fruits| spices | 250ml',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { wines, cocktails, awards };
