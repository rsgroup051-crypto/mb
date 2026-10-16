import {
  Project,
  Service,
  DesignStyle,
  ProcessStep,
  InsightArticle,
  FaqItem
} from '../types';

export const HERO_IMAGE = '/src/assets/images/hero_editorial_interior_1790851495225.jpg';
export const INTRO_IMAGE = '/src/assets/images/intro_architectural_detail_1790851512717.jpg';
export const RESIDENTIAL_PROJECT_IMAGE = '/src/assets/images/project_residential_penthouse_1790851527926.jpg';
export const WORKPLACE_PROJECT_IMAGE = '/src/assets/images/project_creative_workplace_1790851540665.jpg';
export const HOSPITALITY_PROJECT_IMAGE = '/src/assets/images/project_hospitality_suite_1790851555630.jpg';

export const SERVICES_DATA: Service[] = [
  {
    id: 'residential',
    number: '01',
    title: 'Residential Interior Design',
    slug: '/services/residential-interior-design/',
    tagline: 'Designing homes that balance functionality, personality and refined aesthetics.',
    description: 'We shape private residences that reflect the daily rituals and character of their inhabitants. From historic brownstones and modern penthouses to rural retreats, our residential architecture unites custom joinery, natural light, and quiet materials.',
    deliverables: [
      'Comprehensive space planning & volumetric analysis',
      'Custom millwork & architectural cabinetry detailing',
      'Finishes, surfaces & natural stone selection',
      'Integrated lighting schemes & architectural hardware',
      'Bespoke FF&E curation & procurement'
    ],
    timeline: '3 to 9 months typical duration',
    idealFor: 'Apartments, townhouses, private villas, and penthouse renovations',
    imageFallbackTexture: 'from-[#F5F2EB] to-[#EBE4D8]'
  },
  {
    id: 'commercial',
    number: '02',
    title: 'Commercial Interior Design',
    slug: '/services/commercial-interior-design/',
    tagline: 'Purposeful environments designed around business, customer experience and brand identity.',
    description: 'Translating brand ethos into enduring physical spaces. We design commercial environments that welcome guests, communicate authority, and elevate every operational interaction with architectural coherence.',
    deliverables: [
      'Brand translation & experiential spatial concepts',
      'High-traffic circulation & accessibility engineering',
      'Durable commercial-grade finish specifications',
      'Custom reception counters & architectural focal points',
      'Compliance & code coordination'
    ],
    timeline: '4 to 12 months typical duration',
    idealFor: 'Brand showrooms, professional practices, boutique galleries, and commercial headquarters',
    imageFallbackTexture: 'from-[#EFECE6] to-[#DED8CE]'
  },
  {
    id: 'office',
    number: '03',
    title: 'Office Interior Design',
    slug: '/services/office-interior-design/',
    tagline: 'Thoughtful workplaces designed for productivity, collaboration and employee experience.',
    description: 'Contemporary workplaces demand harmony between acoustic retreat and collaborative energy. We create tailored workplace environments that foster focus, comfort, and spontaneous synergy without corporate sterility.',
    deliverables: [
      'Acoustic planning & zoning for focused vs. shared work',
      'Ergonomic workstation & executive suite layouts',
      'Integrated technology & concealed wireways',
      'Biophilic accents & circadian lighting considerations',
      'Breakout lounges & executive boardroom concepts'
    ],
    timeline: '3 to 8 months typical duration',
    idealFor: 'Executive suites, creative agencies, tech enterprises, and boutique financial offices',
    imageFallbackTexture: 'from-[#F3F0EA] to-[#E4DFD5]'
  },
  {
    id: 'retail',
    number: '04',
    title: 'Retail Interior Design',
    slug: '/services/retail-interior-design/',
    tagline: 'Spatial experiences that connect brand identity with customer movement and interaction.',
    description: 'Every square foot of retail space is an opportunity to cultivate reverence for products. We choreograph sightlines, tactical thresholds, and lighting fixtures to turn retail into a deliberate sensory journey.',
    deliverables: [
      'Customer journey mapping & visual merchandising sightlines',
      'Monolithic display fixtures & custom plinths',
      'Specialized retail lighting & color rendering optimization',
      'Fitting room sanctuaries & point-of-sale transitions',
      'Facade & storefront integration'
    ],
    timeline: '2 to 6 months typical duration',
    idealFor: 'Flagship boutiques, jewelry ateliers, fashion houses, and design showrooms',
    imageFallbackTexture: 'from-[#EDE9E1] to-[#DDD7CC]'
  },
  {
    id: 'hospitality',
    number: '05',
    title: 'Hospitality Interior Design',
    slug: '/services/hospitality-interior-design/',
    tagline: 'Atmospheric spaces designed around comfort, experience and identity.',
    description: 'Immersive spaces where atmosphere precedes thought. We design boutique hotels, lounges, and dining spaces that wrap patrons in warmth, tactile materiality, and layered evening illumination.',
    deliverables: [
      'Concept narrative & atmosphere orchestration',
      'Seating geometry & guest privacy zoning',
      'Bespoke bar architecture & service station integration',
      'Acoustic reverberation control in dining environments',
      'Atmospheric low-level lighting & candlelight balance'
    ],
    timeline: '6 to 14 months typical duration',
    idealFor: 'Boutique hotels, cocktail salons, members clubs, and intimate dining establishments',
    imageFallbackTexture: 'from-[#EAE5DC] to-[#D5CFC3]'
  },
  {
    id: 'turnkey',
    number: '06',
    title: 'Turnkey Interior Design',
    slug: '/services/turnkey-interior-design/',
    tagline: 'An integrated approach from design development through coordination and execution.',
    description: 'A singular point of accountability for discerning clients. We oversee the entire trajectory from structural concepts and municipal permits through contractor management, site supervision, and final styling.',
    deliverables: [
      'Single-point management from concept to completion',
      'General contractor tender & vendor management',
      'Detailed construction documentation & shop drawing review',
      'Rigorous cost management & procurement timeline tracking',
      'Complete white-glove installation & handover'
    ],
    timeline: 'Full project lifecycle coverage',
    idealFor: 'Clients seeking seamless execution without managing multiple trades and contractors',
    imageFallbackTexture: 'from-[#F6F4EE] to-[#E5DFC2]'
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'mercer-salon',
    name: 'The Mercer Salon & Residence',
    category: 'residential',
    categoryLabel: 'Residential',
    location: 'SoHo, New York',
    style: 'Modern Minimalist',
    year: '2025',
    area: '3,800 sq ft',
    image: RESIDENTIAL_PROJECT_IMAGE,
    summary: 'A loft restoration in historic SoHo balancing raw cast-iron structure with honed travertine, slatted oak partitions, and diffused natural illumination.',
    description: 'The Mercer residence was conceived as a tranquil sanctuary amidst lower Manhattan. We stripped back decades of prior renovations to reveal the historical volume, inserting clean floating timber planes, custom lime plaster walls, and a monolithic travertine dining setting.',
    keyMaterials: ['Navona Travertine', 'Smoked European Oak', 'Hand-applied Lime Plaster', 'Cast Bronze Hardware'],
    scope: ['Full Interior Architecture', 'Custom Millwork Design', 'Lighting Engineering', 'Art Advisory & FF&E']
  },
  {
    id: 'atelier-bureau',
    name: 'Atelier Bureau Studio',
    category: 'office',
    categoryLabel: 'Office',
    location: 'Mayfair, London',
    style: 'Architectural Contemporary',
    year: '2025',
    area: '5,200 sq ft',
    image: WORKPLACE_PROJECT_IMAGE,
    summary: 'An executive headquarters for a private advisory firm, pairing acoustic wool panelling with ash conference tables and warm perimeter ambient light.',
    description: 'Balancing corporate gravitas with residential warmth, the design features private partner studies and open acoustic collaborative tables. Custom slatted timber partitions allow daylight to filter deep into the floor plate while dampening reverberation.',
    keyMaterials: ['Quarter-sawn White Ash', 'Acoustic Wool Felt', 'Brushed Raw Steel', 'Belgian Linen'],
    scope: ['Workplace Strategy', 'Interior Architecture', 'Custom Office Millwork', 'Acoustic Engineering']
  },
  {
    id: 'le-marais-lounge',
    name: 'Le Marais Hospitality Lounge',
    category: 'hospitality',
    categoryLabel: 'Hospitality',
    location: '3rd Arrondissement, Paris',
    style: 'Contemporary Luxury',
    year: '2024',
    area: '2,400 sq ft',
    image: HOSPITALITY_PROJECT_IMAGE,
    summary: 'A discreet members salon featuring low sculpted seating, monolithic dark stone surfaces, and bespoke concealed cove lighting.',
    description: 'Set within an 18th-century Parisian hôtel particulier, the intervention respects the classical stone foundations while introducing understated bronze casework and velvety olive seating for intimate nocturnal gatherings.',
    keyMaterials: ['Saint Laurent Black Marble', 'Olive Mohair Velvet', 'Aged Patinated Brass', 'Limestone Paving'],
    scope: ['Hospitality Concept', 'Lighting Narrative', 'Bar Architecture', 'Turnkey Furnishing']
  },
  {
    id: 'koto-pavilion',
    name: 'Koto Private Residence',
    category: 'residential',
    categoryLabel: 'Residential',
    location: 'Higashiyama, Kyoto',
    style: 'Minimalist Interior Design',
    year: '2024',
    area: '2,900 sq ft',
    image: INTRO_IMAGE,
    summary: 'A dialogue between traditional Japanese carpentry and contemporary European proportions, framed by a contemplative courtyard view.',
    description: 'Designed around inward-facing courtyards, the residence employs sliding washi panels, fluted limestone walls, and rift-sawn cypress joinery. Transitions between interior tatami spaces and exterior gravel gardens are dissolved with flush thresholds.',
    keyMaterials: ['Hinoki Cypress', 'Fluted Limestone', 'Handmade Washi Glass', 'Blackened Iron'],
    scope: ['Spatial Planning', 'Interior Architecture', 'Garden Integration', 'Custom Joinery']
  },
  {
    id: 'vanguard-headquarters',
    name: 'Vanguard Executive Suite',
    category: 'commercial',
    categoryLabel: 'Commercial',
    location: 'Paradeplatz, Zurich',
    style: 'Modern Interior Design',
    year: '2025',
    area: '7,100 sq ft',
    image: WORKPLACE_PROJECT_IMAGE,
    summary: 'A multi-level corporate suite crafted with Swiss precision, stone portals, and integrated discreet audiovisual systems.',
    description: 'Conceived for confidential international client meetings, the design organizes reception, dining, and boardrooms around quiet architectural corridors lined with matte dark oak and monolithic granite portals.',
    keyMaterials: ['Andeer Green Granite', 'Matte Dark Oak', 'Milled Aluminum', 'Wool Broadloom'],
    scope: ['Executive Suite Architecture', 'Acoustic Isolation', 'Custom Boardroom Tables', 'Turnkey Supervision']
  },
  {
    id: 'galerie-saint-germain',
    name: 'Galerie Saint-Germain',
    category: 'retail',
    categoryLabel: 'Retail',
    location: 'Saint-Germain-des-Prés, Paris',
    style: 'Contemporary Interior Design',
    year: '2024',
    area: '1,800 sq ft',
    image: HERO_IMAGE,
    summary: 'A boutique jewelry atelier engineered as a serene white gallery with monolithic stone display plinths and precision optical lighting.',
    description: 'The gallery treats precious objects as architectural focal points. Minimalist pedestals sculpted from single blocks of sandstone guide visitor circulation beneath soft, high-CRI light sources that highlight subtle material hues.',
    keyMaterials: ['French Sandstone', 'Ultra-clear Starphire Glass', 'Polished Nickel', 'Linen Wallcoverings'],
    scope: ['Storefront Architecture', 'Display Pedestal Engineering', 'Lighting Specification', 'Security Integration']
  }
];

