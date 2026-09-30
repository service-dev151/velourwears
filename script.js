/**
 * VELOUR WEARS - LUXURY PAKISTANI KURTIS
 * PURE VANILLA JAVASCRIPT (ZERO FRAMEWORK DEPENDENCIES)
 */

(function () {
  'use strict';

  // =========================================================================
  // 1. PRODUCT DATABASE (ALL 22 KURTIS PRESERVED EXACTLY WITH RELATIVE PATHS)
  // =========================================================================
  const PRODUCTS = [
    // Stitched Kurtis (8)
    {
      id: 'vw-st-01',
      name: 'Noor Embroidered Kurti',
      category: 'stitched',
      price: 6850,
      originalPrice: 7950,
      shortDescription: 'Deep emerald lawn Kurti adorned with intricate gold resham needlework.',
      description: 'The Noor Embroidered Kurti captures timeless Pakistani sophistication. Cut from premium breathable lawn, this ready-to-wear piece features a refined split neckline accented by intricate resham embroidery, tailored straight-cut sleeves, and a delicately patterned hemline. Designed for effortless grace in formal dinners and festive gatherings.',
      fabric: '100% Pure Egyptian Lawn',
      color: 'Emerald Green',
      colorHex: '#0c4a3e',
      sizes: ['Small', 'Large'],
      frontImage: './assets/images/stitched_noor_front_1790591512998.jpg',
      backImage: './assets/images/stitched_noor_back_1790591526225.jpg',
      isFeatured: true,
      badge: 'Bestseller',
      details: [
        'Intricate resham needlework on neckline & cuffs',
        'Straight tailored silhouette with side slits',
        'Comfortable breathable weave suitable for all-day wear',
        'Matching subtle motif embroidery at the back neckline'
      ],
      careInstructions: 'Dry clean recommended or gentle hand wash in cold water with mild detergent.',
      sku: 'VW-ST-NOOR-01'
    },
    {
      id: 'vw-st-02',
      name: 'Zoya Lawn Kurti',
      category: 'stitched',
      price: 5950,
      originalPrice: 6800,
      shortDescription: 'Regal ruby crimson Kurti with gold tilla embroidery along the placket.',
      description: 'Imbued with regal charm, the Zoya Kurti features an alluring crimson red base enriched with shimmering gold tilla embroidery. The classic Pakistani cut enhances posture with structured shoulder seamlines and an elegant fluid drape.',
      fabric: 'Fine Cambric Lawn',
      color: 'Ruby Crimson',
      colorHex: '#801825',
      sizes: ['Small', 'Large'],
      frontImage: './assets/images/stitched_zoya_front_1790591566643.jpg',
      backImage: './assets/images/stitched_zoya_back_1790591579197.jpg',
      isFeatured: true,
      badge: 'Festive Pick',
      details: [
        'Refined gold tilla threadwork along front button-down placket',
        'Calf-length traditional cut with neat side vents',
        'Premium lightweight weave with anti-crease finish',
        'Sleek back yoke with delicate matching accent'
      ],
      careInstructions: 'Hand wash separately in cold water. Iron on reverse medium heat.',
      sku: 'VW-ST-ZOYA-02'
    },
    {
      id: 'vw-st-03',
      name: 'Meher Printed Kurti',
      category: 'stitched',
      price: 4950,
      shortDescription: 'Royal sapphire blue printed Kurti with delicate floral neckline detailing.',
      description: 'The Meher Printed Kurti blends contemporary Pakistani digital printing with classic artisan neckline resham craft. The cool cobalt and sapphire palette creates an elevated daytime look that transitions seamlessly into evenings.',
      fabric: 'Premium Mercerized Cotton',
      color: 'Royal Sapphire',
      colorHex: '#183863',
      sizes: ['Small', 'Large'],
      frontImage: './assets/images/stitched_meher_front_1790591592256.jpg',
      backImage: './assets/images/stitched_meher_back_1790591604606.jpg',
      isFeatured: true,
      badge: 'Popular',
      details: [
        'Digital botanical print inspired by Lahore Mughal frescoes',
        'Hand-finished threadwork on ban collar neckline',
        'Full sleeves with slit button detail',
        'Flattering relaxed A-line silhouette'
      ],
      careInstructions: 'Machine wash delicate cycle in cold water. Line dry in shade.',
      sku: 'VW-ST-MEHER-03'
    },
    {
      id: 'vw-st-04',
      name: 'Maham Embroidered Kurti',
      category: 'stitched',
      price: 7450,
      originalPrice: 8500,
      shortDescription: 'Ivory and champagne gold Kurti with mirror work and hand-tied tassels.',
      description: 'A masterpiece of understated luxury, the Maham Embroidered Kurti pairs a warm ivory foundation with delicate champagne gold threadwork and handcrafted mirror accents. It embodies the signature Velour Wears heritage aesthetic.',
      fabric: 'Slub Lawn & Chiffon Borders',
      color: 'Warm Ivory & Gold',
      colorHex: '#dfd7c2',
      sizes: ['Small', 'Large'],
      frontImage: './assets/images/stitched_maham_front_1790591614060.jpg',
      backImage: './assets/images/stitched_maham_back_1790591624903.jpg',
      isFeatured: true,
      badge: 'Luxury Edit',
      details: [
        'Champagne gold resham and micro-mirror embellishments',
        'Fine organza laser-cut border along hem and cuffs',
        'Soft breathable inner lining for complete opacity',
        'Full back matching floral vine'
      ],
      careInstructions: 'Dry clean only to protect hand-embroidered mirror embellishments.',
      sku: 'VW-ST-MAHAM-04'
    },
    {
      id: 'vw-st-05',
      name: 'Areeba Cotton Kurti',
      category: 'stitched',
      price: 5450,
      shortDescription: 'Jet black structured cotton Kurti with crisp white chikan needlework.',
      description: 'Black and white monochrome perfection. The Areeba Cotton Kurti offers a crisp, tailored everyday essential featuring intricate traditional chikan resham work down the front yoke and on the sleeve cuffs.',
      fabric: '100% Breathable Combed Cotton',
      color: 'Jet Black',
      colorHex: '#141414',
      sizes: ['Small', 'Large'],
      frontImage: './assets/images/stitched_areeba_front_1790591693544.jpg',
      backImage: './assets/images/stitched_areeba_back_1790591703316.jpg',
      isFeatured: false,
      badge: 'Essential',
      details: [
        'High-density white chikan threadwork on deep black ground',
        'Tailored Mandarin collar with loop-and-button closure',
        'Wrinkle-resistant durable cotton fabric',
        'Clean minimalist back with subtle yoke trim'
      ],
      careInstructions: 'Cold hand wash with like colors. Avoid direct sunlight during drying.',
      sku: 'VW-ST-AREEBA-05'
    },
    {
      id: 'vw-st-06',
      name: 'Hania Floral Kurti',
      category: 'stitched',
      price: 4850,
      shortDescription: 'Serene sage green Kurti with soft botanical print and pearl embellishments.',
      description: 'Evoking the freshness of spring gardens, the Hania Kurti combines a soft sage green botanical print with delicate faux-pearl drops along the V-slit neckline. Featherlight and breathable for warm weather comfort.',
      fabric: 'Soft Weave Digital Lawn',
      color: 'Sage Green',
      colorHex: '#6b826f',
      sizes: ['Small', 'Large'],
      frontImage: './assets/images/stitched_hania_front_1790591714776.jpg',
      backImage: './assets/images/stitched_hania_back_1790591727854.jpg',
      isFeatured: false,
      badge: 'Summer Fresh',
      details: [
        'Soft pastel watercolor floral composition',
        'Hand-stitched pearl bead accents on collar',
        'Straight classic cut with generous armhole mobility',
        'Seamless floral print alignment across back'
      ],
      careInstructions: 'Gentle machine wash inside out. Warm iron while slightly damp.',
      sku: 'VW-ST-HANIA-06'
    },
    {
      id: 'vw-st-07',
      name: 'Pareesa Chiffon Trim Kurti',
      category: 'stitched',
      price: 6250,
      originalPrice: 7200,
      shortDescription: 'Plum purple Kurti with fine zari gold needlework and delicate cuffs.',
      description: 'Rich jewel tones take center stage in the Pareesa Kurti. Crafted from premium slub lawn with pure zari gold embellishments, this kurti delivers effortless evening glamour without compromising on comfort.',
      fabric: 'Slub Lawn with Zari Thread',
      color: 'Plum Purple',
      colorHex: '#4a253a',
      sizes: ['Small', 'Large'],
      frontImage: './assets/images/stitched_pareesa_front_1790591743407.jpg',
      backImage: './assets/images/stitched_pareesa_back_1790591755417.jpg',
      isFeatured: false,
      badge: 'New Arrival',
      details: [
        'Gleaming antique zari embroidery on neckline & border',
        'Sculpted boat neckline with keyhole button accent',
        'Breathable textured slub base',
        'Delicate single-motif embroidery at back neck'
      ],
      careInstructions: 'Dry clean recommended for metallic zari thread preservation.',
      sku: 'VW-ST-PAREESA-07'
    },
    {
      id: 'vw-st-08',
      name: 'Dania Velvet Accent Kurti',
      category: 'stitched',
      price: 6650,
      shortDescription: 'Warm mustard gold Kurti with rich rust embroidered borders.',
      description: 'The Dania Kurti is an artisanal celebration of warm earthy palettes. Finished with fine embroidery along the daman and sleeves, it is a statement piece crafted for festive elegance.',
      fabric: 'Textured Khaddar Silk Blend',
      color: 'Mustard Gold',
      colorHex: '#b2842b',
      sizes: ['Small', 'Large'],
      frontImage: './assets/images/stitched_dania_front_1790591766465.jpg',
      backImage: './assets/images/stitched_dania_back_1790591777699.jpg',
      isFeatured: false,
      badge: 'Artisanal',
      details: [
        'High-contrast rust embroidered patti trims',
        'Flattering tailored straight kurti cut',
        'Mid-weight premium winter/transitional fabric',
        'Back hem embroidered border matching front'
      ],
      careInstructions: 'Dry clean only. Steam iron only.',
      sku: 'VW-ST-DANIA-08'
    },

    // Unstitched Collection (8)
    {
      id: 'vw-un-01',
      name: 'Noor Printed Lawn',
      category: 'unstitched',
      price: 3450,
      originalPrice: 3950,
      shortDescription: 'Blush rose 80-80 pure lawn fabric with embroidered organza neckline patch.',
      description: 'An unstitched luxury lawn fabric cut crafted from superfine 80/80 Pakistani lawn cotton. Includes a detailed embroidered organza neckline patch and matching sleeve border patti, offering freedom to tailor your ideal neckline depth and kurti silhouette.',
      fabric: '80-80 Pure Luxury Lawn',
      color: 'Blush Rose & Gold',
      colorHex: '#d8a99e',
      sizes: ['Small', 'Large'],
      frontImage: './assets/images/unstitched_lawn_edit_1790591539550.jpg',
      backImage: './assets/images/unstitched_noor_back_1790595493239.jpg',
      isFeatured: true,
      badge: 'Summer Edit',
      fabricLength: '3.0 Meters Kurti Fabric + Embroidered Organza Patch (Neckline & Sleeves)',
      details: [
        '3.0 Meters high-density luxury lawn kurti shirt fabric',
        'Heavy embroidered organza neckline patch',
        'Embroidered organza lace patti for sleeves (1 meter)',
        'Shrink-tested pure cotton yarn with color-fast guarantee'
      ],
      careInstructions: 'Shrink in plain cold water before stitching. Wash separately.',
      sku: 'VW-UN-NOOR-01'
    },
    {
      id: 'vw-un-02',
      name: 'Gulbahar Cotton Edit',
      category: 'unstitched',
      price: 3850,
      shortDescription: 'Terracotta rust unstitched cotton with rich geometric block-print motifs.',
      description: 'Crafted for textile connoisseurs, the Gulbahar Cotton Edit features deep earthy rust tones accented with geometric block-print styling. Heavy yet breathable weave makes it versatile across all seasons.',
      fabric: 'Premium Slub Cotton',
      color: 'Terracotta Rust',
      colorHex: '#9b462f',
      sizes: ['Small', 'Large'],
      frontImage: './assets/images/unstitched_khaddar_edit_1790591639296.jpg',
      backImage: './assets/images/unstitched_gulbahar_back_1790595508439.jpg',
      isFeatured: false,
      badge: 'Pure Cotton',
      fabricLength: '3.0 Meters Slub Cotton Shirt Fabric + Embroidered Border Patti',
      details: [
        '3.0 Meters woven slub cotton fabric',
        'Contrast resham embroidered hem border (1.2 meters)',
        'Soft pre-washed hand feel with zero stiffness',
        'Ideal for both straight cut and kurta style stitching'
      ],
      careInstructions: 'Machine wash cold. Warm iron on reverse side.',
      sku: 'VW-UN-GULBAHAR-02'
    },
    {
      id: 'vw-un-03',
      name: 'Rangoli Khaddar',
      category: 'unstitched',
      price: 3950,
      originalPrice: 4500,
      shortDescription: 'Handcrafted deep ochre and rust winter khaddar with embroidered motifs.',
      description: 'Woven with dense textured Pakistani khaddar yarns, Rangoli Khaddar is designed for cooler days. Features traditional needlework motifs and embroidered patti trims ready for your bespoke tailoring.',
      fabric: 'Handwoven Woven Khaddar',
      color: 'Deep Ochre & Rust',
      colorHex: '#af6d2b',
      sizes: ['Small', 'Large'],
      frontImage: './assets/images/unstitched_rangoli_front_1790595523506.jpg',
      backImage: './assets/images/unstitched_rangoli_back_1790595561025.jpg',
      isFeatured: true,
      badge: 'Warm Weave',
      fabricLength: '3.0 Meters Heavy Khaddar Shirt Fabric + Neckline Motif',
      details: [
        '3.0 Meters authentic Pakistani textured khaddar',
        'Resham threadwork embroidered neckline motif patch',
        'Durable thick yarn weave with comforting warmth',
        'Generous width (40 inches) suitable for all design styles'
      ],
      careInstructions: 'Dip in water for 30 minutes before tailoring. Line dry in shade.',
      sku: 'VW-UN-RANGOLI-03'
    },
    {
      id: 'vw-un-04',
      name: 'Meher Floral Lawn',
      category: 'unstitched',
      price: 3250,
      shortDescription: 'Delicate dusty blossom digital lawn fabric with fine resham border.',
      description: 'Soft, graceful, and exceptionally smooth. Meher Floral Lawn features intricate micro-botanical motifs across a dusty blush ground, accompanied by an embroidered border that adds refined luxury to your custom stitching.',
      fabric: 'Digital Printed Pure Lawn',
      color: 'Dusty Blossom',
      colorHex: '#c7929d',
      sizes: ['Small', 'Large'],
      frontImage: './assets/images/unstitched_meher_front_1790595542056.jpg',
      backImage: './assets/images/unstitched_meher_back_1790595582406.jpg',
      isFeatured: false,
      badge: 'Best Value',
      fabricLength: '2.75 Meters Printed Lawn Shirt Fabric + Embroidered Border',
      details: [
        '2.75 Meters high-thread-count digital lawn shirt cut',
        'Fine embroidered thread lace for daman or sleeve cuffs',
        'Ultra-breathable weave for peak summer comfort',
        'Colorfast reactive dyes that resist fading'
      ],
      careInstructions: 'Do not use bleach. Hand wash in mild detergent.',
      sku: 'VW-UN-MEHER-04'
    },
    {
      id: 'vw-un-05',
      name: 'Afsana Printed Cotton',
      category: 'unstitched',
      price: 3650,
      shortDescription: 'Midnight navy blue cotton with gleaming gold Mughal floral motifs.',
      description: 'Channeling royal heritage, Afsana Printed Cotton showcases majestic gold floral motifs over a rich navy base. Comes with embroidered neckline and sleeve appliques that make your tailored kurti look regal.',
      fabric: 'Soft Mercerized Cotton',
      color: 'Midnight Navy & Gold',
      colorHex: '#132338',
      sizes: ['Small', 'Large'],
      frontImage: './assets/images/unstitched_afsana_fabric_1790591790910.jpg',
      backImage: './assets/images/unstitched_afsana_back_1790595598081.jpg',
      isFeatured: true,
      badge: 'Royal Edit',
      fabricLength: '3.0 Meters Premium Cotton Shirt Fabric + Embroidered Organza Appliques',
      details: [
        '3.0 Meters deep indigo mercerized cotton fabric',
        'Embroidered gold tilla neckline piece',
        'Two embroidered cuff patches',
        'Smooth lustrous cotton finish that holds crisp creases'
      ],
      careInstructions: 'Dry clean recommended for tilla embroidery patch.',
      sku: 'VW-UN-AFSANA-05'
    },
    {
      id: 'vw-un-06',
      name: 'Noor-e-Gul Linen',
      category: 'unstitched',
      price: 4150,
      originalPrice: 4800,
      shortDescription: 'Dusty lilac and sage green botanical linen with organza border patch.',
      description: 'A blend of crisp natural linen fibers and breathable cotton. The Noor-e-Gul Linen unstitched kurti fabric offers subtle natural slub texture with soft pastel floral motifs and an exquisite embroidered hem applique.',
      fabric: 'Pure Blended Summer Linen',
      color: 'Lilac & Sage',
      colorHex: '#93859e',
      sizes: ['Small', 'Large'],
      frontImage: './assets/images/unstitched_cotton_linen_1790591652824.jpg',
      backImage: './assets/images/unstitched_nooregul_back_1790595620061.jpg',
      isFeatured: false,
      badge: 'Premium Linen',
      fabricLength: '3.0 Meters Slub Linen Shirt Fabric + Organza Hem Lace',
      details: [
        '3.0 Meters lightweight breathable summer linen shirt cut',
        'Embroidered organza border patch (1.5 meters)',
        'Subtle linen texture with refined natural drape',
        'Pre-shrunk fabric ensures no size shrinkage after stitching'
      ],
      careInstructions: 'Iron on linen setting while slightly damp. Do not tumble dry.',
      sku: 'VW-UN-NOOREGUL-06'
    },
    {
      id: 'vw-un-07',
      name: 'Shahana Lawn Unstitched',
      category: 'unstitched',
      price: 4450,
      originalPrice: 5200,
      shortDescription: 'Royal indigo printed lawn with heavy embroidered front neckline piece.',
      description: 'An opulent unstitched piece featuring deep indigo florals paired with an elaborate resham embroidery patch for the front neckline. Delivers boutique luxury when stitched to your customized measurements.',
      fabric: 'Luxury Embroidered Lawn',
      color: 'Royal Indigo',
      colorHex: '#1e2b45',
      sizes: ['Small', 'Large'],
      frontImage: './assets/images/unstitched_shahana_front_1790595636208.jpg',
      backImage: './assets/images/unstitched_shahana_back_1790595675422.jpg',
      isFeatured: false,
      badge: 'Boutique Exclusive',
      fabricLength: '3.0 Meters Lawn Fabric + Heavy Resham Neckline Patch',
      details: [
        '3.0 Meters fine lawn fabric with all-over botanical print',
        'Heavy resham and sequins embroidered neckline applique',
        'Printed border extensions for sleeves and daman',
        'Guaranteed color vibrancy wash after wash'
      ],
      careInstructions: 'Dry clean recommended for sequined embroidery patch.',
      sku: 'VW-UN-SHAHANA-07'
    },
    {
      id: 'vw-un-08',
      name: 'Bahar Cambric Edit',
      category: 'unstitched',
      price: 3550,
      shortDescription: 'Pistachio green cambric cotton with delicate botanical print & border.',
      description: 'Light, fresh, and soothing to the eye. Bahar Cambric Edit pairs a pastel pistachio foundation with fine leaf motifs and an embroidered lace border. A breeze to stitch into a breezy summer kurti.',
      fabric: 'Fine Woven Cambric',
      color: 'Pistachio Green',
      colorHex: '#7fa382',
      sizes: ['Small', 'Large'],
      frontImage: './assets/images/unstitched_bahar_front_1790595653645.jpg',
      backImage: './assets/images/unstitched_bahar_back_1790595694831.jpg',
      isFeatured: false,
      badge: 'Everyday Chic',
      fabricLength: '2.85 Meters Cambric Cotton Fabric + Lace Border',
      details: [
        '2.85 Meters smooth high-count cambric cotton',
        'Embroidered cotton schiffli lace for hem and sleeves',
        'Crisp hand feel suitable for formal or casual cuts',
        'Easy care and wrinkle resistant'
      ],
      careInstructions: 'Machine wash warm with mild detergent. Normal iron.',
      sku: 'VW-UN-BAHAR-08'
    },

    // Girls' Kurtis (6)
    {
      id: 'vw-gk-01',
      name: 'Mini Noor Kurti',
      category: 'girls',
      price: 3650,
      originalPrice: 4200,
      shortDescription: 'Emerald green Kurti for girls with delicate gold resham threadwork.',
      description: 'A charming miniature version of our signature Noor aesthetic. Tailored specifically for girls, it features an emerald green lawn base, gentle resham embroidery that will not irritate delicate skin, and an easy-wearing silhouette.',
      fabric: 'Soft Pure Lawn with Cotton Lining',
      color: 'Emerald Green',
      colorHex: '#0c4a3e',
      sizes: ['Small', 'Large'],
      frontImage: './assets/images/girls_kurti_mini_noor_1790591804808.jpg',
      backImage: './assets/images/girls_mini_noor_back_1790595342517.jpg',
      isFeatured: true,
      badge: 'Mom & Mini',
      details: [
        'Hypoallergenic soft thread embroidery on front placket',
        'Lined with breathable 100% cotton voile for comfort',
        'Back keyhole button for effortless dressing',
        'Roomy side vents for free movement and play'
      ],
      careInstructions: 'Gentle hand wash in cold water. Iron on low heat.',
      sku: 'VW-GK-MININOOR-01'
    },
    {
      id: 'vw-gk-02',
      name: 'Gul Girls Kurti',
      category: 'girls',
      price: 3250,
      shortDescription: 'Sweet peach blossom cotton-silk Kurti with delicate ivory lace borders.',
      description: 'A delightful festive kurti designed for young girls. Cut from soft peach cotton-silk with gentle ivory scalloped lace along the sleeves and hemline, this piece is both comfortable and celebratory.',
      fabric: 'Soft Cotton-Silk Blend',
      color: 'Peach Blossom',
      colorHex: '#e8a58a',
      sizes: ['Small', 'Large'],
      frontImage: './assets/images/girls_kurti_gul_1790591550823.jpg',
      backImage: './assets/images/girls_gul_back_1790595359149.jpg',
      isFeatured: true,
      badge: 'Bestseller',
      details: [
        'Delicate cotton schiffli lace along hem and sleeve cuffs',
        'Gentle round neck with button closure',
        'Lightweight festive sheen without itchy fabric backing',
        'Generous length tailored for modest elegance'
      ],
      careInstructions: 'Hand wash in cold water with mild baby detergent.',
      sku: 'VW-GK-GUL-02'
    },
    {
      id: 'vw-gk-03',
      name: 'Hoor Printed Kurti',
      category: 'girls',
      price: 2950,
      shortDescription: 'Sunny marigold yellow cotton Kurti with traditional white gota lace edging.',
      description: 'Full of warmth and cheer, the Hoor Kurti showcases bright marigold yellow cotton with traditional white gota lace accents. Perfect for mehndi functions, family gatherings, and festive daytime events.',
      fabric: '100% Breathable Cotton',
      color: 'Marigold Yellow',
      colorHex: '#d89b2d',
      sizes: ['Small', 'Large'],
      frontImage: './assets/images/girls_kurti_hoor_1790591666327.jpg',
      backImage: './assets/images/girls_hoor_back_1790595378104.jpg',
      isFeatured: false,
      badge: 'Mehndi Favorite',
      details: [
        'Authentic Pakistani gota lace detailing on neckline and hem',
        'Pure organic cotton fabric safe for young skin',
        'Non-restrictive relaxed A-line silhouette',
        'Colorfast bright yellow shade'
      ],
      careInstructions: 'Gentle machine wash cold. Iron on cotton setting.',
      sku: 'VW-GK-HOOR-03'
    },
    {
      id: 'vw-gk-04',
      name: 'Zara Floral Kurti',
      category: 'girls',
      price: 3150,
      shortDescription: 'Pastel rose-pink lawn Kurti with dainty floral embroidery on neckline.',
      description: 'Designed with dainty floral threadwork and a gentle pastel rose hue, the Zara Floral Kurti combines sweet charm with everyday comfort. Ideal for Eid celebrations and family outings.',
      fabric: 'Soft Weave Pure Lawn',
      color: 'Rose Pink',
      colorHex: '#df899b',
      sizes: ['Small', 'Large'],
      frontImage: './assets/images/girls_kurti_zara_1790591677046.jpg',
      backImage: './assets/images/girls_zara_back_1790595401023.jpg',
      isFeatured: true,
      badge: 'Eid Special',
      details: [
        'Subtle pastel floral embroidery along the chest yoke',
        'Comfortable bell-sleeve cuffs with lace border',
        'Smooth itch-free inner seams',
        'Easy button loop back closure'
      ],
      careInstructions: 'Hand wash in cold water. Dry flat in shade.',
      sku: 'VW-GK-ZARA-04'
    },
    {
      id: 'vw-gk-05',
      name: 'Aina Cotton Kurti',
      category: 'girls',
      price: 3350,
      originalPrice: 3800,
      shortDescription: 'Soft coral printed cambric Kurti with contrast mint green piping.',
      description: 'The Aina Cotton Kurti delivers vibrant energy with its charming coral print and crisp mint green piping accents. Made from durable cambric cotton that stays fresh wash after wash.',
      fabric: 'Premium Cambric Cotton',
      color: 'Soft Coral',
      colorHex: '#e07d6a',
      sizes: ['Small', 'Large'],
      frontImage: './assets/images/girls_aina_front_1790595416982.jpg',
      backImage: './assets/images/girls_aina_back_1790595450133.jpg',
      isFeatured: false,
      badge: 'Play & Party',
      details: [
        'Contrast mint piping on neckline and cuffs',
        'Soft enzyme-washed cotton for instant softness',
        'Relaxed straight silhouette for freedom of movement',
        'Reinforced seams for lasting durability'
      ],
      careInstructions: 'Machine wash cold with like colors. Tumble dry low.',
      sku: 'VW-GK-AINA-05'
    },
    {
      id: 'vw-gk-06',
      name: 'Pari Festive Kurti',
      category: 'girls',
      price: 3850,
      shortDescription: 'Powder pink festive Kurti with sheer organza hem and subtle gold sequins.',
      description: 'A princess-worthy kurti for special Pakistani weddings and festive celebrations. Decorated with micro gold sequins and finished with a sheer organza pleated border.',
      fabric: 'Organza & Soft Cotton-Silk',
      color: 'Powder Pink & Gold',
      colorHex: '#d89ea8',
      sizes: ['Small', 'Large'],
      frontImage: './assets/images/girls_pari_front_1790595430213.jpg',
      backImage: './assets/images/girls_pari_back_1790595473136.jpg',
      isFeatured: false,
      badge: 'Festive Glamour',
      details: [
        'Micro-sequins embroidery securely stitched on chest panel',
        'Two-tiered sheer organza ruffled hemline',
        'Full inner cotton lining for complete soft comfort',
        'Concealed back zip for clean look'
      ],
      careInstructions: 'Dry clean only to maintain delicate organza frills.',
      sku: 'VW-GK-PARI-06'
    }
  ];

  // =========================================================================
  // 2. HERO SLIDES DATA
  // =========================================================================
  const HERO_SLIDES = [
    {
      image: './assets/images/hero_velour_kurti_1790591497831.jpg',
      headline: 'Elegance, Woven for You.',
      supporting: 'Discover beautifully crafted Pakistani Kurtis, available in stitched and unstitched collections. Designed with exquisite resham embroidery and pure breathable natural textiles.',
      badge: 'The Maham Champagne Edit',
      tagline: 'Resham Embroidered Lawn · Ready to Wear',
      price: 'Rs. 7,450'
    },
    {
      image: './assets/images/hero_editorial_emerald_1790595724167.jpg',
      headline: 'The Noor Royal Emerald',
      supporting: 'Pure Egyptian lawn Kurti enriched with intricate gold resham needlework along the placket and daman. Standardized in Small and Large tailored fits.',
      badge: 'Noor Embroidered Kurti',
      tagline: 'Pure Egyptian Lawn · Bestseller',
      price: 'Rs. 6,850'
    },
    {
      image: './assets/images/hero_editorial_crimson_1790593518456.jpg',
      headline: 'Regal Crimson & Gold Tilla',
      supporting: 'Imbued with royal charm, the Zoya collection pairs deep ruby crimson tones with handcrafted gold tilla thread embroidery for celebratory Pakistani gatherings.',
      badge: 'Zoya Festive Kurti',
      tagline: 'Festive Cambric Edit · Ready to Wear',
      price: 'Rs. 5,950'
    },
    {
      image: './assets/images/hero_editorial_unstitched_1790595759987.jpg',
      headline: 'Unstitched Luxury Lawn',
      supporting: 'Premium 80/80 luxury lawn fabrics with embroidered organza neckline appliques and sleeve borders, ready to be tailored to your bespoke measurements.',
      badge: 'Pure Fabric Edit',
      tagline: '3.0 Meters Pure Lawn + Embroidered Patch',
      price: 'Rs. 3,450'
    },
    {
      image: './assets/images/hero_editorial_sapphire_1790595739895.jpg',
      headline: 'Meher Royal Sapphire',
      supporting: 'Digital botanical artwork inspired by Lahore Mughal frescoes with artisan resham embroidery on the collar, crafted in mercerized combed cotton.',
      badge: 'Meher Printed Kurti',
      tagline: 'Mercerized Cotton · Daytime Chic',
      price: 'Rs. 4,950'
    }
  ];

  // =========================================================================
  // 3. APPLICATION STATE (CART, WISHLIST, FILTERS)
  // =========================================================================
  const state = {
    cart: [],
    wishlist: [],
    currentHeroSlide: 0,
    filters: {
      category: 'all',
      fabric: 'All Fabrics',
      size: 'all',
      sortBy: 'featured'
    },
    quickViewProduct: null,
    quickViewSize: 'Small',
    quickViewQty: 1,
    quickViewShowBack: false
  };

  // Load cart and wishlist from localStorage if available
  try {
    const savedCart = localStorage.getItem('vw_cart');
    if (savedCart) state.cart = JSON.parse(savedCart);
    const savedWish = localStorage.getItem('vw_wishlist');
    if (savedWish) state.wishlist = JSON.parse(savedWish);
  } catch (e) {
    console.warn('LocalStorage not accessible', e);
  }

  function saveState() {
    try {
      localStorage.setItem('vw_cart', JSON.stringify(state.cart));
      localStorage.setItem('vw_wishlist', JSON.stringify(state.wishlist));
    } catch (e) {}
  }

  // Toast System
  function showToast(title, desc) {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast-item';
    toast.innerHTML = `
      <div style="color:#C6A15B; display:flex; align-items:center;">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
      </div>
      <div>
        <p style="font-weight:600; color:#FAF9F6; margin-bottom:2px;">${title}</p>
        <p style="color:rgba(255,255,255,0.7); font-size:11px;">${desc}</p>
      </div>
    `;

    container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 2800);
  }

  // =========================================================================
  // 4. CART & WISHLIST LOGIC
  // =========================================================================
  function addToCart(product, size = 'Small', quantity = 1) {
    const existingIndex = state.cart.findIndex(
      (item) => item.product.id === product.id && item.size === size
    );

    if (existingIndex > -1) {
      state.cart[existingIndex].quantity += quantity;
    } else {
      state.cart.push({
        id: `${product.id}-${size}-${Date.now()}`,
        product: product,
        size: size,
        quantity: quantity
      });
    }

    saveState();
    updateCartUI();
    showToast('Added to Shopping Bag', `${product.name} (${size})`);
  }

  function removeFromCart(cartItemId) {
    state.cart = state.cart.filter((item) => item.id !== cartItemId);
    saveState();
    updateCartUI();
  }

  function updateQuantity(cartItemId, newQty) {
    if (newQty <= 0) {
      removeFromCart(cartItemId);
      return;
    }
    const item = state.cart.find((it) => it.id === cartItemId);
    if (item) {
      item.quantity = newQty;
      saveState();
      updateCartUI();
    }
  }

  function toggleWishlist(productId) {
    const idx = state.wishlist.indexOf(productId);
    const prod = PRODUCTS.find((p) => p.id === productId);
    if (idx > -1) {
      state.wishlist.splice(idx, 1);
      if (prod) showToast('Removed from Wishlist', prod.name);
    } else {
      state.wishlist.push(productId);
      if (prod) showToast('Added to Wishlist', prod.name);
    }
    saveState();
    renderAllProductCards();
  }

  function updateCartUI() {
    const totalItems = state.cart.reduce((sum, it) => sum + it.quantity, 0);
    const subtotal = state.cart.reduce((sum, it) => sum + it.product.price * it.quantity, 0);

    // Update bag count badges
    document.querySelectorAll('.bag-count').forEach((el) => (el.textContent = totalItems));
    const mobileBtn = document.getElementById('mobileMenuBagBtn');
    if (mobileBtn) mobileBtn.innerHTML = `<span>ADD TO BAG (${totalItems})</span>`;

    // Update Drawer Elements
    const drawerList = document.getElementById('cartDrawerList');
    const drawerEmpty = document.getElementById('cartDrawerEmpty');
    const drawerFooter = document.getElementById('cartDrawerFooter');
    const drawerSubtotal = document.getElementById('cartDrawerSubtotal');
    const drawerShipping = document.getElementById('cartDrawerShipping');
    const drawerTotal = document.getElementById('cartDrawerTotal');

    const FREE_THRESHOLD = 5000;
    const progress = Math.min(100, (subtotal / FREE_THRESHOLD) * 100);
    const remaining = Math.max(0, FREE_THRESHOLD - subtotal);
    const shippingFee = subtotal >= FREE_THRESHOLD || subtotal === 0 ? 0 : 250;
    const grandTotal = subtotal + shippingFee;

    const progressMsg = document.getElementById('shippingProgressMsg');
    const progressBar = document.getElementById('shippingProgressBar');
    const progressPercent = document.getElementById('shippingProgressPercent');

    if (progressMsg) {
      if (remaining === 0) {
        progressMsg.innerHTML = '<strong style="color:#2E6B47;">You unlocked Free Delivery across Pakistan!</strong>';
      } else {
        progressMsg.innerHTML = `Add <strong>Rs. ${remaining.toLocaleString()}</strong> more for Free Delivery`;
      }
    }
    if (progressBar) progressBar.style.width = `${progress}%`;
    if (progressPercent) progressPercent.textContent = `${Math.round(progress)}%`;

    if (state.cart.length === 0) {
      if (drawerList) drawerList.style.display = 'none';
      if (drawerEmpty) drawerEmpty.style.display = 'flex';
      if (drawerFooter) drawerFooter.style.display = 'none';
    } else {
      if (drawerList) {
        drawerList.style.display = 'block';
        drawerList.innerHTML = state.cart
          .map((item) => {
            return `
              <div style="display:flex; gap:0.75rem; padding:0.875rem 0; border-bottom:1px solid rgba(17,17,17,0.08); align-items:center;">
                <img src="${item.product.frontImage}" alt="${item.product.name}" style="width:4.5rem; height:5.5rem; object-fit:cover; border-radius:0.375rem; background:#F5F0E8;" />
                <div style="flex:1; min-width:0;">
                  <h4 style="font-family:var(--font-serif); font-size:1.0625rem; font-weight:600; color:#111; margin-bottom:2px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${item.product.name}</h4>
                  <p style="font-size:11px; color:rgba(26,26,26,0.6); margin-bottom:4px;">Size: <strong>${item.size}</strong> · ${item.product.fabric}</p>
                  <p style="font-size:0.875rem; font-weight:700; color:#111;">Rs. ${(item.product.price * item.quantity).toLocaleString()}</p>
                  <div style="display:flex; align-items:center; gap:0.5rem; margin-top:6px;">
                    <div style="display:flex; align-items:center; border:1px solid rgba(17,17,17,0.15); border-radius:4px;">
                      <button class="cart-qty-btn" data-id="${item.id}" data-action="dec" style="padding:2px 8px; font-weight:700;">-</button>
                      <span style="font-size:12px; font-weight:600; padding:0 6px;">${item.quantity}</span>
                      <button class="cart-qty-btn" data-id="${item.id}" data-action="inc" style="padding:2px 8px; font-weight:700;">+</button>
                    </div>
                    <button class="cart-remove-btn" data-id="${item.id}" style="color:rgba(17,17,17,0.5); font-size:11px; text-decoration:underline; margin-left:auto;">Remove</button>
                  </div>
                </div>
              </div>
            `;
          })
          .join('');

        // Attach quantity & remove listeners
        drawerList.querySelectorAll('.cart-qty-btn').forEach((btn) => {
          btn.addEventListener('click', () => {
            const id = btn.getAttribute('data-id');
            const act = btn.getAttribute('data-action');
            const it = state.cart.find((c) => c.id === id);
            if (it) {
              updateQuantity(id, act === 'inc' ? it.quantity + 1 : it.quantity - 1);
            }
          });
        });

        drawerList.querySelectorAll('.cart-remove-btn').forEach((btn) => {
          btn.addEventListener('click', () => {
            removeFromCart(btn.getAttribute('data-id'));
          });
        });
      }

      if (drawerEmpty) drawerEmpty.style.display = 'none';
      if (drawerFooter) drawerFooter.style.display = 'block';
      if (drawerSubtotal) drawerSubtotal.textContent = `Rs. ${subtotal.toLocaleString()}`;
      if (drawerShipping) drawerShipping.textContent = shippingFee === 0 ? 'FREE' : `Rs. ${shippingFee}`;
      if (drawerTotal) drawerTotal.textContent = `Rs. ${grandTotal.toLocaleString()}`;
    }
  }

  // =========================================================================
  // 5. PRODUCT CARD HTML GENERATOR
  // =========================================================================
  function createProductCardHTML(product) {
    const isWish = state.wishlist.includes(product.id);
    const hasBack = Boolean(product.backImage);

    return `
      <div class="product-card" data-id="${product.id}">
        <div class="product-image-box" data-id="${product.id}">
          <img src="${product.frontImage}" alt="${product.name} Front View" class="img-front" loading="lazy" />
          ${hasBack ? `<img src="${product.backImage}" alt="${product.name} Back View" class="img-back" loading="lazy" />` : ''}
          
          ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
          
          <button class="product-wishlist-btn ${isWish ? 'active' : ''}" data-wishlist-id="${product.id}" title="Wishlist">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="${isWish ? '#e02424' : 'none'}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
          </button>

          ${
            hasBack
              ? `<div class="flip-view-badge">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"/><path d="M16 21h5v-5"/></svg>
                  <span>Front / Back</span>
                </div>`
              : ''
          }

          <button class="quick-view-overlay-btn" data-quickview-id="${product.id}">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
            <span>Quick View</span>
          </button>
        </div>

        <div class="product-info">
          <div class="product-fabric-meta">${product.fabric}</div>
          <h3 class="product-name" data-quickview-id="${product.id}">${product.name}</h3>
          
          <div class="product-pricing">
            <span class="price-current">Rs. ${product.price.toLocaleString()}</span>
            ${product.originalPrice ? `<span class="price-original">Rs. ${product.originalPrice.toLocaleString()}</span>` : ''}
          </div>

          <div class="size-selector-row" data-product-id="${product.id}">
            <button class="size-pill active" data-size="Small">Small</button>
            <button class="size-pill" data-size="Large">Large</button>
          </div>

          <button class="card-add-btn" data-add-id="${product.id}">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
            <span>Add to Bag</span>
          </button>
        </div>
      </div>
    `;
  }

  function bindCardEvents(container) {
    if (!container) return;

    // Front/Back Tap on Mobile or Hover on Desktop
    container.querySelectorAll('.product-image-box').forEach((box) => {
      box.addEventListener('mouseenter', () => box.classList.add('show-back'));
      box.addEventListener('mouseleave', () => box.classList.remove('show-back'));
      box.addEventListener('click', (e) => {
        if (e.target.closest('button')) return;
        box.classList.toggle('show-back');
      });
    });

    // Wishlist Toggle
    container.querySelectorAll('[data-wishlist-id]').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleWishlist(btn.getAttribute('data-wishlist-id'));
      });
    });

    // Quick View
    container.querySelectorAll('[data-quickview-id]').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.getAttribute('data-quickview-id');
        const prod = PRODUCTS.find((p) => p.id === id);
        if (prod) openQuickView(prod);
      });
    });

    // Size Selection Pills
    container.querySelectorAll('.size-selector-row').forEach((row) => {
      const pills = row.querySelectorAll('.size-pill');
      pills.forEach((pill) => {
        pill.addEventListener('click', () => {
          pills.forEach((p) => p.classList.remove('active'));
          pill.classList.add('active');
        });
      });
    });

    // Add to Bag Button
    container.querySelectorAll('[data-add-id]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-add-id');
        const prod = PRODUCTS.find((p) => p.id === id);
        if (!prod) return;

        const card = btn.closest('.product-card');
        const activeSize = card ? card.querySelector('.size-pill.active')?.getAttribute('data-size') || 'Small' : 'Small';

        addToCart(prod, activeSize, 1);
        btn.classList.add('added');
        btn.innerHTML = `
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6 9 17l-5-5"/></svg>
          <span>Added!</span>
        `;
        setTimeout(() => {
          btn.classList.remove('added');
          btn.innerHTML = `
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
            <span>Add to Bag</span>
          `;
        }, 1200);
      });
    });
  }

  function renderCarouselSection(containerId, productList) {
    const el = document.getElementById(containerId);
    if (!el) return;
    el.innerHTML = productList.map((p) => `<div class="carousel-card-item">${createProductCardHTML(p)}</div>`).join('');
    bindCardEvents(el);
  }

  function renderCatalogGrid() {
    const grid = document.getElementById('catalogGrid');
    if (!grid) return;

    const filtered = PRODUCTS.filter((p) => {
      if (state.filters.category !== 'all' && p.category !== state.filters.category) return false;
      if (state.filters.fabric !== 'All Fabrics' && !p.fabric.toLowerCase().includes(state.filters.fabric.toLowerCase())) return false;
      if (state.filters.size !== 'all' && !p.sizes.includes(state.filters.size)) return false;
      return true;
    }).sort((a, b) => {
      if (state.filters.sortBy === 'price-asc') return a.price - b.price;
      if (state.filters.sortBy === 'price-desc') return b.price - a.price;
      if (state.filters.sortBy === 'name') return a.name.localeCompare(b.name);
      if (a.isFeatured && !b.isFeatured) return -1;
      if (!a.isFeatured && b.isFeatured) return 1;
      return 0;
    });

    const countEl = document.getElementById('catalogCount');
    if (countEl) countEl.textContent = `${filtered.length} Styles`;

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1/-1; text-align:center; padding:3rem 1.5rem; background:#F5F0E8; border-radius:1rem;">
          <h3 style="font-family:var(--font-serif); font-size:1.5rem; color:#111; margin-bottom:0.5rem;">No Kurtis match your current filters</h3>
          <p style="font-size:0.875rem; color:rgba(26,26,26,0.7); margin-bottom:1rem;">Try resetting your category or fabric selection.</p>
          <button id="resetFiltersBtn" class="btn-primary" style="margin:0 auto;">Reset All Filters</button>
        </div>
      `;
      document.getElementById('resetFiltersBtn')?.addEventListener('click', () => {
        state.filters = { category: 'all', fabric: 'All Fabrics', size: 'all', sortBy: 'featured' };
        syncFilterUI();
        renderCatalogGrid();
      });
      return;
    }

    grid.innerHTML = filtered.map((p) => createProductCardHTML(p)).join('');
    bindCardEvents(grid);
  }

  function renderAllProductCards() {
    renderCarouselSection('featuredCarouselRow', PRODUCTS.filter((p) => p.isFeatured));
    renderCarouselSection('stitchedCarouselRow', PRODUCTS.filter((p) => p.category === 'stitched'));
    renderCarouselSection('unstitchedCarouselRow', PRODUCTS.filter((p) => p.category === 'unstitched'));
    renderCarouselSection('girlsCarouselRow', PRODUCTS.filter((p) => p.category === 'girls'));
    renderCatalogGrid();
  }

  function syncFilterUI() {
    document.querySelectorAll('[data-filter-category]').forEach((btn) => {
      btn.classList.toggle('active', btn.getAttribute('data-filter-category') === state.filters.category);
    });
    const fabricSelect = document.getElementById('filterFabric');
    if (fabricSelect) fabricSelect.value = state.filters.fabric;
    const sizeSelect = document.getElementById('filterSize');
    if (sizeSelect) sizeSelect.value = state.filters.size;
    const sortSelect = document.getElementById('filterSort');
    if (sortSelect) sortSelect.value = state.filters.sortBy;
  }

  // =========================================================================
  // 6. HERO CAROUSEL INTERACTIVITY (DESKTOP, TABLET, MOBILE SWIPE)
  // =========================================================================
  let heroTimer = null;

  function updateHeroSlide(index) {
    state.currentHeroSlide = (index + HERO_SLIDES.length) % HERO_SLIDES.length;
    const track = document.getElementById('heroTrack');
    const headline = document.getElementById('heroHeadline');
    const supporting = document.getElementById('heroSupporting');
    const captionBadge = document.getElementById('heroCaptionBadge');
    const captionTagline = document.getElementById('heroCaptionTagline');
    const captionPrice = document.getElementById('heroCaptionPrice');
    const dots = document.querySelectorAll('.hero-dot');

    const slideData = HERO_SLIDES[state.currentHeroSlide];

    if (track) {
      track.style.transform = `translateX(-${(state.currentHeroSlide * 100) / HERO_SLIDES.length}%)`;
    }

    if (headline) headline.textContent = slideData.headline;
    if (supporting) supporting.textContent = slideData.supporting;
    if (captionBadge) captionBadge.textContent = slideData.badge;
    if (captionTagline) captionTagline.textContent = slideData.tagline;
    if (captionPrice) captionPrice.textContent = slideData.price;

    dots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === state.currentHeroSlide);
    });
  }

  function startHeroTimer() {
    clearInterval(heroTimer);
    heroTimer = setInterval(() => {
      updateHeroSlide(state.currentHeroSlide + 1);
    }, 5000);
  }

  function initHeroCarousel() {
    const prevBtn = document.getElementById('heroPrevBtn');
    const nextBtn = document.getElementById('heroNextBtn');
    const viewport = document.getElementById('heroViewport');

    prevBtn?.addEventListener('click', (e) => {
      e.stopPropagation();
      updateHeroSlide(state.currentHeroSlide - 1);
      startHeroTimer();
    });

    nextBtn?.addEventListener('click', (e) => {
      e.stopPropagation();
      updateHeroSlide(state.currentHeroSlide + 1);
      startHeroTimer();
    });

    document.querySelectorAll('.hero-dot').forEach((dot, idx) => {
      dot.addEventListener('click', () => {
        updateHeroSlide(idx);
        startHeroTimer();
      });
    });

    // Touch Swipe on mobile / tablet
    let startX = 0;
    let startY = 0;

    viewport?.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
      clearInterval(heroTimer);
    }, { passive: true });

    viewport?.addEventListener('touchend', (e) => {
      const endX = e.changedTouches[0].clientX;
      const endY = e.changedTouches[0].clientY;
      const diffX = startX - endX;
      const diffY = startY - endY;

      if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 40) {
        if (diffX > 0) updateHeroSlide(state.currentHeroSlide + 1);
        else updateHeroSlide(state.currentHeroSlide - 1);
      }
      startHeroTimer();
    }, { passive: true });

    viewport?.addEventListener('mouseenter', () => clearInterval(heroTimer));
    viewport?.addEventListener('mouseleave', () => startHeroTimer());

    startHeroTimer();
  }

  // =========================================================================
  // 7. HORIZONTAL CAROUSEL BUTTONS (LEFT / RIGHT ARROWS)
  // =========================================================================
  function initRowScrollControls() {
    document.querySelectorAll('[data-scroll-row]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const rowId = btn.getAttribute('data-scroll-row');
        const dir = btn.getAttribute('data-dir');
        const row = document.getElementById(rowId);
        if (row) {
          const shift = dir === 'next' ? 320 : -320;
          row.scrollBy({ left: shift, behavior: 'smooth' });
        }
      });
    });
  }

  // =========================================================================
  // 8. QUICK VIEW MODAL
  // =========================================================================
  function openQuickView(product) {
    state.quickViewProduct = product;
    state.quickViewSize = 'Small';
    state.quickViewQty = 1;
    state.quickViewShowBack = false;

    const modal = document.getElementById('quickViewModal');
    if (!modal) return;

    document.getElementById('qvImg').src = product.frontImage;
    document.getElementById('qvBadge').textContent = product.badge || 'Velour Exclusive';
    document.getElementById('qvCategory').textContent = product.category.toUpperCase() + ' KURTI';
    document.getElementById('qvName').textContent = product.name;
    document.getElementById('qvPrice').textContent = `Rs. ${product.price.toLocaleString()}`;
    const origPrice = document.getElementById('qvOrigPrice');
    if (origPrice) {
      origPrice.textContent = product.originalPrice ? `Rs. ${product.originalPrice.toLocaleString()}` : '';
    }
    document.getElementById('qvDesc').textContent = product.description;
    document.getElementById('qvFabric').textContent = product.fabric;
    document.getElementById('qvColor').textContent = product.color;
    document.getElementById('qvCare').textContent = product.careInstructions;
    document.getElementById('qvQty').textContent = '1';

    const flipBtn = document.getElementById('qvFlipBtn');
    if (flipBtn) {
      flipBtn.style.display = product.backImage ? 'flex' : 'none';
    }

    // Size pills
    document.querySelectorAll('.qv-size-pill').forEach((pill) => {
      pill.classList.toggle('active', pill.getAttribute('data-size') === 'Small');
    });

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function initQuickView() {
    const modal = document.getElementById('quickViewModal');
    const closeBtn = document.getElementById('closeQuickViewBtn');

    closeBtn?.addEventListener('click', () => {
      modal.classList.remove('open');
      document.body.style.overflow = '';
    });

    modal?.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('open');
        document.body.style.overflow = '';
      }
    });

    // Flip Front/Back in Quick View
    document.getElementById('qvFlipBtn')?.addEventListener('click', () => {
      if (!state.quickViewProduct || !state.quickViewProduct.backImage) return;
      state.quickViewShowBack = !state.quickViewShowBack;
      const img = document.getElementById('qvImg');
      if (img) {
        img.src = state.quickViewShowBack
          ? state.quickViewProduct.backImage
          : state.quickViewProduct.frontImage;
      }
    });

    // Size select
    document.querySelectorAll('.qv-size-pill').forEach((pill) => {
      pill.addEventListener('click', () => {
        document.querySelectorAll('.qv-size-pill').forEach((p) => p.classList.remove('active'));
        pill.classList.add('active');
        state.quickViewSize = pill.getAttribute('data-size') || 'Small';
      });
    });

    // Qty controls
    document.getElementById('qvQtyDec')?.addEventListener('click', () => {
      if (state.quickViewQty > 1) {
        state.quickViewQty--;
        document.getElementById('qvQty').textContent = state.quickViewQty;
      }
    });

    document.getElementById('qvQtyInc')?.addEventListener('click', () => {
      state.quickViewQty++;
      document.getElementById('qvQty').textContent = state.quickViewQty;
    });

    // Add to Cart from Quick View
    document.getElementById('qvAddToCartBtn')?.addEventListener('click', () => {
      if (state.quickViewProduct) {
        addToCart(state.quickViewProduct, state.quickViewSize, state.quickViewQty);
        modal.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  }

  // =========================================================================
  // 9. CART DRAWER & CHECKOUT MODAL
  // =========================================================================
  function initCartDrawer() {
    const backdrop = document.getElementById('cartDrawerBackdrop');
    const panel = document.getElementById('cartDrawerPanel');
    const openBtns = document.querySelectorAll('.open-cart-btn');
    const closeBtns = document.querySelectorAll('.close-cart-btn');
    const checkoutBtn = document.getElementById('proceedToCheckoutBtn');

    function openCart() {
      backdrop.classList.add('open');
      panel.classList.add('open');
      document.body.style.overflow = 'hidden';
      updateCartUI();
    }

    function closeCart() {
      backdrop.classList.remove('open');
      panel.classList.remove('open');
      document.body.style.overflow = '';
    }

    openBtns.forEach((btn) => btn.addEventListener('click', openCart));
    closeBtns.forEach((btn) => btn.addEventListener('click', closeCart));
    backdrop?.addEventListener('click', closeCart);

    checkoutBtn?.addEventListener('click', () => {
      closeCart();
      openCheckoutModal();
    });
  }

  function openCheckoutModal() {
    const modal = document.getElementById('checkoutModal');
    if (!modal) return;

    const subtotal = state.cart.reduce((sum, it) => sum + it.product.price * it.quantity, 0);
    const shipping = subtotal >= 5000 || subtotal === 0 ? 0 : 250;
    const total = subtotal + shipping;

    document.getElementById('checkoutSubtotal').textContent = `Rs. ${subtotal.toLocaleString()}`;
    document.getElementById('checkoutShipping').textContent = shipping === 0 ? 'FREE' : `Rs. ${shipping}`;
    document.getElementById('checkoutTotal').textContent = `Rs. ${total.toLocaleString()}`;

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function initCheckoutModal() {
    const modal = document.getElementById('checkoutModal');
    const closeBtn = document.getElementById('closeCheckoutBtn');
    const form = document.getElementById('checkoutForm');
    const confirmView = document.getElementById('orderConfirmedView');

    function closeCheckout() {
      modal.classList.remove('open');
      document.body.style.overflow = '';
      if (confirmView) confirmView.style.display = 'none';
      if (form) form.style.display = 'block';
    }

    closeBtn?.addEventListener('click', closeCheckout);
    modal?.addEventListener('click', (e) => {
      if (e.target === modal) closeCheckout();
    });

    form?.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('coName')?.value.trim();
      const phone = document.getElementById('coPhone')?.value.trim();
      const address = document.getElementById('coAddress')?.value.trim();

      if (!name || !phone || !address) {
        alert('Please fill out all required shipping details.');
        return;
      }

      const randomOrderId = `VW-${Math.floor(10000 + Math.random() * 90000)}`;
      document.getElementById('confirmedOrderId').textContent = randomOrderId;

      form.style.display = 'none';
      confirmView.style.display = 'block';

      // Clear Cart
      state.cart = [];
      saveState();
      updateCartUI();
    });

    document.getElementById('closeConfirmedBtn')?.addEventListener('click', closeCheckout);
  }

  // =========================================================================
  // 10. SIZE GUIDE MODAL
  // =========================================================================
  function initSizeGuideModal() {
    const modal = document.getElementById('sizeGuideModal');
    const openBtns = document.querySelectorAll('.open-size-guide-btn');
    const closeBtns = document.querySelectorAll('.close-size-guide-btn');

    openBtns.forEach((b) =>
      b.addEventListener('click', () => {
        modal.classList.add('open');
        document.body.style.overflow = 'hidden';
      })
    );

    closeBtns.forEach((b) =>
      b.addEventListener('click', () => {
        modal.classList.remove('open');
        document.body.style.overflow = '';
      })
    );

    modal?.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  }

  // =========================================================================
  // 11. SEARCH MODAL
  // =========================================================================
  function initSearchModal() {
    const modal = document.getElementById('searchModal');
    const openBtns = document.querySelectorAll('.open-search-btn');
    const closeBtns = document.querySelectorAll('.close-search-btn');
    const input = document.getElementById('searchInput');
    const clearBtn = document.getElementById('searchClearBtn');
    const resultsContainer = document.getElementById('searchResults');

    function openSearch() {
      modal.classList.add('open');
      document.body.style.overflow = 'hidden';
      setTimeout(() => input?.focus(), 50);
    }

    function closeSearch() {
      modal.classList.remove('open');
      document.body.style.overflow = '';
      if (input) input.value = '';
      renderSearchResults('');
    }

    openBtns.forEach((b) => b.addEventListener('click', openSearch));
    closeBtns.forEach((b) => b.addEventListener('click', closeSearch));
    modal?.addEventListener('click', (e) => {
      if (e.target === modal) closeSearch();
    });

    clearBtn?.addEventListener('click', () => {
      if (input) input.value = '';
      renderSearchResults('');
    });

    input?.addEventListener('input', (e) => {
      renderSearchResults(e.target.value);
    });

    document.querySelectorAll('.search-pill-tag').forEach((tag) => {
      tag.addEventListener('click', () => {
        const text = tag.getAttribute('data-tag');
        if (input) {
          input.value = text;
          renderSearchResults(text);
        }
      });
    });

    function renderSearchResults(query) {
      const q = query.trim().toLowerCase();
      if (!q) {
        resultsContainer.innerHTML = '<p style="font-size:12px; color:rgba(26,26,26,0.6); text-align:center; padding:1.5rem 0;">Type above to search across stitched, unstitched, and girls\' Kurtis.</p>';
        return;
      }

      const matches = PRODUCTS.filter((p) => {
        return (
          p.name.toLowerCase().includes(q) ||
          p.fabric.toLowerCase().includes(q) ||
          p.color.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.shortDescription.toLowerCase().includes(q)
        );
      });

      if (matches.length === 0) {
        resultsContainer.innerHTML = `<p style="font-size:12px; color:rgba(26,26,26,0.6); text-align:center; padding:1.5rem 0;">No Kurtis found matching "${query}".</p>`;
        return;
      }

      resultsContainer.innerHTML = matches
        .map((p) => {
          return `
            <div class="search-result-item" data-id="${p.id}" style="display:flex; align-items:center; gap:0.75rem; padding:0.625rem; border-radius:0.5rem; cursor:pointer; transition:background 0.15s ease;">
              <img src="${p.frontImage}" alt="${p.name}" style="width:3rem; height:3.75rem; object-fit:cover; border-radius:0.25rem; background:#F5F0E8;" />
              <div style="flex:1; min-width:0;">
                <h4 style="font-family:var(--font-serif); font-size:1rem; font-weight:600; color:#111; margin-bottom:2px;">${p.name}</h4>
                <p style="font-size:11px; color:rgba(26,26,26,0.6);">${p.fabric} · <span style="color:#C6A15B; font-weight:600;">${p.category.toUpperCase()}</span></p>
              </div>
              <div style="font-size:0.875rem; font-weight:700; color:#111;">Rs. ${p.price.toLocaleString()}</div>
            </div>
          `;
        })
        .join('');

      resultsContainer.querySelectorAll('.search-result-item').forEach((item) => {
        item.addEventListener('mouseenter', () => (item.style.backgroundColor = '#F5F0E8'));
        item.addEventListener('mouseleave', () => (item.style.backgroundColor = 'transparent'));
        item.addEventListener('click', () => {
          const id = item.getAttribute('data-id');
          const prod = PRODUCTS.find((p) => p.id === id);
          if (prod) {
            closeSearch();
            openQuickView(prod);
          }
        });
      });
    }
  }

  // =========================================================================
  // 12. MOBILE HAMBURGER NAVIGATION
  // =========================================================================
  function initMobileMenu() {
    const backdrop = document.getElementById('mobileMenuBackdrop');
    const panel = document.getElementById('mobileMenuPanel');
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const closeBtn = document.getElementById('closeMobileMenuBtn');
    const mobileLinks = document.querySelectorAll('.mobile-menu-link');

    function openMenu() {
      backdrop.classList.add('open');
      panel.classList.add('open');
      document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
      backdrop.classList.remove('open');
      panel.classList.remove('open');
      document.body.style.overflow = '';
    }

    hamburgerBtn?.addEventListener('click', openMenu);
    closeBtn?.addEventListener('click', closeMenu);
    backdrop?.addEventListener('click', closeMenu);

    mobileLinks.forEach((link) => {
      link.addEventListener('click', () => {
        closeMenu();
        const sectionId = link.getAttribute('data-target');
        if (sectionId) {
          const el = document.getElementById(sectionId);
          el?.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });

    document.getElementById('mobileMenuBagBtn')?.addEventListener('click', () => {
      closeMenu();
      document.getElementById('cartDrawerBackdrop')?.classList.add('open');
      document.getElementById('cartDrawerPanel')?.classList.add('open');
      document.body.style.overflow = 'hidden';
      updateCartUI();
    });
  }

  // =========================================================================
  // 13. FABRIC & STYLE GUIDE TABS
  // =========================================================================
  function initFabricTabs() {
    const tabs = document.querySelectorAll('.fabric-tab-btn');
    const panels = {
      fabric: document.getElementById('tabContentFabric'),
      styling: document.getElementById('tabContentStyling'),
      reviews: document.getElementById('tabContentReviews')
    };

    tabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        tabs.forEach((t) => t.classList.remove('active'));
        tab.classList.add('active');
        const target = tab.getAttribute('data-tab');

        Object.keys(panels).forEach((k) => {
          if (panels[k]) panels[k].style.display = k === target ? 'grid' : 'none';
        });
      });
    });
  }

  // =========================================================================
  // 14. FILTER BAR EVENTS
  // =========================================================================
  function initFilterBar() {
    document.querySelectorAll('[data-filter-category]').forEach((btn) => {
      btn.addEventListener('click', () => {
        state.filters.category = btn.getAttribute('data-filter-category');
        syncFilterUI();
        renderCatalogGrid();
      });
    });

    document.getElementById('filterFabric')?.addEventListener('change', (e) => {
      state.filters.fabric = e.target.value;
      renderCatalogGrid();
    });

    document.getElementById('filterSize')?.addEventListener('change', (e) => {
      state.filters.size = e.target.value;
      renderCatalogGrid();
    });

    document.getElementById('filterSort')?.addEventListener('change', (e) => {
      state.filters.sortBy = e.target.value;
      renderCatalogGrid();
    });
  }

  // =========================================================================
  // 15. DOM CONTENT LOADED INITIALIZER
  // =========================================================================
  document.addEventListener('DOMContentLoaded', () => {
    renderAllProductCards();
    updateCartUI();
    initHeroCarousel();
    initRowScrollControls();
    initQuickView();
    initCartDrawer();
    initCheckoutModal();
    initSizeGuideModal();
    initSearchModal();
    initMobileMenu();
    initFabricTabs();
    initFilterBar();
  });
})();
