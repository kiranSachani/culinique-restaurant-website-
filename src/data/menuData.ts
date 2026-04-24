export interface MenuItem {
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

export const menuItems: MenuItem[] = [
  {
    "id": 1,
    "category": "Italian",
    "cuisine": "ITALIAN / PRIMI",
    "name": "Tartufo Tagliatelle",
    "description": "Hand-cut ribbon pasta enveloped in a rich parmigiano emulsion, finished with generous shavings of seasonal black truffle.",
    "price": "$42",
    "image": "/images/tagliatelle.png",
    "details": {
      "ingredients": [
        "Fresh egg pasta",
        "Parmigiano Reggiano 36-month",
        "Seasonal black truffle",
        "Cultured butter",
        "Sea salt flakes"
      ],
      "preparation": "Our tagliatelle is hand-cut daily from a silken egg dough, cooked to perfect al dente. The emulsion is built tableside using aged parmigiano and a ladleful of starchy pasta water, creating a velvety coating. Finished with generous shavings of freshly foraged seasonal truffle.",
      "pairings": "Barolo 2018, Marchesi di Barolo — pairs beautifully with the earthy truffle and rich parmesan.",
      "dietary": [
        "Contains: Gluten, Dairy, Eggs"
      ]
    }
  },
  {
    "id": 2,
    "category": "Asian",
    "cuisine": "ASIAN / STARTERS",
    "name": "Hokkaido Scallops",
    "description": "Pan-seared giant scallops resting on a vibrant yuzu-infused pea purée, garnished with crispy pancetta and micro-coriander.",
    "price": "$38",
    "image": "/images/scallops.png",
    "details": {
      "ingredients": [
        "Hokkaido diver scallops",
        "English peas",
        "Yuzu juice",
        "Heritage pancetta",
        "Micro-coriander",
        "Brown butter"
      ],
      "preparation": "Each scallop is hand-selected for its size and quality, seared in clarified butter until a deep golden crust forms while the center remains translucent. The pea purée is infused with fresh yuzu for brightness, and the pancetta adds a smoky counterpoint.",
      "pairings": "Chablis Premier Cru, Domaine William Fèvre — the minerality complements the sweetness of the scallops.",
      "dietary": [
        "Contains: Shellfish, Dairy",
        "Gluten-free"
      ]
    }
  },
  {
    "id": 3,
    "category": "Italian",
    "cuisine": "ITALIAN / SECONDI",
    "name": "Bistecce Fiorentina",
    "description": "A monumental 32oz dry-aged porterhouse, charred over open wood flames and rested with roasted garlic and rosemary ash.",
    "price": "$125",
    "image": "/images/bistecca.png",
    "details": {
      "ingredients": [
        "32oz dry-aged porterhouse",
        "Confit garlic",
        "Fresh rosemary",
        "Maldon sea salt",
        "Extra virgin olive oil",
        "Charcoal ash"
      ],
      "preparation": "Our porterhouse is dry-aged for a minimum of 45 days, developing a deep beefy intensity. It is seared over white-hot oak coals, basted with rosemary-infused olive oil, and rested for exactly 12 minutes. Served on a warm platter with confit garlic and a dusting of rosemary ash.",
      "pairings": "Brunello di Montalcino 2016, Biondi-Santi — a powerful wine for a monumental cut.",
      "dietary": [
        "Gluten-free",
        "Dairy-free"
      ]
    }
  },
  {
    "id": 4,
    "category": "Desserts",
    "cuisine": "DESSERT / DOLCI",
    "name": "Bronte Pistachio",
    "description": "Artisanal gelato spun with slow-roasted pistachios from Mount Etna, served with a delicate olive oil tuile.",
    "price": "$16",
    "image": "/images/pistachio-gelato.png",
    "details": {
      "ingredients": [
        "Bronte pistachios DOP",
        "Sicilian cream",
        "Tahitian vanilla",
        "Olive oil tuile",
        "Maldon salt"
      ],
      "preparation": "The pistachios are sourced directly from Bronte, on the slopes of Mount Etna. They are slow-roasted to intensify their natural sweetness, then folded into a custard base and churned in small batches. The olive oil tuile adds a delicate crunch and a hint of savory complexity.",
      "pairings": "Moscato d'Asti, Paolo Saracco — a light, effervescent dessert wine that echoes the nuttiness.",
      "dietary": [
        "Contains: Dairy, Nuts",
        "Gluten-free option available"
      ]
    }
  },
  {
    "id": 5,
    "category": "Miscellaneous",
    "cuisine": "MISCELLANEOUS / SPECIALTY",
    "name": "Baba Ghanoush",
    "description": "Preheat an outdoor grill for medium-high heat and lightly oil the grate. Prick the surface of the skin of eggplants several times with the tip of a kn...",
    "price": "$30",
    "image": "https://www.themealdb.com/images/media/meals/dlmh401760524897.jpg",
    "details": {
      "ingredients": [
        "Egg Plants",
        "Garlic",
        "Kosher Salt",
        "Lemon",
        "Tahini",
        "Extra Virgin Olive Oil",
        "Greek Yogurt",
        "Cayenne Pepper"
      ],
      "preparation": "Preheat an outdoor grill for medium-high heat and lightly oil the grate. Prick the surface of the skin of eggplants several times with the tip of a knife.  Place eggplants directly on grill. Turn frequently with tongs while skin chars. Cook until eggplants have collapsed and are very soft, 25 to 30 minutes. Transfer to a bowl and cover tightly with aluminum foil and allow to cool, about 15 minutes.  When eggplants are cool enough to handle, split them in half and scrape flesh into a colander placed over a bowl. Drain 5 or 10 minutes.  Transfer eggplant to mixing bowl. Add crushed garlic and salt; mash until creamy but with a little texture, about 5 minutes. Whisk in lemon juice, tahini, olive oil, and cayenne pepper. Stir in yogurt.  Cover bowl with plastic wrap and refrigerate until completely chilled. Stir in mint and parsley, and taste to adjust seasonings before serving.",
      "pairings": "Pairs wonderfully with our chef's recommended beverages.",
      "dietary": []
    }
  },
  {
    "id": 6,
    "category": "Vegetarian",
    "cuisine": "VEGETARIAN / SPECIALTY",
    "name": "Baingan Bharta",
    "description": "Rinse the baingan (eggplant or aubergine) in water. Pat dry with a kitchen napkin. Apply some oil all over and keep it for roasting on an open flame....",
    "price": "$17",
    "image": "https://www.themealdb.com/images/media/meals/urtpqw1487341253.jpg",
    "details": {
      "ingredients": [
        "Aubergine",
        "Onion",
        "Tomatoes",
        "Garlic",
        "Green Chilli",
        "Red Chilli Powder",
        "Oil",
        "Coriander Leaves"
      ],
      "preparation": "Rinse the baingan (eggplant or aubergine) in water. Pat dry with a kitchen napkin. Apply some oil all over and keep it for roasting on an open flame. You can also grill the baingan or roast in the oven. But then you won't get the smoky flavor of the baingan. Keep the eggplant turning after a 2 to 3 minutes on the flame, so that its evenly cooked. You could also embed some garlic cloves in the baingan and then roast it. 2. Roast the aubergine till its completely cooked and tender. With a knife check the doneness. The knife should slid easily in aubergines without any resistance. Remove the baingan and immerse in a bowl of water till it cools down. 3. You can also do the dhungar technique of infusing charcoal smoky flavor in the baingan. This is an optional step. Use natural charcoal for this method. Heat a small piece of charcoal on flame till it becomes smoking hot and red. 4. Make small cuts on the baingan with a knife. Place the red hot charcoal in the same plate where the roasted aubergine is kept. Add a few drops of oil on the charcoal. The charcoal would begin to smoke. 5. As soon as smoke begins to release from the charcoal, cover the entire plate tightly with a large bowl. Allow the charcoal smoke to get infused for 1 to 2 minutes. The more you do, the more smoky the baingan bharta will become. I just keep for a minute. Alternatively, you can also do this dhungar method once the baingan bharta is cooked, just like the way we do for Dal Tadka. 6. Peel the skin from the roasted and smoked eggplant. 7. Chop the cooked eggplant finely or you can even mash it. 8. In a kadai or pan, heat oil. Then add finely chopped onions and garlic. 9. Saute the onions till translucent. Don't brown them. 10. Add chopped green chilies and saute for a minute. 11. Add the chopped tomatoes and mix it well. 12. Bhuno (saute) the tomatoes till the oil starts separating from the mixture. 13. Now add the red chili powder. Stir and mix well. 14. Add the chopped cooked baingan. 15. Stir and mix the chopped baingan very well with the onion­tomato masala mixture. 16. Season with salt. Stir and saute for some more 4 to 5 minutes more. 17. Finally stir in the coriander leaves with the baingan bharta or garnish it with them. Serve Baingan Bharta with phulkas, rotis or chapatis. It goes well even with bread, toasted or grilled bread and plain rice or jeera rice.",
      "pairings": "Pairs wonderfully with our chef's recommended beverages.",
      "dietary": []
    }
  },
  {
    "id": 7,
    "category": "Meat & Seafood",
    "cuisine": "MEAT & SEAFOOD / SPECIALTY",
    "name": "Baked salmon with fennel & tomatoes",
    "description": "Heat oven to 180C/fan 160C/gas 4. Trim the fronds from the fennel and set aside. Cut the fennel bulbs in half, then cut each half into 3 wedges. Cook ...",
    "price": "$28",
    "image": "https://www.themealdb.com/images/media/meals/1548772327.jpg",
    "details": {
      "ingredients": [
        "Fennel",
        "Parsley",
        "Lemon",
        "Cherry Tomatoes",
        "Olive Oil",
        "Salmon",
        "Black Olives"
      ],
      "preparation": "Heat oven to 180C/fan 160C/gas 4. Trim the fronds from the fennel and set aside. Cut the fennel bulbs in half, then cut each half into 3 wedges. Cook in boiling salted water for 10 mins, then drain well. Chop the fennel fronds roughly, then mix with the parsley and lemon zest.  Spread the drained fennel over a shallow ovenproof dish, then add the tomatoes. Drizzle with olive oil, then bake for 10 mins. Nestle the salmon among the veg, sprinkle with lemon juice, then bake 15 mins more until the fish is just cooked. Scatter over the parsley and serve.",
      "pairings": "Pairs wonderfully with our chef's recommended beverages.",
      "dietary": []
    }
  },
  {
    "id": 8,
    "category": "Desserts",
    "cuisine": "DESSERTS / SPECIALTY",
    "name": "Bakewell tart",
    "description": "To make the pastry, measure the flour into a bowl and rub in the butter with your fingertips until the mixture resembles fine breadcrumbs. Add the wat...",
    "price": "$43",
    "image": "https://www.themealdb.com/images/media/meals/wyrqqq1468233628.jpg",
    "details": {
      "ingredients": [
        "plain flour",
        "chilled butter",
        "cold water",
        "raspberry jam",
        "butter",
        "caster sugar",
        "ground almonds",
        "free-range egg, beaten"
      ],
      "preparation": "To make the pastry, measure the flour into a bowl and rub in the butter with your fingertips until the mixture resembles fine breadcrumbs. Add the water, mixing to form a soft dough. Roll out the dough on a lightly floured work surface and use to line a 20cm/8in flan tin. Leave in the fridge to chill for 30 minutes. Preheat the oven to 200C/400F/Gas 6 (180C fan). Line the pastry case with foil and fill with baking beans. Bake blind for about 15 minutes, then remove the beans and foil and cook for a further five minutes to dry out the base. For the filing, spread the base of the flan generously with raspberry jam. Melt the butter in a pan, take off the heat and then stir in the sugar. Add ground almonds, egg and almond extract. Pour into the flan tin and sprinkle over the flaked almonds. Bake for about 35 minutes. If the almonds seem to be browning too quickly, cover the tart loosely with foil to prevent them burning.",
      "pairings": "Pairs wonderfully with our chef's recommended beverages.",
      "dietary": []
    }
  },
  {
    "id": 9,
    "category": "Desserts",
    "cuisine": "DESSERTS / SPECIALTY",
    "name": "Baklava with spiced nuts, ricotta & chocolate",
    "description": "step 1 First, make the syrup. Tip the sugar into a large saucepan with 650ml water. Stir over a low heat until the sugar has dissolved, then turn up ...",
    "price": "$16",
    "image": "https://www.themealdb.com/images/media/meals/ytme8t1764111401.jpg",
    "details": {
      "ingredients": [
        "Sugar",
        "Lemon Juice",
        "Walnuts",
        "Pecan Nuts",
        "Almonds",
        "Ground Cinnamon",
        "Ground Cardomom",
        "Ricotta"
      ],
      "preparation": "step 1 First, make the syrup. Tip the sugar into a large saucepan with 650ml water. Stir over a low heat until the sugar has dissolved, then turn up the heat and bring to the boil. Reduce the heat to a simmer and cook for 15 mins, then squeeze in a few drops of lemon juice and simmer for a further 5 mins. Remove from the heat and leave to cool. Meanwhile, for assembling the baklava later, melt the butter in a small pan over a low heat for 5 mins, skimming and discarding any froth that rises to the surface.  step 2 For the filling, crush all of the nuts in a pestle and mortar, or blitz in a food processor – you want a mixture of finely ground nuts with a few chunky pieces. Tip into a bowl, stir through the spices and set aside.  step 3 In a separate bowl, mix the ricotta with the lemon and orange zests and vanilla. Heat the oven to 180C/160C fan/gas 4. Brush the bottom of a large baking tray (about 35 x 47cm) with some of the melted butter. Working with one sheet of filo at a time (covering the rest with a damp tea towel to prevent it drying out), lay the sheet out on a board so one of the short ends is facing you. Sprinkle 30g of the nut mixture evenly over the whole sheet, then spoon 1 tbsp of the ricotta mixture across the end closest to you. Fold this end over to enclose the filling, then lay a long, thin skewer next to the folded edge and roll the pastry around it to create a long roll. When it’s fully rolled up, it should be roughly the thickness of a chipolata sausage. While holding one end of the rolling pin or skewer, gently scrunch the filo roll like an accordion and carefully push it off the skewer and onto the prepared tray. Repeat with the rest of the filo and fillings – you should get about 12 rolls. Cut each roll into four to make 48 large baklava, or eight to make 96 mini.  step 4 Brush with the remaining melted butter. Bake for 20-25 mins until evenly golden, turning the tray around halfway through. While still hot, immediately pour over 5-6 ladlefuls of the syrup. You should hear the syrup sizzle as it hits the hot baklava. Set aside to cool and absorb.  step 5 Melt the dark chocolate in a heatproof bowl set over a pan of simmering water, ensuring the bowl doesn’t touch the water, or in the microwave in short bursts. Drizzle this over the cooled baklava and sprinkle with the ground pistachios.",
      "pairings": "Pairs wonderfully with our chef's recommended beverages.",
      "dietary": []
    }
  },
  {
    "id": 10,
    "category": "Desserts",
    "cuisine": "DESSERTS / SPECIALTY",
    "name": "Banana Pancakes",
    "description": "In a bowl, mash the banana with a fork until it resembles a thick purée. Stir in the eggs, baking powder and vanilla. Heat a large non-stick frying p...",
    "price": "$21",
    "image": "https://www.themealdb.com/images/media/meals/sywswr1511383814.jpg",
    "details": {
      "ingredients": [
        "Banana",
        "Eggs",
        "Baking Powder",
        "Vanilla Extract",
        "Oil",
        "Pecan Nuts",
        "Raspberries"
      ],
      "preparation": "In a bowl, mash the banana with a fork until it resembles a thick purée. Stir in the eggs, baking powder and vanilla. Heat a large non-stick frying pan or pancake pan over a medium heat and brush with half the oil. Using half the batter, spoon two pancakes into the pan, cook for 1-2 mins each side, then tip onto a plate. Repeat the process with the remaining oil and batter. Top the pancakes with the pecans and raspberries.",
      "pairings": "Pairs wonderfully with our chef's recommended beverages.",
      "dietary": []
    }
  },
  {
    "id": 11,
    "category": "Meat & Seafood",
    "cuisine": "MEAT & SEAFOOD / SPECIALTY",
    "name": "Bang bang prawn salad",
    "description": "step 1 Cook the noodles following pack instructions, then rinse under cold water and drain thoroughly. In a small saucepan melt together the peanut b...",
    "price": "$44",
    "image": "https://www.themealdb.com/images/media/meals/4xcfai1763765676.jpg",
    "details": {
      "ingredients": [
        "Rice Noodles",
        "Peanut Butter",
        "Coconut Milk",
        "sweet chilli sauce",
        "Spring Onions",
        "Cucumber",
        "Bean Sprouts",
        "Prawns"
      ],
      "preparation": "step 1 Cook the noodles following pack instructions, then rinse under cold water and drain thoroughly. In a small saucepan melt together the peanut butter, coconut milk, sweet chilli sauce and half the spring onions, adding 1-2 tbsp of water to loosen the mixture to a drizzling consistency.  step 2 Mix the noodles, cucumber and beansprouts in a serving dish. Top with the prawns, drizzle over the peanut sauce and scatter over the remaining spring onions.",
      "pairings": "Pairs wonderfully with our chef's recommended beverages.",
      "dietary": []
    }
  },
  {
    "id": 12,
    "category": "Meat & Seafood",
    "cuisine": "MEAT & SEAFOOD / SPECIALTY",
    "name": "Barbecue pork buns",
    "description": "step 1 Heat the oven to 200C/fan 180C/gas. Mix the sugar into the bread mix in a large bowl, then add water as instructed on the pack. Bring the doug...",
    "price": "$43",
    "image": "https://www.themealdb.com/images/media/meals/tzsy461763769901.jpg",
    "details": {
      "ingredients": [
        "Sugar",
        "White Bread Mix",
        "Sunflower Oil",
        "Bacon",
        "Ginger",
        "Garlic",
        "Soy Sauce",
        "Clear Honey"
      ],
      "preparation": "step 1 Heat the oven to 200C/fan 180C/gas. Mix the sugar into the bread mix in a large bowl, then add water as instructed on the pack. Bring the dough together with a wooden spoon, then knead on a lightly floured surface for 5 mins until smooth. Put into a large bowl, cover with oiled cling film then leave in a warm place until doubled in size.  step 2 Meanwhile, heat the oil in a pan, then fry the bacon until crisp, about 5 mins. Add the ginger and garlic and fry for 1 min until soft, then tip in the soy, honey and tomato purée and stir well. Can be made up to 3 days ahead.  step 3 Turn out the dough and knead briefly, then pull into 12 even-sized balls. Flatten with your hands, then put a teaspoon-size blob of the filling in the middle. Draw the dough up and pinch it closed like a purse, then turn the bun over and sit it on a large baking sheet. Cover with oiled cling film and leave to rise for about 30 mins until the dough feels pillowy. Brush with egg and bake for 20 mins until golden. Serve warm with dipping sauce. Can be frozen after second rise for up to 1 month or baked up to a day ahead and re-warmed.",
      "pairings": "Pairs wonderfully with our chef's recommended beverages.",
      "dietary": []
    }
  },
  {
    "id": 13,
    "category": "Meat & Seafood",
    "cuisine": "MEAT & SEAFOOD / SPECIALTY",
    "name": "Barramundi with Moroccan spices",
    "description": "step 1 Tip all the dressing ingredients into a food processor with a pinch of salt and blitz to a dressing. Slash the fish three times on each side, ...",
    "price": "$24",
    "image": "https://www.themealdb.com/images/media/meals/4o4wh11761848573.jpg",
    "details": {
      "ingredients": [
        "barramundi",
        "Ground Cumin",
        "Coriander",
        "Paprika",
        "Chili Powder",
        "Garlic Clove",
        "Lemon",
        "Olive Oil"
      ],
      "preparation": "step 1 Tip all the dressing ingredients into a food processor with a pinch of salt and blitz to a dressing. Slash the fish three times on each side, coat with half of the dressing, then set aside to marinate for about 30 mins.  step 2 Heat oven to 220C/fan 200C/gas 7. Place the fish on a roasting tray, then cook in the oven for 20 mins until the flesh is firm and the eyes have turned white. Serve the fish with the rest of the dressing and steamed couscous or rice.  step 3 KNOW HOW: HOW TO COOK IT: Cooking barramundi on the bone, as we have done here, has its advantages – it will stay more moist during cooking, and some would say that the flavour is enhanced, too. If you want to take out the bones they are easy to locate and less likely to be lodged in the fillet if the fish is cooked whole. Fillets can be simply pan-fried or grilled. If you like trout, you will really enjoy the flavour of barramundi, which lends itself to similar ingredients and cooking methods – citrus flavours are particularly good, as are garlic and wild mushrooms. Simply roasting the fish with some fresh herbs, olive oil and seasoning is delicious, and in the summer months you could barbecue it, too. One thing that you mustn’t miss are the cheeks or ‘pearls’ of the fish, these are simply lovely, moist and really sweet – well worth leaving the head on for!",
      "pairings": "Pairs wonderfully with our chef's recommended beverages.",
      "dietary": []
    }
  },
  {
    "id": 14,
    "category": "Desserts",
    "cuisine": "DESSERTS / SPECIALTY",
    "name": "Battenberg Cake",
    "description": "Heat oven to 180C/160C fan/gas 4 and line the base and sides of a 20cm square tin with baking parchment (the easiest way is to cross 2 x 20cm-long str...",
    "price": "$40",
    "image": "https://www.themealdb.com/images/media/meals/ywwrsp1511720277.jpg",
    "details": {
      "ingredients": [
        "Butter",
        "Caster Sugar",
        "Self-raising Flour",
        "Almonds",
        "Baking Powder",
        "Eggs",
        "Vanilla Extract",
        "Almond Extract"
      ],
      "preparation": "Heat oven to 180C/160C fan/gas 4 and line the base and sides of a 20cm square tin with baking parchment (the easiest way is to cross 2 x 20cm-long strips over the base). To make the almond sponge, put the butter, sugar, flour, ground almonds, baking powder, eggs, vanilla and almond extract in a large bowl. Beat with an electric whisk until the mix comes together smoothly. Scrape into the tin, spreading to the corners, and bake for 25-30 mins – when you poke in a skewer, it should come out clean. Cool in the tin for 10 mins, then transfer to a wire rack to finish cooling while you make the second sponge. For the pink sponge, line the tin as above. Mix all the ingredients together as above, but don’t add the almond extract. Fold in some pink food colouring. Then scrape it all into the tin and bake as before. Cool. To assemble, heat the jam in a small pan until runny, then sieve. Barely trim two opposite edges from the almond sponge, then well trim a third edge. Roughly measure the height of the sponge, then cutting from the well-trimmed edge, use a ruler to help you cut 4 slices each the same width as the sponge height. Discard or nibble leftover sponge. Repeat with pink cake. Take 2 x almond slices and 2 x pink slices and trim so they are all the same length. Roll out one marzipan block on a surface lightly dusted with icing sugar to just over 20cm wide, then keep rolling lengthways until the marzipan is roughly 0.5cm thick. Brush with apricot jam, then lay a pink and an almond slice side by side at one end of the marzipan, brushing jam in between to stick sponges, and leaving 4cm clear marzipan at the end. Brush more jam on top of the sponges, then sandwich remaining 2 slices on top, alternating colours to give a checkerboard effect. Trim the marzipan to the length of the cakes. Carefully lift up the marzipan and smooth over the cake with your hands, but leave a small marzipan fold along the bottom edge before you stick it to the first side. Trim opposite side to match size of fold, then crimp edges using fingers and thumb (or, more simply, press with prongs of fork). If you like, mark the 10 slices using the prongs of a fork. Assemble second Battenberg and keep in an airtight box or well wrapped in cling film for up to 3 days. Can be frozen for up to a month.",
      "pairings": "Pairs wonderfully with our chef's recommended beverages.",
      "dietary": []
    }
  },
  {
    "id": 15,
    "category": "Meat & Seafood",
    "cuisine": "MEAT & SEAFOOD / SPECIALTY",
    "name": "BBQ Pork Sloppy Joes",
    "description": "1  Preheat oven to 450 degrees. Wash and dry all produce. Cut sweet potatoes into ½-inch-thick wedges. Toss on a baking sheet with a drizzle of oil,...",
    "price": "$29",
    "image": "https://www.themealdb.com/images/media/meals/atd5sh1583188467.jpg",
    "details": {
      "ingredients": [
        "Potatoes",
        "Red Onions",
        "Garlic",
        "Lime",
        "Bread",
        "Pork",
        "Barbeque Sauce",
        "Hotsauce"
      ],
      "preparation": "1  Preheat oven to 450 degrees. Wash and dry all produce. Cut sweet potatoes into ½-inch-thick wedges. Toss on a baking sheet with a drizzle of oil, salt, and pepper. Roast until browned and tender, 20-25 minutes.  2  Meanwhile, halve and peel onion. Slice as thinly as possible until you have ¼ cup (½ cup for 4 servings); finely chop remaining onion. Peel and finely chop garlic. Halve lime; squeeze juice into a small bowl. Halve buns. Add 1 TBSP butter (2 TBSP for 4) to a separate small microwave-safe bowl; microwave until melted, 30 seconds. Brush onto cut sides of buns.  3  To bowl with lime juice, add sliced onion, ¼ tsp sugar (½ tsp for 4 servings), and a pinch of salt. Stir to combine; set aside to quick-pickle.  4  Heat a drizzle of oil in a large pan over medium-high heat. Add chopped onion and season with salt and pepper. Cook, stirring, until softened, 4-5 minutes. Add garlic and cook until fragrant, 30 seconds more. Add pork and season with salt and pepper. Cook, breaking up meat into pieces, until browned and cooked through, 4-6 minutes.  5  While pork cooks, in a third small bowl, combine BBQ sauce, pickling liquid from onion, 3 TBSP ketchup (6 TBSP for 4 servings), ½ tsp sugar (1 tsp for 4), and ¼ cup water (⅓ cup for 4). Once pork is cooked through, add BBQ sauce mixture to pan. Cook, stirring, until sauce is thickened, 2-3 minutes. Taste and season with salt and pepper.  6  Meanwhile, toast buns in oven or toaster oven until golden, 3-5 minutes. Divide toasted buns between plates and fill with as much BBQ pork as you’d like. Top with pickled onion and hot sauce. Serve with sweet potato wedges on the side.",
      "pairings": "Pairs wonderfully with our chef's recommended beverages.",
      "dietary": []
    }
  },
  {
    "id": 16,
    "category": "Miscellaneous",
    "cuisine": "MISCELLANEOUS / SPECIALTY",
    "name": "Bean & Sausage Hotpot",
    "description": "In a large casserole, fry the sausages until brown all over – about 10 mins.  Add the tomato sauce, stirring well, then stir in the beans, treacle o...",
    "price": "$45",
    "image": "https://www.themealdb.com/images/media/meals/vxuyrx1511302687.jpg",
    "details": {
      "ingredients": [
        "Sausages",
        "Tomato Sauce",
        "Butter Beans",
        "Black Treacle",
        "English Mustard"
      ],
      "preparation": "In a large casserole, fry the sausages until brown all over – about 10 mins.  Add the tomato sauce, stirring well, then stir in the beans, treacle or sugar and mustard. Bring to the simmer, cover and cook for 30 mins. Great served with crusty bread or rice.",
      "pairings": "Pairs wonderfully with our chef's recommended beverages.",
      "dietary": []
    }
  },
  {
    "id": 17,
    "category": "Desserts",
    "cuisine": "DESSERTS / SPECIALTY",
    "name": "BeaverTails",
    "description": "In the bowl of a stand mixer, add warm water, a big pinch of sugar and yeast. Allow to sit until frothy. Into the same bowl, add 1/2 cup sugar, warm ...",
    "price": "$27",
    "image": "https://www.themealdb.com/images/media/meals/ryppsv1511815505.jpg",
    "details": {
      "ingredients": [
        "Water",
        "Yeast",
        "Sugar",
        "Milk",
        "Butter",
        "Eggs",
        "Salt",
        "Flour"
      ],
      "preparation": "In the bowl of a stand mixer, add warm water, a big pinch of sugar and yeast. Allow to sit until frothy. Into the same bowl, add 1/2 cup sugar, warm milk, melted butter, eggs and salt, and whisk until combined. Place a dough hook on the mixer, add the flour with the machine on, until a smooth but slightly sticky dough forms. Place dough in a bowl, cover with plastic wrap, and allow to proof for 1 1/2 hours. Cut dough into 12 pieces, and roll out into long oval-like shapes about 1/4 inch thick that resemble a beaver’s tail. In a large, deep pot, heat oil to 350 degrees. Gently place beavertail dough into hot oil and cook for 30 to 45 seconds on each side until golden brown. Drain on paper towels, and garnish as desired. Toss in cinnamon sugar, in white sugar with a squeeze of lemon, or with a generous slathering of Nutella and a handful of toasted almonds. Enjoy!",
      "pairings": "Pairs wonderfully with our chef's recommended beverages.",
      "dietary": []
    }
  },
  {
    "id": 18,
    "category": "Meat & Seafood",
    "cuisine": "MEAT & SEAFOOD / SPECIALTY",
    "name": "Beef and Broccoli Stir-Fry",
    "description": "Marinate the beef: Stir together the beef marinade ingredients (1 teaspoon soy sauce, 1 teaspoon Chinese rice wine, 1/2 teaspoon cornstarch, 1/8 teas...",
    "price": "$40",
    "image": "https://www.themealdb.com/images/media/meals/m0p0j81765568742.jpg",
    "details": {
      "ingredients": [
        "Soy Sauce",
        "Dry sherry",
        "Cornstarch",
        "Black Pepper",
        "Sirloin steak",
        "Oyster Sauce",
        "Dry sherry",
        "Soy Sauce"
      ],
      "preparation": "Marinate the beef: Stir together the beef marinade ingredients (1 teaspoon soy sauce, 1 teaspoon Chinese rice wine, 1/2 teaspoon cornstarch, 1/8 teaspoon black pepper) in a medium bowl.  Add the beef slices and stir until coated. Let stand for 10 minutes.  Prepare the sauce: Stir together the sauce ingredients (2 tablespoons oyster sauce, 1 teaspoon Chinese rice wine, 1 teaspoon soy sauce, 1/4 cup chicken broth) in a small bowl. Set aside.  Blanch or steam the broccoli: Bring a pot of water to a boil. Add the broccoli and cook until crisp-tender, about 2 minutes. Drain thoroughly.  Stir-fry the beef: Heat a large frying pan or wok over high heat until a bead of water sizzles and instantly evaporates upon contact. Add the cooking oil and swirl to coat.  Add the beef and immediately spread it out all over the surface of the wok or pan in a single layer (preferably not touching).  Let the beef fry undisturbed for 1 minute. Flip the beef slices over, add the garlic to the pan, and fry for an additional 30 seconds to 1 minute until no longer pink.  Add the sauce, cornstarch, and broccoli: Pour in the sauce and the cornstarch slurry (1 teaspoon cornstarch dissolved in 1 tablespoon of water). Stir until the sauce boils and thickens, about 30 seconds. Stir in the broccoli.  Serve immediately, with steamed rice or on its own.",
      "pairings": "Pairs wonderfully with our chef's recommended beverages.",
      "dietary": []
    }
  },
  {
    "id": 19,
    "category": "Meat & Seafood",
    "cuisine": "MEAT & SEAFOOD / SPECIALTY",
    "name": "Beef and Mustard Pie",
    "description": "Preheat the oven to 150C/300F/Gas 2. Toss the beef and flour together in a bowl with some salt and black pepper. Heat a large casserole until hot, a...",
    "price": "$46",
    "image": "https://www.themealdb.com/images/media/meals/sytuqu1511553755.jpg",
    "details": {
      "ingredients": [
        "Beef",
        "Plain Flour",
        "Rapeseed Oil",
        "Red Wine",
        "Beef Stock",
        "Onion",
        "Carrots",
        "Thyme"
      ],
      "preparation": "Preheat the oven to 150C/300F/Gas 2. Toss the beef and flour together in a bowl with some salt and black pepper. Heat a large casserole until hot, add half of the rapeseed oil and enough of the beef to just cover the bottom of the casserole. Fry until browned on each side, then remove and set aside. Repeat with the remaining oil and beef. Return the beef to the pan, add the wine and cook until the volume of liquid has reduced by half, then add the stock, onion, carrots, thyme and mustard, and season well with salt and pepper. Cover with a lid and place in the oven for two hours. Remove from the oven, check the seasoning and set aside to cool. Remove the thyme. When the beef is cool and you're ready to assemble the pie, preheat the oven to 200C/400F/Gas 6. Transfer the beef to a pie dish, brush the rim with the beaten egg yolks and lay the pastry over the top. Brush the top of the pastry with more beaten egg. Trim the pastry so there is just enough excess to crimp the edges, then place in the oven and bake for 30 minutes, or until the pastry is golden-brown and cooked through. For the green beans, bring a saucepan of salted water to the boil, add the beans and cook for 4-5 minutes, or until just tender. Drain and toss with the butter, then season with black pepper. To serve, place a large spoonful of pie onto each plate with some green beans alongside.",
      "pairings": "Pairs wonderfully with our chef's recommended beverages.",
      "dietary": []
    }
  },
  {
    "id": 20,
    "category": "Meat & Seafood",
    "cuisine": "MEAT & SEAFOOD / SPECIALTY",
    "name": "Beef and Oyster pie",
    "description": "Season the beef cubes with salt and black pepper. Heat a tablespoon of oil in the frying pan and fry the meat over a high heat. Do this in three batch...",
    "price": "$40",
    "image": "https://www.themealdb.com/images/media/meals/wrssvt1511556563.jpg",
    "details": {
      "ingredients": [
        "Beef",
        "Olive Oil",
        "Shallots",
        "Garlic",
        "Bacon",
        "Thyme",
        "Bay Leaf",
        "Stout"
      ],
      "preparation": "Season the beef cubes with salt and black pepper. Heat a tablespoon of oil in the frying pan and fry the meat over a high heat. Do this in three batches so that you don’t overcrowd the pan, transferring the meat to a large flameproof casserole dish once it is browned all over. Add extra oil if the pan seems dry. In the same pan, add another tablespoon of oil and cook the shallots for 4-5 minutes, then add the garlic and fry for 30 seconds. Add the bacon and fry until slightly browned. Transfer the onion and bacon mixture to the casserole dish and add the herbs. Preheat the oven to 180C/350F/Gas 4. Pour the stout into the frying pan and bring to the boil, stirring to lift any stuck-on browned bits from the bottom of the pan. Pour the stout over the beef in the casserole dish and add the stock. Cover the casserole and place it in the oven for 1½-2 hours, or until the beef is tender and the sauce is reduced. Skim off any surface fat, taste and add salt and pepper if necessary, then stir in the cornflour paste. Put the casserole dish on the hob – don’t forget that it will be hot – and simmer for 1-2 minutes, stirring, until thickened. Leave to cool. Increase the oven to 200C/400F/Gas 6. To make the pastry, put the flour and salt in a very large bowl. Grate the butter and stir it into the flour in three batches. Gradually add 325ml/11fl oz cold water – you may not need it all – and stir with a round-bladed knife until the mixture just comes together. Knead the pastry lightly into a ball on a lightly floured surface and set aside 250g/9oz for the pie lid. Roll the rest of the pastry out until about 2cm/¾in larger than the dish you’re using. Line the dish with the pastry then pile in the filling, tucking the oysters in as well. Brush the edge of the pastry with beaten egg. Roll the remaining pastry until slightly larger than your dish and gently lift over the filling, pressing the edges firmly to seal, then trim with a sharp knife. Brush with beaten egg to glaze. Put the dish on a baking tray and bake for 25-30 minutes, or until the pastry is golden-brown and the filling is bubbling.",
      "pairings": "Pairs wonderfully with our chef's recommended beverages.",
      "dietary": []
    }
  },
  {
    "id": 21,
    "category": "Meat & Seafood",
    "cuisine": "MEAT & SEAFOOD / SPECIALTY",
    "name": "Beef Asado",
    "description": "0.\tCombine beef, crushed peppercorn, soy sauce, vinegar, dried bay leaves, lemon, and tomato sauce. Mix well. Marinate beef for at least 30 minutes. ...",
    "price": "$36",
    "image": "https://www.themealdb.com/images/media/meals/pkopc31683207947.jpg",
    "details": {
      "ingredients": [
        "Beef",
        "Beef Stock Concentrate",
        "Tomato Puree",
        "Water",
        "Soy Sauce",
        "White Wine Vinegar",
        "Pepper",
        "Bay Leaf"
      ],
      "preparation": "0.\tCombine beef, crushed peppercorn, soy sauce, vinegar, dried bay leaves, lemon, and tomato sauce. Mix well. Marinate beef for at least 30 minutes. 1.\tPut the marinated beef in a cooking pot along with remaining marinade. Add water. Let boil. 2.\tAdd Knorr Beef Cube. Stir. Cover the pot and cook for 40 minutes in low heat. 3.\tTurn the beef over. Add tomato paste. Continue cooking until beef tenderizes. Set aside. 4.\tHeat oil in a pan. Fry the potato until it browns. Turn over and continue frying the opposite side. Remove from the pan and place on a clean plate. Do the same with the carrots. 5.\tSave 3 tablespoons of cooking oil from the pan where the potato was fried. Saute onion and garlic until onion softens. 6.\tPour-in the sauce from the beef stew. Let boil. Add the beef. Cook for 2 minutes. 7.\tAdd butter and let it melt. Continue cooking until the sauce reduces to half.",
      "pairings": "Pairs wonderfully with our chef's recommended beverages.",
      "dietary": []
    }
  },
  {
    "id": 22,
    "category": "Meat & Seafood",
    "cuisine": "MEAT & SEAFOOD / SPECIALTY",
    "name": "Beef Banh Mi Bowls with Sriracha Mayo, Carrot & Pickled Cucumber",
    "description": "Add'l ingredients: mayonnaise, siracha  1  Place rice in a fine-mesh sieve and rinse until water runs clear. Add to a small pot with 1 cup water (...",
    "price": "$31",
    "image": "https://www.themealdb.com/images/media/meals/z0ageb1583189517.jpg",
    "details": {
      "ingredients": [
        "Rice",
        "Onion",
        "Lime",
        "Garlic Clove",
        "Cucumber",
        "Carrots",
        "Ground Beef",
        "Soy Sauce"
      ],
      "preparation": "Add'l ingredients: mayonnaise, siracha  1  Place rice in a fine-mesh sieve and rinse until water runs clear. Add to a small pot with 1 cup water (2 cups for 4 servings) and a pinch of salt. Bring to a boil, then cover and reduce heat to low. Cook until rice is tender, 15 minutes. Keep covered off heat for at least 10 minutes or until ready to serve.  2  Meanwhile, wash and dry all produce. Peel and finely chop garlic. Zest and quarter lime (for 4 servings, zest 1 lime and quarter both). Trim and halve cucumber lengthwise; thinly slice crosswise into half-moons. Halve, peel, and medium dice onion. Trim, peel, and grate carrot.  3  In a medium bowl, combine cucumber, juice from half the lime, ¼ tsp sugar (½ tsp for 4 servings), and a pinch of salt. In a small bowl, combine mayonnaise, a pinch of garlic, a squeeze of lime juice, and as much sriracha as you’d like. Season with salt and pepper.  4  Heat a drizzle of oil in a large pan over medium-high heat. Add onion and cook, stirring, until softened, 4-5 minutes. Add beef, remaining garlic, and 2 tsp sugar (4 tsp for 4 servings). Cook, breaking up meat into pieces, until beef is browned and cooked through, 4-5 minutes. Stir in soy sauce. Turn off heat; taste and season with salt and pepper.  5  Fluff rice with a fork; stir in lime zest and 1 TBSP butter. Divide rice between bowls. Arrange beef, grated carrot, and pickled cucumber on top. Top with a squeeze of lime juice. Drizzle with sriracha mayo.",
      "pairings": "Pairs wonderfully with our chef's recommended beverages.",
      "dietary": []
    }
  },
  {
    "id": 23,
    "category": "Meat & Seafood",
    "cuisine": "MEAT & SEAFOOD / SPECIALTY",
    "name": "Beef Bourguignon",
    "description": "Heat a large casserole pan and add 1 tbsp goose fat. Season the beef and fry until golden brown, about 3-5 mins, then turn over and fry the other side...",
    "price": "$17",
    "image": "https://www.themealdb.com/images/media/meals/vtqxtu1511784197.jpg",
    "details": {
      "ingredients": [
        "Goose Fat",
        "Beef Shin",
        "Bacon",
        "Challots",
        "Chestnut Mushroom",
        "Garlic Clove",
        "Bouquet Garni",
        "Tomato Puree"
      ],
      "preparation": "Heat a large casserole pan and add 1 tbsp goose fat. Season the beef and fry until golden brown, about 3-5 mins, then turn over and fry the other side until the meat is browned all over, adding more fat if necessary. Do this in 2-3 batches, transferring the meat to a colander set over a bowl when browned. In the same pan, fry the bacon, shallots or pearl onions, mushrooms, garlic and bouquet garni until lightly browned. Mix in the tomato purée and cook for a few mins, stirring into the mixture. This enriches the bourguignon and makes a great base for the stew. Then return the beef and any drained juices to the pan and stir through. Pour over the wine and about 100ml water so the meat bobs up from the liquid, but isn’t completely covered. Bring to the boil and use a spoon to scrape the caramelised cooking juices from the bottom of the pan – this will give the stew more flavour. Heat oven to 150C/fan 130C/gas 2. Make a cartouche: tear off a square of foil slightly larger than the casserole, arrange it in the pan so it covers the top of the stew and trim away any excess foil. Then cook for 3 hrs. If the sauce looks watery, remove the beef and veg with a slotted spoon, and set aside. Cook the sauce over a high heat for a few mins until the sauce has thickened a little, then return the beef and vegetables to the pan. To make the celeriac mash, peel the celeriac and cut into cubes. Heat the olive oil in a large frying pan. Tip in the celeriac and fry for 5 mins until it turns golden. Season well with salt and pepper. Stir in the rosemary, thyme, bay and cardamom pods, then pour over 200ml water, enough to nearly cover the celeriac. Turn the heat to low, partially cover the pan and leave to simmer for 25-30 mins. After 25-30 mins, the celeriac should be soft and most of the water will have evaporated. Drain away any remaining water, then remove the herb sprigs, bay and cardamom pods. Lightly crush with a potato masher, then finish with a glug of olive oil and season to taste. Spoon the beef bourguignon into serving bowls and place a large spoonful of the celeriac mash on top. Garnish with one of the bay leaves, if you like.",
      "pairings": "Pairs wonderfully with our chef's recommended beverages.",
      "dietary": []
    }
  },
  {
    "id": 24,
    "category": "Meat & Seafood",
    "cuisine": "MEAT & SEAFOOD / SPECIALTY",
    "name": "Beef Brisket Pot Roast",
    "description": "1 Prepare the brisket for cooking: On one side of the brisket there should be a layer of fat, which you want. If there are any large chunks of fat, cu...",
    "price": "$26",
    "image": "https://www.themealdb.com/images/media/meals/ursuup1487348423.jpg",
    "details": {
      "ingredients": [
        "Beef Brisket",
        "Salt",
        "Onion",
        "Garlic",
        "Thyme",
        "Rosemary",
        "Bay Leaves",
        "beef stock"
      ],
      "preparation": "1 Prepare the brisket for cooking: On one side of the brisket there should be a layer of fat, which you want. If there are any large chunks of fat, cut them off and discard them. Large pieces of fat will not be able to render out completely. Using a sharp knife, score the fat in parallel lines, about 3/4-inch apart. Slice through the fat, not the beef. Repeat in the opposite direction to make a cross-hatch pattern. Salt the brisket well and let it sit at room temperature for 30 minutes.   2 Sear the brisket: You'll need an oven-proof, thick-bottomed pot with a cover, or Dutch oven, that is just wide enough to hold the brisket roast with a little room for the onions. Pat the brisket dry and place it, fatty side down, into the pot and place it on medium high heat. Cook for 5-8 minutes, lightly sizzling, until the fat side is nicely browned. (If the roast seems to be cooking too fast, turn the heat down to medium. You want a steady sizzle, not a raging sear.) Turn the brisket over and cook for a few minutes more to brown the other side.  3 Sauté the onions and garlic: When the brisket has browned, remove it from the pot and set aside. There should be a couple tablespoons of fat rendered in the pot, if not, add some olive oil. Add the chopped onions and increase the heat to high. Sprinkle a little salt on the onions. Sauté, stirring often, until the onions are lightly browned, 5-8 minutes. Stir in the garlic and cook 1-2 more minutes.   4 Return brisket to pot, add herbs, stock, bring to simmer, cover, cook in oven: Preheat the oven to 300°F. Use kitchen twine to tie together the bay leaves, rosemary and thyme. Move the onions and garlic to the sides of the pot and nestle the brisket inside. Add the beef stock and the tied-up herbs. Bring the stock to a boil on the stovetop. Cover the pot, place the pot in the 300°F oven and cook for 3 hours. Carefully flip the brisket every hour so it cooks evenly.   5 Add carrots, continue to cook: After 3 hours, add the carrots. Cover the pot and cook for 1 hour more, or until the carrots are cooked through and the brisket is falling-apart tender. 6 Remove brisket to cutting board, tent with foil: When the brisket is falling-apart tender, take the pot out of the oven and remove the brisket to a cutting board. Cover it with foil. Pull out and discard the herbs. 7 Make sauce (optional): At this point you have two options. You can serve as is, or you can make a sauce with the drippings and some of the onions. If you serve as is, skip this step. To make a sauce, remove the carrots and half of the onions, set aside and cover them with foil. Pour the ingredients that are remaining into the pot into a blender, and purée until smooth. If you want, add 1 tablespoon of mustard to the mix. Put into a small pot and keep warm. 8 Slice the meat across the grain: Notice the lines of the muscle fibers of the roast. This is the \"grain\" of the meat. Slice the meat perpendicular to these lines, or across the grain (cutting this way further tenderizes the meat), in 1/4-inch to 1/2-inch slices. Serve with the onions, carrots and gravy. Serve with mashed, roasted or boiled potatoes, egg noodles or polenta.",
      "pairings": "Pairs wonderfully with our chef's recommended beverages.",
      "dietary": []
    }
  },
  {
    "id": 25,
    "category": "Meat & Seafood",
    "cuisine": "MEAT & SEAFOOD / SPECIALTY",
    "name": "Beef Caldereta",
    "description": "0.\tHeat oil in a cooking pot. Saute onion and garlic until onion softens 1.\tAdd beef. Saute until the outer part turns light brown. 2.\tAdd soy sauce...",
    "price": "$34",
    "image": "https://www.themealdb.com/images/media/meals/41cxjh1683207682.jpg",
    "details": {
      "ingredients": [
        "Beef",
        "Beef Stock",
        "Soy Sauce",
        "Water",
        "Green Pepper",
        "Red Pepper",
        "Potatoes",
        "Carrots"
      ],
      "preparation": "0.\tHeat oil in a cooking pot. Saute onion and garlic until onion softens 1.\tAdd beef. Saute until the outer part turns light brown. 2.\tAdd soy sauce. Pour tomato sauce and water. Let boil. 3.\tAdd Knorr Beef Cube. Cover the pressure cooker. Cook for 30 minutes. 4.\tPan-fry carrot and potato until it browns. Set aside. 5.\tAdd chili pepper, liver spread and peanut butter. Stir. 6.\tAdd bell peppers, fried potato and carrot. Cover the pot. Continue cooking for 5 to 7 minutes. 7.\tSeason with salt and ground black pepper. Serve. ",
      "pairings": "Pairs wonderfully with our chef's recommended beverages.",
      "dietary": []
    }
  },
  {
    "id": 26,
    "category": "Meat & Seafood",
    "cuisine": "MEAT & SEAFOOD / SPECIALTY",
    "name": "Beef Dumpling Stew",
    "description": "Preheat the oven to 180C/350F/Gas 4.  For the beef stew, heat the oil and butter in an ovenproof casserole and fry the beef until browned on all sid...",
    "price": "$24",
    "image": "https://www.themealdb.com/images/media/meals/uyqrrv1511553350.jpg",
    "details": {
      "ingredients": [
        "Olive Oil",
        "Butter",
        "Beef",
        "Plain Flour",
        "Garlic",
        "Onions",
        "Celery",
        "Carrots"
      ],
      "preparation": "Preheat the oven to 180C/350F/Gas 4.  For the beef stew, heat the oil and butter in an ovenproof casserole and fry the beef until browned on all sides.  Sprinkle over the flour and cook for a further 2-3 minutes.  Add the garlic and all the vegetables and fry for 1-2 minutes.  Stir in the wine, stock and herbs, then add the Worcestershire sauce and balsamic vinegar, to taste. Season with salt and freshly ground black pepper.  Cover with a lid, transfer to the oven and cook for about two hours, or until the meat is tender.  For the dumplings, sift the flour, baking powder and salt into a bowl. Add the suet and enough water to form a thick dough.  With floured hands, roll spoonfuls of the dough into small balls.  After two hours, remove the lid from the stew and place the balls on top of the stew. Cover, return to the oven and cook for a further 20 minutes, or until the dumplings have swollen and are tender. (If you prefer your dumplings with a golden top, leave the lid off when returning to the oven.)  To serve, place a spoonful of mashed potato onto each of four serving plates and top with the stew and dumplings. Sprinkle with chopped parsley.",
      "pairings": "Pairs wonderfully with our chef's recommended beverages.",
      "dietary": []
    }
  },
  {
    "id": 27,
    "category": "Meat & Seafood",
    "cuisine": "MEAT & SEAFOOD / SPECIALTY",
    "name": "Beef Empanadas",
    "description": "For the dough place lard, warm water and salt in a large kneading bowl and stir. Add flour and oregano and either knead five miutes by hand or with th...",
    "price": "$20",
    "image": "https://www.themealdb.com/images/media/meals/dxpc7j1764370714.jpg",
    "details": {
      "ingredients": [
        "Lard",
        "Water",
        "Salt",
        "All purpose flour",
        "Tomato",
        "Garlic",
        "Red Onions",
        "Spring Onions"
      ],
      "preparation": "For the dough place lard, warm water and salt in a large kneading bowl and stir. Add flour and oregano and either knead five miutes by hand or with the kneading function of your machine. Let rest covered for at least half an hour or overnight in the fridge.  2 For the filling place tomatoes for about 30 seconds in boiling water, then cool with cold water and peel of skin and cut into cubes. Press garlic through garlic press, cut onions into cubes. Simmer garlic and onions in some olive oil until translucent. Take out onions and garlic and brown the meat at high heat from all sides. Season with all herbs and add the onions, garlic and tomatoes. Let simmer for a few minutes, add salt, pepper and additional spices to taste. You can prepare the meat the night before, chill in fridge if doing so. Boil eggs and also cut into cubes and mix with prepared meat.  3 Cut dough into half and roll out one half thinnly on floured surface. Cut out circles about 12-15cm in diameter. Mine have a diameter of 12.5 cm. Place about 2-4 teaspoons of filling on one circle, put a bit of water all around the edges and fold over the other half so that you get half moons. Be sure to seal the edges with a fork. Repeat until you have no dough and filling left.  4 Meanwhile preheat oven to 200 degrees Celsius. Brush empanadas with egg wash and bake about 8 empanadas on a baking sheet lined with parchment paper for about 25min or until golden. Serve warm with chimichurri sauce.",
      "pairings": "Pairs wonderfully with our chef's recommended beverages.",
      "dietary": []
    }
  },
  {
    "id": 28,
    "category": "Meat & Seafood",
    "cuisine": "MEAT & SEAFOOD / SPECIALTY",
    "name": "Beef Lo Mein",
    "description": "STEP 1 - MARINATING THE BEEF In a bowl, add the beef, salt, 1 pinch white pepper, 1 Teaspoon sesame seed oil, 1/2 egg, corn starch,1 Tablespoon of oi...",
    "price": "$42",
    "image": "https://www.themealdb.com/images/media/meals/1529444830.jpg",
    "details": {
      "ingredients": [
        "Beef",
        "Salt",
        "Pepper",
        "Sesame Seed Oil",
        "Egg",
        "Starch",
        "Oil",
        "Noodles"
      ],
      "preparation": "STEP 1 - MARINATING THE BEEF In a bowl, add the beef, salt, 1 pinch white pepper, 1 Teaspoon sesame seed oil, 1/2 egg, corn starch,1 Tablespoon of oil and mix together. STEP 2 - BOILING THE THE NOODLES In a 6 qt pot add your noodles to boiling water until the noodles are submerged and boil on high heat for 10 seconds. After your noodles is done boiling strain and cool with cold water. STEP 3 - STIR FRY Add 2 Tablespoons of oil, beef and cook on high heat untill beef is medium cooked. Set the cooked beef aside In a wok add 2 Tablespoon of oil, onions, minced garlic, minced ginger, bean sprouts, mushrooms, peapods and 1.5 cups of water or until the vegetables are submerged in water. Add the noodles to wok To make the sauce, add oyster sauce, 1 pinch white pepper, 1 teaspoon sesame seed oil, sugar, and 1 Teaspoon of soy sauce. Next add the beef to wok and stir-fry",
      "pairings": "Pairs wonderfully with our chef's recommended beverages.",
      "dietary": []
    }
  },
  {
    "id": 29,
    "category": "Meat & Seafood",
    "cuisine": "MEAT & SEAFOOD / SPECIALTY",
    "name": "Beef Mandi",
    "description": "1. Wash the beef and cut into large pieces. Season lightly with salt and turmeric. 2. Heat ghee/oil in a large pot. Add sliced onions and sauté until...",
    "price": "$34",
    "image": "https://www.themealdb.com/images/media/meals/1nalo51765188375.jpg",
    "details": {
      "ingredients": [
        "Basmati Rice",
        "Beef Stock",
        "Onion",
        "Garlic",
        "Green Chilli",
        "Tomato",
        "Salt",
        "Oil"
      ],
      "preparation": "1. Wash the beef and cut into large pieces. Season lightly with salt and turmeric. 2. Heat ghee/oil in a large pot. Add sliced onions and sauté until light golden. 3. Add garlic, green chilies, and tomato; cook until softened. 4. Add the mandi spice mix: coriander, cumin, black pepper, cinnamon, cardamom, cloves, and bay leaves. 5. Add beef pieces and stir on medium heat until the meat is well coated with spices. 6. Pour in water or beef stock. Cover and simmer until beef is tender (about 1.5–2 hours depending on cut). 7. Remove beef carefully and set aside. Strain and measure the broth. 8. Add washed, soaked basmati rice to the broth (usually 1 cup rice = 1.5–2 cups liquid). Adjust seasoning and bring to a boil. 9. Lower heat, cover, and cook the rice until fluffy. 10. Place the beef pieces over the rice and steam on low heat for 10 minutes so flavors combine. 11. Optional: For smoky flavor, place a small hot charcoal on foil in the pot, add 1 tsp butter/oil, immediately cover for 5 minutes. Remove coal before serving. 12. Fluff rice and serve beef mandi with salad or chutney. ",
      "pairings": "Pairs wonderfully with our chef's recommended beverages.",
      "dietary": []
    }
  },
  {
    "id": 30,
    "category": "Meat & Seafood",
    "cuisine": "MEAT & SEAFOOD / SPECIALTY",
    "name": "Beef Mechado",
    "description": "0.\tMake the beef tenderloin marinade by combining soy sauce, vinegar, ginger, garlic, sesame oil, olive oil, sugar, salt, and ground black pepper in a...",
    "price": "$46",
    "image": "https://www.themealdb.com/images/media/meals/cgl60b1683206581.jpg",
    "details": {
      "ingredients": [
        "Garlic",
        "Onion",
        "Beef",
        "Tomato Puree",
        "Water",
        "Olive Oil",
        "Lemon",
        "Potatoes"
      ],
      "preparation": "0.\tMake the beef tenderloin marinade by combining soy sauce, vinegar, ginger, garlic, sesame oil, olive oil, sugar, salt, and ground black pepper in a large bowl. Mix well. 1.\tAdd the cubed beef tenderloin to the bowl with the beef tenderloin marinade. Gently toss to coat the beef. Let it stay for 1 hour. 2.\tUsing a metal or bamboo skewer, assemble the beef kebob by skewering the vegetables and marinated beef tenderloin. 3.\tHeat-up the grill and start grilling the beef kebobs for 3 minutes per side. This will give you a medium beef that is juicy and tender on the inside. Add more time if you want your beef well done, but it will be less tender. 4.\tTransfer to a serving plate. Serve with Saffron rice. 5.\tShare and enjoy! ",
      "pairings": "Pairs wonderfully with our chef's recommended beverages.",
      "dietary": []
    }
  },
  {
    "id": 31,
    "category": "Meat & Seafood",
    "cuisine": "MEAT & SEAFOOD / SPECIALTY",
    "name": "Beef pho",
    "description": "step 1 Tip the beef stock along with 500ml of water into a large saucepan. Sit the onion and ginger in a frying pan over a high heat and char on all ...",
    "price": "$46",
    "image": "https://www.themealdb.com/images/media/meals/pbzcrx1763765096.jpg",
    "details": {
      "ingredients": [
        "Beef Stock",
        "Onion",
        "Ginger",
        "Cinnamon Stick",
        "Star Anise",
        "Coriander Seeds",
        "Cloves",
        "Sirloin steak"
      ],
      "preparation": "step 1 Tip the beef stock along with 500ml of water into a large saucepan. Sit the onion and ginger in a frying pan over a high heat and char on all sides, around 3-5 mins (you can also do this under your grill). Once charred, add to the beef stock. In the same pan, toast the spices for 2-3 mins and once they begin to smell fragrant, add them to the beef stock as well. Bring the stock to the boil, then turn to a simmer and cook for 30mins before straining.  step 2 Meanwhile, cut the fat from the steak and wrap in cling film, then put into the freezer for 15 mins – this will make your steak really easy to slice! Slice it thinly, then cover with cling film again and pop into the fridge.  step 3 Taste the beef stock and use the palm sugar, fish sauce and soy to season. Cook the noodles according to package instructions and split between two bowls, topping each with the sliced beef. Bring the stock to the boil and then pour into the bowls (the heat will cook the beef). Top each with the spring onions, chilli slices and herbs. Serve with the lime wedges to squeeze over.",
      "pairings": "Pairs wonderfully with our chef's recommended beverages.",
      "dietary": []
    }
  },
  {
    "id": 32,
    "category": "Meat & Seafood",
    "cuisine": "MEAT & SEAFOOD / SPECIALTY",
    "name": "Beef Rendang",
    "description": "Chop the spice paste ingredients and then blend it in a food processor until fine. Heat the oil in a stew pot, add the spice paste, cinnamon, cloves,...",
    "price": "$48",
    "image": "https://www.themealdb.com/images/media/meals/bc8v651619789840.jpg",
    "details": {
      "ingredients": [
        "Beef",
        "Vegetable Oil",
        "Cinnamon Stick",
        "Cloves",
        "Star Anise",
        "Cardamom",
        "Coconut Cream",
        "Water"
      ],
      "preparation": "Chop the spice paste ingredients and then blend it in a food processor until fine. Heat the oil in a stew pot, add the spice paste, cinnamon, cloves, star anise, and cardamom and stir-fry until aromatic. Add the beef and the pounded lemongrass and stir for 1 minute. Add the coconut milk, tamarind juice, water, and simmer on medium heat, stirring frequently until the meat is almost cooked. Add the kaffir lime leaves, kerisik (toasted coconut), sugar or palm sugar, stirring to blend well with the meat. Lower the heat to low, cover the lid, and simmer for 1 to 1 1/2 hours or until the meat is really tender and the gravy has dried up. Add more salt and sugar to taste. Serve immediately with steamed rice and save some for overnight.",
      "pairings": "Pairs wonderfully with our chef's recommended beverages.",
      "dietary": []
    }
  },
  {
    "id": 33,
    "category": "Meat & Seafood",
    "cuisine": "MEAT & SEAFOOD / SPECIALTY",
    "name": "Beef stroganoff",
    "description": "Heat the olive oil in a non-stick frying pan then add the sliced onion and cook on a medium heat until completely softened, so around 15 mins, adding ...",
    "price": "$33",
    "image": "https://www.themealdb.com/images/media/meals/svprys1511176755.jpg",
    "details": {
      "ingredients": [
        "Olive Oil",
        "Onions",
        "Garlic",
        "Butter",
        "Mushrooms",
        "Beef Fillet",
        "Plain Flour",
        "Creme Fraiche"
      ],
      "preparation": "Heat the olive oil in a non-stick frying pan then add the sliced onion and cook on a medium heat until completely softened, so around 15 mins, adding a little splash of water if they start to stick at all. Crush in the garlic and cook for a 2-3 mins further, then add the butter. Once the butter is foaming a little, add the mushrooms and cook for around 5 mins until completely softened. Season everything well, then tip onto a plate. Tip the flour into a bowl with a big pinch of salt and pepper, then toss the steak in the seasoned flour. Add the steak pieces to the pan, splashing in a little oil if the pan looks particularly dry, and fry for 3-4 mins, until well coloured. Tip the onions and mushrooms back into the pan. Whisk the crème fraîche, mustard and beef stock together, then pour into the pan. Cook over a medium heat for around 5 mins. Scatter with parsley, then serve with pappardelle or rice.",
      "pairings": "Pairs wonderfully with our chef's recommended beverages.",
      "dietary": []
    }
  },
  {
    "id": 34,
    "category": "Meat & Seafood",
    "cuisine": "MEAT & SEAFOOD / SPECIALTY",
    "name": "Beef Sunday Roast",
    "description": "Cook the Broccoli and Carrots in a pan of boiling water until tender.  Roast the Beef and Potatoes in the oven for 45mins, the potatoes may need to ...",
    "price": "$17",
    "image": "https://www.themealdb.com/images/media/meals/ssrrrs1503664277.jpg",
    "details": {
      "ingredients": [
        "Beef",
        "Broccoli",
        "Potatoes",
        "Carrots",
        "plain flour",
        "Eggs",
        "milk",
        "sunflower oil"
      ],
      "preparation": "Cook the Broccoli and Carrots in a pan of boiling water until tender.  Roast the Beef and Potatoes in the oven for 45mins, the potatoes may need to be checked regularly to not overcook.  To make the Yorkshire puddings: Heat oven to 230C/fan 210C/gas 8. Drizzle a little sunflower oil evenly into 2 x 4-hole Yorkshire pudding tins or a 12-hole non-stick muffin tin and place in the oven to heat through To make the batter, tip 140g plain flour into a bowl and beat in four eggs until smooth. Gradually add 200ml milk and carry on beating until the mix is completely lump-free. Season with salt and pepper. Pour the batter into a jug, then remove the hot tins from the oven. Carefully and evenly pour the batter into the holes. Place the tins back in the oven and leave undisturbed for 20-25 mins until the puddings have puffed up and browned. Serve immediately.  Plate up and add the Gravy as desired.",
      "pairings": "Pairs wonderfully with our chef's recommended beverages.",
      "dietary": []
    }
  },
  {
    "id": 35,
    "category": "Meat & Seafood",
    "cuisine": "MEAT & SEAFOOD / SPECIALTY",
    "name": "Beef Wellington",
    "description": "Put the mushrooms into a food processor with some seasoning and pulse to a rough paste. Scrape the paste into a pan and cook over a high heat for abou...",
    "price": "$16",
    "image": "https://www.themealdb.com/images/media/meals/vvpprx1487325699.jpg",
    "details": {
      "ingredients": [
        "mushrooms",
        "English Mustard",
        "Olive Oil",
        "Beef Fillet",
        "Parma ham",
        "Puff Pastry",
        "Flour",
        "Egg Yolks"
      ],
      "preparation": "Put the mushrooms into a food processor with some seasoning and pulse to a rough paste. Scrape the paste into a pan and cook over a high heat for about 10 mins, tossing frequently, to cook out the moisture from the mushrooms. Spread out on a plate to cool. Heat in a frying pan and add a little olive oil. Season the beef and sear in the hot pan for 30 secs only on each side. (You don't want to cook it at this stage, just colour it). Remove the beef from the pan and leave to cool, then brush all over with the mustard. Lay a sheet of cling film on a work surface and arrange the Parma ham slices on it, in slightly overlapping rows. With a palette knife, spread the mushroom paste over the ham, then place the seared beef fillet in the middle. Keeping a tight hold of the cling film from the edge, neatly roll the Parma ham and mushrooms around the beef to form a tight barrel shape. Twist the ends of the cling film to secure. Chill for 15-20 mins to allow the beef to set and keep its shape. Roll out the puff pastry on a floured surface to a large rectangle, the thickness of a £1 coin. Remove the cling film from the beef, then lay in the centre. Brush the surrounding pastry with egg yolk. Fold the ends over, the wrap the pastry around the beef, cutting off any excess. Turn over, so the seam is underneath, and place on a baking sheet. Brush over all the pastry with egg and chill for about 15 mins to let the pastry rest. Heat the oven to 200C, 400F, gas 6. Lightly score the pastry at 1cm intervals and glaze again with beaten egg yolk. Bake for 20 minutes, then lower the oven setting to 180C, 350F, gas 4 and cook for another 15 mins. Allow to rest for 10-15 mins before slicing and serving with the side dishes of your choice. The beef should still be pink in the centre when you serve it.",
      "pairings": "Pairs wonderfully with our chef's recommended beverages.",
      "dietary": []
    }
  },
  {
    "id": 36,
    "category": "Vegetarian",
    "cuisine": "VEGETARIAN / SPECIALTY",
    "name": "Beetroot & red cabbage sauerkraut",
    "description": "step 1 Tip all the ingredients into a large bowl, add 1-1½ tsp freshly ground black pepper, then scrunch it all together with your hands for 5 mins. ...",
    "price": "$49",
    "image": "https://www.themealdb.com/images/media/meals/ra2k8a1764365055.jpg",
    "details": {
      "ingredients": [
        "Beetroot",
        "Red Cabbage",
        "Onion",
        "Caraway Seed",
        "Sea Salt"
      ],
      "preparation": "step 1 Tip all the ingredients into a large bowl, add 1-1½ tsp freshly ground black pepper, then scrunch it all together with your hands for 5 mins. You might want to wear gloves to avoid staining your skin with the beetroot juices.  step 2 Press the veg down in the bowl with your hands, then cover the surface and up the side of the bowl with a large sheet of compostable cling film or something reusable like a beeswax wrap. Now place another similar-sized bowl on top. Press down hard and add anything heavy (packs of rice or cans work well) to weigh it down so the juices rise to cover the surface. Cover again.  step 3 Leave to ferment at room temperature for at least five days, but for maximum flavour, leave for one-five weeks (until the bubbling subsides).  step 4 Check the sauerkraut. After a few days, you will see bubbles that have built up as it ferments. Give it a stir, then cover and weigh it down again as before. The cabbage will become increasingly sour the longer it’s fermented, so taste it now and again. When you like the flavour, transfer it to sterilised jars and keep chilled. Will keep chilled for up to six months.",
      "pairings": "Pairs wonderfully with our chef's recommended beverages.",
      "dietary": []
    }
  },
  {
    "id": 37,
    "category": "Vegetarian",
    "cuisine": "VEGETARIAN / SPECIALTY",
    "name": "Beetroot latkes",
    "description": "step 1 Heat the oven to 180C/160C fan/gas 4. Make the latkes by combining all of the ingredients.  step 2 Heat the oil in a large non-stick pan. S...",
    "price": "$30",
    "image": "https://www.themealdb.com/images/media/meals/qwicc91764368097.jpg",
    "details": {
      "ingredients": [
        "Rapeseed Oil",
        "Greek Yogurt",
        "Mint",
        "Rocket",
        "Cherry Tomatoes",
        "Beetroot",
        "Egg",
        "Plain Flour"
      ],
      "preparation": "step 1 Heat the oven to 180C/160C fan/gas 4. Make the latkes by combining all of the ingredients.  step 2 Heat the oil in a large non-stick pan. Spoon in the mixture to make six round latkes. Fry for 4-5 mins on each side, then transfer to a baking sheet and bake for 10 mins.  step 3 Combine the yogurt and mint in a small bowl. Toss the salad leaves and tomatoes together, then serve the latkes with the mint yogurt and salad.",
      "pairings": "Pairs wonderfully with our chef's recommended beverages.",
      "dietary": []
    }
  },
  {
    "id": 38,
    "category": "Desserts",
    "cuisine": "DESSERTS / SPECIALTY",
    "name": "Beetroot pancakes",
    "description": "step 1 Put the beetroot in a jug with the milk and blend with a stick blender until smooth. Pour into a bowl with the rest of the pancake ingredients...",
    "price": "$16",
    "image": "https://www.themealdb.com/images/media/meals/xlqqhw1764369924.jpg",
    "details": {
      "ingredients": [
        "Beetroot",
        "Milk",
        "Self-raising Flour",
        "Baking Powder",
        "Maple Syrup",
        "Vanilla Extract",
        "Egg",
        "Butter"
      ],
      "preparation": "step 1 Put the beetroot in a jug with the milk and blend with a stick blender until smooth. Pour into a bowl with the rest of the pancake ingredients and whisk until smooth and vibrant purple.  step 2 Put a small knob of butter in a large non-stick frying pan and heat over a medium-low heat until melted and foamy. Now create 3 or 4 pancakes each made from 2 tbsp of the batter. Cook for 2-3 mins then flip over and cook for a further minute until cooked through. Repeat with any remaining batter. Heat oven to lowest setting and keep the pancakes warm in there until needed.  step 3 Serve with your favourite pancake toppings or make a simple compote by simmering frozen berries in with 1 tbsp blackcurrant jam until bubbling and syrupy (about 5-10 mins). In a small bowl stir together the remaining jam and the yogurt. Stack the cooked pancakes with the yogurt and pour the warm berry compote over the top.",
      "pairings": "Pairs wonderfully with our chef's recommended beverages.",
      "dietary": []
    }
  },
  {
    "id": 39,
    "category": "Vegetarian",
    "cuisine": "VEGETARIAN / SPECIALTY",
    "name": "Beetroot Soup (Borscht)",
    "description": "Chop the beetroot, add water and stock cube and cook for 15mins. Add the other ingredients and boil until soft. Finally add the beans and cook for 5mi...",
    "price": "$34",
    "image": "https://www.themealdb.com/images/media/meals/zadvgb1699012544.jpg",
    "details": {
      "ingredients": [
        "Beetroot",
        "Olive Oil",
        "Chicken Stock Cube",
        "Water",
        "Potatoes",
        "Cannellini Beans",
        "Dill"
      ],
      "preparation": "Chop the beetroot, add water and stock cube and cook for 15mins. Add the other ingredients and boil until soft. Finally add the beans and cook for 5mins. Serve in the soup pot.",
      "pairings": "Pairs wonderfully with our chef's recommended beverages.",
      "dietary": []
    }
  },
  {
    "id": 40,
    "category": "Meat & Seafood",
    "cuisine": "MEAT & SEAFOOD / SPECIALTY",
    "name": "Big Mac",
    "description": "For the Big Mac sauce, combine all the ingredients in a bowl, season with salt and chill until ready to use. 2. To make the patties, season the mince...",
    "price": "$39",
    "image": "https://www.themealdb.com/images/media/meals/urzj1d1587670726.jpg",
    "details": {
      "ingredients": [
        "Minced Beef",
        "Olive Oil",
        "Sesame Seed Burger Buns",
        "Onion",
        "Iceberg Lettuce",
        "Cheese",
        "Dill Pickles",
        "Mayonnaise"
      ],
      "preparation": "For the Big Mac sauce, combine all the ingredients in a bowl, season with salt and chill until ready to use. 2. To make the patties, season the mince with salt and pepper and form into 4 balls using about 1/3 cup mince each. Place each onto a square of baking paper and flatten to form into four x 15cm circles. Heat oil in a large frypan over high heat. In 2 batches, cook beef patties for 1-2 minutes each side until lightly charred and cooked through. Remove from heat and keep warm. Repeat with remaining two patties. 3. Carefully slice each burger bun into three acrossways, then lightly toast. 4. To assemble the burgers, spread a little Big Mac sauce over the bottom base. Top with some chopped onion, shredded lettuce, slice of cheese, beef patty and some pickle slices. Top with the middle bun layer, and spread with more Big Mac sauce, onion, lettuce, pickles, beef patty and then finish with more sauce. Top with burger lid to serve. 5. After waiting half an hour for your food to settle, go for a jog.",
      "pairings": "Pairs wonderfully with our chef's recommended beverages.",
      "dietary": []
    }
  },
  {
    "id": 41,
    "category": "Meat & Seafood",
    "cuisine": "MEAT & SEAFOOD / SPECIALTY",
    "name": "Bigos (Hunters Stew)",
    "description": "Preheat the oven to 350 degrees F (175 degrees C).  Heat a large pot over medium heat. Add the bacon and kielbasa; cook and stir until the bacon has...",
    "price": "$16",
    "image": "https://www.themealdb.com/images/media/meals/md8w601593348504.jpg",
    "details": {
      "ingredients": [
        "Bacon",
        "Kielbasa",
        "Pork",
        "Flour",
        "Garlic",
        "Onion",
        "Mushrooms",
        "Cabbage"
      ],
      "preparation": "Preheat the oven to 350 degrees F (175 degrees C).  Heat a large pot over medium heat. Add the bacon and kielbasa; cook and stir until the bacon has rendered its fat and sausage is lightly browned. Use a slotted spoon to remove the meat and transfer to a large casserole or Dutch oven.  Coat the cubes of pork lightly with flour and fry them in the bacon drippings over medium-high heat until golden brown. Use a slotted spoon to transfer the pork to the casserole. Add the garlic, onion, carrots, fresh mushrooms, cabbage and sauerkraut. Reduce heat to medium; cook and stir until the carrots are soft, about 10 minutes. Do not let the vegetables brown.  Deglaze the pan by pouring in the red wine and stirring to loosen all of the bits of food and flour that are stuck to the bottom. Season with the bay leaf, basil, marjoram, paprika, salt, pepper, caraway seeds and cayenne pepper; cook for 1 minute.  Mix in the dried mushrooms, hot pepper sauce, Worcestershire sauce, beef stock, tomato paste and tomatoes. Heat through just until boiling. Pour the vegetables and all of the liquid into the casserole dish with the meat. Cover with a lid.  Bake in the preheated oven for 2 1/2 to 3 hours, until meat is very tender.",
      "pairings": "Pairs wonderfully with our chef's recommended beverages.",
      "dietary": []
    }
  },
  {
    "id": 42,
    "category": "Meat & Seafood",
    "cuisine": "MEAT & SEAFOOD / SPECIALTY",
    "name": "Bigos (Polish hunter's stew)",
    "description": "step 1 Put the cabbage in a heavy casserole dish, add the stock and cook over a low heat for about 50 mins, until tender.  step 2 Cut the soaked m...",
    "price": "$42",
    "image": "https://www.themealdb.com/images/media/meals/fl4brj1764361323.jpg",
    "details": {
      "ingredients": [
        "White Cabbage",
        "Beef Stock",
        "Mushrooms",
        "Lard",
        "German Sausages",
        "Bacon",
        "Onion",
        "Beef"
      ],
      "preparation": "step 1 Put the cabbage in a heavy casserole dish, add the stock and cook over a low heat for about 50 mins, until tender.  step 2 Cut the soaked mushrooms into strips and save the soaking water. Heat the lard and fry the sausages and bacon, then scoop out, leaving the fat in the pan. Fry the onion in the same pan for 5-8 mins until lightly browned.  step 3 Add the mushrooms and their liquid along with all the cooked meat, onions and prunes, then cover and cook for 20 mins. Add the spices, red wine and tomato purée and bring to a simmer, then cover and cook for 1 hr. Season well and leave to cool. Will keep covered and chilled for up to two days. Bigos improves in flavour over a couple of days. Leave to cool first. Reheat until piping hot before serving.",
      "pairings": "Pairs wonderfully with our chef's recommended beverages.",
      "dietary": []
    }
  },
  {
    "id": 43,
    "category": "Meat & Seafood",
    "cuisine": "MEAT & SEAFOOD / SPECIALTY",
    "name": "Bistek",
    "description": "0.\tMarinate beef in soy sauce, lemon (or calamansi), and ground black pepper for at least 1 hour. Note: marinate overnight for best result 1.\tHeat th...",
    "price": "$32",
    "image": "https://www.themealdb.com/images/media/meals/4pqimk1683207418.jpg",
    "details": {
      "ingredients": [
        "Beef",
        "Soy Sauce",
        "Lemon",
        "Garlic",
        "Onion",
        "Olive Oil",
        "Water",
        "Salt"
      ],
      "preparation": "0.\tMarinate beef in soy sauce, lemon (or calamansi), and ground black pepper for at least 1 hour. Note: marinate overnight for best result 1.\tHeat the cooking oil in a pan then pan-fry half of the onions until the texture becomes soft. Set aside 2.\tDrain the marinade from the beef. Set it aside. Pan-fry the beef on the same pan where the onions were fried for 1 minute per side. Remove from the pan. Set aside 3.\tAdd more oil if needed. Saute garlic and remaining raw onions until onion softens. 4.\tPour the remaining marinade and water. Bring to a boil. 5.\tAdd beef. Cover the pan and simmer until the meat is tender. Note: Add water as needed. 6.\tSeason with ground black pepper and salt as needed. Top with pan-fried onions. 7.\tTransfer to a serving plate. Serve hot. Share and Enjoy! ",
      "pairings": "Pairs wonderfully with our chef's recommended beverages.",
      "dietary": []
    }
  },
  {
    "id": 44,
    "category": "Meat & Seafood",
    "cuisine": "MEAT & SEAFOOD / SPECIALTY",
    "name": "Bitterballen (Dutch meatballs)",
    "description": "Melt the butter in a skillet or pan. When melted, add the flour little by little and stir into a thick paste. Slowly stir in the stock, making sure th...",
    "price": "$36",
    "image": "https://www.themealdb.com/images/media/meals/lhqev81565090111.jpg",
    "details": {
      "ingredients": [
        "Butter",
        "Flour",
        "Beef Stock",
        "Onion",
        "Parsley",
        "Beef",
        "Salt",
        "Pepper"
      ],
      "preparation": "Melt the butter in a skillet or pan. When melted, add the flour little by little and stir into a thick paste. Slowly stir in the stock, making sure the roux absorbs the liquid. Simmer for a couple of minutes on a low heat while you stir in the onion, parsley and the shredded meat. The mixture should thicken and turn into a heavy, thick sauce.  Pour the mixture into a shallow container, cover and refrigerate for several hours, or until the sauce has solidified.  Take a heaping tablespoon of the cold, thick sauce and quickly roll it into a small ball. Roll lightly through the flour, then the egg and finally the breadcrumbs. Make sure that the egg covers the whole surface of the bitterbal. When done, refrigerate the snacks while the oil in your fryer heats up to 190C (375F). Fry four bitterballen at a time, until golden.  Serve on a plate with a nice grainy or spicy mustard.  ",
      "pairings": "Pairs wonderfully with our chef's recommended beverages.",
      "dietary": []
    }
  },
  {
    "id": 45,
    "category": "Desserts",
    "cuisine": "DESSERTS / SPECIALTY",
    "name": "Blackberry Fool",
    "description": "For the biscuits, preheat the oven to 200C/180C (fan)/Gas 6 and line two large baking trays with baking parchment. Scatter the nuts over a baking tray...",
    "price": "$44",
    "image": "https://www.themealdb.com/images/media/meals/rpvptu1511641092.jpg",
    "details": {
      "ingredients": [
        "Hazlenuts",
        "Butter",
        "Caster Sugar",
        "Lemon",
        "Plain Flour",
        "Baking Powder",
        "Blackberries",
        "Sugar"
      ],
      "preparation": "For the biscuits, preheat the oven to 200C/180C (fan)/Gas 6 and line two large baking trays with baking parchment. Scatter the nuts over a baking tray and roast in the oven for 6-8 minutes, or until golden-brown. Watch them carefully so that they don’t have a chance to burn. Remove from the oven, tip onto a board and leave to cool. Put the butter and sugar in a large bowl and beat with a wooden spoon until light and creamy. Roughly chop the cooled nuts and add to the creamed butter and sugar, along with the lemon zest, flour and baking powder. Stir well until the mixture comes together and forms a ball – you may need to use your hands. Divide the biscuit dough into 24 even pieces and roll into small balls. Place the balls the prepared baking trays, spaced well apart to allow for spreading. Press the biscuits to flatten to around 1cm/½in thick. Bake the biscuits, one tray at a time, for 12 minutes or until very pale golden-brown. Leave to cool on the trays. They will be very soft when you take them out of the oven, but will crisp as they cool. Store in an airtight tin and eat within five days. For the fool, rinse the blackberries in a colander to wash away any dust or dirt. Put the blackberries in a non-stick saucepan and sprinkle over the caster sugar. Stir in the lemon juice and heat gently for two minutes, or until the blackberries begin to soften and release their juices. Remove and reserve 12 blackberries for decoration and continue cooking the rest. Simmer the blackberries very gently for 15 minutes, stirring regularly until very soft and squidgy. Remove from the heat and press the berries and juice through a sieve over a bowl, using the bottom of a ladle to help you extract as much of the purée as possible. Leave the purée to cool and discard the seeds. You should end up with around 325ml/11fl oz of purée. Put the cream and yoghurt in a large bowl and whip with an electric whisk until soft peaks form when the whisk is removed from the bowl – the acidity of the fruit will thicken the cream further, so don’t take it too far. When the purée is completely cold, adjust the sweetness to taste by adding more sugar if needed. Pour it into the bowl with the whipped cream and yoghurt and stir just once or twice until very lightly combined. Spoon the blackberry fool into individual wide, glass dishes – or one large, single bowl. It should look quite marbled, so don’t over-stir it. Scatter a few tiny mint leaves on top and decorate with the reserved blackberries. Sprinkle with a little sugar if you like and serve with the hazelnut biscuits.",
      "pairings": "Pairs wonderfully with our chef's recommended beverages.",
      "dietary": []
    }
  },
  {
    "id": 46,
    "category": "Miscellaneous",
    "cuisine": "MISCELLANEOUS / SPECIALTY",
    "name": "Blini Pancakes",
    "description": "In a large bowl, whisk together 1/2 cup buckwheat flour, 2/3 cup all-purpose flour, 1/2 teaspoon salt, and 1 teaspoon yeast.  Make a well in the cen...",
    "price": "$24",
    "image": "https://www.themealdb.com/images/media/meals/0206h11699013358.jpg",
    "details": {
      "ingredients": [
        "Buckwheat",
        "Flour",
        "Salt",
        "Yeast",
        "Milk",
        "Butter",
        "Egg"
      ],
      "preparation": "In a large bowl, whisk together 1/2 cup buckwheat flour, 2/3 cup all-purpose flour, 1/2 teaspoon salt, and 1 teaspoon yeast.  Make a well in the center and pour in 1 cup warm milk, whisking until the batter is smooth.  Cover the bowl and let the batter rise until doubled, about 1 hour.  Enrich and Rest the Batter Stir 2 tablespoons melted butter and 1 egg yolk into the batter.  In a separate bowl, whisk 1 egg white until stiff, but not dry.  Fold the whisked egg white into the batter.  Cover the bowl and let the batter stand 20 minutes.  Pan-Fry the Blini Heat butter in a large nonstick skillet over medium heat.  Drop quarter-sized dollops of batter into the pan, being careful not to overcrowd the pan. Cook for about 1 minute or until bubbles form.  Turn and cook for about 30 additional seconds.  Remove the finished blini onto a plate and cover them with a clean kitchen towel to keep warm. Add more butter to the pan and repeat the frying process with the remaining batter.",
      "pairings": "Pairs wonderfully with our chef's recommended beverages.",
      "dietary": []
    }
  },
  {
    "id": 47,
    "category": "Desserts",
    "cuisine": "DESSERTS / SPECIALTY",
    "name": "Blueberry & lemon friands",
    "description": "step 1 Preheat the oven to fan 180C/conventional 200C/gas 6. Generously butter six non-stick friand or muffin tins. Melt the butter and set aside to ...",
    "price": "$20",
    "image": "https://www.themealdb.com/images/media/meals/e756bf1761848342.jpg",
    "details": {
      "ingredients": [
        "Unsalted Butter",
        "Icing Sugar",
        "Flour",
        "Almonds",
        "Egg White",
        "Unwaxed Lemon",
        "Blackberries"
      ],
      "preparation": "step 1 Preheat the oven to fan 180C/conventional 200C/gas 6. Generously butter six non-stick friand or muffin tins. Melt the butter and set aside to cool.  step 2 Sift the icing sugar and flour into a bowl. Add the almonds and mix everything between your fingers.  step 3 Whisk the egg whites in another bowl until they form a light, floppy foam. Make a well in the centre of the dry ingredients, tip in the egg whites and lemon rind, then lightly stir in the butter to form a soft batter.  step 4 Divide the batter among the tins, a large serving spoon is perfect for this job. Sprinkle a handful of blueberries over each cake and bake for 15-20 minutes until just firm to the touch and golden brown.  step 5 Cool in the tins for 5 minutes, then turn out and cool on a wire rack. To serve, dust lightly with icing sugar.",
      "pairings": "Pairs wonderfully with our chef's recommended beverages.",
      "dietary": []
    }
  },
  {
    "id": 48,
    "category": "Meat & Seafood",
    "cuisine": "MEAT & SEAFOOD / SPECIALTY",
    "name": "Borsch",
    "description": "step 1 To make the stock, put the meat, whole onion, bay leaf and 2 litres of lightly salted cold water in a large saucepan. Cook over a very low hea...",
    "price": "$17",
    "image": "https://www.themealdb.com/images/media/meals/804v1j1764367088.jpg",
    "details": {
      "ingredients": [
        "Beef Shin",
        "Onion",
        "Bay Leaf",
        "Potatoes",
        "Sunflower Oil",
        "Onion",
        "Carrots",
        "Beetroot"
      ],
      "preparation": "step 1 To make the stock, put the meat, whole onion, bay leaf and 2 litres of lightly salted cold water in a large saucepan. Cook over a very low heat for 1 hr 30 mins or until the beef shin is soft and falls apart easily – this can take up to 3 hrs. Skim off the scum with a spoon from time to time. Break up any larger pieces of beef into the broth, remove the whole onion and discard.  step 2 Add the potatoes to the borscht, season well with salt and pepper and cook for 10-15 mins until tender. Meanwhile, heat the sunflower oil in a large, deep frying pan. Add the diced onion and carrot, and cook over a medium heat, stirring, until the carrot is soft and is about to start caramelising.  step 3 Add the beetroot and cook for around 5 mins, stirring occasionally. Add the red pepper, if using, and cook for another 2 mins, then add the tomatoes and prunes, stir, then increase the heat and boil to reduce slightly, before adding everything to the borscht.  step 4 Add the shredded cabbage and the kidney beans, and cook for 7-10 mins or until tender. Serve with a dollop of sour cream or crème fraîche, lots of chopped dill and some crusty bread.",
      "pairings": "Pairs wonderfully with our chef's recommended beverages.",
      "dietary": []
    }
  },
  {
    "id": 49,
    "category": "Miscellaneous",
    "cuisine": "MISCELLANEOUS / SPECIALTY",
    "name": "Boulangère Potatoes",
    "description": "Heat oven to 200C/fan 180C/gas 6. Fry the onions and thyme sprigs in the oil until softened and lightly coloured (about 5 mins). Spread a layer of po...",
    "price": "$23",
    "image": "https://www.themealdb.com/images/media/meals/qywups1511796761.jpg",
    "details": {
      "ingredients": [
        "Onions",
        "Thyme",
        "Olive Oil",
        "Potatoes",
        "Vegetable Stock"
      ],
      "preparation": "Heat oven to 200C/fan 180C/gas 6. Fry the onions and thyme sprigs in the oil until softened and lightly coloured (about 5 mins). Spread a layer of potatoes over the base of a 1.5-litre oiled gratin dish. Sprinkle over a few onions (see picture, above) and continue layering, finishing with a layer of potatoes. Pour over the stock and bake for 50-60 mins until the potatoes are cooked and the top is golden and crisp.",
      "pairings": "Pairs wonderfully with our chef's recommended beverages.",
      "dietary": []
    }
  },
  {
    "id": 50,
    "category": "Meat & Seafood",
    "cuisine": "MEAT & SEAFOOD / SPECIALTY",
    "name": "Boxty Breakfast",
    "description": "STEP 1 Before you start, put your oven on its lowest setting, ready to keep things warm. Peel the potatoes, grate 2 of them, then set aside. Cut the ...",
    "price": "$29",
    "image": "https://www.themealdb.com/images/media/meals/naqyel1608588563.jpg",
    "details": {
      "ingredients": [
        "Potatoes",
        "Spring Onions",
        "Plain Flour",
        "Egg White",
        "Milk",
        "Bicarbonate Of Soda",
        "Butter",
        "Vegetable Oil"
      ],
      "preparation": "STEP 1 Before you start, put your oven on its lowest setting, ready to keep things warm. Peel the potatoes, grate 2 of them, then set aside. Cut the other 2 into large chunks, then boil for 10-15 mins or until tender. Meanwhile, squeeze as much of the liquid from the grated potatoes as you can using a clean tea towel. Mash the boiled potatoes, then mix with the grated potato, spring onions and flour.  STEP 2 Whisk the egg white in a large bowl until it holds soft peaks. Fold in the buttermilk, then add the bicarbonate of soda. Fold into the potato mix.  STEP 3 Heat a large non-stick frying pan over a medium heat, then add 1 tbsp butter and some of the oil. Drop 3-4 spoonfuls of the potato mixture into the pan, then gently cook for 3-5 mins on each side until golden and crusty. Keep warm on a plate in the oven while you cook the next batch, adding more butter and oil to the pan before you do so. You will get 16 crumpet-size boxty from the mix. Can be made the day ahead, drained on kitchen paper, then reheated in a low oven for 20 mins.  STEP 4 Heat the grill to medium and put the tomatoes in a heavy-based pan. Add a good knob of butter and a little oil, then fry for about 5 mins until softened. Grill the bacon, then pile onto a plate and keep warm. Stack up the boxty, bacon and egg, and serve the tomatoes on the side.",
      "pairings": "Pairs wonderfully with our chef's recommended beverages.",
      "dietary": []
    }
  }
];