export const PHILOSOPHY_PRINCIPLES: ProcessStep[] = [
  {
    number: '01',
    title: 'Purpose',
    tagline: 'Function precedes form',
    description: 'Every design decision should serve the way a space is used. We begin with the daily rituals of the occupants, choreographing flow, natural light, and comfort before selecting finishes.',
    deliverable: 'Spatial optimization & circulation choreography'
  },
  {
    number: '02',
    title: 'Proportion',
    tagline: 'Architectural harmony',
    description: 'Balance scale, circulation and architectural composition. We calibrate ceiling heights, wall planes, and sightlines to create an innate sense of physical equilibrium and calm.',
    deliverable: 'Volumetric calibration & sightline planning'
  },
  {
    number: '03',
    title: 'Materiality',
    tagline: 'Honest, tactile surfaces',
    description: 'Use materials, textures and finishes intentionally. We prioritize authentic elements—stone, lime plaster, untreated timber, and patinated metals—that gather beauty with age rather than deteriorate.',
    deliverable: 'Tactile palettes & durable material sourcing'
  },
  {
    number: '04',
    title: 'Detail',
    tagline: 'Precision in the unobserved',
    description: 'Small decisions create the character of a finished space. The junction where stone meets wood, the tactile weight of a door pull, the concealment of service lines define our standard.',
    deliverable: 'Millwork joinery & bespoke hardware execution'
  }
];

