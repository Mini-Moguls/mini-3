/* Mini Moguls Market Day (Gather Edition) — site script
 * Vanilla JavaScript, no dependencies.
 */
document.documentElement.classList.add('js');

(function () {
  'use strict';

  /* ------------------------------------------------------------------
   * 1. Event settings and showcase schedule
   * ------------------------------------------------------------------ */
  const CHURCH = {
    name: 'Mini Moguls Market Day',
    timeZone: 'Africa/Harare',
    timeZoneLabel: 'CAT (Harare)',
    place: 'Mini Moguls Market Day · Harare, Zimbabwe (Venue TBA)',
    liveUrl: 'guides.html#live',
    uidDomain: 'minimoguls.co.zw'
  };

  const SERVICES = [
    { day: 6, start: '10:00', minutes: 180, name: 'Morning Showcase & Market Stalls' },
    { day: 6, start: '13:00', minutes: 180, name: 'Afternoon Showcase & Young Mogul Pitches' }
  ];

  const KEEP_DEMO_CURRENT = false;
  const DEMO_ANCHOR = '2026-10-30';

  /* ------------------------------------------------------------------
   * 2. Age-Group Tracks & Community Roles (PEOPLE), Learning Series (SERIES) & Creator Guides (SERMONS)
   *    Note: These represent participant tracks and community roles, not fabricated individual staff biographies.
   * ------------------------------------------------------------------ */
  const PEOPLE = {
    dana: {
      name: 'Junior Moguls Track', role: 'Ages 5–8* · Guided Discovery', email: 'info@minimoguls.co.zw',
      bio: 'Simple handmade products, crafts, treats and family-supported stalls introducing young children to counting change and greeting customers. (*Age 5 vs 6 start pending organiser confirmation.)',
      avatar: { skin: '#8D5524', hair: '#111111', style: 'coily', bg: '#F4C84A', shirt: '#111111', glasses: false }
    },
    luis: {
      name: 'Young Moguls Track', role: 'Ages 9–13 · Independent Creators', email: 'info@minimoguls.co.zw',
      bio: 'Growing independence in product creation, branding, cost calculation, table display and confident customer service across all six Showcase Zones.',
      avatar: { skin: '#6B3E26', hair: '#111111', style: 'short', bg: '#FEF0C7', shirt: '#F4C84A', beard: false }
    },
    hannah: {
      name: 'Senior Moguls Track', role: 'Ages 14–18 · Youth Ventures', email: 'info@minimoguls.co.zw',
      bio: 'More developed business concepts, original fashion, tech projects, digital tools and sustainable youth enterprises ready for real market feedback.',
      avatar: { skin: '#8D5524', hair: '#111111', style: 'bun', bg: '#F4C84A', shirt: '#FFFFFF' }
    },
    marcus: {
      name: 'Solo Creator Stalls', role: 'Individual Young Entrepreneurs', email: 'info@minimoguls.co.zw',
      bio: 'One young creator taking ownership of an original product idea from first sketch and pricing worksheet to Market Day customer sales.',
      avatar: { skin: '#6B3E26', hair: '#111111', style: 'waves', bg: '#FEF0C7', shirt: '#111111', beard: false }
    },
    june: {
      name: 'Sibling & Team Stalls', role: '2–4 Co-Founders Working Together', email: 'info@minimoguls.co.zw',
      bio: 'Siblings, friends or classmates collaborating to divide roles across production, stall display, customer pitches and cash-box tracking.',
      avatar: { skin: '#8D5524', hair: '#111111', style: 'curly', bg: '#F4C84A', shirt: '#111111', glasses: true }
    },
    theo: {
      name: 'Parents & Guardians', role: 'Family Cheerleaders & Support', email: 'info@minimoguls.co.zw',
      bio: 'Parents and legal guardians submit registrations, help young moguls prepare safely at home, and let children lead conversations at the stall.',
      avatar: { skin: '#6B3E26', hair: '#111111', style: 'short', bg: '#FEF0C7', shirt: '#111111' }
    },
    priya: {
      name: 'Schools & Educators', role: 'Classroom & Club Delegations', email: 'info@minimoguls.co.zw',
      bio: 'Harare primary and secondary schools bringing enterprise clubs, design classes and student teams for practical learning by doing.',
      avatar: { skin: '#8D5524', hair: '#111111', style: 'long', bg: '#F4C84A', shirt: '#FFFFFF' }
    },
    ruth: {
      name: 'Sponsors & Partners', role: 'Harare Business & Youth Supporters', email: 'info@minimoguls.co.zw',
      bio: 'Local businesses, brands and community organisations partnering to support youth entrepreneurship, financial literacy and creative confidence.',
      avatar: { skin: '#6B3E26', hair: '#111111', style: 'coily', bg: '#FEF0C7', shirt: '#F4C84A', glasses: true }
    }
  };
  const STAFF = ['dana', 'luis', 'hannah', 'marcus', 'june', 'theo', 'priya', 'ruth'];

  const SERIES = {
    'open-table': { title: 'Create Your Product', subtitle: 'Turning ideas into real creations', art: 'table', blurb: 'Step-by-step guides to help young creators brainstorm, prototype and test products they can make with their own hands.' },
    'ordinary-psalms': { title: 'Price & Money Basics', subtitle: 'Costs, fair prices & counting change', art: 'sun', blurb: 'Practical financial literacy for Junior (5–8*), Young (9–13) and Senior (14–18) Moguls preparing for Market Day.' },
    'ruth': { title: 'Stall Display & Selling', subtitle: 'Signs, table layout & customer hellos', art: 'wheat', blurb: 'How to arrange an eye-catching stall, write clear price tags and greet Harare shoppers with confidence.' },
    'unhurried': { title: 'Parent & School Prep', subtitle: 'Supporting young moguls without taking over', art: 'wave', blurb: 'Practical checklists for parents, guardians and teachers preparing children for Saturday, 12 December 2026.' }
  };

  const BOOKS = {
    luke: 'Product Creation',
    psalms: 'Money & Pricing',
    ruth: 'Customer & Stall Skills',
    matthew: 'Parent & School Support',
    mark: 'Teamwork & Planning'
  };

  const SERMONS = [
    {
      id: 'room-at-the-table', title: 'Choosing Your Market Day Product: Ideas Kids Can Make & Sell', series: 'open-table', part: 1, speaker: 'luis',
      date: '2026-10-25', book: 'luke', passage: 'Guide 01 · Product Creation', duration: 480, audio: '',
      summary: 'How young creators aged 5–18 (6–18 on poster; pending organiser confirmation) can pick a practical, exciting product to make and showcase on Saturday, 12 December 2026.',
      verse: { text: 'Start with something you love making, keep it simple enough to produce yourself, and make sure every customer can see what makes it special.', ref: 'Mini Moguls Creator Principle · CREATE. SELL. LEARN.' },
      notes: [
        ['Pick a product you can truly make yourself', 'Whether it is beaded bracelets, illustrated bookmarks, cupcakes, potted succulents or a handmade board game, your stall shines brightest when you understand every step of how your product is made.'],
        ['Match the project to your age track', 'Junior Moguls (5–8*) do best with 1–2 simple items and family prep help. Young Moguls (9–13) can build a small product range, while Senior Moguls (14–18) can test full brand concepts and custom orders.'],
        ['Make a sample batch first', 'Create 3 to 5 test pieces at home to check how long each one takes and how much materials cost before making your full Market Day stock.']
      ],
      questions: [
        'What are three things you already enjoy making, drawing, baking, building or organizing at home?',
        'Can you make at least 15 to 30 of this item before Saturday, 12 December 2026 without feeling rushed?',
        'What makes your creation helpful, delicious, fun or memorable for a visitor walking past your stall?',
        'Which of the six Showcase Zones fits your product best?'
      ]
    },
    {
      id: 'come-down-quickly', title: 'Pricing Your Creations: Cost, Value & Profit Made Simple', series: 'ordinary-psalms', part: 1, speaker: 'hannah',
      date: '2026-10-18', book: 'psalms', passage: 'Guide 02 · Money & Pricing', duration: 420, audio: '',
      summary: 'A clear, age-friendly guide to adding up material costs, choosing fair prices in US$ and understanding the difference between total sales and real profit.',
      verse: { text: 'Profit is what remains after you pay back the cost of your ingredients, materials and packaging.', ref: 'Mini Moguls Financial Literacy Guide · CREATE. SELL. LEARN.' },
      notes: [
        ['List every material you use', 'Write down the cost of flour, beads, paint, jars, labels or paper. Divide the total cost by the number of items you make to find the cost of one item.'],
        ['Set clear, easy-to-count prices', 'Simple prices (like $1, $2, $3 or $5) make it much faster for customers to pay and much easier for you to count change accurately at your table.'],
        ['Try a bundle offer', 'Offering 1 item for $2 or 3 items for $5 encourages shoppers to buy more while giving families great value.']
      ],
      questions: [
        'How much did the materials and packaging for your whole batch cost in total?',
        'How many finished items can you make from those materials, and what is the cost per item?',
        'If a customer pays with a $5 or $10 note, how will you count back their change confidently?'
      ]
    },
    {
      id: 'a-great-way-off', title: 'Designing a Stall That Draws a Crowd', series: 'ruth', part: 1, speaker: 'marcus',
      date: '2026-10-11', book: 'ruth', passage: 'Guide 03 · Stall Display & Selling', duration: 390, audio: '',
      summary: 'How to arrange your table, make bold readable price signs and create an inviting showcase display for Harare families and visitors.',
      verse: { text: 'A great stall tells visitors who you are, what you made and what it costs within three seconds of walking by.', ref: 'Mini Moguls Showcase Handbook · CREATE. SELL. LEARN.' },
      notes: [
        ['Use height on your table', 'Flat tables are hard to see from a distance. Use sturdy boxes, crates or stands under your tablecloth to lift your best products up to eye level.'],
        ['Make price signs bold and clear', 'Many shoppers are shy to ask how much something costs. Put a neat, easy-to-read price card next to every product group.'],
        ['Note on tables and equipment', 'Whether stalls, tables and chairs are provided at the Harare venue or brought by participants is currently to be confirmed by the organisers—plan a portable tabletop layout that works anywhere.']
      ],
      questions: [
        'What is the name of your stall, and can someone read your banner from five steps away?',
        'How can you group your items by colour, size or price so your table looks neat and welcoming?',
        'What can you show on your table to prove that you made the products yourself?'
      ]
    },
    {
      id: 'known-in-the-breaking', title: 'The 20-Second Young Mogul Customer Pitch', series: 'ruth', part: 2, speaker: 'dana',
      date: '2026-10-04', book: 'ruth', passage: 'Guide 04 · Customer & Stall Skills', duration: 360, audio: '',
      summary: 'Practising a warm smile, a clear hello and a short story about how you made your product so customers love talking with you.',
      verse: { text: 'People don’t just buy a product at Mini Moguls Market Day—they celebrate the young creator who made it.', ref: 'Mini Moguls Communication Guide · CREATE. SELL. LEARN.' },
      notes: [
        ['Stand up and smile when someone approaches', 'Looking up, smiling and saying “Good morning! Welcome to my stall” immediately makes visitors feel comfortable stopping at your table.'],
        ['Share one interesting fact about your product', 'Tell the shopper what inspired you, what flavour or material you used, or which item is your personal favourite.'],
        ['Say thank you every time', 'Whether someone buys an item or just looks and asks a question, thank them warmly—they often come back later!']
      ],
      questions: [
        'How would you explain your product to a new visitor in just two sentences?',
        'What will you say if a customer asks, “How did you make this?”',
        'How can you practise your greeting with your family at home this week?'
      ]
    },
    {
      id: 'dinner-at-levis', title: 'Team & Sibling Stalls: Dividing Roles Without Arguing', series: 'open-table', part: 2, speaker: 'june',
      date: '2026-09-27', book: 'mark', passage: 'Guide 05 · Teamwork & Planning', duration: 410, audio: '',
      summary: 'Running a stall with brothers, sisters or school friends? Here is how to share production, customer greeting, display care and money tracking fairly.',
      verse: { text: 'Great co-founders agree on their roles, costs and goals before the market doors open at 10:00 AM.', ref: 'Mini Moguls Team Guide · CREATE. SELL. LEARN.' },
      notes: [
        ['Rotate roles every hour', 'From 10:00 AM to 4:00 PM is a six-hour event day. Take turns greeting shoppers, managing the cash notebook and taking short rest breaks.'],
        ['Write down every sale together', 'Keep a simple tally sheet next to your cash box so every team member can see exactly what was sold.'],
        ['Agree beforehand how you will share earnings', 'Decide with your parents or teacher before Market Day how material costs will be repaid and how the profit will be shared or saved.']
      ],
      questions: [
        'Who on your team loves talking to new people, and who loves organizing numbers or displays?',
        'How will your team rotate breaks between 10:00 AM and 4:00 PM on Saturday, 12 December 2026?',
        'How will you celebrate together at the end of Market Day?'
      ]
    },
    {
      id: 'beside-still-waters', title: 'A Parent & Guardian Guide: Coaching Without Taking Over', series: 'unhurried', part: 1, speaker: 'theo',
      date: '2026-09-20', book: 'matthew', passage: 'Guide 06 · Parent & School Support', duration: 450, audio: '',
      summary: 'How parents and guardians can keep young entrepreneurs safe, prepared and encouraged while letting the child lead every customer conversation.',
      verse: { text: 'The magic happens when the adult steps half a pace back and lets the child answer the customer’s question.', ref: 'Mini Moguls Family Guide · CREATE. SELL. LEARN.' },
      notes: [
        ['Parent/guardian registration & safety first', 'A parent or legal guardian must submit registration on behalf of any child participant and remain involved in supervision on event day.'],
        ['Help with prep, step back at the table', 'Assist with oven safety, cutting, transport and setup—then let your child greet shoppers, explain their prices and handle small change with your quiet support nearby.'],
        ['Focus on learning, not just revenue', 'Praise your child’s courage, communication, effort and problem-solving regardless of how many items sell.']
      ],
      questions: [
        'Which parts of product preparation require adult safety supervision at home?',
        'How can you prompt your child gently if they get stuck counting change during a busy moment?',
        'What three learning goals does your family want to celebrate on Saturday, 12 December 2026?'
      ]
    }
  ];

  const PROGRESS_KEY = 'minimoguls-guide-progress';

  /* ------------------------------------------------------------------
   * 3. Events & Pre-Event Preparation Milestones
   * ------------------------------------------------------------------ */
  const EVENT_CATS = {
    worship: { label: 'Main Market Day', dot: 'bg-plum', chip: 'bg-lilac text-plum' },
    community: { label: 'Family Prep', dot: 'bg-apricot-dark', chip: 'bg-apricot-light text-apricot-dark' },
    kids: { label: 'Age Tracks (5–18*)', dot: 'bg-river-dark', chip: 'bg-river-light text-river-dark' },
    serve: { label: 'Sponsors & Schools', dot: 'bg-sage-dark', chip: 'bg-sage-light text-sage-dark' },
    classes: { label: 'Creator Checklists', dot: 'bg-rose', chip: 'bg-[#fbe4e8] text-rose' }
  };

  const EVENTS = [
    { id: 'market-day-main', title: 'Mini Moguls Market Day — Main Harare Showcase', cat: 'worship', date: '2026-12-12', start: '10:00', end: '16:00', place: 'Harare, Zimbabwe (Specific Venue TBA)', summary: 'The flagship Mini Moguls Market Day! Young entrepreneurs across Junior (5–8*), Young (9–13) and Senior (14–18) tracks showcase and sell original creations from 10:00 AM to 4:00 PM. Public entrance fee: US$5 per person (subject to final confirmation). Detailed hour-by-hour activity timetable TBA.' },
    { id: 'morning-showcase', title: 'Market Day Doors Open & Morning Trading Session', cat: 'worship', date: '2026-12-12', start: '10:00', end: '13:00', place: 'Harare Venue (TBA)', summary: 'Stalls open to families, shoppers and supporters across all six Showcase Zones: Arts & Crafts, Baking & Treats, Tech & Innovation, Fashion, Games & Fun, and Green Ideas.' },
    { id: 'afternoon-showcase', title: 'Afternoon Trading & Young Mogul Learning Celebration', cat: 'kids', date: '2026-12-12', start: '13:00', end: '16:00', place: 'Harare Venue (TBA)', summary: 'Afternoon market trading, community visits and celebrating young creators. Note: Detailed stage/activity schedule is to be announced by the organisers.' },
    { id: 'prep-idea-week', title: 'At-Home Milestone 1: Product Idea & Prototype Week', cat: 'classes', date: '2026-11-07', start: '10:00', end: '12:00', place: 'At Home / School Clubs (Self-Paced)', summary: 'Recommended preparation milestone for registered families: help your young mogul choose their product concept, test a small sample batch and list needed materials.' },
    { id: 'prep-pricing-week', title: 'At-Home Milestone 2: Costing, Pricing & Cash-Box Practice', cat: 'classes', date: '2026-11-21', start: '10:00', end: '12:00', place: 'At Home / School Clubs (Self-Paced)', summary: 'Recommended preparation milestone: calculate material costs together, set simple US$ prices and practise counting change as a family.' },
    { id: 'prep-display-week', title: 'At-Home Milestone 3: Stall Signs, Packaging & Table Mockup', cat: 'community', date: '2026-12-05', start: '10:00', end: '12:00', place: 'At Home (One Week Before Market Day)', summary: 'Set up a practice table at home! Test your stall banner, price tags, packaging and 20-second customer greeting one week before Saturday, 12 December 2026.' },
    { id: 'school-partner-window', title: 'School Delegations & Sponsor Partnership Discussions', cat: 'serve', date: '2026-11-14', start: '09:00', end: '16:00', place: 'Harare Organising Team (+263 771 222 748)', summary: 'Open window for Harare schools, educators and corporate sponsors to discuss group stalls and custom partnership opportunities with the organisers.' },
    { id: 'weekly-prep-check', title: 'Saturday Family Stall Prep Hour (Self-Guided)', cat: 'community', date: '2026-10-31', weekly: '2026-12-05', start: '10:00', end: '11:00', place: 'At Home with Parent/Guardian', summary: 'A recommended weekly one-hour family check-in every Saturday morning leading up to 12 December 2026 to craft stock, make price signs and build excitement.' }
  ];

  /* ------------------------------------------------------------------
   * 4. Showcase Zones & Age Tracks Finder (GROUPS), Sponsorship Builder (GIVING) and Registration Planner (VISIT)
   * ------------------------------------------------------------------ */
  const DAYS = { sat: 'Sat 12 Dec' };
  const AREAS = {
    crafts: 'Arts, Crafts & Design',
    baking: 'Baking, Food & Treats',
    tech: 'Tech & Digital Innovation',
    fashion: 'Fashion & Accessories',
    games: 'Games & Interactive Fun',
    green: 'Green & Sustainable Ideas'
  };
  const STAGES = {
    junior: 'Junior Moguls (5–8*)',
    young: 'Young Moguls (9–13)',
    senior: 'Senior Moguls (14–18)',
    all: 'All Age Tracks (5–18*)'
  };

  const GROUPS = [
    { id: 'junior-crafts-stall', name: 'Junior Makers: Beaded Crafts, Stickers & Greeting Cards', day: 'sat', time: '10:00', area: 'crafts', stage: 'junior', host: 'Parent/Guardian Assisted Stall', where: 'Arts, Crafts & Design Zone · Harare (Venue TBA)', spots: 12, childcare: true, blurb: 'Designed for Junior Moguls (ages 5–8*; 6–18 on poster pending confirmation). Simple handmade cards, bracelets, painted stones and bookmarks with family support.' },
    { id: 'young-crafts-studio', name: 'Young Creators: Original Art, Clay & Custom Stationery', day: 'sat', time: '10:00', area: 'crafts', stage: 'young', host: 'Solo or Sibling Team (Ages 9–13)', where: 'Arts, Crafts & Design Zone · Harare (Venue TBA)', spots: 10, childcare: true, blurb: 'For Young Moguls aged 9–13 building their own art prints, notebooks, keychains, ornaments and gift sets while managing their own pricing and display.' },
    { id: 'junior-young-bakers', name: 'Little Bakers & Sweet Treat Jars Showcase', day: 'sat', time: '10:00', area: 'baking', stage: 'junior', host: 'Family-Supported Bakery Stall', where: 'Baking, Food & Treats Zone · Harare (Venue TBA)', spots: 8, childcare: true, blurb: 'Cupcakes, cookies, popcorn tubs, fruit skewers and homemade lemonade prepared safely at home with clearly labelled ingredients and neat packaging.' },
    { id: 'senior-food-brands', name: 'Youth Artisanal Snacks, Sauces & Packaged Beverages', day: 'sat', time: '10:00', area: 'baking', stage: 'senior', host: 'Young & Senior Moguls (9–18)', where: 'Baking, Food & Treats Zone · Harare (Venue TBA)', spots: 8, childcare: false, blurb: 'Branded snack packs, biltong/nut mixes, bottled cordials, baked loaves and specialty treats with cost-per-unit pricing and custom labels.' },
    { id: 'young-tech-builders', name: 'Code, Robotics Demos & 3D-Printed Creations', day: 'sat', time: '10:00', area: 'tech', stage: 'young', host: 'Solo or School Club Team (Ages 9–13)', where: 'Tech & Digital Innovation Zone · Harare (Venue TBA)', spots: 6, childcare: false, blurb: 'Interactive scratch games, simple robotics demonstrations, STEM kits and digital design services created by young tech enthusiasts.' },
    { id: 'senior-digital-ventures', name: 'Senior Tech, Web Design & Youth Innovation Lab', day: 'sat', time: '10:00', area: 'tech', stage: 'senior', host: 'Senior Moguls (Ages 14–18)', where: 'Tech & Digital Innovation Zone · Harare (Venue TBA)', spots: 6, childcare: false, blurb: 'Teen-led digital tools, custom graphic templates, electronics projects, photography/design stalls and practical youth tech prototypes.' },
    { id: 'fashion-totes-jewellery', name: 'Custom Tote Bags, Beaded Jewellery & Hair Accessories', day: 'sat', time: '10:00', area: 'fashion', stage: 'young', host: 'Solo or Friend Team (Ages 9–13)', where: 'Fashion & Accessories Zone · Harare (Venue TBA)', spots: 10, childcare: true, blurb: 'Hand-printed tote bags, scrunchies, beaded necklaces, bracelets and wearable art designed and priced by young makers.' },
    { id: 'senior-streetwear-thrift', name: 'Teen Apparel, Upcycled Fashion & Custom Merch', day: 'sat', time: '10:00', area: 'fashion', stage: 'senior', host: 'Senior Moguls (Ages 14–18)', where: 'Fashion & Accessories Zone · Harare (Venue TBA)', spots: 8, childcare: false, blurb: 'Original streetwear graphics, upcycled denim, custom caps, crochet wearables and youth fashion brands testing real customer demand.' },
    { id: 'games-carnival-puzzles', name: 'Handmade Board Games, Trivia & Skill Challenges', day: 'sat', time: '10:00', area: 'games', stage: 'all', host: 'Solo, Sibling or School Team (Ages 5–18*)', where: 'Games & Interactive Fun Zone · Harare (Venue TBA)', spots: 8, childcare: true, blurb: 'Card games, tabletop puzzles, ring-toss challenges, activity books and DIY craft kits that visitors can play on the spot or take home.' },
    { id: 'green-eco-planters', name: 'Succulent Planters, Recycled Crafts & Eco Products', day: 'sat', time: '10:00', area: 'green', stage: 'all', host: 'Solo, Family or School Eco-Club', where: 'Green & Sustainable Ideas Zone · Harare (Venue TBA)', spots: 10, childcare: true, blurb: 'Potted herbs and succulents, upcycled tin/glass organisers, seed paper, reusable wraps and eco-friendly creations celebrating sustainability.' }
  ];

  // Partnership & Sponsorship Interest Calculator (No online payment collected; for discussion with organisers)
  const GIVING = {
    amounts: [50, 100, 250, 500, 1000],
    defaultAmount: 250,
    min: 10, max: 50000,
    fee: { percent: 0, fixed: 0 },
    funds: {
      general: 'Headline / Event-Wide Partnership (For Discussion)',
      pantry: 'Showcase Zone Sponsorship (Arts, Baking, Tech, Fashion, Games or Green)',
      partners: 'Young Mogul Starter Kits & Certificates Support',
      'river-room': 'School Delegation & Community Access Support'
    }
  };

  // Market Day Visit & Stall Registration Planner
  const VISIT = {
    sundays: 1,
    maxAdults: 10,
    maxKids: 6,
    rooms: [
      { upTo: 8, name: 'Junior Moguls (Ages 5–8*)', room: 'Guided Discovery Track (*5 vs 6 start TBA)' },
      { upTo: 13, name: 'Young Moguls (Ages 9–13)', room: 'Independent Creator Track' },
      { upTo: 18, name: 'Senior Moguls (Ages 14–18)', room: 'Youth Venture Track' }
    ]
  };

  /* ------------------------------------------------------------------
   * 5. Helpers and dates
   * ------------------------------------------------------------------ */
  const $ = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => Array.prototype.slice.call((root || document).querySelectorAll(sel));
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const money = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
  }
  var safeStorage = (function () {
    try { var s = window.localStorage; s.getItem('_'); return s; } catch (e) { /* blocked */ }
    var memory = Object.create(null);
    return {
      getItem: function (key) { return key in memory ? memory[key] : null; },
      setItem: function (key, value) { memory[key] = String(value); },
      removeItem: function (key) { delete memory[key]; }
    };
  })();

  function read(key) {
    try { return JSON.parse(safeStorage.getItem(key)); } catch (e) { return null; }
  }
  function write(key, value) {
    try {
      if (value === null) safeStorage.removeItem(key);
      else safeStorage.setItem(key, JSON.stringify(value));
    } catch (e) { /* storage full or blocked */ }
  }
  function urlParams() {
    const out = new URLSearchParams();
    new URLSearchParams(location.search).forEach((v, k) => out.append(k.toLowerCase(), v));
    return out;
  }
  function urlValues(params, name, allowed) {
    const out = [];
    params.getAll(name).join(',').split(',').forEach((v) => {
      const k = v.trim().toLowerCase();
      if (k && Object.prototype.hasOwnProperty.call(allowed, k) && out.indexOf(k) === -1) out.push(k);
    });
    return out;
  }
  function setUrl(params) {
    const q = params.toString();
    history.replaceState(null, '', location.pathname + (q ? '?' + q : '') + location.hash);
  }
  function plural(n, one, many) { return n + ' ' + (n === 1 ? one : many); }
  function clamp(n, min, max) { return Math.min(max, Math.max(min, n)); }

  function dayNum(ymd) {
    const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(ymd || '');
    return m ? Math.round(Date.UTC(+m[1], +m[2] - 1, +m[3]) / 864e5) : NaN;
  }
  function ymd(day) { return new Date(day * 864e5).toISOString().slice(0, 10); }
  function weekday(day) { return ((day + 4) % 7 + 7) % 7; } // 0 = Sunday ... 6 = Saturday
  function fmtDay(day, opts) { return new Intl.DateTimeFormat('en-US', Object.assign({ timeZone: 'UTC' }, opts)).format(new Date(day * 864e5)); }
  const longDate = (day) => fmtDay(day, { weekday: 'long', month: 'long', day: 'numeric' });
  const shortDate = (day) => fmtDay(day, { month: 'short', day: 'numeric', year: 'numeric' });
  function mins(hhmm) { const p = String(hhmm).split(':'); return (+p[0]) * 60 + (+p[1] || 0); }
  function fmtTime(hhmm) {
    const m = mins(hhmm);
    const h = Math.floor(m / 60) % 24;
    return ((h % 12) || 12) + ':' + String(m % 60).padStart(2, '0') + (h < 12 ? ' am' : ' pm');
  }

  let tzFormat;
  try {
    tzFormat = new Intl.DateTimeFormat('en-US', { timeZone: CHURCH.timeZone, year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit', hourCycle: 'h23' });
  } catch (e) {
    tzFormat = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit', hourCycle: 'h23' });
  }
  function tzParts(ms) {
    const p = {};
    tzFormat.formatToParts(new Date(ms)).forEach((x) => { p[x.type] = x.value; });
    return { day: dayNum(p.year + '-' + p.month + '-' + p.day), secs: (+p.hour % 24) * 3600 + (+p.minute) * 60 + (+p.second) };
  }
  function churchNow() { return tzParts(Date.now()); }
  function zonedToDate(day, minutes) {
    const guess = day * 864e5 + minutes * 6e4;
    const offset = (ms) => { const p = tzParts(ms); return (p.day * 864e5 + p.secs * 1000) - ms; };
    let utc = guess - offset(guess);
    const second = guess - offset(utc);
    if (second !== utc) utc = second;
    return new Date(utc);
  }

  const EVENT_DAY = dayNum('2026-12-12');
  const TODAY = churchNow().day;
  const SHIFT = 0;
  SERMONS.forEach((s) => { s.day = dayNum(s.date); });
  SERMONS.sort((a, b) => b.day - a.day);
  EVENTS.forEach((e) => { e.day = dayNum(e.date); if (e.weekly) e.until = dayNum(e.weekly); });

  const OCCURRENCES = (function () {
    const out = [];
    EVENTS.forEach((e) => {
      const last = e.weekly ? e.until : e.day;
      for (let d = e.day; d <= last; d += 7) out.push({ ev: e, day: d, key: e.id + '-' + ymd(d) });
    });
    return out.sort((a, b) => a.day - b.day || mins(a.ev.start) - mins(b.ev.start));
  })();

  function findSermon(id) { return SERMONS.find((s) => s.id === String(id || '').trim().toLowerCase()) || null; }
  function clock(sec) {
    sec = Math.max(0, Math.round(sec));
    const h = Math.floor(sec / 3600), m = Math.floor(sec / 60) % 60, s = sec % 60;
    return (h ? h + ':' + String(m).padStart(2, '0') : m) + ':' + String(s).padStart(2, '0');
  }
  function spokenTime(sec) {
    sec = Math.max(0, Math.round(sec));
    const m = Math.floor(sec / 60), s = sec % 60;
    return (m ? plural(m, 'minute', 'minutes') + ' ' : '') + plural(s, 'second', 'seconds');
  }

  /* ------------------------------------------------------------------
   * 6. Artwork: avatars, series covers and icons (all SVG in Mini Moguls brand palette)
   * ------------------------------------------------------------------ */
  function shade(hex, amt) {
    const n = parseInt(hex.slice(1), 16);
    const f = (v) => clamp(Math.round(v + amt * (amt < 0 ? v : 255 - v)), 0, 255);
    return '#' + [f(n >> 16), f((n >> 8) & 255), f(n & 255)].map((v) => v.toString(16).padStart(2, '0')).join('');
  }
  function seeded(seed) {
    let s = 0;
    for (let i = 0; i < seed.length; i++) s = (s * 31 + seed.charCodeAt(i)) >>> 0;
    return () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; };
  }

  function avatar(id, label) {
    const p = PEOPLE[id];
    if (!p) return '';
    const a = p.avatar;
    const hair = '#111111';
    const skinDark = shade(a.skin, -0.18);
    let back = '', front = '';
    if (a.style === 'long') {
      back = `<path d="M33 52c0-22 12-34 27-34s27 12 27 34v44c-8 4-46 4-54 0z" fill="${hair}"/>`;
      front = `<path d="M37 52c1-19 10-28 23-28 14 0 23 9 23 26-9-2-18-8-23-16-4 9-12 15-23 18z" fill="${hair}"/>`;
    } else if (a.style === 'bun') {
      back = `<circle cx="42" cy="24" r="10" fill="${hair}"/><circle cx="78" cy="24" r="10" fill="${hair}"/>`;
      front = `<path d="M37 54c-1-20 9-31 23-31s24 11 23 31c-3-10-11-17-23-17s-20 7-23 17z" fill="${hair}"/>`;
    } else if (a.style === 'curly') {
      for (let i = 0; i < 9; i++) {
        const ang = Math.PI * (1.05 + i * 0.112);
        back += `<circle cx="${(60 + 23 * Math.cos(ang)).toFixed(1)}" cy="${(48 + 21 * Math.sin(ang)).toFixed(1)}" r="9" fill="${hair}"/>`;
      }
      front = `<path d="M38 50c2-14 11-22 22-22s20 8 22 22c-6-6-14-9-22-9s-16 3-22 9z" fill="${hair}"/>`;
    } else if (a.style === 'coily') {
      back = `<circle cx="60" cy="44" r="30" fill="${hair}"/>`;
      front = `<path d="M39 50c3-12 11-18 21-18s18 6 21 18c-6-4-13-6-21-6s-15 2-21 6z" fill="${hair}"/>`;
    } else if (a.style === 'waves') {
      front = `<path d="M37 54c-2-21 9-32 24-32 13 0 23 9 22 26-6-6-11-9-17-9-3 6-11 10-21 10-3 1-6 3-8 5z" fill="${hair}"/>`;
    } else {
      front = `<path d="M38 52c-2-18 8-29 22-29s24 10 22 29c-2-8-6-12-10-13-8 3-20 3-28-1-3 3-5 8-6 14z" fill="${hair}"/>`;
    }
    const glasses = a.glasses ? `<g fill="none" stroke="#111111" stroke-width="2.2"><circle cx="51.5" cy="57" r="6.2" fill="#FFFFFF" fill-opacity=".25"/><circle cx="68.5" cy="57" r="6.2" fill="#FFFFFF" fill-opacity=".25"/><path d="M57.7 57h4.6"/></g>` : '';
    const crown = `<path d="M48 22 52 14l8 5 8-5 4 8Z" fill="#F4C84A" stroke="#111111" stroke-width="2" stroke-linejoin="round"/>`;
    const role = label ? `role="img" aria-label="${escapeHtml(label)}"` : 'aria-hidden="true" focusable="false"';
    return `<svg viewBox="0 0 120 120" ${role}><rect width="120" height="120" fill="${a.bg}"/><circle cx="96" cy="22" r="26" fill="#FFFFFF" opacity=".45"/>` +
      `<path d="M18 120c2-22 18-34 42-34s40 12 42 34z" fill="${a.shirt}" stroke="#111111" stroke-width="2.5"/>` +
      `<rect x="44" y="94" width="32" height="26" rx="4" fill="#F4C84A" stroke="#111111" stroke-width="2"/>` +
      back + `<rect x="51" y="66" width="18" height="20" rx="7" fill="${skinDark}"/>` +
      `<circle cx="38.5" cy="58" r="4.5" fill="${a.skin}" stroke="#111111" stroke-width="2"/><circle cx="81.5" cy="58" r="4.5" fill="${a.skin}" stroke="#111111" stroke-width="2"/><ellipse cx="60" cy="55" rx="21.5" ry="24.5" fill="${a.skin}" stroke="#111111" stroke-width="2.5"/>` +
      `<circle cx="47" cy="64" r="3.5" fill="#F4C84A" opacity=".5"/><circle cx="73" cy="64" r="3.5" fill="#F4C84A" opacity=".5"/>` +
      front + crown +
      `<circle cx="52" cy="57.5" r="2.2" fill="#111111"/><circle cx="68" cy="57.5" r="2.2" fill="#111111"/>` +
      `<path d="M53 67q7 6 14 0" fill="none" stroke="#111111" stroke-width="2.4" stroke-linecap="round"/>` + glasses + '</svg>';
  }

  // Series cover art, 320x200, drawn in Mini Moguls Sunshine Gold (#F4C84A), Ink (#111111), Cream (#FFF9EB) & White (#FFFFFF)
  function seriesArt(key, v) {
    const s = SERIES[key];
    v = v || 0;
    if (!s) return '';
    let g = '';
    if (s.art === 'table') {
      // Create Your Product — Creative Workshop & Market Stall
      g = '<rect width="320" height="200" fill="#FEF0C7"/>' +
        '<circle cx="265" cy="48" r="38" fill="#F4C84A" opacity=".55"/>' +
        '<rect x="44" y="28" width="232" height="22" rx="6" fill="#111111"/>' +
        '<rect x="44" y="50" width="46" height="14" rx="6" fill="#F4C84A" stroke="#111111" stroke-width="2"/>' +
        '<rect x="90" y="50" width="46" height="14" rx="6" fill="#FFFFFF" stroke="#111111" stroke-width="2"/>' +
        '<rect x="136" y="50" width="48" height="14" rx="6" fill="#F4C84A" stroke="#111111" stroke-width="2"/>' +
        '<rect x="184" y="50" width="46" height="14" rx="6" fill="#FFFFFF" stroke="#111111" stroke-width="2"/>' +
        '<rect x="230" y="50" width="46" height="14" rx="6" fill="#F4C84A" stroke="#111111" stroke-width="2"/>' +
        '<rect x="54" y="64" width="6" height="66" fill="#111111"/><rect x="260" y="64" width="6" height="66" fill="#111111"/>' +
        '<circle cx="128" cy="92" r="15" fill="#8D5524" stroke="#111111" stroke-width="2.5"/>' +
        '<path d="M106 130c3-15 11-22 22-22s19 7 22 22z" fill="#F4C84A" stroke="#111111" stroke-width="2.5"/>' +
        '<circle cx="194" cy="92" r="15" fill="#6B3E26" stroke="#111111" stroke-width="2.5"/>' +
        '<path d="M172 130c3-15 11-22 22-22s19 7 22 22z" fill="#FFFFFF" stroke="#111111" stroke-width="2.5"/>' +
        '<rect x="42" y="128" width="236" height="10" rx="4" fill="#F4C84A" stroke="#111111" stroke-width="2.5"/>' +
        '<rect x="52" y="138" width="216" height="44" rx="6" fill="#FFFFFF" stroke="#111111" stroke-width="2.5"/>' +
        '<rect x="82" y="148" width="156" height="24" rx="6" fill="#111111"/>' +
        '<text x="160" y="164" text-anchor="middle" font-family="Urbanist, sans-serif" font-size="11" font-weight="800" fill="#F4C84A">CREATE · SELL · LEARN</text>';
    } else if (s.art === 'sun') {
      // Price & Money Basics — Cash Box, Price Tags & Coins
      g = '<rect width="320" height="200" fill="#FFF9EB"/>' +
        '<circle cx="62" cy="52" r="34" fill="#F4C84A" opacity=".45"/>' +
        '<rect x="48" y="62" width="124" height="86" rx="14" fill="#FFFFFF" stroke="#111111" stroke-width="3"/>' +
        '<rect x="64" y="78" width="92" height="22" rx="6" fill="#111111"/>' +
        '<text x="110" y="93" text-anchor="middle" font-family="Urbanist, sans-serif" font-size="12" font-weight="800" fill="#F4C84A">PRICE &amp; PROFIT</text>' +
        '<rect x="64" y="110" width="40" height="22" rx="5" fill="#F4C84A" stroke="#111111" stroke-width="2"/>' +
        '<text x="84" y="125" text-anchor="middle" font-family="Urbanist, sans-serif" font-size="11" font-weight="800" fill="#111111">$2</text>' +
        '<rect x="116" y="110" width="40" height="22" rx="5" fill="#FEF0C7" stroke="#111111" stroke-width="2"/>' +
        '<text x="136" y="125" text-anchor="middle" font-family="Urbanist, sans-serif" font-size="11" font-weight="800" fill="#111111">$5</text>' +
        '<circle cx="222" cy="82" r="26" fill="#F4C84A" stroke="#111111" stroke-width="3"/>' +
        '<text x="222" y="90" text-anchor="middle" font-family="Urbanist, sans-serif" font-size="22" font-weight="900" fill="#111111">$</text>' +
        '<circle cx="264" cy="118" r="20" fill="#111111"/>' +
        '<text x="264" y="124" text-anchor="middle" font-family="Urbanist, sans-serif" font-size="16" font-weight="900" fill="#F4C84A">$</text>' +
        '<path d="M36 168h248" stroke="#111111" stroke-width="3" stroke-linecap="round"/>';
    } else if (s.art === 'wheat') {
      // Stall Display & Selling — Bunting, Easel Sign & Product Tier
      g = '<rect width="320" height="200" fill="#FEF0C7"/>' +
        '<path d="M24 30 Q160 62 296 30" fill="none" stroke="#111111" stroke-width="2.5"/>' +
        '<polygon points="60,36 74,58 88,39" fill="#F4C84A" stroke="#111111" stroke-width="2"/>' +
        '<polygon points="120,43 134,65 148,45" fill="#111111"/>' +
        '<polygon points="180,45 194,65 208,43" fill="#FFFFFF" stroke="#111111" stroke-width="2"/>' +
        '<polygon points="240,39 254,58 268,36" fill="#F4C84A" stroke="#111111" stroke-width="2"/>' +
        '<rect x="62" y="76" width="84" height="72" rx="10" fill="#FFFFFF" stroke="#111111" stroke-width="3"/>' +
        '<rect x="74" y="90" width="60" height="18" rx="4" fill="#F4C84A" stroke="#111111" stroke-width="2"/>' +
        '<path d="M80 148 70 174M128 148l10 26" stroke="#111111" stroke-width="3" stroke-linecap="round"/>' +
        '<rect x="172" y="114" width="96" height="56" rx="8" fill="#FFFFFF" stroke="#111111" stroke-width="3"/>' +
        '<rect x="186" y="88" width="68" height="26" rx="6" fill="#F4C84A" stroke="#111111" stroke-width="2.5"/>' +
        '<rect x="196" y="132" width="48" height="20" rx="5" fill="#111111"/>';
    } else {
      // Parent & School Prep — Checklist & Star Badge
      g = '<rect width="320" height="200" fill="#FFF9EB"/>' +
        '<circle cx="252" cy="60" r="42" fill="#F4C84A" opacity=".4"/>' +
        '<rect x="56" y="34" width="136" height="136" rx="16" fill="#FFFFFF" stroke="#111111" stroke-width="3"/>' +
        '<rect x="92" y="24" width="64" height="20" rx="6" fill="#F4C84A" stroke="#111111" stroke-width="2.5"/>' +
        '<circle cx="82" cy="72" r="8" fill="#F4C84A" stroke="#111111" stroke-width="2"/><path d="M98 72h68" stroke="#111111" stroke-width="3" stroke-linecap="round"/>' +
        '<circle cx="82" cy="104" r="8" fill="#F4C84A" stroke="#111111" stroke-width="2"/><path d="M98 104h68" stroke="#111111" stroke-width="3" stroke-linecap="round"/>' +
        '<circle cx="82" cy="136" r="8" fill="#111111"/><path d="M98 136h52" stroke="#111111" stroke-width="3" stroke-linecap="round"/>' +
        '<circle cx="238" cy="116" r="32" fill="#F4C84A" stroke="#111111" stroke-width="3"/>' +
        '<path d="M226 116l8 8 18-18" fill="none" stroke="#111111" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>';
    }
    return `<svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid meet" aria-hidden="true" focusable="false">${g}</svg>`;
  }

  const ICON = {
    play: '<svg viewBox="0 0 24 24" class="h-6 w-6 translate-x-px" fill="currentColor" aria-hidden="true"><path d="M8 5.5v13a1 1 0 0 0 1.5.86l11-6.5a1 1 0 0 0 0-1.72l-11-6.5A1 1 0 0 0 8 5.5z"/></svg>',
    pause: '<svg viewBox="0 0 24 24" class="h-6 w-6" fill="currentColor" aria-hidden="true"><rect x="6" y="5" width="4.5" height="14" rx="1.2"/><rect x="13.5" y="5" width="4.5" height="14" rx="1.2"/></svg>',
    back: '<svg viewBox="0 0 24 24" class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 12a8 8 0 1 0 2.6-5.9"/><path d="M4 4v4.5h4.5"/><text x="12" y="15.6" text-anchor="middle" font-size="7.5" font-weight="800" fill="currentColor" stroke="none" font-family="Nunito Sans, sans-serif">15</text></svg>',
    fwd: '<svg viewBox="0 0 24 24" class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 12a8 8 0 1 1-2.6-5.9"/><path d="M20 4v4.5h-4.5"/><text x="12" y="15.6" text-anchor="middle" font-size="7.5" font-weight="800" fill="currentColor" stroke="none" font-family="Nunito Sans, sans-serif">15</text></svg>',
    clock: '<svg viewBox="0 0 20 20" class="h-4 w-4 shrink-0" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><circle cx="10" cy="10" r="7.5"/><path d="M10 6v4l2.5 2"/></svg>',
    pin: '<svg viewBox="0 0 20 20" class="h-4 w-4 shrink-0" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" aria-hidden="true"><path d="M10 18s6-5.2 6-10a6 6 0 1 0-12 0c0 4.8 6 10 6 10z"/><circle cx="10" cy="8" r="2"/></svg>',
    cal: '<svg viewBox="0 0 20 20" class="h-4 w-4 shrink-0" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4.5" width="14" height="12.5" rx="2"/><path d="M3 8.5h14M7 3v3M13 3v3"/></svg>',
    user: '<svg viewBox="0 0 20 20" class="h-4 w-4 shrink-0" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><circle cx="10" cy="7" r="3.2"/><path d="M4 17c.8-3.2 3.2-5 6-5s5.2 1.8 6 5"/></svg>',
    arrow: '<svg viewBox="0 0 20 20" class="h-4 w-4 shrink-0 transition group-hover:translate-x-0.5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 10h12M11 5l5 5-5 5"/></svg>'
  };

  function hydrateArt(root) {
    $$('[data-avatar]', root).forEach((el) => {
      const p = PEOPLE[el.getAttribute('data-avatar')];
      if (p) el.innerHTML = avatar(el.getAttribute('data-avatar'), el.hasAttribute('data-decorative') ? '' : p.name);
    });
    $$('[data-series-art]', root).forEach((el) => { el.innerHTML = seriesArt(el.getAttribute('data-series-art')); });
  }

  /* ------------------------------------------------------------------
   * 7. Header, mobile menu, scroll reveal, service status and countdown
   * ------------------------------------------------------------------ */
  const menuBtn = $('#menu-toggle');
  const menu = $('#mobile-menu');
  function setMenu(open) {
    menuBtn.setAttribute('aria-expanded', String(open));
    menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    menu.hidden = !open;
    $('[data-icon-open]', menuBtn).classList.toggle('hidden', open);
    $('[data-icon-close]', menuBtn).classList.toggle('hidden', !open);
  }
  if (menuBtn && menu) {
    menuBtn.addEventListener('click', () => setMenu(menuBtn.getAttribute('aria-expanded') !== 'true'));
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && menuBtn.getAttribute('aria-expanded') === 'true') { setMenu(false); menuBtn.focus(); }
    });
    window.matchMedia('(min-width: 1024px)').addEventListener('change', (m) => { if (m.matches) setMenu(false); });
  }

  // Header border and shadow once the page scrolls.
  const header = $('#site-header');
  if (header) {
    const onScroll = () => {
      const on = window.scrollY > 8;
      header.classList.toggle('shadow-soft', on);
      header.classList.toggle('border-line', on);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  const revealObserver = ('IntersectionObserver' in window && !reduceMotion)
    ? new IntersectionObserver((entries) => {
        entries.forEach((en) => {
          if (!en.isIntersecting) return;
          // Reveal this element and everything above it, so fast jumps never leave gaps.
          const top = en.target.getBoundingClientRect().top;
          $$('.reveal:not(.is-visible)').forEach((el) => {
            if (el.getBoundingClientRect().top <= top) { el.classList.add('is-visible'); revealObserver.unobserve(el); }
          });
        });
      }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 })
    : null;
  function reveal(root) {
    $$('.reveal:not(.is-visible)', root).forEach((el) => {
      if (revealObserver) revealObserver.observe(el); else el.classList.add('is-visible');
    });
  }

  $$('[data-year]').forEach((el) => { el.textContent = new Date().getFullYear(); });

  // The service happening now, or the next one: { live, service, day, startsIn (seconds) }.
  // Add ?live=1 to any URL to preview the "live" state.
  function serviceState() {
    const now = churchNow();
    const forceLive = urlParams().get('live') === '1';
    const targetDay = EVENT_DAY; // Saturday, 12 December 2026
    const startSecs = mins('10:00') * 60;
    const endSecs = mins('16:00') * 60;
    const diffSecs = (targetDay - now.day) * 86400 + (startSecs - now.secs);
    const isLive = forceLive || (now.day === targetDay && now.secs >= startSecs && now.secs < endSecs);
    return {
      live: isLive,
      service: SERVICES[0],
      startsIn: isLive ? 0 : Math.max(0, diffSecs),
      day: targetDay
    };
  }

  function updateStatus() {
    const st = serviceState();
    if (!st) return;
    $$('[data-service-status]').forEach((el) => {
      el.innerHTML = st.live
        ? '<span class="live-dot chip-dot bg-apricot" aria-hidden="true"></span><span>Happening Now: ' + escapeHtml(st.service.name) + ' in Harare</span> <a href="register.html#plan" class="font-bold text-apricot underline underline-offset-4">Details</a>'
        : '<span class="chip-dot bg-apricot" aria-hidden="true"></span><span>Market Day: Saturday, 12 December 2026 · 10:00 AM – 4:00 PM · Harare (Venue TBA)</span>';
    });
    // "This Sunday" dates on the home and visit pages: the next Sunday with a service still to come.
    $$('[data-this-sunday]').forEach((el) => { el.textContent = 'Saturday, 12 December 2026'; });
  }

  // <div data-countdown> on the home and sermons pages.
  function initCountdowns() {
    const boxes = $$('[data-countdown]');
    if (!boxes.length) return;
    let lastState = '';
    function render() {
      const st = serviceState();
      if (!st) return;
      const stateKey = st.live ? 'live' : 'next-' + st.day + st.service.start;
      if (stateKey !== lastState) {
        lastState = stateKey;
        boxes.forEach((box) => {
          const dark = box.hasAttribute('data-dark');
          box.innerHTML = st.live
            ? `<p class="flex items-center gap-2.5 text-sm font-extrabold uppercase tracking-[0.14em] ${dark ? 'text-[#ffb3bd]' : 'text-rose'}"><span class="live-dot chip-dot size-2.5 bg-rose" aria-hidden="true"></span>Live now</p>
               <p class="mt-2 font-display text-2xl font-extrabold">${escapeHtml(st.service.name)}</p>
               <p class="mt-1 text-sm ${dark ? 'text-white/80' : 'text-muted'}">Started at ${fmtTime(st.service.start)} ${escapeHtml(CHURCH.timeZoneLabel)}. Join us online or come as you are.</p>
               <a href="${CHURCH.liveUrl}" class="${dark ? 'btn-warm' : 'btn-primary'} mt-5 w-full sm:w-auto">Register a Mogul</a>`
            : `<p class="text-sm font-bold ${dark ? 'text-white/80' : 'text-muted'}">Countdown to Market Day (12 Dec 2026)</p>
               <div class="mt-3 grid grid-cols-4 gap-2 text-center" aria-hidden="true">
                 ${['days', 'hours', 'min', 'sec'].map((u) => `<div class="rounded-2xl ${dark ? 'bg-white/10' : 'bg-sand'} px-1 py-2.5"><span data-cd="${u}" class="block font-display text-2xl font-extrabold tabular-nums sm:text-[1.75rem]">0</span><span class="block text-[11px] font-bold uppercase tracking-wider ${dark ? 'text-white/75' : 'text-muted'}">${u}</span></div>`).join('')}
               </div>
               <p class="sr-only" data-cd="spoken"></p>
               <p class="mt-3 text-sm font-semibold">${escapeHtml(longDate(st.day))} · ${fmtTime(st.service.start)} <span class="font-normal ${dark ? 'text-white/75' : 'text-muted'}">${escapeHtml(CHURCH.timeZoneLabel)}</span></p>`;
        });
      }
      if (!st.live) {
        const t = st.startsIn;
        const parts = { days: Math.floor(t / 86400), hours: Math.floor(t / 3600) % 24, min: Math.floor(t / 60) % 60, sec: t % 60 };
        boxes.forEach((box) => {
          Object.keys(parts).forEach((k) => { const el = $('[data-cd="' + k + '"]', box); if (el) el.textContent = k === 'days' ? parts[k] : String(parts[k]).padStart(2, '0'); });
          const spoken = $('[data-cd="spoken"]', box);
          const text = 'Starts in ' + plural(parts.days, 'day', 'days') + ', ' + plural(parts.hours, 'hour', 'hours') + ' and ' + plural(parts.min, 'minute', 'minutes') + '.';
          if (spoken && spoken.textContent !== text) spoken.textContent = text;
        });
      }
    }
    render();
    setInterval(render, 1000);
  }

  /* ------------------------------------------------------------------
   * 8. Audio player
   *    Uses the <audio> element when the sermon has an `audio` URL;
   *    otherwise it simulates playback over the sermon's `duration`.
   *    Keys while focus is in the player: Space/K play-pause, J/L ±15 s,
   *    arrows on the slider ±5 s, Home/End jump to start/end.
   * ------------------------------------------------------------------ */
  const SPEEDS = [1, 1.25, 1.5, 1.75, 2, 0.75];
  const players = [];

  // Saved positions: { sermonId: seconds }. Only known ids and sensible numbers survive.
  function readProgress() {
    const raw = read(PROGRESS_KEY);
    const out = {};
    if (raw && typeof raw === 'object' && !Array.isArray(raw)) {
      Object.keys(raw).forEach((id) => {
        const s = findSermon(id);
        const v = Number(raw[id]);
        if (s && isFinite(v) && v >= 5 && v < s.duration - 5) out[s.id] = Math.floor(v);
      });
    }
    return out;
  }
  function saveProgress(id, seconds) {
    const all = readProgress();
    if (seconds === null) delete all[id]; else all[id] = Math.floor(seconds);
    write(PROGRESS_KEY, Object.keys(all).length ? all : null);
  }

  function playerMarkup(s) {
    const sp = PEOPLE[s.speaker];
    return `<div class="player-dark relative overflow-hidden rounded-[1.75rem] bg-ink p-5 text-white shadow-lift sm:p-7" data-player="${s.id}" role="group" aria-label="Audio player: ${escapeHtml(s.title)}">
      <svg viewBox="0 0 400 120" class="pointer-events-none absolute -right-10 -top-6 w-80 text-white/[.06]" fill="none" stroke="currentColor" stroke-width="3" aria-hidden="true"><path d="M0 30q25-18 50 0t50 0 50 0 50 0 50 0 50 0 50 0 50 0M0 60q25-18 50 0t50 0 50 0 50 0 50 0 50 0 50 0 50 0M0 90q25-18 50 0t50 0 50 0 50 0 50 0 50 0 50 0 50 0"/></svg>
      <audio preload="none"${s.audio ? ' src="' + escapeHtml(s.audio) + '"' : ''}></audio>
      <div class="relative flex items-center gap-4">
        <button type="button" data-p="toggle" class="grid size-14 shrink-0 place-items-center rounded-full bg-apricot text-ink shadow-soft transition hover:scale-105" aria-label="Play">${ICON.play}</button>
        <div class="min-w-0 flex-1">
          <p class="truncate font-display text-lg font-extrabold leading-tight sm:text-xl">${escapeHtml(s.title)}</p>
          <p class="mt-0.5 truncate text-sm text-white/75">${escapeHtml(sp ? sp.name : '')} · ${escapeHtml(s.passage)}</p>
        </div>
      </div>
      <div class="relative mt-5">
        <input type="range" class="scrub block" data-p="scrub" min="0" max="${s.duration}" step="5" value="0" aria-label="Seek">
        <div class="mt-2 flex justify-between text-xs font-bold tabular-nums text-white/75"><span data-p="current">0:00</span><span data-p="remaining">-${clock(s.duration)}</span></div>
      </div>
      <div class="relative mt-3 flex items-center justify-between gap-3">
        <div class="flex items-center gap-1">
          <button type="button" data-p="back" class="grid size-11 place-items-center rounded-full text-white/90 transition hover:bg-white/10" aria-label="Back 15 seconds">${ICON.back}</button>
          <button type="button" data-p="fwd" class="grid size-11 place-items-center rounded-full text-white/90 transition hover:bg-white/10" aria-label="Forward 15 seconds">${ICON.fwd}</button>
        </div>
        <p data-p="resume" class="hidden text-xs font-semibold text-apricot"></p>
        <button type="button" data-p="speed" class="min-w-16 rounded-full px-3 py-2 text-sm font-extrabold tabular-nums ring-1 ring-white/30 transition ring-inset hover:bg-white/10" aria-label="Playback speed 1×">1×</button>
      </div>
      ${s.audio ? '' : '<p class="relative mt-4 border-t border-white/10 pt-3 text-xs text-white/70">Interactive audio guide preview: simulated timer for classroom or family preparation.</p>'}
      <p class="sr-only" data-p="announce" aria-live="polite"></p>
    </div>`;
  }

  function initPlayer(root, s) {
    const audio = $('audio', root);
    const btn = $('[data-p="toggle"]', root);
    const scrub = $('[data-p="scrub"]', root);
    const cur = $('[data-p="current"]', root);
    const rem = $('[data-p="remaining"]', root);
    const speedBtn = $('[data-p="speed"]', root);
    const announce = $('[data-p="announce"]', root);
    const resume = $('[data-p="resume"]', root);
    const real = !!s.audio;
    let duration = s.duration;
    let t = readProgress()[s.id] || 0;
    let playing = false, rate = 1, timer = null, last = 0, lastSaved = 0;

    if (t) { resume.textContent = 'Resuming at ' + clock(t); resume.classList.remove('hidden'); }

    const time = () => (real && audio.readyState > 0 ? audio.currentTime : t);
    function render() {
      const now = time();
      scrub.max = Math.round(duration);
      scrub.value = Math.round(now);
      scrub.style.setProperty('--pct', (duration ? (now / duration) * 100 : 0) + '%');
      scrub.setAttribute('aria-valuetext', spokenTime(now) + ' of ' + spokenTime(duration));
      cur.textContent = clock(now);
      rem.textContent = '-' + clock(duration - now);
    }
    function setPlaying(p) {
      playing = p;
      btn.innerHTML = p ? ICON.pause : ICON.play;
      btn.setAttribute('aria-label', p ? 'Pause' : 'Play');
      root.classList.toggle('is-playing', p);
    }
    function save() {
      const now = time();
      lastSaved = now;
      saveProgress(s.id, now >= duration - 5 || now < 5 ? null : now);
    }
    function tick() {
      const n = performance.now();
      t = Math.min(duration, t + ((n - last) / 1000) * rate);
      last = n;
      render();
      if (Math.abs(t - lastSaved) >= 5) save();
      if (t >= duration) { pause(); t = 0; saveProgress(s.id, null); render(); announce.textContent = 'Finished.'; }
    }
    function play() {
      players.forEach((p) => { if (p !== api) p.pause(); });
      resume.classList.add('hidden');
      if (real) {
        const pr = audio.play();
        if (pr && pr.catch) pr.catch(() => setPlaying(false));
      } else {
        last = performance.now();
        clearInterval(timer);
        timer = setInterval(tick, 250);
      }
      setPlaying(true);
    }
    function pause() {
      if (!playing) return;
      if (real) audio.pause();
      else { clearInterval(timer); timer = null; }
      setPlaying(false);
      save();
    }
    function seek(x) {
      x = clamp(x, 0, duration);
      if (real && audio.readyState > 0) audio.currentTime = x;
      t = x;
      render();
      save();
    }
    const api = { pause, play, id: s.id };
    players.push(api);

    if (real) {
      audio.addEventListener('loadedmetadata', () => {
        if (isFinite(audio.duration) && audio.duration > 0) duration = audio.duration;
        if (t) audio.currentTime = t;
        audio.playbackRate = rate;
        render();
      });
      audio.addEventListener('timeupdate', () => { t = audio.currentTime; render(); if (Math.abs(t - lastSaved) >= 5) save(); });
      audio.addEventListener('pause', () => { if (playing) { setPlaying(false); save(); } });
      audio.addEventListener('play', () => setPlaying(true));
      audio.addEventListener('ended', () => { setPlaying(false); saveProgress(s.id, null); announce.textContent = 'Finished.'; });
    }

    btn.addEventListener('click', () => (playing ? pause() : play()));
    $('[data-p="back"]', root).addEventListener('click', () => seek(time() - 15));
    $('[data-p="fwd"]', root).addEventListener('click', () => seek(time() + 15));
    scrub.addEventListener('input', () => seek(+scrub.value));
    speedBtn.addEventListener('click', () => {
      rate = SPEEDS[(SPEEDS.indexOf(rate) + 1) % SPEEDS.length];
      if (real) audio.playbackRate = rate;
      speedBtn.textContent = rate + '×';
      speedBtn.setAttribute('aria-label', 'Playback speed ' + rate + '×');
      announce.textContent = 'Speed ' + rate + '×';
    });
    root.addEventListener('keydown', (e) => {
      if (e.altKey || e.ctrlKey || e.metaKey) return;
      const k = e.key.toLowerCase();
      const onButton = e.target.tagName === 'BUTTON';
      if (k === 'k' || (k === ' ' && !onButton)) { e.preventDefault(); playing ? pause() : play(); }
      else if (k === 'j') { e.preventDefault(); seek(time() - 15); }
      else if (k === 'l') { e.preventDefault(); seek(time() + 15); }
    });
    window.addEventListener('pagehide', () => { if (playing) save(); });
    render();
    return api;
  }

  function mountPlayer(el, s) {
    el.innerHTML = playerMarkup(s);
    initPlayer($('[data-player]', el), s);
  }

  /* ------------------------------------------------------------------
   * 9. Sermon archive — series, speaker and book filters, search, URL state
   *    guides.html?series=open-table&speaker=dana&book=luke&q=table
   * ------------------------------------------------------------------ */
  function sermonCard(s, progress) {
    const sp = PEOPLE[s.speaker];
    const series = SERIES[s.series];
    const pos = progress && progress[s.id];
    return `<article class="card card-hover group relative flex flex-col overflow-hidden">
      <div class="art relative aspect-[16/10] overflow-hidden">${seriesArt(s.series, s.part)}
        <span class="absolute bottom-3 right-3 inline-flex items-center gap-1 rounded-full bg-ink/85 px-2.5 py-1 text-xs font-bold tabular-nums text-white">${ICON.clock}${clock(s.duration)}</span>
        ${pos ? `<span class="absolute bottom-3 left-3 rounded-full bg-apricot px-2.5 py-1 text-xs font-bold text-ink">Resume at ${clock(pos)}</span>` : ''}
      </div>
      <div class="flex flex-1 flex-col p-5 sm:p-6">
        <p class="text-xs font-extrabold uppercase tracking-[0.14em] text-apricot-dark">${escapeHtml(series ? series.title : '')}</p>
        <h3 class="mt-2 font-display text-xl font-extrabold leading-snug"><a href="guide.html?id=${s.id}" class="after:absolute after:inset-0 after:content-[''] focus:outline-none">${escapeHtml(s.title)}</a></h3>
        <p class="mt-2 text-sm text-muted">${escapeHtml(s.passage)}</p>
        <div class="mt-auto flex items-center gap-3 pt-5 text-sm">
          <span class="size-9 shrink-0 overflow-hidden rounded-full">${avatar(s.speaker, '')}</span>
          <span class="min-w-0"><span class="block truncate font-bold">${escapeHtml(sp ? sp.name : '')}</span><span class="block text-muted">${shortDate(s.day)}</span></span>
        </div>
      </div>
    </article>`;
  }

  function initSermons() {
    const list = $('#sermon-list');
    if (!list) return;
    const form = $('#sermon-filters');
    const count = $('#sermon-count');
    const empty = $('#sermon-empty');
    const sel = { series: $('#f-series'), speaker: $('#f-speaker'), book: $('#f-book') };
    const search = $('#f-search');
    const speakers = {};
    SERMONS.forEach((s) => { speakers[s.speaker] = PEOPLE[s.speaker].name; });
    const books = {};
    SERMONS.forEach((s) => { books[s.book] = BOOKS[s.book] || s.book; });
    const sources = { series: Object.fromEntries(Object.keys(SERIES).map((k) => [k, SERIES[k].title])), speaker: speakers, book: books };
    Object.keys(sel).forEach((k) => {
      Object.keys(sources[k]).forEach((v) => {
        const o = document.createElement('option');
        o.value = v; o.textContent = sources[k][v];
        sel[k].appendChild(o);
      });
    });

    // Series cards above the list.
    const strip = $('#series-strip');
    if (strip) {
      strip.innerHTML = Object.keys(SERIES).map((k) => {
        const n = SERMONS.filter((s) => s.series === k).length;
        return `<li><button type="button" data-series="${k}" aria-pressed="false" class="group card card-hover flex w-full flex-col overflow-hidden text-left aria-pressed:ring-2 aria-pressed:ring-plum">
          <span class="art block aspect-[16/9] overflow-hidden">${seriesArt(k)}</span>
          <span class="block p-4"><span class="block font-display text-lg font-extrabold leading-tight">${escapeHtml(SERIES[k].title)}</span><span class="mt-1 block text-sm text-muted">${plural(n, 'guide', 'guides')} · ${escapeHtml(SERIES[k].subtitle)}</span></span>
        </button></li>`;
      }).join('');
      strip.addEventListener('click', (e) => {
        const b = e.target.closest('[data-series]');
        if (!b) return;
        sel.series.value = sel.series.value === b.dataset.series ? '' : b.dataset.series;
        apply(true);
        list.scrollIntoView({ block: 'start', behavior: reduceMotion ? 'auto' : 'smooth' });
      });
    }

    const params = urlParams();
    Object.keys(sel).forEach((k) => { const v = urlValues(params, k, sources[k]); sel[k].value = v[0] || ''; });
    search.value = (params.get('q') || '').slice(0, 80);

    function apply(writeUrl) {
      const q = search.value.trim().toLowerCase();
      const words = q.split(/\s+/).filter(Boolean);
      const f = { series: sel.series.value, speaker: sel.speaker.value, book: sel.book.value };
      const hits = SERMONS.filter((s) => {
        if (f.series && s.series !== f.series) return false;
        if (f.speaker && s.speaker !== f.speaker) return false;
        if (f.book && s.book !== f.book) return false;
        if (!words.length) return true;
        const hay = [s.title, s.passage, s.summary, SERIES[s.series].title, PEOPLE[s.speaker].name].join(' ').toLowerCase();
        return words.every((w) => hay.indexOf(w) !== -1);
      });
      const progress = readProgress();
      list.innerHTML = hits.map((s) => '<li class="flex">' + sermonCard(s, progress).replace('<article class="', '<article class="w-full ') + '</li>').join('');
      empty.hidden = hits.length > 0;
      count.textContent = hits.length === SERMONS.length ? 'Showing all ' + SERMONS.length + ' creator guides' : 'Showing ' + plural(hits.length, 'creator guide', 'creator guides') + ' of ' + SERMONS.length;
      $$('[data-series]', strip).forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.series === f.series)));
      $('#f-clear').hidden = !(f.series || f.speaker || f.book || q);
      if (writeUrl) {
        const p = new URLSearchParams();
        Object.keys(f).forEach((k) => { if (f[k]) p.set(k, f[k]); });
        if (q) p.set('q', search.value.trim());
        setUrl(p);
      }
    }
    Object.keys(sel).forEach((k) => sel[k].addEventListener('change', () => apply(true)));
    let tmr;
    search.addEventListener('input', () => { clearTimeout(tmr); tmr = setTimeout(() => apply(true), 180); });
    form.addEventListener('submit', (e) => { e.preventDefault(); apply(true); });
    const clear = () => { Object.keys(sel).forEach((k) => { sel[k].value = ''; }); search.value = ''; apply(true); search.focus(); };
    $('#f-clear').addEventListener('click', clear);
    $$('[data-clear-filters]').forEach((b) => b.addEventListener('click', clear));
    apply(false);

    // Latest message in the "live" panel.
    const latest = $('#latest-player');
    if (latest) mountPlayer(latest, SERMONS[0]);
  }

  /* ------------------------------------------------------------------
   * 10. Sermon page — guide.html?id=room-at-the-table
   * ------------------------------------------------------------------ */
  function initSermon() {
    const id = urlParams().get('id');
    const s = findSermon(id) || SERMONS[0];
    const series = SERIES[s.series];
    const sp = PEOPLE[s.speaker];
    const notFound = id && !findSermon(id);
    document.title = s.title + ' — ' + series.title + ' — Mini Moguls Market Day';
    const meta = $('meta[name="description"]');
    if (meta) meta.setAttribute('content', s.summary);
    const setText = (sel, text) => { const el = $(sel); if (el) el.textContent = text; };
    setText('#sermon-title', s.title);
    setText('#sermon-series', series.title);
    setText('#sermon-crumb', s.title);
    setText('#sermon-summary', s.summary);
    setText('#sermon-meta-date', longDate(s.day) + ', ' + fmtDay(s.day, { year: 'numeric' }));
    setText('#sermon-meta-passage', s.passage);
    setText('#sermon-meta-length', clock(s.duration).replace(/:\d\d$/, '') + ' min');
    $('#sermon-notfound').hidden = !notFound;
    $('#sermon-art').innerHTML = seriesArt(s.series, s.part);
    const seriesLink = $('#sermon-series-link');
    seriesLink.href = 'guides.html?series=' + s.series;
    $('#sermon-series-crumb').href = seriesLink.href;
    seriesLink.textContent = 'All of ' + series.title;
    mountPlayer($('#sermon-player'), s);

    $('#sermon-verse').innerHTML = `<p>“${escapeHtml(s.verse.text)}”</p><footer class="mt-3 font-sans text-sm font-bold text-apricot-dark">${escapeHtml(s.verse.ref)}</footer>`;
    $('#sermon-notes').innerHTML = s.notes.map((n, i) => `<li class="flex gap-4"><span class="grid size-9 shrink-0 place-items-center rounded-full bg-lilac font-display font-extrabold text-plum">${i + 1}</span><div><h3 class="font-display text-lg font-extrabold">${escapeHtml(n[0])}</h3><p class="mt-1 leading-relaxed text-ink/85">${escapeHtml(n[1])}</p></div></li>`).join('');
    $('#sermon-questions').innerHTML = s.questions.map((q) => `<li class="pl-1.5 leading-relaxed marker:font-display marker:font-extrabold marker:text-apricot-dark">${escapeHtml(q)}</li>`).join('');

    $('#speaker-card').innerHTML = `<div class="flex items-center gap-4"><span class="size-16 shrink-0 overflow-hidden rounded-2xl">${avatar(s.speaker, 'Portrait of ' + sp.name)}</span><div><p class="font-display text-lg font-extrabold">${escapeHtml(sp.name)}</p><p class="text-sm text-muted">${escapeHtml(sp.role)}</p></div></div><p class="mt-4 text-sm leading-relaxed text-muted">${escapeHtml(sp.bio)}</p><a href="guides.html?speaker=${s.speaker}" class="link mt-4 inline-block text-sm">More from ${escapeHtml(sp.name.split(' ')[0])}</a>`;

    const inSeries = SERMONS.filter((x) => x.series === s.series).sort((a, b) => a.day - b.day);
    $('#series-list').innerHTML = inSeries.map((x, i) => {
      const cur = x.id === s.id;
      return `<li><a href="guide.html?id=${x.id}"${cur ? ' aria-current="page"' : ''} class="flex items-center gap-3 rounded-2xl px-3 py-2.5 transition hover:bg-sand aria-[current=page]:bg-lilac"><span class="grid size-8 shrink-0 place-items-center rounded-full ${cur ? 'bg-plum text-white' : 'bg-sand text-ink'} text-sm font-extrabold">${i + 1}</span><span class="min-w-0"><span class="block truncate font-bold">${escapeHtml(x.title)}</span><span class="block text-xs text-muted">${escapeHtml(x.passage)} · ${shortDate(x.day)}</span></span></a></li>`;
    }).join('');
    setText('#series-blurb', series.blurb);

    // Related: rest of the series first, then the same speaker.
    const related = SERMONS.filter((x) => x.id !== s.id && x.series === s.series)
      .concat(SERMONS.filter((x) => x.id !== s.id && x.series !== s.series && x.speaker === s.speaker))
      .slice(0, 3);
    const progress = readProgress();
    $('#related-list').innerHTML = related.map((x) => '<li class="flex">' + sermonCard(x, progress).replace('<article class="', '<article class="w-full ') + '</li>').join('');

    // Copy discussion questions.
    const copyBtn = $('#copy-questions');
    if (copyBtn) {
      copyBtn.addEventListener('click', () => {
        const text = s.title + ' (' + s.passage + ')\n\n' + s.questions.map((q, i) => (i + 1) + '. ' + q).join('\n');
        const done = (ok) => {
          $('#copy-status').textContent = ok ? 'Questions copied to your clipboard.' : 'Copy failed. Select the questions and copy them instead.';
        };
        if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(text).then(() => done(true), () => done(false));
        else done(false);
      });
    }
  }

  /* ------------------------------------------------------------------
   * 11. Events calendar — month grid and list, category filter,
   *     detail dialog and .ics download.
   *     schedule.html?view=list&cat=kids,serve&month=2026-11&event=block-party-2026-10-24
   * ------------------------------------------------------------------ */
  function eventMeta(o) {
    return longDate(o.day) + ' · ' + fmtTime(o.ev.start) + '–' + fmtTime(o.ev.end);
  }

  function icsText(s) { return String(s).replace(/\\/g, '\\\\').replace(/;/g, '\\;').replace(/,/g, '\\,').replace(/\r?\n/g, '\\n'); }
  // Lines longer than 75 bytes are folded (RFC 5545), counting UTF-8 bytes, not characters.
  function icsFold(line) {
    const out = [];
    let cur = '', bytes = 0;
    Array.from(line).forEach((ch) => {
      const b = new TextEncoder().encode(ch).length;
      if (bytes + b > 74) { out.push(cur); cur = ' '; bytes = 1; }
      cur += ch;
      bytes += b;
    });
    out.push(cur);
    return out.join('\r\n');
  }
  const icsStamp = (d) => d.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
  // A standards-compliant calendar file for one occurrence, with times in UTC.
  function buildIcs(o) {
    const e = o.ev;
    const lines = [
      'BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Mini Moguls Market Day//Events//EN', 'CALSCALE:GREGORIAN', 'METHOD:PUBLISH',
      'BEGIN:VEVENT',
      'UID:' + o.key + '@' + CHURCH.uidDomain,
      'DTSTAMP:' + icsStamp(new Date()),
      'DTSTART:' + icsStamp(zonedToDate(o.day, mins(e.start))),
      'DTEND:' + icsStamp(zonedToDate(o.day, mins(e.end))),
      'SUMMARY:' + icsText(e.title),
      'LOCATION:' + icsText(e.place + ', ' + CHURCH.place),
      'DESCRIPTION:' + icsText(e.summary),
      'END:VEVENT', 'END:VCALENDAR'
    ];
    return lines.map(icsFold).join('\r\n') + '\r\n';
  }
  function downloadIcs(o) {
    const blob = new Blob([buildIcs(o)], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = o.key + '.ics';
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1500);
  }

  function eventCard(o, opts) {
    const c = EVENT_CATS[o.ev.cat];
    return `<li><button type="button" data-open-event="${o.key}" class="group card card-hover flex w-full items-start gap-4 p-4 text-left sm:p-5">
      <span class="grid w-14 shrink-0 place-items-center rounded-2xl bg-sand py-2 text-center"><span class="text-[11px] font-extrabold uppercase tracking-wider text-apricot-dark">${fmtDay(o.day, { month: 'short' })}</span><span class="font-display text-2xl font-extrabold leading-none">${fmtDay(o.day, { day: 'numeric' })}</span></span>
      <span class="min-w-0 flex-1">
        <span class="inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-bold ${c.chip}">${escapeHtml(c.label)}</span>
        <span class="mt-1.5 block font-display text-lg font-extrabold leading-snug group-hover:text-plum">${escapeHtml(o.ev.title)}</span>
        <span class="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted"><span class="inline-flex items-center gap-1.5">${ICON.clock}${fmtDay(o.day, { weekday: 'short' })} ${fmtTime(o.ev.start)}</span>${opts && opts.place ? `<span class="inline-flex min-w-0 items-center gap-1.5">${ICON.pin}<span class="truncate">${escapeHtml(o.ev.place)}</span></span>` : ''}</span>
      </span>
    </button></li>`;
  }

  // Event dialog, shared by the events and home pages.
  function setupEventDialog() {
    const dlg = $('#event-dialog');
    if (!dlg) return null;
    let current = null;
    let opener = null;
    function open(o, from) {
      current = o;
      opener = from || document.activeElement;
      const c = EVENT_CATS[o.ev.cat];
      $('[data-ev="cat"]', dlg).className = 'inline-flex items-center rounded-full px-3 py-1 text-xs font-bold ' + c.chip;
      $('[data-ev="cat"]', dlg).textContent = c.label;
      $('[data-ev="title"]', dlg).textContent = o.ev.title;
      $('[data-ev="when"]', dlg).textContent = eventMeta(o);
      $('[data-ev="where"]', dlg).textContent = o.ev.place;
      $('[data-ev="summary"]', dlg).textContent = o.ev.summary;
      $('[data-ev="repeat"]', dlg).textContent = o.ev.weekly ? 'Every ' + fmtDay(o.day, { weekday: 'long' }) + ' until ' + longDate(o.ev.until) + '.' : '';
      $('[data-ev="status"]', dlg).textContent = '';
      if (typeof dlg.showModal === 'function') dlg.showModal(); else dlg.setAttribute('open', '');
      $('[data-ev="title"]', dlg).focus();
      const p = urlParams(); p.set('event', o.key); setUrl(p);
    }
    function close() {
      if (typeof dlg.close === 'function') dlg.close(); else dlg.removeAttribute('open');
    }
    dlg.addEventListener('close', () => {
      const p = urlParams(); p.delete('event'); setUrl(p);
      if (opener && document.contains(opener)) opener.focus();
    });
    dlg.addEventListener('click', (e) => { if (e.target === dlg) close(); });
    $$('[data-ev-close]', dlg).forEach((b) => b.addEventListener('click', close));
    $('[data-ev="ics"]', dlg).addEventListener('click', () => {
      if (!current) return;
      downloadIcs(current);
      $('[data-ev="status"]', dlg).textContent = 'Downloaded ' + current.key + '.ics. Open it to add the event to your calendar.';
    });
    document.addEventListener('click', (e) => {
      const b = e.target.closest('[data-open-event]');
      if (!b) return;
      const o = OCCURRENCES.find((x) => x.key === b.getAttribute('data-open-event'));
      if (o) open(o, b);
    });
    return { open };
  }

  function initEvents() {
    const grid = $('#cal-grid');
    if (!grid) return;
    const dialog = setupEventDialog();
    const params = urlParams();
    const today = TODAY;
    const state = {
      view: params.get('view') === 'list' ? 'list' : 'month',
      cats: urlValues(params, 'cat', EVENT_CATS),
      month: null,
      selected: today
    };
    const mm = /^(\d{4})-(\d{2})$/.exec(params.get('month') || '');
    const todayDate = new Date(today * 864e5);
    state.month = mm && +mm[2] >= 1 && +mm[2] <= 12 ? { y: +mm[1], m: +mm[2] - 1 } : { y: todayDate.getUTCFullYear(), m: todayDate.getUTCMonth() };
    if (mm) state.selected = Math.round(Date.UTC(state.month.y, state.month.m, 1) / 864e5);

    // Category pills
    const catBox = $('#cal-cats');
    catBox.innerHTML = Object.keys(EVENT_CATS).map((k) => `<label class="pill"><input type="checkbox" class="sr-only" value="${k}"${state.cats.indexOf(k) !== -1 ? ' checked' : ''}><span class="chip-dot ${EVENT_CATS[k].dot}" aria-hidden="true"></span>${escapeHtml(EVENT_CATS[k].label)}</label>`).join('');
    catBox.addEventListener('change', () => { state.cats = $$('input:checked', catBox).map((i) => i.value); render(true); });

    const visible = () => OCCURRENCES.filter((o) => !state.cats.length || state.cats.indexOf(o.ev.cat) !== -1);

    function writeUrl() {
      const p = new URLSearchParams();
      if (state.view === 'list') p.set('view', 'list');
      if (state.cats.length) p.set('cat', state.cats.join(','));
      if (state.view === 'month') p.set('month', state.month.y + '-' + String(state.month.m + 1).padStart(2, '0'));
      const ev = urlParams().get('event');
      if (ev) p.set('event', ev);
      setUrl(p);
    }

    function renderMonth(list) {
      const first = Math.round(Date.UTC(state.month.y, state.month.m, 1) / 864e5);
      const daysIn = new Date(Date.UTC(state.month.y, state.month.m + 1, 0)).getUTCDate();
      const start = first - weekday(first);
      const weeks = Math.ceil((weekday(first) + daysIn) / 7);
      const byDay = {};
      list.forEach((o) => { (byDay[o.day] = byDay[o.day] || []).push(o); });
      $('#cal-title').textContent = fmtDay(first, { month: 'long', year: 'numeric' });
      let html = '<table class="w-full table-fixed border-collapse"><caption class="sr-only">Events in ' + escapeHtml(fmtDay(first, { month: 'long', year: 'numeric' })) + '</caption><thead><tr>';
      ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].forEach((d, i) => {
        html += `<th scope="col" class="pb-3 text-center text-xs font-extrabold uppercase tracking-wider text-muted"><abbr title="${['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][i]}" class="no-underline">${d}</abbr></th>`;
      });
      html += '</tr></thead><tbody>';
      for (let w = 0; w < weeks; w++) {
        html += '<tr>';
        for (let i = 0; i < 7; i++) {
          const d = start + w * 7 + i;
          const inMonth = d >= first && d < first + daysIn;
          const evs = inMonth ? (byDay[d] || []) : [];
          const isToday = d === today;
          const isSel = d === state.selected;
          html += `<td class="h-16 border border-line p-1 align-top sm:h-36 sm:p-1.5 ${inMonth ? 'bg-shell' : 'bg-sand/50'}">`;
          if (inMonth) {
            const label = longDate(d) + (evs.length ? ', ' + plural(evs.length, 'event', 'events') : ', no events') + (isToday ? ', today' : '');
            html += `<button type="button" data-day="${d}" aria-pressed="${isSel}" aria-label="${escapeHtml(label)}" class="flex w-full flex-col items-center gap-1 rounded-xl p-1 transition hover:bg-sand sm:items-start ${isSel ? 'bg-lilac' : ''}">
              <span class="grid size-7 place-items-center rounded-full text-sm font-extrabold ${isToday ? 'bg-plum text-white' : ''}">${fmtDay(d, { day: 'numeric' })}</span>
              ${evs.length ? `<span class="flex gap-1 sm:hidden" aria-hidden="true">${evs.slice(0, 3).map((o) => `<span class="chip-dot size-1.5 ${EVENT_CATS[o.ev.cat].dot}"></span>`).join('')}</span>` : ''}
            </button>
            <ul class="mt-0.5 hidden space-y-1 sm:block">${evs.slice(0, 2).map((o) => `<li><button type="button" data-open-event="${o.key}" class="block w-full rounded-lg px-2 py-1.5 text-left text-[12px] leading-tight ${EVENT_CATS[o.ev.cat].chip} hover:brightness-95"><span class="sr-only">${escapeHtml(longDate(d))}: </span><span class="block font-semibold">${fmtTime(o.ev.start)}</span><span class="line-clamp-2 font-extrabold">${escapeHtml(o.ev.title)}</span></button></li>`).join('')}${evs.length > 2 ? `<li><button type="button" data-day="${d}" class="px-1.5 text-[12px] font-bold text-plum hover:underline">+${evs.length - 2} more<span class="sr-only"> on ${escapeHtml(longDate(d))}</span></button></li>` : ''}</ul>`;
          } else {
            html += `<span class="grid size-7 place-items-center text-sm font-bold text-muted" aria-hidden="true">${fmtDay(d, { day: 'numeric' })}</span>`;
          }
          html += '</td>';
        }
        html += '</tr>';
      }
      grid.innerHTML = html + '</tbody></table>';

      // Agenda for the selected day.
      const dayEvs = byDay[state.selected] || [];
      const inThisMonth = state.selected >= first && state.selected < first + daysIn;
      $('#cal-day-title').textContent = inThisMonth ? longDate(state.selected) : 'Pick a day';
      $('#cal-day-list').innerHTML = dayEvs.length
        ? dayEvs.map((o) => eventCard(o, { place: true })).join('')
        : `<li class="rounded-2xl border border-dashed border-ink/20 p-5 text-sm text-muted">${inThisMonth ? 'Nothing on this day' + (state.cats.length ? ' in the selected categories' : '') + '. Pick another day, or switch to the list.' : 'Choose a date in the calendar to see what’s on.'}</li>`;
      // Coming up after the selected day.
      const after = list.filter((o) => o.day > state.selected && !o.ev.weekly).slice(0, 3);
      $('#cal-next-list').innerHTML = after.map((o) => eventCard(o)).join('') ||
        '<li class="rounded-2xl border border-dashed border-ink/20 p-5 text-sm text-muted">Nothing else scheduled yet.</li>';
    }

    function renderList(list) {
      const upcoming = list.filter((o) => o.day >= today);
      const weeklyIds = {};
      const weekly = [];
      const once = [];
      upcoming.forEach((o) => {
        if (o.ev.weekly) { if (!weeklyIds[o.ev.id]) { weeklyIds[o.ev.id] = 1; weekly.push(o); } } else once.push(o);
      });
      let html = '';
      if (weekly.length) {
        html += `<section aria-labelledby="weekly-h" class="rounded-[1.75rem] bg-sand p-5 sm:p-6"><h3 id="weekly-h" class="font-display text-lg font-extrabold">Every week</h3><ul class="mt-4 grid gap-3 md:grid-cols-2">${weekly.map((o) => `<li><button type="button" data-open-event="${o.key}" class="flex w-full items-center gap-3 rounded-2xl bg-shell p-4 text-left shadow-soft transition hover:-translate-y-0.5"><span class="chip-dot size-2.5 ${EVENT_CATS[o.ev.cat].dot}" aria-hidden="true"></span><span class="min-w-0"><span class="block font-bold">${escapeHtml(o.ev.title)}</span><span class="block text-sm text-muted">${fmtDay(o.day, { weekday: 'long' })}s, ${fmtTime(o.ev.start)}–${fmtTime(o.ev.end)}</span></span></button></li>`).join('')}</ul></section>`;
      }
      const months = {};
      const order = [];
      once.forEach((o) => {
        const k = ymd(o.day).slice(0, 7);
        if (!months[k]) { months[k] = []; order.push(k); }
        months[k].push(o);
      });
      order.forEach((k) => {
        html += `<section class="mt-10" aria-labelledby="m-${k}"><h3 id="m-${k}" class="font-display text-2xl font-extrabold">${fmtDay(months[k][0].day, { month: 'long', year: 'numeric' })}</h3><ul class="mt-4 grid gap-3 lg:grid-cols-2">${months[k].map((o) => eventCard(o, { place: true })).join('')}</ul></section>`;
      });
      if (!once.length && !weekly.length) html = '<p class="rounded-2xl border border-dashed border-ink/20 p-6 text-muted">No upcoming events in these categories.</p>';
      $('#cal-list').innerHTML = html;
    }

    function render(updateUrl) {
      const list = visible();
      const isList = state.view === 'list';
      $('#cal-month').hidden = isList;
      $('#cal-list').hidden = !isList;
      $$('[data-view]').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.view === state.view)));
      if (isList) renderList(list); else renderMonth(list);
      const n = list.filter((o) => o.day >= today && !o.ev.weekly).length;
      $('#cal-count').textContent = plural(n, 'upcoming event', 'upcoming events') + (state.cats.length ? ' in ' + state.cats.map((k) => EVENT_CATS[k].label).join(', ') : '') + ', plus Saturday family prep milestones';
      if (updateUrl) writeUrl();
    }

    $$('[data-view]').forEach((b) => b.addEventListener('click', () => { state.view = b.dataset.view; render(true); }));
    function moveMonth(delta) {
      const d = new Date(Date.UTC(state.month.y, state.month.m + delta, 1));
      state.month = { y: d.getUTCFullYear(), m: d.getUTCMonth() };
      const first = Math.round(d.getTime() / 864e5);
      state.selected = first <= today && today < first + 31 && new Date(today * 864e5).getUTCMonth() === state.month.m ? today : first;
      render(true);
    }
    $('#cal-prev').addEventListener('click', () => moveMonth(-1));
    $('#cal-next').addEventListener('click', () => moveMonth(1));
    $('#cal-today').addEventListener('click', () => {
      const d = new Date(today * 864e5);
      state.month = { y: d.getUTCFullYear(), m: d.getUTCMonth() };
      state.selected = today;
      render(true);
    });
    grid.addEventListener('click', (e) => {
      const b = e.target.closest('[data-day]');
      if (!b) return;
      state.selected = +b.dataset.day;
      render(false);
      const again = $('[data-day="' + state.selected + '"]', grid);
      if (again) again.focus();
      if (window.innerWidth < 1024) $('#cal-day').scrollIntoView({ block: 'nearest', behavior: reduceMotion ? 'auto' : 'smooth' });
    });
    render(false);
    const evKey = params.get('event');
    const o = evKey && OCCURRENCES.find((x) => x.key === evKey.toLowerCase());
    if (o && dialog) dialog.open(o);
  }

  /* ------------------------------------------------------------------
   * 12. Groups finder — zones.html?day=tue,thu&area=west&stage=families&childcare=1
   * ------------------------------------------------------------------ */
  function initGroups() {
    const list = $('#group-list');
    if (!list) return;
    const facets = { day: DAYS, area: AREAS, stage: STAGES };
    const params = urlParams();
    const state = { day: urlValues(params, 'day', DAYS), area: urlValues(params, 'area', AREAS), stage: urlValues(params, 'stage', STAGES), childcare: params.get('childcare') === '1' };
    const care = $('#g-childcare');
    care.checked = state.childcare;

    function matches(g, skip) {
      return Object.keys(facets).every((f) => f === skip || !state[f].length || state[f].indexOf(g[f]) !== -1) && (!state.childcare || g.childcare);
    }
    function renderFacets() {
      Object.keys(facets).forEach((f) => {
        const box = $('#facet-' + f);
        box.innerHTML = Object.keys(facets[f]).map((k) => {
          const n = GROUPS.filter((g) => g[f] === k && matches(g, f)).length;
          const on = state[f].indexOf(k) !== -1;
          return `<label class="pill"><input type="checkbox" class="sr-only" name="${f}" value="${k}"${on ? ' checked' : ''}${!n && !on ? ' disabled' : ''}>${escapeHtml(f === 'day' ? facets[f][k].slice(0, 3) : facets[f][k])}<span class="text-xs font-semibold opacity-70">${n}</span></label>`;
        }).join('');
      });
    }
    function card(g) {
      const full = g.spots === 0;
      return `<li class="flex"><article class="card flex w-full flex-col p-6">
        <div class="flex items-start justify-between gap-4">
          <span class="grid shrink-0 place-items-center rounded-2xl bg-lilac px-3 py-2 text-center"><span class="text-[11px] font-extrabold uppercase tracking-wider text-plum">${DAYS[g.day].slice(0, 3)}</span><span class="font-display text-base font-extrabold leading-tight">${fmtTime(g.time)}</span></span>
          <span class="rounded-full px-3 py-1 text-xs font-bold ${full ? 'bg-sand text-muted' : 'bg-sage-light text-sage-dark'}">${full ? 'Track Waitlist' : plural(g.spots, 'stall slot', 'stall slots') + ' open'}</span>
        </div>
        <h3 class="mt-5 font-display text-xl font-extrabold leading-snug">${escapeHtml(g.name)}</h3>
        <p class="mt-2 flex-1 leading-relaxed text-muted">${escapeHtml(g.blurb)}</p>
        <ul class="mt-5 space-y-1.5 text-sm">
          <li class="flex items-center gap-2">${ICON.pin}<span>${escapeHtml(g.where)}, <span class="text-muted">${escapeHtml(AREAS[g.area])}</span></span></li>
          <li class="flex items-center gap-2">${ICON.user}<span>Format: ${escapeHtml(g.host)}</span></li>
        </ul>
        <div class="mt-5 flex flex-wrap gap-2"><span class="tag">${escapeHtml(STAGES[g.stage])}</span>${g.childcare ? '<span class="tag bg-river-light text-river-dark">Family Assisted</span>' : ''}</div>
        <a href="contact.html?topic=groups&amp;group=${g.id}" class="btn-outline btn-sm mt-6 self-start">${full ? 'Join the waitlist' : 'Enquire / Register'}<span class="sr-only"> ${escapeHtml(g.name)}</span></a>
      </article></li>`;
    }
    function render(updateUrl) {
      const hits = GROUPS.filter((g) => matches(g));
      renderFacets();
      list.innerHTML = hits.map(card).join('');
      $('#group-empty').hidden = hits.length > 0;
      $('#group-count').textContent = hits.length === GROUPS.length ? 'All ' + GROUPS.length + ' showcase tracks' : plural(hits.length, 'showcase track matches', 'showcase tracks match') + ' your filters';
      const any = state.day.length || state.area.length || state.stage.length || state.childcare;
      $('#g-clear').hidden = !any;
      if (updateUrl) {
        const p = new URLSearchParams();
        Object.keys(facets).forEach((f) => { if (state[f].length) p.set(f, state[f].join(',')); });
        if (state.childcare) p.set('childcare', '1');
        setUrl(p);
      }
    }
    $('#group-filters').addEventListener('submit', (e) => e.preventDefault());
    $('#group-filters').addEventListener('change', (e) => {
      const t = e.target;
      if (t === care) state.childcare = care.checked;
      else if (facets[t.name]) state[t.name] = $$('input[name="' + t.name + '"]:checked').map((i) => i.value);
      render(true);
      const again = t.name && $('input[name="' + t.name + '"][value="' + t.value + '"]');
      if (again) again.focus();
    });
    const clear = () => { state.day = []; state.area = []; state.stage = []; state.childcare = false; care.checked = false; render(true); };
    $('#g-clear').addEventListener('click', clear);
    $$('[data-clear-groups]').forEach((b) => b.addEventListener('click', clear));
    render(false);
  }

  /* ------------------------------------------------------------------
   * 13. Plan your visit — next Sundays, party size, kids' ages, summary
   * ------------------------------------------------------------------ */
  function roomFor(age) { return VISIT.rooms.find((r) => age <= r.upTo) || VISIT.rooms[VISIT.rooms.length - 1]; }

  function initVisit() {
    const form = $('#visit-form');
    if (!form) return;
    const sundaySel = $('#v-sunday');
    const now = churchNow();
    [
      { val: '2026-12-12', text: 'Saturday, 12 December 2026 — Main Market Day (10:00 AM – 4:00 PM)' }
    ].forEach((item) => {
      const o = document.createElement('option');
      o.value = item.val;
      o.textContent = item.text;
      sundaySel.appendChild(o);
    });
    $('#v-times').innerHTML = [
      { start: '10:00', label: 'Young Mogul Stall Registration', sub: '10:00 AM – 4:00 PM Showcase' },
      { start: '11:00', label: 'Family / Visitor Attendance', sub: 'US$5 entry (subject to confirmation)' }
    ].map((s, i) => `<label class="option flex-1 flex-col items-start gap-1"><input type="radio" class="sr-only" name="time" value="${s.start}"${i === 0 ? ' checked' : ''}><span class="font-display text-base font-extrabold">${s.label}</span><span class="text-xs text-muted">${s.sub}</span></label>`).join('');

    const adults = $('#v-adults'), kids = $('#v-kids'), ages = $('#v-ages');
    function stepper(input, min, max) {
      const box = input.closest('[data-stepper]');
      const set = (v) => { input.value = clamp(isFinite(v) ? Math.round(v) : min, min, max); update(); };
      $('[data-step="-1"]', box).addEventListener('click', () => set(+input.value - 1));
      $('[data-step="1"]', box).addEventListener('click', () => set(+input.value + 1));
      input.addEventListener('change', () => set(+input.value));
    }
    stepper(adults, 1, VISIT.maxAdults);
    stepper(kids, 0, VISIT.maxKids);

    function renderAges() {
      const n = +kids.value;
      const have = $$('select', ages);
      for (let i = have.length; i < n; i++) {
        const wrap = document.createElement('div');
        const opts = ['<option value="">Age</option>'].concat(Array.from({ length: 18 }, (_, a) => `<option value="${a}">${a === 0 ? 'Under 1' : a + (a === 1 ? ' year' : ' years')}</option>`)).join('');
        wrap.innerHTML = `<label for="v-age-${i + 1}" class="field-label">Child ${i + 1}</label><select id="v-age-${i + 1}" name="age-${i + 1}" class="field" required data-label="Child ${i + 1}’s age">${opts}</select>`;
        ages.appendChild(wrap);
        bindField($('select', wrap));
      }
      have.slice(n).forEach((s) => s.parentElement.remove());
      $('#v-ages-wrap').hidden = n === 0;
    }

    let inService = 0;
    function update() {
      renderAges();
      const day = dayNum(sundaySel.value);
      const time = ($('input[name="time"]:checked', form) || {}).value;
      const a = +adults.value, k = +kids.value;
      const rooms = [];
      inService = 0; // children old enough to sit with you
      $$('select', ages).forEach((s) => {
        if (s.value === '') return;
        const r = roomFor(+s.value);
        if (r === VISIT.rooms[VISIT.rooms.length - 1]) inService++;
        if (rooms.indexOf(r) === -1) rooms.push(r);
      });
      $('#v-summary').innerHTML = `
        <div class="flex items-start gap-3"><span class="mt-0.5 text-apricot">${ICON.cal}</span><p><span class="block font-bold">Saturday, 12 December 2026</span><span class="text-white/75">10:00 AM – 4:00 PM · Harare (Venue TBA)</span></p></div>
        <div class="flex items-start gap-3"><span class="mt-0.5 text-apricot">${ICON.user}</span><p><span class="block font-bold">${plural(a, 'parent/guardian', 'parents/guardians')}${k ? ', ' + plural(k, 'young mogul', 'young moguls') : ''}</span><span class="text-white/75">${time === '10:00' ? 'Stall Registration Enquiry (Fee & deadline TBA)' : 'Public Visitor Plan (US$5/person subject to confirmation)'}</span></p></div>
        ${k ? `<div class="flex items-start gap-3"><span class="mt-0.5 text-apricot">${ICON.pin}</span><p><span class="block font-bold">Age-Group Track Assignment</span><span class="text-white/75">${rooms.length ? rooms.map((r) => escapeHtml(r.name + ' — ' + r.room)).join('<br>') : 'Select each child’s age above to see their official Mogul Track'}</span></p></div>` : ''}`;
    }
    form.addEventListener('change', (e) => { if (!e.target.closest('[data-stepper]')) update(); });
    update();

    setupValidation(form, () => {
      const day = dayNum(sundaySel.value);
      const time = $('input[name="time"]:checked', form).value;
      const name = $('#v-name').value.trim().split(' ')[0];
      // To connect: send new FormData(form) to your form service here (see DOCS.md, Forms).
      successSwap(form, `<p class="font-display text-2xl font-extrabold">Registration Enquiry Ready, ${escapeHtml(name)}!</p>
        <p class="mt-3 leading-relaxed text-muted">Your parent/guardian registration summary for <strong>Saturday, 12 December 2026 (10:00 AM – 4:00 PM · Harare)</strong> has been validated on this device (Ref: <strong class="text-ink">${makeRef('MM')}</strong>).</p>
        <p class="mt-3 rounded-2xl bg-sand p-4 text-sm text-ink"><strong>Important Backend &amp; Confirmation Notice:</strong> A backend form service needs to be connected in <code>assets/js/main.js</code> before online submissions are saved automatically. To confirm your child’s stall or ask about the 5–18 vs 6–18 age-range confirmation, venue TBA, or stall equipment, please call or WhatsApp the organisers directly on <a href="tel:+263771222748" class="link">+263 771 222 748</a> or <a href="tel:+263783116564" class="link">+263 783 116 564</a>.</p>
        <a href="index.html" class="btn-primary mt-6">Back to home</a>`);
    });
  }

  /* ------------------------------------------------------------------
   * 14. Giving form — amount chips, custom amount, fund, cover the fee.
   *     Nothing is charged until you connect your provider in the submit handler.
   * ------------------------------------------------------------------ */
  function feeFor(amount) {
    // What to add so that, after the card fee, the church receives the full amount.
    const gross = (amount + GIVING.fee.fixed) / (1 - GIVING.fee.percent / 100);
    return Math.round((gross - amount) * 100) / 100;
  }

  function initGive() {
    const form = $('#give-form');
    if (!form) return;
    const chips = $('#give-amounts');
    chips.innerHTML = GIVING.amounts.map((a) => `<label class="option justify-center py-3.5 font-display text-xl font-extrabold"><input type="radio" class="sr-only" name="amount" value="${a}"${a === GIVING.defaultAmount ? ' checked' : ''}>$${a}</label>`).join('');
    const custom = $('#g-custom');
    const fund = $('#g-fund');
    fund.innerHTML = Object.keys(GIVING.funds).map((k) => `<option value="${k}">${escapeHtml(GIVING.funds[k])}</option>`).join('');
    const pf = urlValues(urlParams(), 'fund', GIVING.funds)[0];
    if (pf) fund.value = pf;
    const cover = $('#g-cover');
    $('#g-fee-rate').textContent = GIVING.fee.percent + '% + ' + money.format(GIVING.fee.fixed);

    function amount() {
      const c = custom.value.replace(/[$,\s]/g, '');
      if (c !== '') return /^\d+(\.\d{1,2})?$/.test(c) ? +c : NaN;
      const r = $('input[name="amount"]:checked', form);
      return r ? +r.value : NaN;
    }
    function update() {
      const a = amount();
      const ok = isFinite(a) && a >= GIVING.min && a <= GIVING.max;
      const fee = ok ? feeFor(a) : 0;
      const freq = $('input[name="frequency"]:checked', form).value;
      const per = { once: 'Cash Sponsorship', weekly: 'In-Kind / Equipment', monthly: 'Cash + In-Kind Mix' }[freq] || 'Partnership Proposal';
      $('#g-fee').textContent = 'No online fee';
      $('#give-total').textContent = ok ? money.format(a) : '—';
      $('#give-total-note').textContent = ok
        ? 'Proposed indicative partnership budget (' + per + '). No online payment is collected on this website—all sponsorship options are open for discussion with the organisers.'
        : 'Choose or enter an indicative sponsorship budget for discussion.';
      $('#give-per').textContent = per;
      $('#give-fund-label').textContent = GIVING.funds[fund.value];
      $('#give-submit').textContent = ok ? 'Record Partnership Interest (' + money.format(a) + ')' : 'Submit Partnership Interest';
    }
    // Typing a custom amount clears the chips; picking a chip clears the custom amount.
    custom.addEventListener('input', () => { if (custom.value.trim()) $$('input[name="amount"]', form).forEach((r) => { r.checked = false; }); update(); });
    chips.addEventListener('change', () => { custom.value = ''; showError(custom, ''); update(); });
    form.addEventListener('change', update);
    update();

    setupValidation(form, () => {
      const a = amount();
      const fee = cover.checked ? feeFor(a) : 0;
      const freq = $('input[name="frequency"]:checked', form).value;
      // Connect your payment provider here (Stripe Checkout, PayPal, Tithe.ly, Planning Center
      // Giving...): create a checkout session on your server and redirect to it. See DOCS.md.
      successSwap(form, `<p class="font-display text-2xl font-extrabold">Thank you for supporting young moguls, ${escapeHtml($('#g-name').value.trim().split(' ')[0])}!</p>
        <p class="mt-3 leading-relaxed text-muted">Your indicative partnership interest of <strong>${money.format(a)}</strong> toward <strong>${escapeHtml(GIVING.funds[fund.value])}</strong> has been prepared (Ref: <strong class="text-ink">${makeRef('MM')}</strong>).</p>
        <p class="mt-3 rounded-2xl bg-sand p-4 text-sm text-ink"><strong>No Online Payment Collected:</strong> Specific sponsorship tiers are not pre-packaged and no payment is processed on this site. Connect your form endpoint in <code>assets/js/main.js</code> or contact the Harare organising team directly on <a href="tel:+263771222748" class="link">+263 771 222 748</a> or <a href="tel:+263783116564" class="link">+263 783 116 564</a> to discuss custom partnership opportunities.</p>
        <a href="index.html" class="btn-primary mt-6">Back to home</a>`);
    }, () => {
      const raw = custom.value.trim();
      const a = amount();
      let msg = '';
      if (raw === '' && !isFinite(a)) msg = 'Choose an amount or enter your own.';
      else if (raw !== '' && !isFinite(a)) msg = 'Enter an amount in dollars, like 75 or 75.50.';
      else if (a < GIVING.min) msg = 'The smallest gift is ' + money.format(GIVING.min) + '.';
      else if (a > GIVING.max) msg = 'For gifts over ' + money.format(GIVING.max) + ', please contact our office.';
      return { el: custom, msg };
    });
  }

  /* ------------------------------------------------------------------
   * 15. Forms — inline validation, success state. They send nothing until connected.
   * ------------------------------------------------------------------ */
  function fieldMessage(el) {
    const v = el.value.trim();
    const label = el.getAttribute('data-label') || 'This field';
    if (el.type === 'checkbox') return el.required && !el.checked ? (el.getAttribute('data-msg') || 'Please tick this box.') : '';
    if (el.required && !v) return el.tagName === 'SELECT' ? 'Please choose ' + label.charAt(0).toLowerCase() + label.slice(1) + '.' : label + ' is required.';
    if (!v) return '';
    const rule = el.getAttribute('data-validate') || el.type;
    if (rule === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)) return 'Enter an email address like name@example.com.';
    if (rule === 'tel' && !/^[+()\d\s.-]{7,20}$/.test(v)) return 'Enter a phone number, digits only.';
    const min = +el.getAttribute('minlength');
    if (min && v.length < min) return label + ' needs at least ' + min + ' characters.';
    return '';
  }

  function showError(el, msg) {
    const errId = el.id + '-error';
    let err = document.getElementById(errId);
    if (!err) {
      if (!msg) { el.removeAttribute('aria-invalid'); return; }
      err = document.createElement('p');
      err.id = errId;
      err.className = 'field-error';
      (el.closest('[data-error-after]') || el).insertAdjacentElement('afterend', err);
    }
    err.textContent = msg;
    if (msg) {
      el.setAttribute('aria-invalid', 'true');
      const desc = (el.getAttribute('aria-describedby') || '').split(' ').filter(Boolean);
      if (desc.indexOf(errId) === -1) desc.push(errId);
      el.setAttribute('aria-describedby', desc.join(' '));
    } else {
      el.removeAttribute('aria-invalid');
    }
  }

  function fieldsOf(root) {
    return $$('input, select, textarea', root).filter((el) =>
      el.type !== 'radio' && el.type !== 'hidden' && el.type !== 'submit' && el.id && !el.hasAttribute('data-novalidate'));
  }
  function bindField(el) {
    el.addEventListener('blur', () => { if (el.value.trim() || el.hasAttribute('aria-invalid')) showError(el, fieldMessage(el)); });
    el.addEventListener('input', () => { if (el.hasAttribute('aria-invalid')) showError(el, fieldMessage(el)); });
    el.addEventListener('change', () => { if (el.hasAttribute('aria-invalid')) showError(el, fieldMessage(el)); });
  }

  // extra(): optional custom check returning { el, msg } or null.
  function setupValidation(form, onValid, extra) {
    form.setAttribute('novalidate', '');
    fieldsOf(form).forEach(bindField);
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let firstBad = null;
      fieldsOf(form).forEach((el) => {
        const msg = fieldMessage(el);
        showError(el, msg);
        if (msg && !firstBad) firstBad = el;
      });
      if (extra) {
        const r = extra();
        if (r && r.msg) { showError(r.el, r.msg); if (!firstBad) firstBad = r.el; }
      }
      const status = $('[data-form-status]', form);
      if (firstBad) {
        if (status) status.textContent = 'Please fix the highlighted fields.';
        firstBad.focus();
        return;
      }
      if (status) status.textContent = '';
      onValid(form);
    });
  }

  // A short reference for confirmations, like RC-7K2Q (no 0/O or 1/I to misread over the phone).
  function makeRef(prefix) {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let out = '';
    for (let i = 0; i < 4; i++) out += chars.charAt(Math.floor(Math.random() * chars.length));
    return prefix + '-' + out;
  }

  function successSwap(form, html) {
    const box = document.createElement('div');
    box.setAttribute('role', 'status');
    box.setAttribute('tabindex', '-1');
    box.className = 'card p-7 text-ink focus:outline-none sm:p-9';
    box.innerHTML = '<svg viewBox="0 0 48 48" class="mb-5 h-12 w-12" aria-hidden="true"><circle cx="24" cy="24" r="24" fill="#e6efe0"/><path d="m15 24.5 6 6 12-13" fill="none" stroke="#33603b" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/></svg>' + html;
    form.replaceWith(box);
    box.focus();
  }

  function initForms() {
    // To connect a form: replace successSwap(...) with a fetch() to your form service, e.g.
    // fetch('https://formspree.io/f/your-id', { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } })
    $$('[data-form="newsletter"]').forEach((form) => setupValidation(form, () => {
      successSwap(form, '<p class="font-display text-xl font-extrabold">You’re on the Mini Moguls update list!</p><p class="mt-2 text-muted">Note: Connect a newsletter service in <code>assets/js/main.js</code> to save email sign-ups automatically. For immediate updates on Venue TBA and registration deadlines, call <a href="tel:+263771222748" class="link">+263 771 222 748</a>.</p>');
    }));

    const contact = $('#contact-form');
    if (contact) {
      // contact.html?topic=groups&group=west-side-families pre-fills the form.
      const p = urlParams();
      const topic = $('#c-topic');
      const t = (p.get('topic') || '').toLowerCase();
      if ($('option[value="' + t.replace(/[^a-z-]/g, '') + '"]', topic)) topic.value = t;
      const g = GROUPS.find((x) => x.id === (p.get('group') || '').toLowerCase());
      if (g) {
        topic.value = 'groups';
        $('#c-message').value = 'Hi Mini Moguls team! I would like to enquire about registering a stall in “' + g.name + '” (' + AREAS[g.area] + ') for Saturday, 12 December 2026. ';
        const note = $('#c-group-note');
        note.textContent = 'You are enquiring about Showcase Track: ' + g.name + ' (' + AREAS[g.area] + ').';
        note.hidden = false;
      }
      setupValidation(contact, () => {
        successSwap(contact, `<p class="font-display text-2xl font-extrabold">Thanks, ${escapeHtml($('#c-name').value.trim().split(' ')[0])}!</p><p class="mt-3 leading-relaxed text-muted">Your enquiry has been validated in the browser (Ref: <strong class="text-ink">${makeRef('MM')}</strong>). Because a backend form endpoint must be connected in <code>assets/js/main.js</code> before messages are transmitted automatically, please also reach the Harare organising team directly on <a href="tel:+263771222748" class="link">+263 771 222 748</a> or <a href="tel:+263783116564" class="link">+263 783 116 564</a>.</p>`);
      });
    }

    const prayer = $('#prayer-form');
    if (prayer) {
      const follow = $('#p-follow'), email = $('#p-email'), priv = $('#p-private');
      const sync = () => {
        email.required = follow.checked;
        $('#p-email-req').hidden = !follow.checked;
        if (!follow.checked && email.hasAttribute('aria-invalid')) showError(email, fieldMessage(email));
        $('#p-who').textContent = priv.checked ? 'Marked for direct organiser review only.' : 'Shared with the Mini Moguls Market Day stall preparation & support team.';
      };
      follow.addEventListener('change', sync);
      priv.addEventListener('change', sync);
      sync();
      setupValidation(prayer, () => {
        const name = $('#p-name').value.trim().split(' ')[0];
        successSwap(prayer, `<p class="font-display text-2xl font-extrabold">${name ? 'Great idea, ' + escapeHtml(name) + '!' : 'Thank you for sharing your stall idea!'}</p>
          <p class="mt-3 leading-relaxed text-muted">Your young mogul product concept or question has been checked on this device. Connect a backend form endpoint in <code>assets/js/main.js</code> to store submissions, or call the organisers directly on <a href="tel:+263771222748" class="link">+263 771 222 748</a> / <a href="tel:+263783116564" class="link">+263 783 116 564</a>.</p>`);
      });
    }
  }

  /* ------------------------------------------------------------------
   * 16. Boot — home, about and shared pieces
   * ------------------------------------------------------------------ */
  function initHome() {
    const latest = $('#latest-sermon');
    if (latest) {
      const s = SERMONS[0];
      const series = SERIES[s.series];
      $('#latest-title').textContent = s.title;
      $('#latest-meta').textContent = series.title + ', part ' + s.part + ' · ' + PEOPLE[s.speaker].name + ' · ' + longDate(s.day);
      $('#latest-summary').textContent = s.summary;
      $('#latest-link').href = 'guide.html?id=' + s.id;
      $('#latest-art').innerHTML = seriesArt(s.series, s.part);
      mountPlayer(latest, s);
    }
    const evList = $('#home-events');
    if (evList) {
      setupEventDialog();
      const next = OCCURRENCES.filter((o) => o.day >= TODAY && !o.ev.weekly).slice(0, 4);
      evList.innerHTML = next.map((o) => eventCard(o, { place: true })).join('');
    }
  }

  function initAbout() {
    const grid = $('#staff-grid');
    if (!grid) return;
    grid.innerHTML = STAFF.map((id) => {
      const p = PEOPLE[id];
      return `<li class="reveal card flex flex-col overflow-hidden"><div class="art aspect-square overflow-hidden">${avatar(id, 'Illustrated portrait of ' + p.name)}</div><div class="flex flex-1 flex-col p-5"><h3 class="font-display text-lg font-extrabold">${escapeHtml(p.name)}</h3><p class="text-sm font-bold text-apricot-dark">${escapeHtml(p.role)}</p><p class="mt-3 flex-1 text-sm leading-relaxed text-muted">${escapeHtml(p.bio)}</p><a href="mailto:${p.email}" class="link mt-4 inline-block self-start break-all text-sm">${p.email}</a></div></li>`;
    }).join('');
  }

  hydrateArt(document);
  updateStatus();
  setInterval(updateStatus, 30000);
  initCountdowns();
  const page = document.body.dataset.page;
  if (page === 'home') initHome();
  if (page === 'guides' || page === 'sermons') initSermons();
  if (page === 'guide' || page === 'sermon') initSermon();
  if (page === 'schedule' || page === 'events') initEvents();
  if (page === 'zones' || page === 'groups') initGroups();
  if (page === 'register' || page === 'visit') initVisit();
  if (page === 'sponsors' || page === 'give') initGive();
  if (page === 'about') initAbout();
  initForms();
  reveal(document);
})();

