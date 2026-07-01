export interface Project {
  id: string;
  title: string;
  category: 'architecture' | 'art-direction';
  role: string;
  date: string;
  location: string;
  client?: string;
  software: string[];
  inspiredBy?: string;
  outcome?: string;
  shortDescription: string;
  fullStory: string[];
  interactiveType?: 'slider' | 'rotation' | 'newspaper' | 'gallery';
  images: {
    hero: string;
    before?: string;
    after?: string;
    additional?: string[];
  };
  link?: string;
}

export interface ResumeItem {
  period: string;
  role: string;
  company: string;
  description: string[];
}

export const resumeData: ResumeItem[] = [
  {
    period: "Oct 2025 - Present",
    role: "Art Director",
    company: "Means Design",
    description: [
      "Led design and art direction for Alef Group's project launch, orchestrating visual identity and OOH rollout.",
      "Developed visual directions for Emaar Hospitality Group (Vida Hotels, Address Creek Harbour, Rotana Hotels).",
      "Directed campaign design and visual guidelines for Dubai Opera events.",
      "Created the brand identity and spatial art direction for True Slice restaurant."
    ]
  },
  {
    period: "Nov 2024 - May 2025",
    role: "Art Director",
    company: "Kizmet Media",
    description: [
      "Developed creative strategy for regional campaigns in the GCC.",
      "Art directed visual identities for regional events, including Emirates Villages and Kan Ya Ramadan.",
      "Created campaign concepts and visual assets for key client pitches."
    ]
  },
  {
    period: "Jan 2024 - Sep 2024",
    role: "Art Director",
    company: "NRD Studios",
    description: [
      "Managed branding and visual identity projects from concept through to final production.",
      "Directed design deliverables across digital and print media.",
      "Coordinated with design team members to establish production guidelines and templates."
    ]
  },
  {
    period: "Apr 2022 - Jan 2024",
    role: "Senior Designer",
    company: "SD Media",
    description: [
      "Rebranded the agency's visual identity, establishing unified brand books and design systems.",
      "Created social media video content and interactive reels."
    ]
  },
  {
    period: "2018 - 2022",
    role: "Freelance Designer",
    company: "Self-Employed",
    description: [
      "Executed branding, packaging, and digital designs for local clients while completing architectural studies at Damascus University."
    ]
  }
];

export const educationData = {
  degree: "Bachelor of Architecture (B.Arch)",
  institution: "Damascus University",
  period: "2017 - 2022",
  achievements: [
    "Specialized in Heritage Conservation, Urban Design, and Community planning.",
    "Won 2nd place in CAB Entrepreneurship Competition.",
    "Participated in Swidaa monuments documentation workshops."
  ]
};