export const DESIGN_STYLES: DesignStyle[] = [
  {
    id: 'modern',
    name: 'Modern Interior Design',
    slug: '/design-styles/modern-interior-design/',
    description: 'Clean architectural lines, open floor plans, expansive glazing, and an emphasis on structural clarity without ornamental excess.',
    characteristics: ['Continuous sightlines', 'Recessed baseboards', 'Integrated cabinetry', 'Abundant natural daylight'],
    materials: ['Honed Travertine', 'European White Oak', 'Blackened Steel', 'Low-iron Glass'],
    colorPalette: ['#FAF8F5', '#EFECE6', '#9C9589', '#292524']
  },
  {
    id: 'contemporary',
    name: 'Contemporary Interior Design',
    slug: '/design-styles/contemporary-interior-design/',
    description: 'Evolving with the present moment, blending soft organic curves, tactile bouclé and linen, and intelligent ambient technology.',
    characteristics: ['Sculptural silhouettes', 'Layered textures', 'Curved partitions', 'Circadian lighting'],
    materials: ['Fluted Limestone', 'Smoked Walnut', 'Bouclé Weaves', 'Unlacquered Brass'],
    colorPalette: ['#F7F4EE', '#E3DDD3', '#8C8275', '#1F1E1D']
  },
  {
    id: 'minimalist',
    name: 'Minimalist Interior Design',
    slug: '/design-styles/minimalist-interior-design/',
    description: 'Rigorous spatial restraint where every element has purpose. Monolithic surfaces, hidden storage, and meditative negative space.',
    characteristics: ['Flush frameless doors', 'Concealed storage', 'Monochromatic planes', 'Acoustic tranquility'],
    materials: ['Lime Plaster', 'Poured Terrazzo', 'Bleached Ash', 'Natural Linen'],
    colorPalette: ['#FCFBF9', '#EBE7DF', '#A39E93', '#33312E']
  },
  {
    id: 'luxury',
    name: 'Luxury Interior Design',
    slug: '/design-styles/luxury-interior-design/',
    description: 'Understated elegance anchored in rare materials, artisanal craftsmanship, bespoke joinery, and tailored custom furnishings.',
    characteristics: ['Bookmatched stone', 'Custom bronze metalwork', 'Silk-wool rugs', 'Atmospheric cove light'],
    materials: ['Calacatta Marble', 'Patinated Bronze', 'French Walnut', 'Suede Panelling'],
    colorPalette: ['#F9F6F0', '#DFD7C9', '#7D705C', '#1A1816']
  },
  {
    id: 'traditional',
    name: 'Traditional Interior Design',
    slug: '/design-styles/traditional-interior-design/',
    description: 'Respect for classical proportion, historic architectural mouldings, coffered ceilings, and time-honored heritage palettes.',
    characteristics: ['Classical architraves', 'Paneled wainscoting', 'Herringbone parquet', 'Symmetrical balance'],
    materials: ['Aged Mahogany', 'Carrara Marble', 'Antiqued Brass', 'Woven Damask'],
    colorPalette: ['#F8F5EE', '#DDD4C4', '#6B5E4F', '#24201C']
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Discover',
    tagline: 'Listening & spatial audit',
    description: 'We understand the client, space, goals and requirements. We review architectural plans, survey environmental light, and document your lifestyle patterns or business workflows.',
    deliverable: 'Comprehensive project brief & spatial audit'
  },
  {
    number: '02',
    title: 'Concept',
    tagline: 'Direction & spatial narrative',
    description: 'Develop the design direction, spatial ideas and visual language. We present curated mood directions, physical material samples, and volumetric 2D layout options for client collaboration.',
    deliverable: 'Concept deck, material tray & layout studies'
  },
  {
    number: '03',
    title: 'Develop',
    tagline: 'Refinement & technical drawings',
    description: 'Refine layouts, materials, finishes, furniture and details. We draft full millwork blueprints, lighting schematics, electrical plans, and detailed FF&E schedules ready for execution.',
    deliverable: 'Detailed architectural drawing set & specifications'
  },
  {
    number: '04',
    title: 'Coordinate',
    tagline: 'Vendor & site synchronization',
    description: 'Coordinate the required teams, vendors and execution requirements. We liaise with general contractors, structural engineers, and artisan workshops to verify precision.',
    deliverable: 'Tender packages, site visits & shop drawing review'
  },
  {
    number: '05',
    title: 'Deliver',
    tagline: 'Turnkey installation & handover',
    description: 'Bring the design together into a finished environment. We supervise final on-site installation, artwork placement, bespoke upholstery delivery, and curate the finished space.',
    deliverable: 'White-glove styling, punch list closure & handover'
  }
];

