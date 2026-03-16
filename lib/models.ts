export type ModelProfile = {
  slug: string;
  name: string;
  division: "women" | "men" | "non-binary";
  portrait: string;
  hero: string;
  gallery: string[];
  stats: {
    height: string;
    bust: string;
    waist: string;
    hips: string;
    shoes: string;
  };
  social: {
    instagram: string;
    tiktok: string;
  };
};

export const models: ModelProfile[] = [
  {
    slug: "alina-voss",
    name: "ALINA VOSS",
    division: "women",
    portrait:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1200&q=80",
    hero: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=2200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1464863979621-258859e62245?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1542295669297-4d352b042bca?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1551232864-3f0890e580d9?auto=format&fit=crop&w=1400&q=80",
    ],
    stats: {
      height: "178 cm",
      bust: "82 cm",
      waist: "60 cm",
      hips: "88 cm",
      shoes: "39 EU",
    },
    social: {
      instagram: "https://instagram.com/alinavoss",
      tiktok: "https://tiktok.com/@alinavoss",
    },
  },
  {
    slug: "noah-reyes",
    name: "NOAH REYES",
    division: "men",
    portrait:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=80",
    hero: "https://images.unsplash.com/photo-1464863979621-258859e62245?auto=format&fit=crop&w=2200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=1400&q=80",
    ],
    stats: {
      height: "186 cm",
      bust: "98 cm",
      waist: "76 cm",
      hips: "95 cm",
      shoes: "44 EU",
    },
    social: {
      instagram: "https://instagram.com/noahreyes",
      tiktok: "https://tiktok.com/@noahreyes",
    },
  },
  {
    slug: "mila-dorian",
    name: "MILA DORIAN",
    division: "women",
    portrait:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80",
    hero: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?auto=format&fit=crop&w=2200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=1400&q=80",
    ],
    stats: {
      height: "180 cm",
      bust: "84 cm",
      waist: "61 cm",
      hips: "89 cm",
      shoes: "40 EU",
    },
    social: {
      instagram: "https://instagram.com/miladorian",
      tiktok: "https://tiktok.com/@miladorian",
    },
  },
  {
    slug: "elias-moreau",
    name: "ELIAS MOREAU",
    division: "men",
    portrait:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1200&q=80",
    hero: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?auto=format&fit=crop&w=2200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1539614474468-f423a2d2270c?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1400&q=80",
    ],
    stats: {
      height: "188 cm",
      bust: "100 cm",
      waist: "78 cm",
      hips: "97 cm",
      shoes: "45 EU",
    },
    social: {
      instagram: "https://instagram.com/eliasmoreau",
      tiktok: "https://tiktok.com/@eliasmoreau",
    },
  },
  {
    slug: "sophia-leclerc",
    name: "SOPHIA LECLERC",
    division: "non-binary",
    portrait:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80",
    hero: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=2200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1495385794356-15371f348c31?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1521577352947-9bb58764b69a?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1400&q=80",
    ],
    stats: {
      height: "177 cm",
      bust: "83 cm",
      waist: "59 cm",
      hips: "87 cm",
      shoes: "39 EU",
    },
    social: {
      instagram: "https://instagram.com/sophialeclerc",
      tiktok: "https://tiktok.com/@sophialeclerc",
    },
  },
  {
    slug: "lucas-vale",
    name: "LUCAS VALE",
    division: "non-binary",
    portrait:
      "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?auto=format&fit=crop&w=1200&q=80",
    hero: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=2200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1557862921-37829c790f19?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1400&q=80",
    ],
    stats: {
      height: "187 cm",
      bust: "99 cm",
      waist: "77 cm",
      hips: "96 cm",
      shoes: "44 EU",
    },
    social: {
      instagram: "https://instagram.com/lucasvale",
      tiktok: "https://tiktok.com/@lucasvale",
    },
  },
];