export const projectsData: Project[] = [
  {
    id: "sarouja-revitalization",
    title: "Sarouja Rehabilitation Project",
    category: "architecture",
    role: "Lead Designer (Graduation Project)",
    date: "2023",
    location: "Damascus, Syria",
    software: ["AutoCAD", "SketchUp", "3ds Max", "Photoshop"],
    shortDescription: "A conservation and urban rehabilitation plan for the historic Sarouja neighborhood, focusing on pedestrian zones and historical facade restoration.",
    fullStory: [
      "Sarouja is Damascus's oldest extension outside the city walls, dating back to the Mamluk Period. The neighborhood contains valuable historic fabric but faces issues of decay and heavy vehicle congestion.",
      "This rehabilitation plan proposes facade restoration, pedestrian-only zoning for key souqs, and detailed planning for street pavings and local furniture.",
      "The program also includes re-adapting historic homes (such as the Takriti and Kabriti houses) and detailing plans for a boutique hotel that integrates with the traditional courtyard layout."
    ],
    interactiveType: "slider",
    inspiredBy: "Mamluk courtyard proportions, traditional Syrian stone paving patterns, and pedestrian-centric urban layouts.",
    outcome: "Completed master plans, elevation drawings, street paving details, and interior layouts for the proposed courtyard hotel.",
    images: {
      hero: "sarouja_revitalize_hero",
      before: "sarouja_souq_before",
      after: "sarouja_souq_after"
    }
  },
  {
    id: "terez-cafe",
    title: "Terez Café",
    category: "art-direction",
    role: "Art Director",
    date: "2024",
    location: "Damascus, Syria",
    software: ["Photoshop", "Illustrator", "Brand Identity"],
    shortDescription: "Branding and logo design for a local neighborhood cafe, utilizing warm color schemes and tactile line art.",
    fullStory: [
      "This identity was developed through direct collaboration with the cafe owners during their setup phase. The goal was to build a brand that matched the cozy, informal atmosphere of the space.",
      "The visual assets incorporate warm color tones and custom line illustrations, drawing inspiration from the cafe's textile interior elements, mismatched furniture, and warm lighting.",
      "The logo and graphic applications focus on an organic, approachable feel rather than a rigid corporate identity."
    ],
    inspiredBy: "Cafe interior textiles, custom joinery details, and neighborhood community hubs.",
    outcome: "Designed logo, typography system, and brand colors that were integrated into the cafe's physical interior styling.",
    images: {
      hero: "terez_cafe_hero"
    }
  },
  {
    id: "al-rawda-cafe",
    title: "Al Rawda Café",
    category: "art-direction",
    role: "Visual Concept & Storyteller",
    date: "2024",
    location: "Damascus, Syria",
    software: ["Illustrator", "Social Strategy", "Copywriting"],
    shortDescription: "A newspaper-style layout created for Al Rawda Cafe's digital platforms, referencing traditional print media.",
    fullStory: [
      "Al Rawda is one of Damascus's oldest cultural cafes, traditionally serving as a meeting point for local writers, actors, and journalists.",
      "The campaign's visual system was built around a newsprint grid, utilizing classic typeface layouts, ink borders, and historic stamps to pay tribute to the cafe's media connections.",
      "The design serves as a digital archive that shares the café's cultural history with a broader regional audience."
    ],
    interactiveType: "newspaper",
    inspiredBy: "Mid-century print layouts, vintage newspapers, and Damascus cultural history.",
    outcome: "Designed a digital editorial layout that increased social media engagement and connected with the local diaspora.",
    images: {
      hero: "al_rawda_hero"
    }
  },
  {
    id: "abd-al-razaq-olive-oil",
    title: "Abd Al Razaq Olive Oil",
    category: "art-direction",
    role: "Packaging Designer & Art Director",
    date: "2024",
    location: "Latakia, Syria",
    software: ["Illustrator", "3D Mockups", "Packaging Design"],
    shortDescription: "Branding and packaging design for a family-owned olive oil producer, using a minimalist high-contrast theme.",
    fullStory: [
      "This project involved creating a brand identity and packaging system for an olive grove located in Latakia, overlooking the Mediterranean coast.",
      "The design utilizes a high-contrast black-and-white theme, featuring a clean glass bottle outline and a minimal vector silhouette of the Latakia ruins and horizon.",
      "By keeping the visual elements minimal, the packaging functions as a clean, recognizable object on retail shelves."
    ],
    inspiredBy: "The Latakia coastline, ancient ruins, and the Mediterranean olive groves.",
    outcome: "Created packaging guidelines, custom glass bottle graphics, and logo assets for print.",
    images: {
      hero: "olive_oil_hero"
    }
  },
  {
    id: "fardoss-community",
    title: "Fardoss Community",
    category: "art-direction",
    role: "Brand Director & Spatial Designer",
    date: "2023",
    location: "Damascus, Syria",
    software: ["Photoshop", "Illustrator", "Interior Styling"],
    shortDescription: "Identity and spatial styling for the Fardoss Community project, a creative workspace located in the historic Fardoss Hotel.",
    fullStory: [
      "The project involved transforming an unused space inside the Fardoss Hotel into a community workspace for young designers and local professionals.",
      "The branding revolves around a geometric icon which is a rotated, simplified silhouette of the hotel's concrete brutalist tower.",
      "In addition to the visual rebrand, the work included interior styling and furniture selection to make the workspace functional and welcoming."
    ],
    interactiveType: "rotation",
    inspiredBy: "Brutalist concrete architecture of the Fardoss Hotel tower, grid networks, and collaborative spaces.",
    outcome: "Developed full visual identity guidelines and completed interior layout styling for the coworking hub.",
    images: {
      hero: "fardoss_hero"
    }
  },
  {
    id: "al-amana-tower",
    title: "Al Amana Tower & Mixed-Use Projects",
    category: "architecture",
    role: "Architectural Intern / Designer",
    date: "2022",
    location: "Dubai, UAE",
    software: ["AutoCAD", "SketchUp", "Excel"],
    shortDescription: "Architectural design reconfigurations and layout detailing completed at Ghassan Aboud Office.",
    fullStory: [
      "This project focused on the spatial planning and layout reconfigurations for the Al Amana mixed-use development tower.",
      "Responsibilities included drafting interior floor plans for residential units, detailing gym and commercial layouts, and verifying structural column alignments in the parking levels.",
      "The design reconfigured the basement parking grid to optimize vehicle paths while maintaining the structural system above."
    ],
    inspiredBy: "Structural grid systems, commercial floor optimization, and compact residential spaces.",
    outcome: "Completed structural column shop drawings, commercial retail layouts, and interior apartment plans.",
    images: {
      hero: "amana_tower_hero"
    }
  },
  {
    id: "kan-ya-ramadan",
    title: "Kan Ya Ramadan Event",
    category: "art-direction",
    role: "Art Director",
    date: "2024",
    location: "Dubai, UAE",
    software: ["Illustrator", "After Effects", "Event Identity"],
    shortDescription: "Event identity and campaign assets inspired by retro Levantine print advertising and bold colors.",
    fullStory: [
      "This identity was designed for a cultural pop-up event in Dubai, referencing vintage Middle Eastern heritage and nostalgia.",
      "The creative direction avoids common visual clichés like gold stars and half-moons. Instead, it utilizes bold, saturated retro color blocks (pinks, cobalt blues, and cream) inspired by mid-century print ads.",
      "The final graphics and digital motion assets create a nostalgic visual system suitable for modern event branding and digital media."
    ],
    inspiredBy: "Mid-century Arabic billboards, vintage advertising posters, and regional cultural prints.",
    outcome: "Delivered full brand guidelines, digital motion assets, and signage designs for the event space.",
    images: {
      hero: "kan_ya_ramadan_hero"
    }
  }
];

export const clientLogos = [
  "Emaar Hospitality Group",
  "Dubai Opera",
  "Alef Group",
  "Rotana Hotels",
  "Vida Hotels & Resorts",
  "Address Hotels",
  "GMLOx"
];
