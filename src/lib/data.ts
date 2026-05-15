export const RESTAURANT = {
  name: "Shin Kai",
  nameFull: "Shin Kai Omakase",
  nameJP: "新懐",
  tagline: "The Art of Omakase",
  taglineJP: "その瞬間を、味わう",
  sub: "A curated journey of taste, crafted in the moment.",
  address: "123 Sakura Way, New York, NY 10001",
  addressJP: "ニューヨーク、桜通り 123",
  phone: "+1 (212) 555-0198",
  email: "reservations@shinkai-nyc.com",
  hours: {
    days: "Tue – Sun",
    times: "5:30 PM – 10:30 PM",
    note: "Monday closed",
  },
  seatings: ["5:30 PM", "8:00 PM"],
  capacity: 12,
  whatsapp: "12125550198",
  social: {
    instagram: "#",
    facebook: "#",
    twitter: "#",
  },
};

export const COURSES = [
  {
    id: "hana",
    name: "Hana",
    nameJP: "華",
    courseCount: "8–10 Courses",
    price: 180,
    tagline: "A delicate introduction to seasonal flavors.",
    description:
      "Our entry journey through the seasons — light, precise, and luminous. Each course is composed to awaken the palate with the subtlest expressions of Edomae tradition.",
    descriptionJP: "旬の食材が織りなす、繊細で透明感ある料理の連なり。",
    popular: false,
    highlights: [
      "Seasonal sashimi selection",
      "House dashi soup",
      "6 nigiri pieces",
      "Seasonal vegetable course",
      "Chef's dessert",
    ],
    image: "https://images.unsplash.com/photo-1617196034183-421b4040ed20?w=600&q=80",
  },
  {
    id: "miyabi",
    name: "Miyabi",
    nameJP: "雅",
    courseCount: "10–12 Courses",
    price: 240,
    tagline: "A refined balance of tradition and creativity.",
    description:
      "A deeper exploration of the omakase form. Miyabi layers textural contrast and seasonal depth, guiding guests through a carefully considered arc of flavors.",
    descriptionJP: "伝統と革新のバランスが生む、奥行きある味わいの旅。",
    popular: false,
    highlights: [
      "Premium sashimi tasting",
      "Seasonal cold appetizer",
      "Slow-aged nigiri selection (8 pieces)",
      "Warm course with seasonal protein",
      "House miso with clam",
      "Chef's seasonal dessert",
    ],
    image: "https://images.unsplash.com/photo-1553621042-f6e147245754?w=600&q=80",
  },
  {
    id: "shin",
    name: "Shin",
    nameJP: "心",
    courseCount: "12–14 Courses",
    price: 320,
    tagline: "The signature experience of Shin Kai.",
    description:
      "Our most celebrated menu. Shin is where Chef's vision fully unfolds — a meditative procession of rare ingredients, aged fish, and momentary perfection.",
    descriptionJP: "新懐の真髄。希少食材と熟成魚が紡ぐ、一期一会の体験。",
    popular: true,
    highlights: [
      "Caviar and truffle opener",
      "A5 Wagyu carpaccio",
      "Tuna trilogy — akami, chutoro, otoro",
      "Aged nigiri (10 pieces)",
      "Seasonal warm course",
      "House-crafted miso",
      "Matcha panna cotta & seasonal fruits",
    ],
    image: "https://images.unsplash.com/photo-1559410545-0bdcd187e0a6?w=600&q=80",
  },
  {
    id: "tokusen",
    name: "Tokusen",
    nameJP: "特選",
    courseCount: "14+ Courses",
    price: 420,
    tagline: "For the ultimate gastronomic journey.",
    description:
      "Reserved exclusively for the discerning few. Tokusen is an extended evening of singular luxury — rare fish, premium pairings, and the full expression of the omakase philosophy.",
    descriptionJP: "最上の一夜。極上の食材と、時間をかけた至高の体験。",
    popular: false,
    highlights: [
      "Amuse: seasonal ichiju",
      "Hokkaido uni and caviar",
      "A5 Wagyu tataki",
      "Tuna aged 10–21 days",
      "Extended nigiri (12+ pieces)",
      "Live spot prawn",
      "Seasonal truffle course",
      "Japanese whisky or sake pairing available",
      "Handmade wagashi & matcha",
    ],
    image: "https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=600&q=80",
  },
];

export const TESTIMONIALS = [
  {
    text: "An unparalleled experience. Every course felt like a small act of poetry — precise, intentional, and deeply moving. Shin Kai has redefined what dining can be.",
    author: "James M.",
    title: "Food writer, The New York Times",
    stars: 5,
  },
  {
    text: "We celebrate our anniversary here every year. The intimacy of the counter, the rhythm of the courses, the silence between bites — it's unlike anything else in the city.",
    author: "Yuki & David T.",
    title: "Returning guests",
    stars: 5,
  },
  {
    text: "Chef's instinct for balance is extraordinary. The Shin menu was a masterclass in restraint and expression — I left feeling like I had witnessed something rare.",
    author: "Sofia R.",
    title: "Michelin Guide contributor",
    stars: 5,
  },
];

export const FEATURES = [
  {
    icon: "leaf",
    title: "Seasonal Ingredients",
    titleJP: "旬の食材",
    desc: "Carefully selected from trusted purveyors.",
  },
  {
    icon: "pen",
    title: "Edomae Technique",
    titleJP: "江戸前の技",
    desc: "Rooted in tradition, refined over generations.",
  },
  {
    icon: "bowl",
    title: "Personalized Experience",
    titleJP: "おもてなし",
    desc: "An intimate setting with thoughtful hospitality.",
  },
  {
    icon: "torii",
    title: "Japanese Aesthetics",
    titleJP: "日本の美学",
    desc: "Where every detail embodies harmony.",
  },
];

export const CHEF = {
  name: "Chef Hiroshi Tanaka",
  nameJP: "田中 裕",
  title: "Executive Chef & Owner",
  bio: `Born in Kyoto and trained for a decade under masters in Tokyo's Ginza district, Chef Hiroshi Tanaka brings the full depth of Edomae tradition to New York City. His philosophy is simple: every ingredient deserves to be heard.

At Shin Kai, Chef Tanaka sources directly from trusted fishmongers in Tsukiji and local farms across the Northeast. His hands move with the quiet confidence of someone who has spent twenty years listening to the sea.`,
  bioJP: "京都生まれ、東京銀座で修行を重ねた田中裕が、江戸前の伝統をニューヨークへ。",
  philosophy:
    "Omakase is not a menu. It is a conversation — between the chef, the season, and the guest. My role is to translate that conversation into something you will remember long after the last course.",
  philosophyJP: "おまかせとは、料理人と季節と食客の対話。その瞬間だけに生まれる一皿を大切にしています。",
};