export const WHY_US_ITEMS = [
  {
    number: '01',
    title: 'Design-Led Thinking',
    description: 'Every project begins with understanding the space and its purpose. We do not apply pre-packaged formulas or superficial trends; each design responds organically to the architectural shell and human intent.'
  },
  {
    number: '02',
    title: 'Bespoke Approach',
    description: 'Design decisions respond to the individual project rather than a fixed template. From custom cast bronze handles to bespoke conference desks, we commission unique pieces designed solely for your space.'
  },
  {
    number: '03',
    title: 'Material & Detail',
    description: 'Materials, finishes, lighting and proportions are considered as part of one system. We test stone, timber, textiles, and light temperatures together to ensure tactile harmony from every angle.'
  },
  {
    number: '04',
    title: 'End-to-End Thinking',
    description: 'Design decisions remain connected to practical project requirements. Our technical documentation and site presence protect the architectural vision all the way to completion.'
  }
];

export const INSIGHTS_DATA: InsightArticle[] = [
  {
    id: 'residential-guide',
    slug: '/insights/residential-interior-design-guide/',
    title: 'Residential Interior Design Guide: Balancing Architecture & Everyday Life',
    category: 'Architectural Guide',
    readTime: '6 min read',
    date: 'February 2026',
    author: 'Elena Vance, Principal Architect',
    excerpt: 'How to harmonize structural volumes, natural light patterns, and storage solutions to create a home that feels both refined and effortless.',
    content: [
      'A truly exceptional home is not an art gallery in which one feels hesitant to sit. It is an intuitive extension of daily life, calibrated so that light, circulation, and quiet acoustic zones encourage ease.',
      'When planning a residential renovation, prioritize architectural volume over surface decoration. Before choosing furniture fabrics, examine how daylight enters the room at 8:00 AM versus 4:00 PM, and create floor plans that protect sightlines toward outdoor vistas.',
      'Concealed storage is the cornerstone of visual peace. Custom millwork integrated flush into wall planes allows belongings to be tucked away effortlessly, letting beautiful materials—such as honed limestone and natural oak—breathe.'
    ],
    keyTakeaways: [
      'Map daily traffic routes before fixing partition walls',
      'Select a tight palette of 3-4 natural materials across the entire residence',
      'Use recessed cove lighting to wash textured walls softly rather than harsh downlights'
    ]
  },
  {
    id: 'living-room-ideas',
    slug: '/insights/modern-living-room-design-ideas/',
    title: 'Modern Living Room Design Ideas: Crafting Quiet Proportions',
    category: 'Design Principles',
    readTime: '4 min read',
    date: 'January 2026',
    author: 'Marc Dubois, Studio Director',
    excerpt: 'Examining the dialogue between low-slung furniture, monolithic coffee tables, and architectural wall panelling in contemporary living salons.',
    content: [
      'The modern living room is increasingly moving away from the conventional television-centric setup. Instead, we see a return to conversational seating clusters organized around focal fire hearths or expansive floor-to-ceiling windows.',
      'By selecting furniture with lower profiles, you preserve vertical sightlines and make ceiling heights feel significantly more generous.',
      'Pairing contrasting textures—rough-hewn travertine alongside smooth combed plaster and soft Belgian linen upholstery—provides warmth without requiring decorative clutter.'
    ],
    keyTakeaways: [
      'Keep seating heights between 38cm and 44cm for relaxed posture',
      'Incorporate monolithic stone or timber tables to anchor the center of the room',
      'Employ textured acoustic treatments to eliminate echoing in open spaces'
    ]
  },
  {
    id: 'office-planning',
    slug: '/insights/how-to-plan-an-office-interior/',
    title: 'How to Plan an Office Interior: Balancing Focus and Collaboration',
    category: 'Workplace Design',
    readTime: '5 min read',
    date: 'December 2025',
    author: 'Arthur Chen, Workplace Strategist',
    excerpt: 'Moving past open-plan noise and cubicle isolation. Practical spatial strategies for the contemporary high-performance studio.',
    content: [
      'The modern workplace is no longer measured by desk count; it is measured by acoustic comfort, ergonomic support, and the variety of spatial typologies available to a team throughout the day.',
      'We organize workspaces into distinct acoustic zones: the Library (absolute silence for deep technical or strategic thought), the Atelier (medium-buzz collaboration with pin-up walls), and the Commons (reception, casual dining, and informal social encounters).',
      'Natural materials play a demonstrable physiological role in reducing stress. Introducing tactile timber desks, indirect circadian lighting, and air-purifying plant installations elevates team focus substantially.'
    ],
    keyTakeaways: [
      'Segment the floor plate by acoustic volume rather than department titles',
      'Invest in acoustic felt backing and slotted timber walls to trap ambient speech',
      'Provide private micro-booths for hybrid video calls to prevent room disruptions'
    ]
  },
  {
    id: 'material-selection',
    slug: '/insights/choosing-materials-for-interior-spaces/',
    title: 'Choosing Materials for Interior Spaces: Stone, Timber & Patina',
    category: 'Materiality & Craft',
    readTime: '7 min read',
    date: 'November 2025',
    author: 'Sofia Lindqvist, Materials Curator',
    excerpt: 'Why natural stones, unlacquered metals, and untreated hardwoods yield interiors that grow more distinguished with each passing year.',
    content: [
      'Synthetic surfaces look their best on the day they are installed and steadily degrade thereafter. Authentic natural materials—limestone, unfilled travertine, oak, and solid brass—behave in the exact opposite manner.',
      'They invite touch, adapt to sunlight, and develop a rich, honest patina that documents the passage of time and the life lived within the space.',
      'When curating a material palette, we test samples under morning daylight, warm evening 2700K illumination, and direct touch to understand how surface friction and temperature feel beneath the hand.'
    ],
    keyTakeaways: [
      'Prefer honed or leathered stone finishes over high-gloss polished surfaces',
      'Specify unlacquered metals that react naturally with air and touch',
      'Use solid hardwoods or thick architectural veneers that can be sanded and oiled over decades'
    ]
  }
];

