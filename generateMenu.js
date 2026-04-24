const fs = require('fs');
const categories = ['Italian', 'Mexican', 'Asian', 'Indian', 'Desserts', 'Drinks'];
const items = [];
const adjectives = ['Roasted', 'Spicy', 'Crispy', 'Tender', 'Zesty', 'Savory', 'Sweet', 'Smoked', 'Glazed', 'Classic', 'Aged', 'Toasted', 'Sizzling', 'Creamy', 'Rich'];
const nouns = {
  'Italian': ['Pasta', 'Risotto', 'Pizza', 'Ravioli', 'Bruschetta', 'Gnocchi', 'Lasagna', 'Tiramisu', 'Gelato'],
  'Mexican': ['Tacos', 'Burrito', 'Enchiladas', 'Quesadilla', 'Fajitas', 'Guacamole', 'Churros', 'Tamales'],
  'Asian': ['Sushi', 'Ramen', 'Dumplings', 'Stir-fry', 'Bao', 'Curry', 'Pad Thai', 'Pho'],
  'Indian': ['Tikka Masala', 'Biryani', 'Samosa', 'Naan', 'Dal Makhani', 'Korma', 'Vindaloo', 'Paneer'],
  'Desserts': ['Cheesecake', 'Brownie', 'Tart', 'Macarons', 'Pudding', 'Souffle', 'Sorbet'],
  'Drinks': ['Mojito', 'Margarita', 'Espresso', 'Latte', 'Smoothie', 'Iced Tea', 'Lemonade']
};

let id = 1;
// First, keep the original 4 items so they don't lose the beautifully written descriptions
items.push(
  {
    id: 1,
    category: 'Italian',
    cuisine: 'ITALIAN / PRIMI',
    name: 'Tartufo Tagliatelle',
    description: 'Hand-cut ribbon pasta enveloped in a rich parmigiano emulsion, finished with generous shavings of seasonal black truffle.',
    price: '$42',
    image: '/images/tagliatelle.png',
    details: {
      ingredients: ['Fresh egg pasta', 'Parmigiano Reggiano 36-month', 'Seasonal black truffle', 'Cultured butter', 'Sea salt flakes'],
      preparation: 'Our tagliatelle is hand-cut daily from a silken egg dough, cooked to perfect al dente. The emulsion is built tableside using aged parmigiano and a ladleful of starchy pasta water, creating a velvety coating. Finished with generous shavings of freshly foraged seasonal truffle.',
      pairings: 'Barolo 2018, Marchesi di Barolo — pairs beautifully with the earthy truffle and rich parmesan.',
      dietary: ['Contains: Gluten, Dairy, Eggs']
    }
  },
  {
    id: 2,
    category: 'Asian',
    cuisine: 'ASIAN / STARTERS',
    name: 'Hokkaido Scallops',
    description: 'Pan-seared giant scallops resting on a vibrant yuzu-infused pea purée, garnished with crispy pancetta and micro-coriander.',
    price: '$38',
    image: '/images/scallops.png',
    details: {
      ingredients: ['Hokkaido diver scallops', 'English peas', 'Yuzu juice', 'Heritage pancetta', 'Micro-coriander', 'Brown butter'],
      preparation: 'Each scallop is hand-selected for its size and quality, seared in clarified butter until a deep golden crust forms while the center remains translucent. The pea purée is infused with fresh yuzu for brightness, and the pancetta adds a smoky counterpoint.',
      pairings: 'Chablis Premier Cru, Domaine William Fèvre — the minerality complements the sweetness of the scallops.',
      dietary: ['Contains: Shellfish, Dairy', 'Gluten-free']
    }
  },
  {
    id: 3,
    category: 'Italian',
    cuisine: 'ITALIAN / SECONDI',
    name: 'Bistecce Fiorentina',
    description: 'A monumental 32oz dry-aged porterhouse, charred over open wood flames and rested with roasted garlic and rosemary ash.',
    price: '$125',
    image: '/images/bistecca.png',
    details: {
      ingredients: ['32oz dry-aged porterhouse', 'Confit garlic', 'Fresh rosemary', 'Maldon sea salt', 'Extra virgin olive oil', 'Charcoal ash'],
      preparation: 'Our porterhouse is dry-aged for a minimum of 45 days, developing a deep beefy intensity. It is seared over white-hot oak coals, basted with rosemary-infused olive oil, and rested for exactly 12 minutes. Served on a warm platter with confit garlic and a dusting of rosemary ash.',
      pairings: 'Brunello di Montalcino 2016, Biondi-Santi — a powerful wine for a monumental cut.',
      dietary: ['Gluten-free', 'Dairy-free']
    }
  },
  {
    id: 4,
    category: 'Desserts',
    cuisine: 'DESSERT / DOLCI',
    name: 'Bronte Pistachio',
    description: 'Artisanal gelato spun with slow-roasted pistachios from Mount Etna, served with a delicate olive oil tuile.',
    price: '$16',
    image: '/images/pistachio-gelato.png',
    details: {
      ingredients: ['Bronte pistachios DOP', 'Sicilian cream', 'Tahitian vanilla', 'Olive oil tuile', 'Maldon salt'],
      preparation: 'The pistachios are sourced directly from Bronte, on the slopes of Mount Etna. They are slow-roasted to intensify their natural sweetness, then folded into a custard base and churned in small batches. The olive oil tuile adds a delicate crunch and a hint of savory complexity.',
      pairings: 'Moscato d\'Asti, Paolo Saracco — a light, effervescent dessert wine that echoes the nuttiness.',
      dietary: ['Contains: Dairy, Nuts', 'Gluten-free option available']
    }
  }
);

id = 5;

// Generate 46 more items to make 50
let usedImages = new Set();
for (let i = 0; i < 46; i++) {
  const category = categories[i % categories.length];
  const catNouns = nouns[category];
  const noun = catNouns[i % catNouns.length];
  const adj = adjectives[i % adjectives.length];
  const name = `${adj} ${noun}`;
  
  // Use lorempixel/loremflickr logic with locks to ensure unique images
  const imageId = id + 10; // offset to avoid standard locks
  const image = `https://loremflickr.com/800/600/food,${category.toLowerCase()}?lock=${imageId}`;
  
  items.push({
    id: id,
    category: category,
    cuisine: `${category.toUpperCase()} / SPECIALTY`,
    name: name,
    description: `A delightful and ${adj.toLowerCase()} ${noun.toLowerCase()} prepared with authentic ingredients and traditional techniques.`,
    price: `$${Math.floor(Math.random() * 40) + 10}`,
    image: image,
    details: {
      ingredients: ['Fresh ingredients', 'Secret spices', 'Love and care', 'Local produce'],
      preparation: `Slow cooked to perfection to bring out the ${adj.toLowerCase()} flavors of the ${noun.toLowerCase()}.`,
      pairings: 'Pairs wonderfully with our house wine or a refreshing craft beverage.',
      dietary: ['Gluten-free options available', 'May contain allergens']
    }
  });
  id++;
}

const fileContent = `export interface MenuItem {
  id: number;
  category: string;
  cuisine: string;
  name: string;
  description: string;
  price: string;
  image: string;
  details: {
    ingredients: string[];
    preparation: string;
    pairings: string;
    dietary: string[];
  };
}

export const menuItems: MenuItem[] = ${JSON.stringify(items, null, 2)};
`;

fs.writeFileSync('src/data/menuData.ts', fileContent);
console.log('Successfully generated 50 items in src/data/menuData.ts');
