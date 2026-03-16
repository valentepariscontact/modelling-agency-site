export type NewsStory = {
  slug: string;
  title: string;
  category: "Runway" | "Editorial" | "Campaign" | "Agency";
  date: string;
  image: string;
  excerpt: string;
  content: string[];
};

export const newsStories: NewsStory[] = [
  {
    slug: "paris-fashion-week-casting-notes",
    title: "Paris Fashion Week Casting Notes",
    category: "Runway",
    date: "January 2026",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1800&q=80",
    excerpt:
      "A closer look at this season's runway casting direction from Valente Paris.",
    content: [
      "Valente Paris approached this season's runway castings with a focus on sharp identity and long-line silhouettes. The booking strategy paired established names with new faces to create a balanced runway narrative.",
      "Across Paris venues, the agency prioritized timing, backstage discipline, and continuity across fittings, rehearsals, and final walk sequences. The result was a cohesive presence across multiple collections.",
      "The season closed with strong international callback volume and expanded dialogue with styling teams for upcoming campaign work.",
    ],
  },
  {
    slug: "valente-faces-in-international-print",
    title: "Valente Faces in International Print",
    category: "Editorial",
    date: "December 2025",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1800&q=80",
    excerpt:
      "Recent publication highlights featuring Valente talent across leading titles.",
    content: [
      "This quarter, Valente talent appeared in editorial stories across European and Asian fashion publications. The work spans fashion narrative, beauty direction, and cinematic portraiture.",
      "Creative teams emphasized minimal sets and precise wardrobe construction, allowing each subject's presence to define the frame.",
      "The agency continues to develop long-term editorial partnerships rooted in consistency, craft, and visual clarity.",
    ],
  },
  {
    slug: "campaign-casting-spring-summer",
    title: "Campaign Casting: Spring/Summer",
    category: "Campaign",
    date: "November 2025",
    image:
      "https://images.unsplash.com/photo-1495385794356-15371f348c31?auto=format&fit=crop&w=1800&q=80",
    excerpt:
      "Campaign casting opened in Paris for Spring/Summer with an editorial-first approach.",
    content: [
      "Casting sessions were designed around movement tests, close portrait evaluation, and direct alignment with each brand's visual language.",
      "Valente's campaign slate this season leans into clean compositions, monochrome palettes, and tailored story arcs across still and motion.",
      "Final selections are now entering pre-production with studio and location shoots scheduled in Paris.",
    ],
  },
  {
    slug: "new-signings-in-paris",
    title: "New Signings in Paris",
    category: "Agency",
    date: "October 2025",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1800&q=80",
    excerpt:
      "Valente Paris introduces new talent across Women, Men, and Non-Binary divisions.",
    content: [
      "The agency has added a selective group of new signings with strong editorial potential and international placement readiness.",
      "Development includes image coaching, casting strategy, and phased market introductions coordinated from Paris.",
      "Each profile will debut with portfolio updates and early campaign and runway opportunities.",
    ],
  },
];
