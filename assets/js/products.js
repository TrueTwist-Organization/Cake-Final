const products = [
  {
    "id": 1,
    "name": "Classic Chocolate Drip",
    "category": "Birthday Cakes",
    "price": 899,
    "originalPrice": 1199,
    "discount": "25% OFF",
    "rating": 4.8,
    "image": "images/Birthday Cakes/Classic Chocolate Drip/Chocolate.png",
    "description": "A rich moist chocolate cake layered with Belgian ganache and topped with fresh berries.",
    "flavors": [
      "Chocolate",
      "Mint Chocolate",
      "Pistachio"
    ],
    "flavorImages": {
      "Chocolate": "images/Birthday Cakes/Classic Chocolate Drip/Chocolate.png",
      "Mint Chocolate": "images/Birthday Cakes/Classic Chocolate Drip/Mint Chocolat.png",
      "Pistachio": "images/Birthday Cakes/Classic Chocolate Drip/Pistachio.png"
    },
    "flavorVideos": {
      "Chocolate": "images/Birthday Cakes/Classic Chocolate Drip/Chocolate.mp4",
      "Mint Chocolate": "images/Birthday Cakes/Classic Chocolate Drip/Mint Chocolat.mp4",
      "Pistachio": "images/Birthday Cakes/Classic Chocolate Drip/Pistachio.mp4"
    },
    "sizes": [
      "250g",
      "300g",
      "500g",
      "1kg",
      "2kg",
      "3kg"
    ]
  },
  {
    "id": 2,
    "name": "Golden Pink Dream",
    "category": "Birthday Cakes",
    "price": 1099,
    "discount": "BEST SELLER ⭐",
    "rating": 4.9,
    "image": "images/Birthday Cakes/Golden Pink Dream/Butterscotch.png",
    "description": "Elegant pink frosting with golden accents and sprinkles. Perfect for a special celebration.",
    "flavors": [
      "Butterscotch",
      "Strawberry",
      "Vanilla"
    ],
    "flavorImages": {
      "Butterscotch": "images/Birthday Cakes/Golden Pink Dream/Butterscotch.png",
      "Strawberry": "images/Birthday Cakes/Golden Pink Dream/Strawberry.png",
      "Vanilla": "images/Birthday Cakes/Golden Pink Dream/Vanilla.png"
    },
    "flavorVideos": {
      "Butterscotch": "images/Birthday Cakes/Golden Pink Dream/Butterscotch.mp4",
      "Strawberry": "images/Birthday Cakes/Golden Pink Dream/Strawberry.mp4",
      "Vanilla": "images/Birthday Cakes/Golden Pink Dream/Vanilla.mp4"
    },
    "sizes": [
      "250g",
      "300g",
      "500g",
      "1kg",
      "2kg",
      "3kg"
    ]
  },
  {
    "id": 3,
    "name": "Blueberry Orchard",
    "category": "Birthday Cakes",
    "price": 999,
    "rating": 4.8,
    "image": "images/Birthday Cakes/Blueberry Orchard/Blueberry.png",
    "description": "Bursting with fresh blueberries and white chocolate shavings. A crowd favorite.",
    "flavors": [
      "Blueberry",
      "Lemon",
      "Vanilla"
    ],
    "flavorImages": {
      "Blueberry": "images/Birthday Cakes/Blueberry Orchard/Blueberry.png",
      "Lemon": "images/Birthday Cakes/Blueberry Orchard/Lemon.png",
      "Vanilla": "images/Birthday Cakes/Blueberry Orchard/Vanilla.png"
    },
    "flavorVideos": {
      "Blueberry": "images/Birthday Cakes/Blueberry Orchard/Blueberry.mp4",
      "Lemon": "images/Birthday Cakes/Blueberry Orchard/Lemon.mp4",
      "Vanilla": "images/Birthday Cakes/Blueberry Orchard/Vanilla.mp4"
    },
    "sizes": [
      "250g",
      "300g",
      "500g",
      "1kg",
      "2kg",
      "3kg"
    ]
  },
  {
    "id": 4,
    "name": "Black Forest Delight",
    "category": "Birthday Cakes",
    "price": 949,
    "rating": 4.7,
    "image": "images/Birthday Cakes/Black Forest Delight/Black Forest.png",
    "description": "Traditional German chocolate sponge loaded with cherry compote and fresh whipped cream.",
    "flavors": [
      "Black Forest",
      "Chocolate Cherry",
      "Dark Chocolate"
    ],
    "flavorImages": {
      "Black Forest": "images/Birthday Cakes/Black Forest Delight/Black Forest.png",
      "Chocolate Cherry": "images/Birthday Cakes/Black Forest Delight/Chocolate Cherry.png",
      "Dark Chocolate": "images/Birthday Cakes/Black Forest Delight/Dark Chocolate.png"
    },
    "flavorVideos": {
      "Black Forest": "images/Birthday Cakes/Black Forest Delight/Black Forest.mp4",
      "Chocolate Cherry": "images/Birthday Cakes/Black Forest Delight/Chocolate Cherry.mp4",
      "Dark Chocolate": "images/Birthday Cakes/Black Forest Delight/Dark Chocolate.mp4"
    },
    "sizes": [
      "250g",
      "300g",
      "500g",
      "1kg",
      "2kg",
      "3kg"
    ]
  },
  {
    "id": 5,
    "name": "Strawberry Shortcake",
    "category": "Birthday Cakes",
    "price": 1050,
    "originalPrice": 1250,
    "discount": "Festive Offer",
    "rating": 4.9,
    "image": "images/Birthday Cakes/Strawberry Shortcake/Strawberry.png",
    "description": "Light and airy sponge covered with strawberry icing and topped with fresh garden strawberries.",
    "flavors": [
      "Mixed Berry",
      "Strawberry",
      "Vanilla"
    ],
    "flavorImages": {
      "Mixed Berry": "images/Birthday Cakes/Strawberry Shortcake/Mixed Berry.png",
      "Strawberry": "images/Birthday Cakes/Strawberry Shortcake/Strawberry.png",
      "Vanilla": "images/Birthday Cakes/Strawberry Shortcake/Vanilla.png"
    },
    "flavorVideos": {
      "Mixed Berry": "images/Birthday Cakes/Strawberry Shortcake/Mixed Berry.mp4",
      "Strawberry": "images/Birthday Cakes/Strawberry Shortcake/Strawberry.mp4",
      "Vanilla": "images/Birthday Cakes/Strawberry Shortcake/Vanilla.mp4"
    },
    "sizes": [
      "250g",
      "300g",
      "500g",
      "1kg",
      "2kg",
      "3kg"
    ]
  },
  {
    "id": 6,
    "name": "Royal Lace Wedding",
    "category": "Wedding Cakes",
    "price": 5999,
    "originalPrice": 7499,
    "discount": "SAVE ₹1500",
    "rating": 5,
    "image": "images/Wedding Cakes/Royal Lace Wedding/Red Velvet.png",
    "description": "Three tiers of pure elegance featuring delicate fondant lace work and silk-touch roses.",
    "flavors": [
      "Red Velvet",
      "Vanilla",
      "White Chocolate"
    ],
    "flavorImages": {
      "Red Velvet": "images/Wedding Cakes/Royal Lace Wedding/Red Velvet.png",
      "Vanilla": "images/Wedding Cakes/Royal Lace Wedding/Vanilla.png",
      "White Chocolate": "images/Wedding Cakes/Royal Lace Wedding/White Chocolate.png"
    },
    "flavorVideos": {
      "Red Velvet": "images/Wedding Cakes/Royal Lace Wedding/Red Velvet.mp4",
      "Vanilla": "images/Wedding Cakes/Royal Lace Wedding/Vanilla.mp4",
      "White Chocolate": "images/Wedding Cakes/Royal Lace Wedding/White Chocolate.mp4"
    },
    "sizes": [
      "1kg",
      "2kg",
      "3kg",
      "5kg",
      "10kg"
    ]
  },
  {
    "id": 7,
    "name": "Golden Anniversary",
    "category": "Wedding Cakes",
    "price": 6500,
    "discount": "BEST SELLER 🏆",
    "rating": 4.9,
    "image": "images/Wedding Cakes/Golden Anniversary/Almond Praline.png",
    "description": "Exquisite multi-tiered cake wrapped in edible gold foil for an unforgettable wedding.",
    "flavors": [
      "Almond Praline",
      "Butterscotch",
      "Caramel"
    ],
    "flavorImages": {
      "Almond Praline": "images/Wedding Cakes/Golden Anniversary/Almond Praline.png",
      "Butterscotch": "images/Wedding Cakes/Golden Anniversary/Butterscotch.png",
      "Caramel": "images/Wedding Cakes/Golden Anniversary/Caramel.png"
    },
    "flavorVideos": {
      "Almond Praline": "images/Wedding Cakes/Golden Anniversary/Almond Praline.mp4",
      "Butterscotch": "images/Wedding Cakes/Golden Anniversary/Butterscotch.mp4",
      "Caramel": "images/Wedding Cakes/Golden Anniversary/Caramel.mp4"
    },
    "sizes": [
      "1kg",
      "2kg",
      "3kg",
      "5kg"
    ]
  },
  {
    "id": 8,
    "name": "Silver Swan Wedding",
    "category": "Wedding Cakes",
    "price": 5200,
    "rating": 4.8,
    "image": "images/Wedding Cakes/Silver Swan Wedding/Lemon Zest.png",
    "description": "Inspired by fairy tales, this silver-accented swan cake is a masterpiece for your big day.",
    "flavors": [
      "Lemon Zest",
      "Orange Blossom",
      "Vanilla Bean"
    ],
    "flavorImages": {
      "Lemon Zest": "images/Wedding Cakes/Silver Swan Wedding/Lemon Zest.png",
      "Orange Blossom": "images/Wedding Cakes/Silver Swan Wedding/Orange Blossom.png",
      "Vanilla Bean": "images/Wedding Cakes/Silver Swan Wedding/Vanilla Bean.png"
    },
    "flavorVideos": {
      "Lemon Zest": "images/Wedding Cakes/Silver Swan Wedding/Lemon Zest.mp4",
      "Orange Blossom": "images/Wedding Cakes/Silver Swan Wedding/Orange Blossom.mp4",
      "Vanilla Bean": "images/Wedding Cakes/Silver Swan Wedding/Vanilla Bean.mp4"
    },
    "sizes": [
      "1kg",
      "2kg",
      "3kg",
      "4kg"
    ]
  },
  {
    "id": 9,
    "name": "Diamond Tier Wedding",
    "category": "Wedding Cakes",
    "price": 7999,
    "originalPrice": 8999,
    "discount": "PREMIUM",
    "rating": 5,
    "image": "images/Wedding Cakes/Diamond Tier Wedding/Bavarian Cream.png",
    "description": "A breathtaking presentation with crystal-like sugar drops and intricate piping.",
    "flavors": [
      "Bavarian Cream",
      "Chocolate Truffle",
      "Red Velvet"
    ],
    "flavorImages": {
      "Bavarian Cream": "images/Wedding Cakes/Diamond Tier Wedding/Bavarian Cream.png",
      "Chocolate Truffle": "images/Wedding Cakes/Diamond Tier Wedding/Chocolate Truffle.png",
      "Red Velvet": "images/Wedding Cakes/Diamond Tier Wedding/Red Velvet.png"
    },
    "flavorVideos": {
      "Bavarian Cream": "images/Wedding Cakes/Diamond Tier Wedding/Bavarian Cream.mp4",
      "Chocolate Truffle": "images/Wedding Cakes/Diamond Tier Wedding/Chocolate Truffle.mp4",
      "Red Velvet": "images/Wedding Cakes/Diamond Tier Wedding/Red Velvet.mp4"
    },
    "sizes": [
      "1kg",
      "2kg",
      "3kg",
      "5kg"
    ]
  },
  {
    "id": 10,
    "name": "Pearl Blossom Wedding",
    "category": "Wedding Cakes",
    "price": 4999,
    "rating": 4.7,
    "image": "images/Wedding Cakes/Pearl Blossom Wedding/Pineapple.png",
    "description": "Beautiful cascade of sugar blossoms on a pristine white cream frosting.",
    "flavors": [
      "Pineapple",
      "Strawberry",
      "Vanilla"
    ],
    "flavorImages": {
      "Pineapple": "images/Wedding Cakes/Pearl Blossom Wedding/Pineapple.png",
      "Strawberry": "images/Wedding Cakes/Pearl Blossom Wedding/Strawberry.png",
      "Vanilla": "images/Wedding Cakes/Pearl Blossom Wedding/Vanilla.png"
    },
    "flavorVideos": {
      "Pineapple": "images/Wedding Cakes/Pearl Blossom Wedding/Pineapple.mp4",
      "Strawberry": "images/Wedding Cakes/Pearl Blossom Wedding/Strawberry.mp4",
      "Vanilla": "images/Wedding Cakes/Pearl Blossom Wedding/Vanilla.mp4"
    },
    "sizes": [
      "1kg",
      "2kg",
      "3kg"
    ]
  },
  {
    "id": 11,
    "name": "Rainbow Cupcake Box",
    "category": "Cupcakes",
    "price": 449,
    "originalPrice": 599,
    "discount": "HOT DEAL",
    "rating": 4.6,
    "image": "images/Cupcakes/Rainbow Cupcake Box/Rainbow Mix.png",
    "description": "A delightful assortment of vibrant, handcrafted cupcakes with velvety swirls of buttercream.",
    "flavors": [
      "Cotton Candy",
      "Mixed Fruit",
      "Rainbow Mix",
      "Vanilla"
    ],
    "flavorImages": {
      "Cotton Candy": "images/Cupcakes/Rainbow Cupcake Box/Cotton Candy.png",
      "Mixed Fruit": "images/Cupcakes/Rainbow Cupcake Box/Mixed Fruit.png",
      "Rainbow Mix": "images/Cupcakes/Rainbow Cupcake Box/Rainbow Mix.png",
      "Vanilla": "images/Cupcakes/Rainbow Cupcake Box/Vanilla.png"
    },
    "flavorVideos": {
      "Cotton Candy": "images/Cupcakes/Rainbow Cupcake Box/Cotton Candy.mp4",
      "Mixed Fruit": "images/Cupcakes/Rainbow Cupcake Box/Mixed Fruit.mp4",
      "Rainbow Mix": "images/Cupcakes/Rainbow Cupcake Box/Rainbow Mix.mp4",
      "Vanilla": "images/Cupcakes/Rainbow Cupcake Box/Vanilla.mp4"
    },
    "sizes": [
      "1kg",
      "2kg",
      "3kg"
    ]
  },
  {
    "id": 12,
    "name": "Vanilla Bean Cupcakes",
    "category": "Cupcakes",
    "price": 399,
    "rating": 4.8,
    "image": "images/Cupcakes/Vanilla Bean Cupcakes/Classic Vanilla.png",
    "description": "Classic moist vanilla cupcakes topped with rich Madagascar vanilla frosting.",
    "flavors": [
      "Classic Vanilla",
      "French Vanilla",
      "Vanilla Caramel"
    ],
    "flavorImages": {
      "Classic Vanilla": "images/Cupcakes/Vanilla Bean Cupcakes/Classic Vanilla.png",
      "French Vanilla": "images/Cupcakes/Vanilla Bean Cupcakes/French Vanilla.png",
      "Vanilla Caramel": "images/Cupcakes/Vanilla Bean Cupcakes/Vanilla Caramel.png"
    },
    "flavorVideos": {
      "Classic Vanilla": "images/Cupcakes/Vanilla Bean Cupcakes/Classic Vanilla.mp4",
      "French Vanilla": "images/Cupcakes/Vanilla Bean Cupcakes/French Vanilla.mp4",
      "Vanilla Caramel": "images/Cupcakes/Vanilla Bean Cupcakes/Vanilla Caramel.mp4"
    },
    "sizes": [
      "1kg",
      "2kg",
      "3kg"
    ]
  },
  {
    "id": 13,
    "name": "Choco Lava Cupcakes",
    "category": "Cupcakes",
    "price": 549,
    "discount": "PREMIUM",
    "rating": 4.9,
    "image": "images/Cupcakes/Choco Lava Cupcakes/Choco Fudge.png",
    "description": "Decadent chocolate cupcakes filled with an oozing warm chocolate center.",
    "flavors": [
      "Choco Fudge",
      "Dark Chocolate",
      "Milk Chocolate"
    ],
    "flavorImages": {
      "Choco Fudge": "images/Cupcakes/Choco Lava Cupcakes/Choco Fudge.png",
      "Dark Chocolate": "images/Cupcakes/Choco Lava Cupcakes/Dark Chocolate.png",
      "Milk Chocolate": "images/Cupcakes/Choco Lava Cupcakes/Milk Chocolate.png"
    },
    "flavorVideos": {
      "Choco Fudge": "images/Cupcakes/Choco Lava Cupcakes/Choco Fudge.mp4",
      "Dark Chocolate": "images/Cupcakes/Choco Lava Cupcakes/Dark Chocolate.mp4",
      "Milk Chocolate": "images/Cupcakes/Choco Lava Cupcakes/Milk Chocolate.mp4"
    },
    "sizes": [
      "1kg",
      "2kg",
      "3kg"
    ]
  },
  {
    "id": 14,
    "name": "Red Velvet Cupcakes",
    "category": "Cupcakes",
    "price": 499,
    "originalPrice": 550,
    "discount": "10% OFF",
    "rating": 4.7,
    "image": "images/Cupcakes/Red Velvet Cupcakes/Berry Velvet.png",
    "description": "Iconic red velvet base crowned with tangy thick cream cheese frosting.",
    "flavors": [
      "Berry Velvet",
      "Choco Velvet",
      "Red Velvet"
    ],
    "flavorImages": {
      "Berry Velvet": "images/Cupcakes/Red Velvet Cupcakes/Berry Velvet.png",
      "Choco Velvet": "images/Cupcakes/Red Velvet Cupcakes/Choco Velvet.png",
      "Red Velvet": "images/Cupcakes/Red Velvet Cupcakes/Red Velvet.png"
    },
    "flavorVideos": {
      "Berry Velvet": "images/Cupcakes/Red Velvet Cupcakes/Berry Velvet.mp4",
      "Choco Velvet": "images/Cupcakes/Red Velvet Cupcakes/Choco Velvet.mp4",
      "Red Velvet": "images/Cupcakes/Red Velvet Cupcakes/Red Velvet.mp4"
    },
    "sizes": [
      "1kg",
      "2kg",
      "3kg"
    ]
  },
  {
    "id": 15,
    "name": "Caramel Macchiato Cupcakes",
    "category": "Cupcakes",
    "price": 529,
    "rating": 4.8,
    "image": "images/Cupcakes/Caramel Macchiato Cupcakes/Caramel Coffee.png",
    "description": "Espresso infused cupcakes topped with caramel frosting and a drizzle of syrup.",
    "flavors": [
      "Caramel Coffee",
      "Roasted Coffee",
      "Toffee"
    ],
    "flavorImages": {
      "Caramel Coffee": "images/Cupcakes/Caramel Macchiato Cupcakes/Caramel Coffee.png",
      "Roasted Coffee": "images/Cupcakes/Caramel Macchiato Cupcakes/Roasted Coffee.png",
      "Toffee": "images/Cupcakes/Caramel Macchiato Cupcakes/Toffee.png"
    },
    "flavorVideos": {
      "Caramel Coffee": "images/Cupcakes/Caramel Macchiato Cupcakes/Caramel Coffee.mp4",
      "Roasted Coffee": "images/Cupcakes/Caramel Macchiato Cupcakes/Roasted Coffee.mp4",
      "Toffee": "images/Cupcakes/Caramel Macchiato Cupcakes/Toffee.mp4"
    },
    "sizes": [
      "1kg",
      "2kg",
      "3kg"
    ]
  },
  {
    "id": 16,
    "name": "Classic Chocolate & Flower Combo",
    "category": "Gift Combos",
    "price": 1499,
    "originalPrice": 1899,
    "discount": "COMBO SAVER",
    "rating": 5,
    "image": "images/hero_cake.png",
    "description": "Our signature Classic Chocolate Drip cake paired with a beautiful hand-picked bouquet of fresh seasonal flowers. Perfect for surprises!",
    "flavors": [
      "Chocolate",
      "Pistachio"
    ],
    "sizes": [
      "Small Combo",
      "Large Combo"
    ],
    "includes": "Cake + Flower Bouquet"
  },
  {
    "id": 17,
    "name": "Royal Wedding & Artisan Chocolates",
    "category": "Gift Combos",
    "price": 6999,
    "originalPrice": 8500,
    "discount": "PREMIUM GIFT",
    "rating": 4.9,
    "image": "images/wedding_cake.png",
    "description": "The Royal Lace Wedding cake accompanied by a luxury box of 24 handcrafted Belgian chocolates. The ultimate celebration set.",
    "flavors": [
      "Vanilla",
      "Red Velvet"
    ],
    "sizes": [
      "Grand Combo"
    ],
    "includes": "Tiered Cake + 24pc Chocolate Box"
  },
  {
    "id": 18,
    "name": "Luxury Gold Foil Fondant",
    "category": "Designer Cakes",
    "price": 3500,
    "rating": 5,
    "image": "images/Designer/Luxury Gold Foil Fondant/Belgian Chocolate.png",
    "description": "Elegant handcrafted fondant work with 24k edible gold foil. (Luxury / Fondant / Designer)",
    "flavors": [
      "Belgian Chocolate",
      "Red Velvet"
    ],
    "flavorImages": {
      "Belgian Chocolate": "images/Designer/Luxury Gold Foil Fondant/Belgian Chocolate.png",
      "Red Velvet": "images/Designer/Luxury Gold Foil Fondant/Red Velvet.png"
    },
    "flavorVideos": {
      "Belgian Chocolate": "images/Designer/Luxury Gold Foil Fondant/Belgian Chocolate.mp4",
      "Red Velvet": "images/Designer/Luxury Gold Foil Fondant/Red Velvet.mp4",
      "categoryFallback": "images/Designer/Luxury Gold Foil Fondant/Designer Cakes.mp4"
    },
    "sizes": [
      "1.5kg",
      "2kg"
    ]
  },
  {
    "id": 19,
    "name": "Little Prince Baby Shower",
    "category": "Baby Shower Cakes",
    "price": 1899,
    "rating": 4.9,
    "image": "images/Baby Shower/Little Prince Baby Shower/Blueberry.png",
    "description": "Premium 2-tier design with edible baby shoes and fondant accents. (Baby Shower Special)",
    "flavors": [
      "Blueberry",
      "Vanilla"
    ],
    "flavorImages": {
      "Blueberry": "images/Baby Shower/Little Prince Baby Shower/Blueberry.png",
      "Vanilla": "images/Baby Shower/Little Prince Baby Shower/Vanilla.png"
    },
    "flavorVideos": {
      "Blueberry": "images/Baby Shower/Little Prince Baby Shower/Blueberry.mp4",
      "Vanilla": "images/Baby Shower/Little Prince Baby Shower/Vanilla.mp4"
    },
    "sizes": [
      "1.5kg",
      "2kg",
      "3kg"
    ]
  },
  {
    "id": 63,
    "name": "Stork Delivery Special",
    "category": "Baby Shower Cakes",
    "price": 1749,
    "rating": 4.8,
    "image": "images/Baby Shower/Stork Delivery Special/Vanilla Bean.png",
    "description": "A charming stork-themed baby shower cake with delicate fondant details and a heartwarming design.",
    "flavors": [
      "Vanilla Bean"
    ],
    "flavorImages": {
      "Vanilla Bean": "images/Baby Shower/Stork Delivery Special/Vanilla Bean.png"
    },
    "flavorVideos": {
      "Vanilla Bean": "images/Baby Shower/Stork Delivery Special/Vanilla Bean.mp4"
    },
    "sizes": [
      "1kg",
      "1.5kg",
      "2kg"
    ]
  },
  {
    "id": 64,
    "name": "Pink or Blue Reveal",
    "category": "Baby Shower Cakes",
    "price": 1599,
    "rating": 4.9,
    "image": "images/Baby Shower/Pink or Blue Reveal/Sweet Cream.png",
    "description": "A stunning gender reveal cake with a colourful surprise inside. Perfect for that unforgettable moment!",
    "flavors": [
      "Sweet Cream"
    ],
    "flavorImages": {
      "Sweet Cream": "images/Baby Shower/Pink or Blue Reveal/Sweet Cream.png"
    },
    "flavorVideos": {
      "Sweet Cream": "images/Baby Shower/Pink or Blue Reveal/Sweet Cream.mp4"
    },
    "sizes": [
      "1kg",
      "1.5kg",
      "2kg"
    ]
  },
  {
    "id": 20,
    "name": "SuperHero Squad Cake",
    "category": "Kids Theme Cakes",
    "subCategory": "Superhero",
    "price": 2499,
    "rating": 4.8,
    "image": "images/Kids Special/SuperHero Squad Cake/Butterscotch.png",
    "description": "Featuring action-packed fondant figures of popular superheroes. (Cartoon / Superhero Theme)",
    "flavors": [
      "Butterscotch",
      "Chocolate"
    ],
    "flavorImages": {
      "Butterscotch": "images/Kids Special/SuperHero Squad Cake/Butterscotch.png",
      "Chocolate": "images/Kids Special/SuperHero Squad Cake/Chocolate.png"
    },
    "flavorVideos": {
      "Butterscotch": "images/Kids Special/SuperHero Squad Cake/Butterscotch.mp4",
      "Chocolate": "images/Kids Special/SuperHero Squad Cake/Chocolate.mp4"
    },
    "sizes": [
      "1kg",
      "2kg"
    ]
  },
  {
    "id": 21,
    "name": "Custom Memories Photo Cake",
    "category": "Photo Cakes",
    "price": 1299,
    "rating": 4.7,
    "image": "images/photo-cake-base.png",
    "description": "High-definition edible photo print on a fresh cream cake. (Best Gift for Birthdays)",
    "flavors": [
      "Vanilla",
      "Strawberry"
    ],
    "sizes": [
      "500g",
      "1kg",
      "2kg"
    ]
  },
  {
    "id": 22,
    "name": "Pinata Surprise (with Hammer)",
    "category": "Trending Cakes",
    "subCategory": "Pinata Cakes",
    "price": 1599,
    "rating": 5,
    "image": "images/Trending/Pinata Surprise (with Hammer)/Assorted Candy.png",
    "description": "A trendy chocolate shell cake that comes with a wooden hammer. (Pinata / Bomb / Pull Me Up)",
    "flavors": [
      "Assorted Candy",
      "Chocolate"
    ],
    "flavorImages": {
      "Assorted Candy": "images/Trending/Pinata Surprise (with Hammer)/Assorted Candy.png",
      "Chocolate": "images/Trending/Pinata Surprise (with Hammer)/Chocolate.png"
    },
    "flavorVideos": {
      "Assorted Candy": "images/Trending/Pinata Surprise (with Hammer)/Assorted Candy.mp4",
      "Chocolate": "images/Trending/Pinata Surprise (with Hammer)/Chocolate.mp4"
    },
    "sizes": [
      "Medium",
      "Large"
    ]
  },
  {
    "id": 46,
    "name": "Belgium Chocolate Jar",
    "category": "Bakery Products",
    "price": 250,
    "rating": 4.8,
    "image": "images/Bakery/Belgium Chocolate Jar/Chocolate.png",
    "description": "Layers of cake and ganache in a reusable glass jar. (Pastries/Jar Cakes/Brownies)",
    "flavors": [
      "Chocolate"
    ],
    "flavorImages": {
      "Chocolate": "images/Bakery/Belgium Chocolate Jar/Chocolate.png"
    },
    "flavorVideos": {
      "Chocolate": "images/Bakery/Belgium Chocolate Jar/Chocolate.mp4"
    },
    "sizes": [
      "200ml"
    ]
  },
  {
    "id": 23,
    "name": "Artisan French Macarons (Box of 12)",
    "category": "Bakery Products",
    "subCategory": "Macarons",
    "price": 799,
    "rating": 4.9,
    "image": "images/Bakery/Artisan French Macarons (Box of 12)/Pistachio.png",
    "description": "Authentic French macarons with creamy ganache fillings. (Pastries/Jar Cakes/Brownies/Cookies/Muffins)",
    "flavors": [
      "Pistachio",
      "Rose",
      "Salted Caramel"
    ],
    "flavorImages": {
      "Pistachio": "images/Bakery/Artisan French Macarons (Box of 12)/Pistachio.png",
      "Rose": "images/Bakery/Artisan French Macarons (Box of 12)/Rose.png",
      "Salted Caramel": "images/Bakery/Artisan French Macarons (Box of 12)/Salted Caramel.png"
    },
    "flavorVideos": {
      "Pistachio": "images/Bakery/Artisan French Macarons (Box of 12)/Pistachio.mp4"
    },
    "sizes": [
      "Box of 6",
      "Box of 12"
    ]
  },
  {
    "id": 56,
    "name": "Christmas Yule Log",
    "category": "Occasion Cakes",
    "price": 1400,
    "rating": 4.8,
    "image": "images/Occasions/Christmas Yule Log/Dark Chocolate.png",
    "description": "Traditional chocolate log cake with winter decor. (Christmas Special)",
    "flavors": [
      "Dark Chocolate",
      "Hazelnut Truffle"
    ],
    "sizes": [
      "1kg"
    ],
    "flavorImages": {
      "Dark Chocolate": "images/Occasions/Christmas Yule Log/Dark Chocolate.png",
      "Hazelnut Truffle": "images/Occasions/Christmas Yule Log/Hazelnut Truffle.png"
    },
    "flavorVideos": {
      "Dark Chocolate": "images/Occasions/Christmas Yule Log/Dark Chocolate.mp4",
      "Hazelnut Truffle": "images/Occasions/Christmas Yule Log/Hazelnut Truffle.mp4"
    }
  },
  {
    "id": 25,
    "name": "Valentine's Heart Sparkle",
    "category": "Occasion Cakes",
    "subCategory": "Valentine's Special",
    "price": 999,
    "rating": 4.9,
    "image": "images/Occasions/Valentine's Heart Sparkle/Red Velvet.png",
    "description": "Heart-shaped red velvet cake with sparkling sprinkles. (Mother's Day / Father's Day / Festival)",
    "flavors": [
      "Red Velvet",
      "Strawberry"
    ],
    "sizes": [
      "500g",
      "1kg"
    ],
    "flavorImages": {
      "Red Velvet": "images/Occasions/Valentine's Heart Sparkle/Red Velvet.png",
      "Strawberry": "images/Occasions/Valentine's Heart Sparkle/Strawberry.png"
    },
    "flavorVideos": {
      "Red Velvet": "images/Occasions/Valentine's Heart Sparkle/Red Velvet.mp4",
      "Strawberry": "images/Occasions/Valentine's Heart Sparkle/Strawberry.mp4"
    }
  },
  {
    "id": 26,
    "name": "Mini Bento Surprise",
    "category": "Trending Cakes",
    "subCategory": "Bento Cakes",
    "price": 499,
    "rating": 4.8,
    "image": "images/Trending/Mini Bento Surprise/Chocolate.png",
    "description": "Adorable 4-inch mini cakes for personal celebrations. (Bento / Mini Cakes Trend)",
    "flavors": [
      "Chocolate",
      "Vanilla"
    ],
    "flavorImages": {
      "Chocolate": "images/Trending/Mini Bento Surprise/Chocolate.png",
      "Vanilla": "images/Trending/Mini Bento Surprise/Vanilla.png"
    },
    "flavorVideos": {
      "Chocolate": "images/Trending/Mini Bento Surprise/Chocolate.mp4",
      "Vanilla": "images/Trending/Mini Bento Surprise/Vanilla.mp4"
    },
    "sizes": [
      "Small (4 inch)"
    ]
  },
  {
    "id": 29,
    "name": "Elephant Safari Baby",
    "category": "Baby Shower Cakes",
    "price": 1750,
    "rating": 4.8,
    "image": "images/Baby Shower/Elephant Safari Baby/Pistachio.png",
    "description": "Cute elephant fondant toppers for a safari baby shower. (Baby Shower Special)",
    "flavors": [
      "Pistachio"
    ],
    "flavorImages": {
      "Pistachio": "images/Baby Shower/Elephant Safari Baby/Pistachio.png"
    },
    "flavorVideos": {
      "Pistachio": "images/Baby Shower/Elephant Safari Baby/Pistachio.mp4"
    },
    "sizes": [
      "1.5kg",
      "2kg"
    ]
  },
  {
    "id": 30,
    "name": "Cloud Nine Baby Cake",
    "category": "Baby Shower Cakes",
    "price": 1450,
    "rating": 4.6,
    "image": "images/Baby Shower/Cloud Nine Baby Cake/Milk & Honey.png",
    "description": "Dreamy clouds and moon design for baby's celebration. (Baby Shower Special)",
    "flavors": [
      "Milk & Honey"
    ],
    "flavorImages": {
      "Milk & Honey": "images/Baby Shower/Cloud Nine Baby Cake/Milk & Honey.png"
    },
    "flavorVideos": {
      "Milk & Honey": "images/Baby Shower/Cloud Nine Baby Cake/Milk & Honey.mp4"
    },
    "sizes": [
      "1kg",
      "1.5kg"
    ]
  },
  {
    "id": 31,
    "name": "Jungle Safari Adventures",
    "category": "Kids Theme Cakes",
    "price": 2200,
    "rating": 4.9,
    "image": "images/Kids Special/Jungle Safari Adventures/Banana Chocolate.png",
    "description": "Wild animals and jungle vines theme. (Cartoon / Superhero Theme)",
    "flavors": [
      "Banana Chocolate"
    ],
    "flavorImages": {
      "Banana Chocolate": "images/Kids Special/Jungle Safari Adventures/Banana Chocolate.png"
    },
    "flavorVideos": {
      "Banana Chocolate": "images/Kids Special/Jungle Safari Adventures/Banana Chocolate.mp4"
    },
    "sizes": [
      "1.5kg",
      "2kg"
    ]
  },
  {
    "id": 32,
    "name": "Space Rocket Explorer",
    "category": "Kids Theme Cakes",
    "price": 1999,
    "rating": 4.7,
    "image": "images/Kids Special/Space Rocket Explorer/Dark Chocolate.png",
    "description": "Blast off into space with this rocket-themed cake. (Cartoon / Superhero Theme)",
    "flavors": [
      "Dark Chocolate"
    ],
    "flavorImages": {
      "Dark Chocolate": "images/Kids Special/Space Rocket Explorer/Dark Chocolate.png"
    },
    "flavorVideos": {
      "Dark Chocolate": "images/Kids Special/Space Rocket Explorer/Dark Chocolate.mp4"
    },
    "sizes": [
      "1kg",
      "1.5kg"
    ]
  },
  {
    "id": 33,
    "name": "Under the Sea Mermaid",
    "category": "Kids Theme Cakes",
    "price": 2100,
    "rating": 4.8,
    "image": "images/Kids Special/Under the Sea Mermaid/Lavender Vanilla.png",
    "description": "Magical mermaid tails and sea shells design. (Cartoon / Superhero Theme)",
    "flavors": [
      "Lavender Vanilla"
    ],
    "flavorImages": {
      "Lavender Vanilla": "images/Kids Special/Under the Sea Mermaid/Lavender Vanilla.png"
    },
    "flavorVideos": {
      "Lavender Vanilla": "images/Kids Special/Under the Sea Mermaid/Lavender Vanilla.mp4"
    },
    "sizes": [
      "1kg",
      "2kg"
    ]
  },
  {
    "id": 34,
    "name": "Racing Track Champion",
    "category": "Kids Theme Cakes",
    "price": 1850,
    "rating": 4.6,
    "image": "images/Kids Special/Racing Track Champion/Triple Chocolate.png",
    "description": "Exciting race track design with car toppers. (Cartoon / Superhero Theme)",
    "flavors": [
      "Triple Chocolate"
    ],
    "flavorImages": {
      "Triple Chocolate": "images/Kids Special/Racing Track Champion/Triple Chocolate.png"
    },
    "flavorVideos": {
      "Triple Chocolate": "images/Kids Special/Racing Track Champion/Triple Chocolate.mp4"
    },
    "sizes": [
      "1kg",
      "2kg"
    ]
  },
  {
    "id": 35,
    "name": "Midnight Marble Elegance",
    "category": "Designer Cakes",
    "price": 2800,
    "rating": 5,
    "image": "images/Designer/Midnight Marble Elegance/Black Velvet.png",
    "description": "Black and white marble finish with silver leaf. (Luxury / Fondant / Designer)",
    "flavors": [
      "Black Velvet"
    ],
    "flavorImages": {
      "Black Velvet": "images/Designer/Midnight Marble Elegance/Black Velvet.png"
    },
    "flavorVideos": {
      "Black Velvet": "images/Designer/Midnight Marble Elegance/Black Velvet.mp4"
    },
    "sizes": [
      "1kg",
      "2kg"
    ]
  },
  {
    "id": 36,
    "name": "Floral Cascade Masterpiece",
    "category": "Designer Cakes",
    "price": 3200,
    "rating": 4.9,
    "image": "images/Designer/Floral Cascade Masterpiece/Vanilla Rose.png",
    "description": "Stunning edible flowers cascading down 3 tiers. (Luxury / Fondant / Designer)",
    "flavors": [
      "Vanilla Rose"
    ],
    "flavorImages": {
      "Vanilla Rose": "images/Designer/Floral Cascade Masterpiece/Vanilla Rose.png"
    },
    "flavorVideos": {
      "Vanilla Rose": "images/Designer/Floral Cascade Masterpiece/Vanilla Rose.mp4"
    },
    "sizes": [
      "2kg",
      "3kg"
    ]
  },
  {
    "id": 37,
    "name": "Geometric Abstract Art",
    "category": "Designer Cakes",
    "price": 2600,
    "rating": 4.7,
    "image": "images/Designer/Geometric Abstract Art/Dark Chocolate.png",
    "description": "Modern geometric patterns with vibrant colors. (Luxury / Fondant / Designer)",
    "flavors": [
      "Dark Chocolate",
      "Funfetti",
      "Hazelnut",
      "Strawberry"
    ],
    "flavorImages": {
      "Dark Chocolate": "images/Designer/Geometric Abstract Art/Dark Chocolate.png",
      "Funfetti": "images/Designer/Geometric Abstract Art/Funfetti.png",
      "Hazelnut": "images/Designer/Geometric Abstract Art/Hazelnut.png",
      "Strawberry": "images/Designer/Geometric Abstract Art/Strawberry.png"
    },
    "flavorVideos": {
      "Dark Chocolate": "images/Designer/Geometric Abstract Art/Dark Chocolate.mp4",
      "Funfetti": "images/Designer/Geometric Abstract Art/Funfetti.mp4",
      "Hazelnut": "images/Designer/Geometric Abstract Art/Hazelnut.mp4",
      "Strawberry": "images/Designer/Geometric Abstract Art/Strawberry.mp4"
    },
    "sizes": [
      "1kg",
      "1.5kg"
    ]
  },
  {
    "id": 38,
    "name": "Victorian Pearl Crown",
    "category": "Designer Cakes",
    "price": 2950,
    "rating": 4.9,
    "image": "images/Designer/Victorian Pearl Crown/Fruit Cake.png",
    "description": "Classic Victorian era design with pearl borders. (Luxury / Fondant / Designer)",
    "flavors": [
      "Fruit Cake"
    ],
    "flavorImages": {
      "Fruit Cake": "images/Designer/Victorian Pearl Crown/Fruit Cake.png"
    },
    "flavorVideos": {
      "Fruit Cake": "images/Designer/Victorian Pearl Crown/Fruit Cake.mp4"
    },
    "sizes": [
      "1kg",
      "2kg"
    ]
  },
  {
    "id": 39,
    "name": "Family Portrait Cake",
    "category": "Photo Cakes",
    "price": 1350,
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&q=80&w=800",
    "description": "Perfect for family reunions and anniversaries. (Photo Cakes)",
    "flavors": [
      "Pineapple"
    ],
    "sizes": [
      "1kg",
      "2kg"
    ]
  },
  {
    "id": 40,
    "name": "Corporate Brand Cake",
    "category": "Photo Cakes",
    "price": 1500,
    "rating": 4.6,
    "image": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=800",
    "description": "Add your company logo for office celebrations. (Photo Cakes)",
    "flavors": [
      "Chocolate Truffle"
    ],
    "sizes": [
      "2kg",
      "3kg",
      "5kg"
    ]
  },
  {
    "id": 41,
    "name": "Graduation Photo Special",
    "category": "Photo Cakes",
    "price": 1250,
    "rating": 4.9,
    "image": "https://replicate.delivery/xezq/8vcfOJKlPz1SLCNpcejt97wct1hiNaIW4s7QcT1IhgeDc5nsA/out-0.webp",
    "description": "Celebrate the big day with a graduate photo cake. (Photo Cakes)",
    "flavors": [
      "Butterscotch"
    ],
    "sizes": [
      "1kg",
      "1.5kg"
    ]
  },
  {
    "id": 42,
    "name": "Couple Classic Photo Cake",
    "category": "Photo Cakes",
    "price": 1200,
    "rating": 4.7,
    "image": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&q=80&w=800",
    "description": "Romantic photo frame design for couples. (Photo Cakes)",
    "flavors": [
      "Mixed Berry"
    ],
    "sizes": [
      "500g",
      "1kg"
    ]
  },
  {
    "id": 43,
    "name": "Chocolate Bomb Surprise",
    "category": "Trending Cakes",
    "price": 1799,
    "rating": 4.9,
    "image": "images/Trending/Chocolate Bomb Surprise/Truffle.png",
    "description": "Lights up and 'explodes' with chocolate goodies when open. (Trending / Modern)",
    "flavors": [
      "Truffle"
    ],
    "flavorImages": {
      "Truffle": "images/Trending/Chocolate Bomb Surprise/Truffle.png"
    },
    "flavorVideos": {
      "Truffle": "images/Trending/Chocolate Bomb Surprise/Truffle.mp4"
    },
    "sizes": [
      "Medium"
    ]
  },
  {
    "id": 44,
    "name": "Pull Me Up Lava Tsunami",
    "category": "Trending Cakes",
    "price": 1400,
    "rating": 5,
    "image": "images/Trending/Pull Me Up Lava Tsunami/Hazelnut.png",
    "description": "Lift the plastic for a chocolate tsunami waterfall effect. (Trending / Modern)",
    "flavors": [
      "Hazelnut"
    ],
    "flavorImages": {
      "Hazelnut": "images/Trending/Pull Me Up Lava Tsunami/Hazelnut.png"
    },
    "flavorVideos": {
      "Hazelnut": "images/Trending/Pull Me Up Lava Tsunami/Hazelnut.mp4"
    },
    "sizes": [
      "1kg"
    ]
  },

  {
    "id": 47,
    "name": "Walnut Fudge Brownie Box",
    "category": "Bakery Products",
    "price": 450,
    "rating": 4.9,
    "image": "images/Bakery/Walnut Fudge Brownie Box/Chocolate.png",
    "description": "Gooey chocolate brownies loaded with crunchy walnuts. (Pastries/Jar Cakes/Brownies)",
    "flavors": [
      "Chocolate"
    ],
    "flavorImages": {
      "Chocolate": "images/Bakery/Walnut Fudge Brownie Box/Chocolate.png"
    },
    "flavorVideos": {
      "Chocolate": "images/Bakery/Walnut Fudge Brownie Box/Chocolate.mp4"
    },
    "sizes": [
      "Box of 4",
      "Box of 6"
    ]
  },
  {
    "id": 48,
    "name": "Galaxy Glazed Donuts",
    "category": "Bakery Products",
    "price": 350,
    "rating": 4.6,
    "image": "images/Bakery/Galaxy Glazed Donuts/Sweet Glaze.png",
    "description": "Soft donuts with stunning space-themed glaze. (Bakery Products)",
    "flavors": [
      "Sweet Glaze"
    ],
    "flavorImages": {
      "Sweet Glaze": "images/Bakery/Galaxy Glazed Donuts/Sweet Glaze.png"
    },
    "sizes": [
      "Pack of 4"
    ]
  },
  {
    "id": 49,
    "name": "Blueberry Muffins (Pack of 2)",
    "category": "Bakery Products",
    "price": 180,
    "rating": 4.7,
    "image": "images/Bakery/Blueberry Muffins (Pack of 2)/Blueberry.png",
    "description": "Freshly baked muffins bursting with local blueberries. (Bakery Products)",
    "flavors": [
      "Blueberry"
    ],
    "flavorImages": {
      "Blueberry": "images/Bakery/Blueberry Muffins (Pack of 2)/Blueberry.png"
    },
    "sizes": [
      "Pack of 2"
    ]
  },
  {
    "id": 50,
    "name": "Sugar-Free Healthy Fruit",
    "category": "Dietary Specific",
    "price": 1300,
    "rating": 4.6,
    "image": "images/Dietary/Sugar-Free Healthy Fruit/Mixed Fruit.png",
    "description": "Guilt-free dessert sweetened with natural Stevia. (Sugar-Free / Vegan / Gluten-Free)",
    "flavors": [
      "Mixed Fruit"
    ],
    "flavorImages": {
      "Mixed Fruit": "images/Dietary/Sugar-Free Healthy Fruit/Mixed Fruit.png"
    },
    "flavorVideos": {
      "Mixed Fruit": "images/Dietary/Sugar-Free Healthy Fruit/Mixed Fruit.mp4"
    },
    "sizes": [
      "500g",
      "1kg"
    ]
  },
  {
    "id": 53,
    "name": "Organic Oat Cake",
    "category": "Dietary Specific",
    "price": 950,
    "rating": 4.4,
    "image": "images/Dietary/Organic Oat Cake/Honey Oat.png",
    "description": "Healthy oat-based cake with honey sweetness. (Dietary Specific)",
    "flavors": [
      "Honey Oat"
    ],
    "flavorImages": {
      "Honey Oat": "images/Dietary/Organic Oat Cake/Honey Oat.png"
    },
    "flavorVideos": {
      "Honey Oat": "images/Dietary/Organic Oat Cake/Honey Oat.mp4"
    },
    "sizes": [
      "1kg"
    ]
  },
  {
    "id": 54,
    "name": "Mother's Day Special",
    "category": "Occasion Cakes",
    "price": 1150,
    "rating": 4.9,
    "image": "images/Occasions/Mother's Day Special/Rose Vanilla.png",
    "description": "Soft pink ombre cake with 'Best Mom' toppers. (Mother's Day / Father's Day / Festival)",
    "flavors": [
      "Rose Vanilla"
    ],
    "sizes": [
      "1kg"
    ],
    "flavorImages": {
      "Rose Vanilla": "images/Occasions/Mother's Day Special/Rose Vanilla.png"
    },
    "flavorVideos": {
      "Rose Vanilla": "images/Occasions/Mother's Day Special/Rose Vanilla.mp4"
    }
  },
  {
    "id": 55,
    "name": "Grand Diwali Special",
    "category": "Occasion Cakes",
    "price": 1600,
    "rating": 5,
    "image": "images/Occasions/Grand Diwali Special/Rasmalai Fusion.png",
    "description": "Fusion cake with Indian sweets like Motichur. (Festival Cakes)",
    "flavors": [
      "Rasmalai Fusion"
    ],
    "sizes": [
      "1kg",
      "2kg"
    ],
    "flavorImages": {
      "Rasmalai Fusion": "images/Occasions/Grand Diwali Special/Rasmalai Fusion.png"
    },
    "flavorVideos": {
      "Rasmalai Fusion": "images/Occasions/Grand Diwali Special/Rasmalai Fusion.mp4"
    }
  },

  {
    "id": 57,
    "name": "Rakhi Celebration Mini",
    "category": "Occasion Cakes",
    "price": 600,
    "rating": 4.7,
    "image": "images/Occasions/Rakhi Celebration Mini/Dark Chocolate.png",
    "description": "Small celebration cake for brothers and sisters. (Festival Cakes)",
    "flavors": [
      "Dark Chocolate",
      "Mixed Fruit",
      "Strawberry"
    ],
    "sizes": [
      "500g"
    ],
    "flavorImages": {
      "Dark Chocolate": "images/Occasions/Rakhi Celebration Mini/Dark Chocolate.png",
      "Mixed Fruit": "images/Occasions/Rakhi Celebration Mini/Mixed Fruit.png",
      "Strawberry": "images/Occasions/Rakhi Celebration Mini/Strawberry.png"
    },
    "flavorVideos": {
      "Dark Chocolate": "images/Occasions/Rakhi Celebration Mini/Dark Chocolate.mp4",
      "Mixed Fruit": "images/Occasions/Rakhi Celebration Mini/Mixed Fruit.mp4",
      "Strawberry": "images/Occasions/Rakhi Celebration Mini/Strawberry.mp4"
    }
  },
  {
    "id": 58,
    "name": "New York Classic Cheesecake",
    "category": "Cheesecakes",
    "price": 1299,
    "rating": 5,
    "image": "images/Cheesecakes/New York Classic Cheesecake/Lemon Zest.png",
    "description": "The ultimate New York style cheesecake—thick, creamy, and smooth on a crunchy graham cracker crust.",
    "flavors": [
      "Lemon Zest",
      "Vanilla Bean"
    ],
    "sizes": [
      "Slice",
      "500g",
      "1kg"
    ],
    "flavorImages": {
      "Lemon Zest": "images/Cheesecakes/New York Classic Cheesecake/Lemon Zest.png",
      "Vanilla Bean": "images/Cheesecakes/New York Classic Cheesecake/Vanilla Bean.png"
    },
    "flavorVideos": {
      "Lemon Zest": "images/Cheesecakes/New York Classic Cheesecake/Lemon Zest.mp4",
      "Vanilla Bean": "images/Cheesecakes/New York Classic Cheesecake/Vanilla Bean.mp4"
    }
  },
  {
    "id": 59,
    "name": "Blueberry Swirl Cheesecake",
    "category": "Cheesecakes",
    "price": 1399,
    "rating": 4.9,
    "image": "images/Cheesecakes/Blueberry Swirl Cheesecake/Mixed Berry.png",
    "description": "Creamy cheesecake swirled with a homemade wild blueberry compote and topped with fresh berries.",
    "flavors": [
      "Mixed Berry",
      "White Chocolate",
      "Wild Blueberry"
    ],
    "sizes": [
      "500g",
      "1kg",
      "2kg"
    ],
    "flavorImages": {
      "Mixed Berry": "images/Cheesecakes/Blueberry Swirl Cheesecake/Mixed Berry.png",
      "White Chocolate": "images/Cheesecakes/Blueberry Swirl Cheesecake/White Chocolate.png",
      "Wild Blueberry": "images/Cheesecakes/Blueberry Swirl Cheesecake/Wild Blueberry.png"
    },
    "flavorVideos": {
      "Mixed Berry": "images/Cheesecakes/Blueberry Swirl Cheesecake/Mixed Berry.mp4",
      "White Chocolate": "images/Cheesecakes/Blueberry Swirl Cheesecake/White Chocolate.mp4",
      "Wild Blueberry": "images/Cheesecakes/Blueberry Swirl Cheesecake/Wild Blueberry.mp4"
    }
  },
  {
    "id": 60,
    "name": "Raspberry Velvet Cheesecake",
    "category": "Cheesecakes",
    "price": 1450,
    "rating": 4.8,
    "image": "images/Cheesecakes/Raspberry Velvet Cheesecake/Dark Chocolate Raspberry.png",
    "description": "A vibrant raspberry flavored cheesecake with a silky smooth texture and a chocolate cookie base.",
    "flavors": [
      "Dark Chocolate Raspberry",
      "Raspberry",
      "White Chocolate Raspberry"
    ],
    "sizes": [
      "500g",
      "1kg"
    ],
    "flavorImages": {
      "Dark Chocolate Raspberry": "images/Cheesecakes/Raspberry Velvet Cheesecake/Dark Chocolate Raspberry.png",
      "Raspberry": "images/Cheesecakes/Raspberry Velvet Cheesecake/Raspberry.png",
      "White Chocolate Raspberry": "images/Cheesecakes/Raspberry Velvet Cheesecake/White Chocolate Raspberry.png"
    },
    "flavorVideos": {
      "Dark Chocolate Raspberry": "images/Cheesecakes/Raspberry Velvet Cheesecake/Dark Chocolate Raspberry.mp4",
      "Raspberry": "images/Cheesecakes/Raspberry Velvet Cheesecake/Raspberry.mp4",
      "White Chocolate Raspberry": "images/Cheesecakes/Raspberry Velvet Cheesecake/White Chocolate Raspberry.mp4"
    }
  },
  {
    "id": 61,
    "name": "Lotus Biscoff Cheesecake",
    "category": "Cheesecakes",
    "price": 1599,
    "rating": 5,
    "image": "images/Cheesecakes/Lotus Biscoff Cheesecake/Biscoff Caramel.png",
    "description": "Rich cheesecake infused with Lotus Biscoff spread, topped with cookie crumble and a buttery biscoff swirl.",
    "flavors": [
      "Biscoff Caramel",
      "Cookie Butter",
      "Double Lotus"
    ],
    "sizes": [
      "500g",
      "1kg",
      "2kg"
    ],
    "flavorImages": {
      "Biscoff Caramel": "images/Cheesecakes/Lotus Biscoff Cheesecake/Biscoff Caramel.png",
      "Cookie Butter": "images/Cheesecakes/Lotus Biscoff Cheesecake/Cookie Butter.png",
      "Double Lotus": "images/Cheesecakes/Lotus Biscoff Cheesecake/Double Lotus.png"
    },
    "flavorVideos": {
      "Biscoff Caramel": "images/Cheesecakes/Lotus Biscoff Cheesecake/Biscoff Caramel.mp4",
      "Cookie Butter": "images/Cheesecakes/Lotus Biscoff Cheesecake/Cookie Butter.mp4",
      "Double Lotus": "images/Cheesecakes/Lotus Biscoff Cheesecake/Double Lotus.mp4"
    }
  },
  {
    "id": 62,
    "name": "Mango Passion Cheesecake",
    "category": "Cheesecakes",
    "price": 1350,
    "rating": 4.7,
    "image": "images/Cheesecakes/Mango Passion Cheesecake/Mango Passion Fruit.png",
    "description": "A tropical delight featuring fresh Alphonso mango and passion fruit puree on a buttery crust.",
    "flavors": [
      "Mango Passion Fruit",
      "Mango",
      "Peach"
    ],
    "sizes": [
      "500g",
      "1kg"
    ],
    "flavorImages": {
      "Mango Passion Fruit": "images/Cheesecakes/Mango Passion Cheesecake/Mango Passion Fruit.png",
      "Mango": "images/Cheesecakes/Mango Passion Cheesecake/Mango.png",
      "Peach": "images/Cheesecakes/Mango Passion Cheesecake/Peach.png"
    },
    "flavorVideos": {
      "Mango Passion Fruit": "images/Cheesecakes/Mango Passion Cheesecake/Mango Passion Fruit.mp4",
      "Mango": "images/Cheesecakes/Mango Passion Cheesecake/Mango.mp4",
      "Peach": "images/Cheesecakes/Mango Passion Cheesecake/Peach.mp4"
    }
  },
  {
    "id": 112,
    "name": "Double Choco-Chip Cookies",
    "category": "Biscuits",
    "price": 299,
    "rating": 5,
    "image": "images/Biscuits/Double Choco-Chip Cookies/Dark Choco-Chip.png",
    "description": "Loaded with premium chocolate chips and a hint of vanilla. Soft in the middle, crunchy on the edge.",
    "flavors": [
      "Dark Choco-Chip",
      "Milk Choco-Chip",
      "White Choco-Chip"
    ],
    "flavorImages": {
      "Dark Choco-Chip": "images/Biscuits/Double Choco-Chip Cookies/Dark Choco-Chip.png",
      "Milk Choco-Chip": "images/Biscuits/Double Choco-Chip Cookies/Milk Choco-Chip.png",
      "White Choco-Chip": "images/Biscuits/Double Choco-Chip Cookies/White Choco-Chip.png"
    },
    "flavorVideos": {
      "Dark Choco-Chip": "images/Biscuits/Double Choco-Chip Cookies/Dark Choco-Chip.mp4",
      "Milk Choco-Chip": "images/Biscuits/Double Choco-Chip Cookies/Milk Choco-Chip.mp4",
      "White Choco-Chip": "images/Biscuits/Double Choco-Chip Cookies/White Choco-Chip.mp4"
    },
    "sizes": [
      "Box of 6",
      "Box of 12"
    ]
  },
  {
    "id": 111,
    "name": "Buttery Danish Biscuits",
    "category": "Biscuits",
    "price": 249,
    "rating": 4.9,
    "image": "images/Biscuits/Buttery Danish Biscuits/Butter Classic.png",
    "description": "Crispy and buttery biscuits made with high-quality creamery butter for a melt-in-the-mouth experience.",
    "flavors": [
      "Butter Classic",
      "Caramel Butter",
      "Salted Butter"
    ],
    "flavorImages": {
      "Butter Classic": "images/Biscuits/Buttery Danish Biscuits/Butter Classic.png",
      "Caramel Butter": "images/Biscuits/Buttery Danish Biscuits/Caramel Butter.png",
      "Salted Butter": "images/Biscuits/Buttery Danish Biscuits/Salted Butter.png"
    },
    "flavorVideos": {
      "Butter Classic": "images/Biscuits/Buttery Danish Biscuits/Butter Classic.mp4",
      "Caramel Butter": "images/Biscuits/Buttery Danish Biscuits/Caramel Butter.mp4",
      "Salted Butter": "images/Biscuits/Buttery Danish Biscuits/Salted Butter.mp4"
    },
    "sizes": [
      "250g Box",
      "500g Tin"
    ]
  },
  {
    "id": 113,
    "name": "Oatmeal & Raisin Healthy Bites",
    "category": "Biscuits",
    "price": 199,
    "rating": 4.7,
    "image": "images/Biscuits/Oatmeal & Raisin Healthy Bites/Apple Cinnamon.png",
    "description": "Wholesome oats and sweet raisins blended into a heart-healthy biscuit for your tea time.",
    "flavors": [
      "Apple Cinnamon",
      "Honey Raisin",
      "Nutty Oatmeal"
    ],
    "flavorImages": {
      "Apple Cinnamon": "images/Biscuits/Oatmeal & Raisin Healthy Bites/Apple Cinnamon.png",
      "Honey Raisin": "images/Biscuits/Oatmeal & Raisin Healthy Bites/Honey Raisin.png",
      "Nutty Oatmeal": "images/Biscuits/Oatmeal & Raisin Healthy Bites/Nutty Oatmeal.png"
    },
    "flavorVideos": {
      "Apple Cinnamon": "images/Biscuits/Oatmeal & Raisin Healthy Bites/Apple Cinnamon.mp4",
      "Honey Raisin": "images/Biscuits/Oatmeal & Raisin Healthy Bites/Honey Raisin.mp4",
      "Nutty Oatmeal": "images/Biscuits/Oatmeal & Raisin Healthy Bites/Nutty Oatmeal.mp4"
    },
    "sizes": [
      "250g Box"
    ]
  },
  {
    "id": 114,
    "name": "Almond Pistachio Crunch",
    "category": "Biscuits",
    "price": 349,
    "rating": 4.8,
    "image": "images/Biscuits/Almond Pistachio Crunch/Almond.png",
    "description": "Rich almond and pistachio chunks embedded in a crunchy, golden-baked biscuit.",
    "flavors": [
      "Almond",
      "Mixed Nut",
      "Pistachio"
    ],
    "flavorImages": {
      "Almond": "images/Biscuits/Almond Pistachio Crunch/Almond.png",
      "Mixed Nut": "images/Biscuits/Almond Pistachio Crunch/Mixed Nut.png",
      "Pistachio": "images/Biscuits/Almond Pistachio Crunch/Pistachio.png"
    },
    "flavorVideos": {
      "Almond": "images/Biscuits/Almond Pistachio Crunch/Almond.mp4",
      "Mixed Nut": "images/Biscuits/Almond Pistachio Crunch/Mixed Nut.mp4",
      "Pistachio": "images/Biscuits/Almond Pistachio Crunch/Pistachio.mp4"
    },
    "sizes": [
      "Tin Box (300g)"
    ]
  }
];

export default products;