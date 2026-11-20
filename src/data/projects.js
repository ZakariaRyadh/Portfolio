export const projects = [
  {
    slug: "motorwatch",
    title: "MotorWatch",
    description:
      "A mobile app for live motor monitoring via ESP32 sensors - real-time tension/temperature tracking, fault detection, alerts and history.",
    image: "/projects/motor-app.jpg",
    isPhone: true,
    tags: ["React Native", "Expo", "Django", "DRF", "ESP32"],
    demoUrl: "#",
    githubUrl: "#",
    status: "Finished",
    role: "Full build: mobile app, backend and AI integration (final-year project for two students)",
    purpose:
      "Motor faults are usually found too late, when the machine is already damaged. The goal was to catch faults early and show the motor's health live on a phone, so a technician can react before a breakdown.",
    keyIdea:
      "Sensors on a real motor (vibration, temperature, current, voltage) feed a model that classifies 7 states: normal, unloaded, overload, overheat, imbalance, loosening and overheat + unloaded. The model runs on a Raspberry Pi at the edge and only sends the result to the server, so the app stays fast and works even with weak connectivity.",
    flow: "ESP32 sensors → Raspberry Pi (AI model) → Django server → mobile app",
    stack: [
      { group: "Mobile", items: ["Expo / React Native", "TypeScript", "NativeWind"] },
      { group: "Backend", items: ["Django + DRF", "Channels + Redis (WebSocket)", "PostgreSQL", "JWT auth"] },
      { group: "AI and hardware", items: ["ESP32", "Raspberry Pi 4", "Random Forest (41 features)"] },
      { group: "Extras", items: ["Firebase push notifications", "Railway hosting"] },
    ],
    learned: [
      "Real-time data with WebSockets, from sensor to screen.",
      "Splitting work between edge (Pi) and server, with a backend fallback if the Pi fails.",
      "Evaluating a model honestly: about 97.5% accuracy with GroupKFold to avoid data leakage.",
      "Picking Random Forest over SVM, Decision Tree and KNN for fast inference on small hardware.",
    ],
    screenshots: [
      { src: "/projects/motorwatch/Home-Night.jpg", caption: "Live home screen (dark theme)", phone: true },
      { src: "/projects/motorwatch/Fault-Detected.jpg", caption: "Fault detected alert", phone: true },
    ],
  },
  {
    slug: "kaizen",
    title: "Kaizen",
    description:
      "A daily productivity app combining tasks, gym programs, calendar, notes and learning tracking in one clean dark UI.",
    image: "/projects/kaizen.jpg",
    isPhone: true,
    tags: ["React Native", "Expo", "Django", "DRF", "Zustand"],
    demoUrl: "#",
    githubUrl: "https://github.com/ZakariaRyadh/kaizen",
    status: "Live, with testers",
    role: "Solo: design, mobile app, backend and deployment",
    purpose:
      "I wanted one app for the habits that compound when done daily, instead of juggling a to-do app, a gym log, a calendar and a notes app. The name means \"continuous improvement\" in Japanese.",
    keyIdea:
      "Five areas in one app (tasks, gym, learning, calendar, notes) talking to one API. Accounts are email and password so data follows you across devices, and sign-up is invite-only through one-time codes.",
    stack: [
      { group: "Mobile", items: ["Expo (React Native)", "Expo Router", "TypeScript", "Zustand"] },
      { group: "Backend", items: ["Django + DRF", "JWT auth", "Neon Postgres", "Render"] },
      { group: "Ops", items: ["GitHub Actions weekly DB backup", "UptimeRobot health checks", "EAS Build (Android APK)", "Brevo email"] },
    ],
    learned: [
      "Shipping a full stack product end to end: app, API, database, hosting and a real Android build.",
      "Free-tier infrastructure: keeping a Render service awake, backups and email limits.",
      "Auth with JWT and invite-only sign-up.",
      "Keeping a long-lived app maintainable: a bugs-fixed log and a rename without breaking builds.",
    ],
    screenshots: [
      { src: "/projects/kaizen/Home.png", caption: "Home: today at a glance" },
      { src: "/projects/kaizen/Gym.png", caption: "Gym programs and logs" },
      { src: "/projects/kaizen/Calendar.png", caption: "Calendar" },
      { src: "/projects/kaizen/Notes.png", caption: "Notes" },
    ],
    screenshotNote: "Design mockups with placeholder data. The shipped app has moved on slightly.",
  },
  {
    slug: "pfesi",
    title: "PFESI",
    description:
      "A web platform for managing final-year projects - topic proposals, student assignments, supervisor tracking, defense scheduling and results, all in one place.",
    image: "/projects/pfe-management.png",
    tags: ["Next.js", "FastAPI", "Web App"],
    demoUrl: "#",
    githubUrl: "#",
    status: "Finished (1CS project, 2025/2026)",
    role: "Team of 6 at ESI Sidi Bel Abbès",
    purpose:
      "Managing final-year projects at the school was manual: emails, Excel files and paper, with no traceability and a lot of admin work. PFESI puts the whole cycle in one place, from setting up the academic year to publishing defense results.",
    keyIdea:
      "One platform with four roles (Super Admin, Administration, Teacher/Jury, Student), each with its own dashboard behind a single login. It covers themes, groups and wishes, automatic theme allocation, supervision, messaging and defense planning.",
    stack: [
      { group: "Frontend", items: ["Next.js 16", "React", "Tailwind CSS", "Zustand"] },
      { group: "Backend", items: ["FastAPI (Python 3.12)", "JWT auth", "MySQL 8", "Redis", "WebSocket + SMTP"] },
      { group: "Team and delivery", items: ["Docker", "Figma", "Git/GitHub", "Linear", "Scrum, 5 sprints in 11 weeks"] },
    ],
    learned: [
      "Working in a team of 6 with Scrum, sprints and written requirements (SRS, design and management reports).",
      "Designing role-based access for several kinds of users.",
      "Turning a manual process into software, starting from the real problem.",
      "Delays happen: sprints 2 to 4 ran late, and we still reached 90% in sprint 5 for the defense.",
    ],
    screenshots: [
      { src: "/projects/pfesi/Landing-Page.png", caption: "Landing page" },
      { src: "/projects/pfesi/Student-Dashboard.png", caption: "Student dashboard" },
      { src: "/projects/pfesi/Super-Admin-Profile.png", caption: "Super Admin profile" },
      { src: "/projects/pfesi/Login-Mobile.png", caption: "Login on mobile", phone: true },
    ],
  },
  {
    slug: "e-commerce",
    title: "E-Commerce",
    description:
      "An online store with product catalog, cart, checkout flow and order management.",
    image: "/projects/e-commerce.png",
    tags: ["Next.js", "Web App"],
    demoUrl: "#",
    githubUrl: "https://github.com/ZakariaRyadh/e-commerce-website",
    status: "Storefront and admin done, payments and deploy not yet",
    role: "Solo",
    purpose:
      "A reusable store template: a real storefront and a real admin dashboard, so a real product catalog can be dropped in later for a client.",
    keyIdea:
      "One Next.js app serves both the React frontend and the API, on one PostgreSQL database. Nothing is mock data: stock, order totals, customer counts and revenue are live queries, and an order is one database transaction that checks stock, decrements it and creates the order.",
    stack: [
      { group: "App", items: ["Next.js 16 (App Router)", "React 19", "TypeScript", "Tailwind CSS v4"] },
      { group: "Data and auth", items: ["PostgreSQL + Prisma", "NextAuth v5 (roles CUSTOMER / ADMIN)", "Zod validation"] },
      { group: "Other", items: ["Zustand + React Query", "Resend email"] },
    ],
    learned: [
      "Safe order handling with database transactions.",
      "Role-based access with auth and middleware-protected admin routes.",
      "Validating every API route with Zod.",
      "Password reset by one-time code email.",
    ],
    screenshots: [
      { src: "/projects/e-commerce.png", caption: "Storefront" },
    ],
  },
  {
    slug: "smart-firewall",
    title: "Smart Firewall",
    description:
      "A behavior-aware access gateway on a Raspberry Pi. Port-knocking hides SSH, and an anomaly model scores each connection to allow, challenge or block it, even with a valid password. Live dashboard included.",
    image: "/projects/firewall/dashboard.png",
    tags: ["Python", "scikit-learn", "nftables", "Flask", "React", "Raspberry Pi"],
    demoUrl: "#",
    githubUrl: "https://github.com/ZakariaRyadh/smart-firewall",
    status: "In progress (works in VMs, Pi deploy next)",
    role: "Team of 3 students",
    purpose:
      "A normal firewall only checks the password. If an attacker steals valid credentials, it lets them straight in. This project asks a second question: does this connection behave like the real user?",
    keyIdea:
      "SSH is hidden behind port-knocking. At each knock, an Isolation Forest model trained on normal login behavior (hour, day, known address, time since last login, tries in 5 minutes) scores the connection: allow, ask for a harder knock, or block. Hard rules run first for obvious bursts.",
    stack: [
      { group: "Gateway", items: ["nftables", "knockd", "systemd", "Raspberry Pi 4"] },
      { group: "Model", items: ["Python", "scikit-learn (Isolation Forest)", "pandas / NumPy", "SQLite state"] },
      { group: "Dashboard", items: ["Flask API", "React + TypeScript + Vite", "Tailwind CSS"] },
    ],
    learned: [
      "Linux firewalling with nftables, and testing risky rules in VMs with snapshots and a rollback before touching the Pi.",
      "Anomaly detection when you only have examples of normal behavior.",
      "Being honest about data: part of the normal data is synthetic and attacks are simulated, and the slow-attack case is a known limit.",
      "Running services with least privilege (a dedicated user with only 2 capabilities).",
    ],
    screenshots: [
      { src: "/projects/firewall/dashboard.png", caption: "Live dashboard (demo data): allowed, extra check and blocked logins" },
    ],
  },
];