/* ---------- Back to top ----------
   A button that fades in after you scroll about one screen down. It returns to
   the top (instantly if the visitor prefers reduced motion) and moves keyboard
   focus to the main content. It lifts itself above toasts so they never overlap, and
   steps aside while an in-page "Back to top" link (e.g. in the footer) is on screen.
   Mark your own UI with data-back-to-top-avoid (lift above it) or data-back-to-top-hide
   (hide while covering it). To remove the button: delete this block and the .back-to-top
   styles in src/input.css. */
(function () {
  'use strict';
  if (document.querySelector('.back-to-top')) return;

  var btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'back-to-top';
  btn.setAttribute('aria-label', 'Back to top');
  btn.title = 'Back to top';
  btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M12 19V5"/><path d="m5 12 7-7 7 7"/></svg>';
  document.body.appendChild(btn);

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  // Fixed UI the button should never sit on top of (toasts, snackbars...).
  var AVOID = '[data-toast], #toast, .toast, [data-back-to-top-avoid]';
  var queued = false;

  function isShown(el) {
    var cs = window.getComputedStyle(el);
    return cs.display !== 'none' && cs.visibility !== 'hidden' && parseFloat(cs.opacity) > 0.05;
  }

  // Lift the button above any visible avoid-element in the bottom-right corner.
  function lift() {
    var offset = 0;
    var vw = window.innerWidth;
    var vh = window.innerHeight;
    Array.prototype.forEach.call(document.querySelectorAll(AVOID), function (el) {
      if (!isShown(el)) return;
      var r = el.getBoundingClientRect();
      if (!r.width || !r.height) return;
      if (r.bottom > vh - 140 && r.right > vw - 96 && r.top < vh) offset = Math.max(offset, vh - r.top + 4);
    });
    btn.style.setProperty('--btt-lift', offset + 'px');
  }

  // In-page "Back to top" links (e.g. in a footer): hide the button while one is on screen.
  var inlineLinks = Array.prototype.filter.call(document.querySelectorAll('a'), function (a) {
    return /back to top/i.test(a.textContent);
  });
  function inlineLinkInView() {
    return inlineLinks.some(function (a) {
      var r = a.getBoundingClientRect();
      return r.width > 0 && r.top < window.innerHeight && r.bottom > 0;
    });
  }

  // Elements marked data-back-to-top-hide (e.g. a sticky sidebar with a form) hide the
  // button while it would sit on top of them.
  function coversHideZone() {
    var b = btn.getBoundingClientRect();
    return Array.prototype.some.call(document.querySelectorAll('[data-back-to-top-hide]'), function (el) {
      // Only while the element is pinned (sticky/fixed); in normal flow it just scrolls past.
      var pos = window.getComputedStyle(el).position;
      if (pos !== 'sticky' && pos !== 'fixed') return false;
      var r = el.getBoundingClientRect();
      return r.width > 0 && r.left < b.right && r.right > b.left && r.top < b.bottom && r.bottom > b.top;
    });
  }

  function update() {
    queued = false;
    btn.classList.toggle('is-visible', window.scrollY > window.innerHeight * 0.9 && !inlineLinkInView() && !coversHideZone());
    lift();
  }
  function schedule() {
    if (queued) return;
    queued = true;
    window.requestAnimationFrame(update);
  }

  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', schedule);
  // Toasts animate in and out; re-check the lift whenever another element transitions.
  document.addEventListener('transitionrun', function (e) { if (e.target !== btn) schedule(); }, true);
  document.addEventListener('transitionend', function (e) { if (e.target !== btn) schedule(); }, true);
  update();

  // Send focus to the skip-link target (or <main>) so keyboard users start at the top.
  function focusTop() {
    var skip = Array.prototype.find.call(document.querySelectorAll('a[href^="#"]'), function (a) {
      return /skip/i.test(a.textContent) && a.getAttribute('href').length > 1;
    });
    var target = (skip && document.getElementById(skip.getAttribute('href').slice(1))) || document.querySelector('main');
    if (!target) return;
    if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1');
    target.classList.add('back-to-top-target');
    target.focus({ preventScroll: true });
  }

  btn.addEventListener('click', function () {
    if (reduceMotion.matches) {
      window.scrollTo({ top: 0, behavior: 'auto' });
      focusTop();
      return;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Move focus once the smooth scroll has finished (with a fallback for older browsers).
    var done = false;
    function finish() {
      if (done) return;
      done = true;
      window.removeEventListener('scrollend', finish);
      focusTop();
    }
    if ('onscrollend' in window) window.addEventListener('scrollend', finish);
    window.setTimeout(finish, 1500);
  });
})();