export const FAQS_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'What does an interior designer do?',
    answer: 'An interior designer plans, coordinates, and crafts functional, aesthetically cohesive interior environments. At Maison & Bureau, this extends far beyond selecting finishes or furniture: we conduct spatial audits, reconfigure floor layouts, engineer custom millwork, coordinate lighting schematics, ensure acoustic and regulatory compliance, and oversee procurement and on-site contractor execution to bring an architectural vision to reality.'
  },
  {
    id: 'faq-2',
    question: 'What types of spaces does Maison & Bureau design?',
    answer: 'Maison & Bureau designs high-end residential homes (apartments, penthouses, townhouses, and private estates) as well as commercial environments, executive offices, boutique retail flagships, and hospitality lounges. While our projects span varied architectural typologies, every space shares our signature discipline: thoughtful planning, refined proportion, and honest materiality.'
  },
  {
    id: 'faq-3',
    question: 'How does the interior design process work?',
    answer: 'Our process is structured in five transparent phases: 01 Discover (briefing and spatial audit), 02 Concept (creative direction, mood, and spatial narrative), 03 Develop (detailed architectural blueprints, joinery, and FF&E schedules), 04 Coordinate (vendor alignment, tender reviews, and contractor oversight), and 05 Deliver (white-glove installation, styling, and final client handover).'
  },
  {
    id: 'faq-4',
    question: 'Does Maison & Bureau provide turnkey interior design?',
    answer: 'Yes. Our turnkey service is designed for clients who require complete end-to-end execution with a single point of accountability. We manage the entire lifecycle from early concept sketches through engineering consultations, council approvals, general contractor supervision, trade coordination, and final move-in styling.'
  },
  {
    id: 'faq-5',
    question: 'How can I start an interior design project?',
    answer: 'Starting a project begins with an introductory consultation. You can submit your project details via our online consultation form or contact our studio directly by phone or email. We will review your space, location, timeline, and aspirations, and arrange an exploratory meeting to define scope and next steps.'
  }
];
