const fs = require('fs');
const https = require('https');

// Keep original 4 items
const originalItems = [
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
];

const fetchMeals = (letter) => {
  return new Promise((resolve, reject) => {
    https.get(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => resolve(JSON.parse(data).meals || []));
    }).on('error', reject);
  });
};

async function generate() {
  const letters = ['b', 'c', 'p', 's', 'm', 'r'];
  let meals = [];
  
  for (const letter of letters) {
    const fetched = await fetchMeals(letter);
    meals = meals.concat(fetched);
    if (meals.length >= 46) break;
  }
  
  // We need exactly 46 meals
  meals = meals.slice(0, 46);
  
  let id = 5;
  const newItems = meals.map(meal => {
    // Map MealDB categories to our categories
    let mappedCategory = 'Other';
    const c = meal.strCategory;
    if (c === 'Pasta' || c === 'Italian') mappedCategory = 'Italian';
    else if (c === 'Dessert') mappedCategory = 'Desserts';
    else if (c === 'Seafood' || c === 'Chicken' || c === 'Beef' || c === 'Pork' || c === 'Lamb') mappedCategory = 'Meat & Seafood';
    else if (c === 'Vegetarian' || c === 'Vegan') mappedCategory = 'Vegetarian';
    else mappedCategory = c;
    
    // Some valid categories for our filter pills
    const validCats = ['Italian', 'Mexican', 'Asian', 'Indian', 'Desserts', 'Drinks', 'Meat & Seafood', 'Vegetarian', 'Miscellaneous'];
    if (!validCats.includes(mappedCategory)) mappedCategory = 'Miscellaneous';

    // Extract ingredients
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ing = meal[`strIngredient${i}`];
      if (ing && ing.trim()) {
        ingredients.push(ing);
      }
    }

    const item = {
      id: id++,
      category: mappedCategory,
      cuisine: `${mappedCategory.toUpperCase()} / SPECIALTY`,
      name: meal.strMeal,
      description: meal.strInstructions.substring(0, 150).replace(/\r\n/g, ' ') + '...',
      price: `$${Math.floor(Math.random() * 35) + 15}`,
      image: meal.strMealThumb,
      details: {
        ingredients: ingredients.slice(0, 8), // just take first 8
        preparation: meal.strInstructions.replace(/\r\n/g, ' '),
        pairings: `Pairs wonderfully with our chef's recommended beverages.`,
        dietary: []
      }
    };
    return item;
  });

  const allItems = [...originalItems, ...newItems];

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

export const menuItems: MenuItem[] = ${JSON.stringify(allItems, null, 2)};
`;

  fs.writeFileSync('src/data/menuData.ts', fileContent);
  console.log('Successfully generated 50 items with real images in src/data/menuData.ts');
}

generate().catch(console.error);
