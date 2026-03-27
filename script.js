// --- DICTIONNAIRE DE TRADUCTION ---
const translations = {
    fr: {
        nav_home: "Accueil", nav_projects: "Projets", nav_skills: "Compétences",
        nav_path: "Parcours", nav_contact: "Me contacter",
        hero_badge: "Étudiant en BUT Informatique · 2ème année",
        hero_hello: "Salut, je suis", hero_iam: "Je suis",
        hero_desc: "Déterminé, motivé et sérieux, je suis passionné par le développement web et l'innovation technologique. Autonome et conscient du travail à fournir, je cherche un stage de 8 à 10 semaines pour transformer mes compétences techniques en solutions concrètes.",
        btn_projects: "Voir mes projets", btn_cv: "Télécharger mon CV",
        mission_title: "Ma Mission",
        mission_text: "Déterminé, motivé, sérieux, autonome et conscient du travail qui m'attend, je suis persuadé que je serai un élément moteur au sein de votre structure. Mon parcours sportif (rugby, tennis) m'a appris l'esprit d'équipe et la persévérance, tandis que mes projets en Python, Java, C et SQL m'ont donné la rigueur technique nécessaire pour relever des défis complexes.",
        goals_title: "Mes Objectifs",
        goal_short_label: "Court terme :", goal_short_text: "Stage de développement web/logiciel (2ème année BUT).",
        goal_long_label: "Long terme :", goal_long_text: "Devenir développeur full-stack en Corse et contribuer à l'écosystème tech local.",
        title_projects: "Projets Récents", title_skills: "Stack Technique",
        skill_network: "Réseaux & Linux", title_softskills: "Soft Skills",
        soft_team: "Travail d'équipe", soft_autonomy: "Autonomie",
        soft_org: "Organisation", soft_det: "Détermination", soft_rigor: "Rigueur",
        title_path: "Parcours", subtitle_education: "Formation", subtitle_exp: "Expériences",
        edu_but2: "IUT · Spécialisation développement & projets avancés",
        edu_but1: "IUT · Développement, Réseaux, BDD",
        exp_job1_title: "Agent navette portuaire",
        exp_job1_desc: "Mairie de Porticcio · Gestion des navettes et relation client",
        contact_title: "Travaillons ensemble",
        contact_text: "Je suis disponible pour un entretien afin de discuter de votre besoin et de ma motivation.",
        form_name: "Nom", form_email: "Email", form_message: "Message",
        btn_send: "Envoyer le message",
        footer_rights: "Portfolio étudiant.",
        link_code: "Voir le code →",
        proj_lego_title: "Mosaïque Lego — Projet Intégré S3",
        proj_lego_desc: "Application complète de transformation d'images en mosaïques LEGO avec système de commande en ligne. Algorithme de pavage en C, interface web PHP/MySQL, backend Java, gestion des stocks et des commandes avec différents styles de rendu.",
        proj_lego_date: "Semestre 3 — 2025",
        proj_bancaire_title: "Gestion Compte Bancaire — Qualité Dev",
        proj_bancaire_desc: "Application de gestion de compte bancaire avec visualisation graphique des revenus et dépenses. Projet axé sur les bonnes pratiques de développement et l'architecture logicielle.",
        proj_bancaire_date: "Semestre 3 — 2025",
        proj_unesco_title: "Projet UNESCO — Quais de Seine",
        proj_unesco_desc: "Site éducatif développé en partenariat avec l'UNESCO sur le patrimoine des quais de Seine. Design responsive en groupe de 5.",
        proj_unesco_date: "Projet académique",
        proj_bdd_title: "Base de données & Web",
        proj_bdd_desc: "Création et exploitation d'une BDD relationnelle (MCD/MLD) via une interface web dynamique.",
        proj_bdd_date: "Juin 2025",
                proj_train_title: "Réservation de Billets de Train — BUT2 S4",
        proj_train_desc: "Application full-stack de réservation de billets de train : front-end React avec gestion des routes et états, backend Node.js avec API REST, et base de données MongoDB (NoSQL) pour les trajets, utilisateurs et réservations.",
        proj_train_date: "Semestre 4 — 2026",
        proj_tetris_title: "Tetris en Python",
        proj_tetris_desc: "Jeu complet avec interface graphique Pygame et gestion des scores.",
        proj_server_title: "Serveur HTTPS & Réseaux",
        proj_server_desc: "Installation, configuration et sécurisation d'un serveur local Apache sous Linux.",
        proj_server_link: "Lire le rapport →",
        proj_seniors_title: "Chat Seniors",
        proj_seniors_desc: "Plateforme sociale adaptée aux seniors : messagerie, agenda, événements.",
        proj_seniors_link: "Télécharger →",
        // BUT section
        but_section_title: "Blocs de compétences BUT",
        but_subtitle: "Les 6 compétences du référentiel national · Parcours A — Réalisation d'applications. Cliquez sur un bloc pour découvrir la description, les projets validants et les points de progression.",
        but_b01_num: "Bloc 01",
        but_b01_name: "Réaliser un développement d'application",
        but_b01_tagline: "Conception, développement, tests",
        but_b01_desc: "Ce bloc couvre la capacité à concevoir, développer et tester une application informatique de manière complète : de l'analyse du besoin jusqu'à la livraison d'un logiciel fonctionnel et testé. Il englobe la modélisation (Merise, UML), le développement dans différents paradigmes (objet, procédural, web), et la mise en place de tests pour valider le comportement du programme.",
        but_b01_prog: "Je ne maîtrise pas encore les diagrammes UML de manière avancée (séquence, cas d'utilisation détaillés), ni les frameworks de test automatisé de bout en bout (ex : Selenium, Cypress). L'accessibilité (WCAG, ARIA) n'a pas encore été intégrée dans mes développements web.",
        but_b02_num: "Bloc 02",
        but_b02_name: "Optimiser des applications informatiques",
        but_b02_tagline: "Performance, qualité, maintenance",
        but_b02_desc: "Sélectionner et concevoir des algorithmes efficaces pour résoudre des problèmes donnés. Comprendre la complexité algorithmique, choisir les structures de données appropriées, et améliorer les performances des applications existantes en tenant compte des contraintes (temps, mémoire, lisibilité).",
        but_b02_prog: "Je n'ai pas encore travaillé sur des problèmes de complexité avancée (NP-difficiles, programmation dynamique complexe). Le profiling de performance (Valgrind, gprof) et l'optimisation bas niveau (SIMD, cache) restent à approfondir. Les tests de performance automatisés (benchmarking) ne sont pas encore dans ma pratique.",
        but_b03_num: "Bloc 03",
        but_b03_name: "Administrer des systèmes informatiques communicants complexes",
        but_b03_tagline: "Systèmes, réseaux, sécurité",
        but_b03_desc: "Installer et configurer les environnements de travail, puis déployer des services sur des architectures réseau. Cela couvre la gestion des systèmes Linux, la configuration de serveurs web et de bases de données, et la sécurisation des communications réseau.",
        but_b03_prog: "La virtualisation (Docker, Kubernetes) et la gestion de conteneurs n'ont pas encore été pratiquées. Le scripting shell avancé pour l'automatisation de déploiements (CI/CD) reste à approfondir. La configuration avancée de pare-feu et les architectures VPN ne font pas encore partie de mes compétences consolidées.",
        but_b04_num: "Bloc 04",
        but_b04_name: "Gérer des données de l'information",
        but_b04_tagline: "Modélisation, BDD, requêtes, exploitation",
        but_b04_desc: "Concevoir et mettre en place des bases de données relationnelles à partir de cahiers des charges (MCD/MLD), puis les exploiter via des requêtes SQL complexes, avec optimisation des performances et sécurisation des accès.",
        but_b04_prog: "Les bases de données NoSQL (MongoDB, Redis) et les systèmes de BDD distribuées n'ont pas encore été explorés. L'optimisation avancée de requêtes (plans d'exécution, index composites) et la gestion de la montée en charge (sharding, réplication) restent à approfondir.",
        but_b05_num: "Bloc 05",
        but_b05_name: "Conduire un projet",
        but_b05_tagline: "Gestion de projet, équipe, méthodes, communication",
        but_b05_desc: "Identifier les besoins métiers des clients et des utilisateurs pour y répondre efficacement. Appliquer une démarche de suivi de projet (planification, méthodes agiles ou classiques) en intégrant les contraintes et en livrant dans les délais impartis.",
        but_b05_prog: "Les méthodes agiles formelles (Scrum, Kanban avec outils dédiés comme Jira) n'ont pas encore été pratiquées dans un cadre professionnel. La gestion des risques et la rédaction de documents de projet formels (PMP, charte de projet) restent à développer.",
        but_b06_num: "Bloc 06",
        but_b06_name: "Construire son parcours professionnel",
        but_b06_tagline: "PPP, insertion, soft skills, collaboration",
        but_b06_desc: "Identifier ses aptitudes pour travailler en équipe et construire son parcours professionnel. Prendre une place active au sein d'un groupe technique, communiquer efficacement, partager le code et co-construire des solutions durables.",
        but_b06_prog: "Les outils de collaboration professionnels (Git avancé avec stratégies de branching, code review formelles, pair programming structuré) restent à pratiquer davantage. La prise de parole en public et la présentation de solutions techniques à des non-techniques est un axe à renforcer.",
        but_knowhow: "Ce que je sais faire — Argumentaire",
        but_prog_label: "Points de progression",
        but_prog_title: "Ce que je ne maîtrise pas encore",
        but_proj_validating: "Projets validant cette compétence",
        typing_words: ["Développeur Web", "Étudiant Passionné", "Futur Stagiaire"]
    },
    en: {
        nav_home: "Home", nav_projects: "Projects", nav_skills: "Skills",
        nav_path: "Career", nav_contact: "Contact Me",
        hero_badge: "CS Student · 2nd Year",
        hero_hello: "Hi, I am", hero_iam: "I am a",
        hero_desc: "Determined, motivated and serious, I am passionate about web development and tech innovation. Autonomous and hardworking, I am looking for an 8 to 10-week internship to turn my technical skills into concrete solutions.",
        btn_projects: "View my projects", btn_cv: "Download my Resume",
        mission_title: "My Mission",
        mission_text: "Determined, motivated, serious, autonomous and aware of the work ahead, I am convinced that I will be a driving force within your structure. My sports background (rugby, tennis) taught me team spirit and perseverance, while my projects in Python, Java, C and SQL gave me the technical rigor needed to tackle complex challenges.",
        goals_title: "My Goals",
        goal_short_label: "Short term:", goal_short_text: "Web/Software development internship (2nd year degree).",
        goal_long_label: "Long term:", goal_long_text: "Become a full-stack developer in Corsica and contribute to the local tech ecosystem.",
        title_projects: "Recent Projects", title_skills: "Tech Stack",
        skill_network: "Networks & Linux", title_softskills: "Soft Skills",
        soft_team: "Teamwork", soft_autonomy: "Autonomy",
        soft_org: "Organization", soft_det: "Determination", soft_rigor: "Rigor",
        title_path: "Career Path", subtitle_education: "Education", subtitle_exp: "Experience",
        edu_but2: "IUT · Specialization in development & advanced projects",
        edu_but1: "IUT · Development, Networks, Databases",
        exp_job1_title: "Port Shuttle Agent",
        exp_job1_desc: "Porticcio City Hall · Shuttle management & customer relations",
        contact_title: "Let's work together",
        contact_text: "I am available for an interview to discuss your needs and my motivation.",
        form_name: "Name", form_email: "Email", form_message: "Message",
        btn_send: "Send Message",
        footer_rights: "Student Portfolio.",
        link_code: "View Code →",
        proj_lego_title: "Lego Mosaic — Integrated Project S3",
        proj_lego_desc: "Complete image-to-LEGO mosaic transformation app with an online ordering system. Tiling algorithm in C, PHP/MySQL web interface, Java backend, stock and order management with different rendering styles.",
        proj_lego_date: "Semester 3 — 2025",
        proj_bancaire_title: "Bank Account Manager — Dev Quality",
        proj_bancaire_desc: "Bank account management application with graphical visualization of income and expenses. Project focused on development best practices and software architecture.",
        proj_bancaire_date: "Semester 3 — 2025",
        proj_unesco_title: "UNESCO Project — Seine Riverbanks",
        proj_unesco_desc: "Educational website developed in partnership with UNESCO on the heritage of the Seine riverbanks. Responsive design built in a team of 5.",
        proj_unesco_date: "Academic project",
        proj_bdd_title: "Database & Web",
        proj_bdd_desc: "Creation and exploitation of a relational database (MCD/MLD) via a dynamic web interface.",
        proj_bdd_date: "June 2025",
                proj_train_title: "Train Ticket Booking — BUT2 S4",
        proj_train_desc: "Full-stack train ticket booking app: React front-end with route and state management, Node.js REST API backend, and MongoDB (NoSQL) database for trips, users and reservations.",
        proj_train_date: "Semester 4 — 2026",
        proj_tetris_title: "Tetris in Python",
        proj_tetris_desc: "Complete game with Pygame graphical interface and score management.",
        proj_server_title: "HTTPS Server & Networks",
        proj_server_desc: "Installation, configuration and security hardening of a local Apache server under Linux.",
        proj_server_link: "Read the report →",
        proj_seniors_title: "Seniors Chat",
        proj_seniors_desc: "Social platform adapted for seniors: messaging, calendar, events.",
        proj_seniors_link: "Download →",
        // BUT section
        but_section_title: "BUT Competency Blocks",
        but_subtitle: "The 6 competencies of the national framework · Track A — Application Development. Click a block to discover the description, validating projects, and areas for improvement.",
        but_b01_num: "Block 01",
        but_b01_name: "Develop an application",
        but_b01_tagline: "Design, development, testing",
        but_b01_desc: "This block covers the ability to design, develop and test a computer application from end to end: from requirements analysis to the delivery of a functional and tested software. It encompasses modelling (Merise, UML), development across different paradigms (OOP, procedural, web), and implementing tests to validate program behaviour.",
        but_b01_prog: "I do not yet master advanced UML diagrams (sequence, detailed use cases), nor end-to-end automated testing frameworks (e.g. Selenium, Cypress). Accessibility standards (WCAG, ARIA) have not yet been integrated into my web projects.",
        but_b02_num: "Block 02",
        but_b02_name: "Optimise computer applications",
        but_b02_tagline: "Performance, quality, maintenance",
        but_b02_desc: "Select and design efficient algorithms to solve given problems. Understand algorithmic complexity, choose appropriate data structures, and improve the performance of existing applications while considering constraints (time, memory, readability).",
        but_b02_prog: "I have not yet worked on advanced complexity problems (NP-hard, complex dynamic programming). Performance profiling (Valgrind, gprof) and low-level optimisation (SIMD, cache) remain to be deepened. Automated performance testing (benchmarking) is not yet part of my practice.",
        but_b03_num: "Block 03",
        but_b03_name: "Administer complex networked computer systems",
        but_b03_tagline: "Systems, networks, security",
        but_b03_desc: "Install and configure work environments, then deploy services on network architectures. This covers Linux systems management, web and database server configuration, and securing network communications.",
        but_b03_prog: "Virtualisation (Docker, Kubernetes) and container management have not yet been practised. Advanced shell scripting for deployment automation (CI/CD) remains to be deepened. Advanced firewall configuration and VPN architectures are not yet consolidated skills.",
        but_b04_num: "Block 04",
        but_b04_name: "Manage data and information",
        but_b04_tagline: "Modelling, databases, queries, exploitation",
        but_b04_desc: "Design and implement relational databases from requirements (MCD/MLD), then exploit them through complex SQL queries, with performance optimisation and access security.",
        but_b04_prog: "NoSQL databases (MongoDB, Redis) and distributed database systems have not yet been explored. Advanced query optimisation (execution plans, composite indexes) and scalability management (sharding, replication) remain to be deepened.",
        but_b05_num: "Block 05",
        but_b05_name: "Lead a project",
        but_b05_tagline: "Project management, team, methods, communication",
        but_b05_desc: "Identify the business needs of clients and users in order to respond effectively. Apply a project tracking approach (planning, agile or classic methods) while integrating constraints and delivering on time.",
        but_b05_prog: "Formal agile methods (Scrum, Kanban with dedicated tools like Jira) have not yet been practised in a professional context. Risk management and formal project document writing (PMP, project charter) remain to be developed.",
        but_b06_num: "Block 06",
        but_b06_name: "Build a professional career",
        but_b06_tagline: "PPP, integration, soft skills, collaboration",
        but_b06_desc: "Identify one's skills for teamwork and build a professional career path. Take an active role within a technical group, communicate effectively, share code and co-build sustainable solutions.",
        but_b06_prog: "Professional collaboration tools (advanced Git with branching strategies, formal code reviews, structured pair programming) still need more practice. Public speaking and presenting technical solutions to non-technical audiences is an area to strengthen.",
        but_knowhow: "What I can do — Evidence",
        but_prog_label: "Areas for improvement",
        but_prog_title: "What I have not yet mastered",
        but_proj_validating: "Projects validating this competency",
        typing_words: ["Web Developer", "Passionate Student", "Future Intern"]
    }
};

let currentLang = 'fr';
let typingTimeout;

document.addEventListener('DOMContentLoaded', () => {

    // ── HEADER SCROLL ──
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 40);
    }, { passive: true });

    // ── SCROLL REVEAL ──
    const revealEls = document.querySelectorAll(
        'section > .container > *, .project-card, .skill-item, .timeline-box, .but-card, .but-subtitle'
    );
    revealEls.forEach(el => el.classList.add('reveal'));

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                // Staggered delay for grids
                const siblings = [...entry.target.parentElement.children];
                const idx = siblings.indexOf(entry.target);
                entry.target.style.transitionDelay = `${Math.min(idx * 60, 300)}ms`;
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach(el => observer.observe(el));

    // ── LANGUE ──
    const langBtn = document.getElementById('lang-switch');
    if (langBtn) {
        langBtn.addEventListener('click', () => {
            currentLang = currentLang === 'fr' ? 'en' : 'fr';
            langBtn.textContent = currentLang === 'fr' ? '🇬🇧 EN' : '🇫🇷 FR';
            updateContent();
            resetTypewriter();
        });
    }

    function updateContent() {
        const t = translations[currentLang];
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (t[key] !== undefined) el.textContent = t[key];
        });

        // BUT section dynamic i18n
        const butData = {
            realiser:    { num:'but_b01_num', name:'but_b01_name', tagline:'but_b01_tagline', desc:'but_b01_desc', prog:'but_b01_prog' },
            optimiser:   { num:'but_b02_num', name:'but_b02_name', tagline:'but_b02_tagline', desc:'but_b02_desc', prog:'but_b02_prog' },
            administrer: { num:'but_b03_num', name:'but_b03_name', tagline:'but_b03_tagline', desc:'but_b03_desc', prog:'but_b03_prog' },
            gerer:       { num:'but_b04_num', name:'but_b04_name', tagline:'but_b04_tagline', desc:'but_b04_desc', prog:'but_b04_prog' },
            conduire:    { num:'but_b05_num', name:'but_b05_name', tagline:'but_b05_tagline', desc:'but_b05_desc', prog:'but_b05_prog' },
            collaborer:  { num:'but_b06_num', name:'but_b06_name', tagline:'but_b06_tagline', desc:'but_b06_desc', prog:'but_b06_prog' },
        };
        document.querySelectorAll('.but-card[data-comp]').forEach(card => {
            const comp = card.getAttribute('data-comp');
            const keys = butData[comp];
            if (!keys) return;
            const q = sel => card.querySelector(sel);
            if (q('.but-bloc-num'))       q('.but-bloc-num').textContent       = t[keys.num]     || '';
            if (q('.but-name'))           q('.but-name').textContent           = t[keys.name]    || '';
            if (q('.but-tagline'))        q('.but-tagline').textContent        = t[keys.tagline] || '';
            if (q('.but-desc'))           q('.but-desc').textContent           = t[keys.desc]    || '';
            if (q('.but-progression p'))  q('.but-progression p').textContent  = t[keys.prog]    || '';
        });

        // BUT section title and subtitle
        const butTitle = document.querySelector('#but-competences .section-title');
        const butSub   = document.querySelector('.but-subtitle');
        if (butTitle && butTitle.childNodes[0]) butTitle.childNodes[0].textContent = t['but_section_title'] || '';
        if (butSub) butSub.textContent = t['but_subtitle'] || '';

        // BUT labels inside cards
        document.querySelectorAll('.but-section-label').forEach(el => {
            const txt = el.textContent.trim();
            if (txt.includes('sais faire') || txt.includes('can do') || txt.includes('What I') || txt.includes('Argumentaire') || txt.includes('Evidence')) {
                el.textContent = t['but_knowhow'] || txt;
            } else if (txt.includes('progression') || txt.includes('improvement')) {
                el.textContent = t['but_prog_label'] || txt;
            }
        });
        document.querySelectorAll('.but-progression-title').forEach(el => {
            const icon = el.querySelector('i');
            el.textContent = t['but_prog_title'] || el.textContent;
            if (icon) el.prepend(icon);
        });
    }

    // ── TYPEWRITER ──
    const textElement = document.querySelector('.typing-text');
    let wordIndex = 0, charIndex = 0, isDeleting = false;

    function type() {
        const words = translations[currentLang].typing_words;
        const currentWord = words[wordIndex];
        let typeSpeed = 100;

        if (isDeleting) {
            textElement.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 45;
        } else {
            textElement.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = 110;
        }

        if (!isDeleting && charIndex === currentWord.length) { isDeleting = true; typeSpeed = 2200; }
        else if (isDeleting && charIndex === 0) { isDeleting = false; wordIndex = (wordIndex + 1) % words.length; typeSpeed = 500; }

        typingTimeout = setTimeout(type, typeSpeed);
    }

    function resetTypewriter() {
        clearTimeout(typingTimeout);
        wordIndex = 0; charIndex = 0; isDeleting = false;
        if (textElement) { textElement.textContent = ''; type(); }
    }

    if (textElement) type();

    // ── BUT TOGGLE ──
    window.toggleBut = function(card) {
        const isOpen = card.classList.contains('open');
        document.querySelectorAll('.but-card.open').forEach(c => c.classList.remove('open'));
        if (!isOpen) card.classList.add('open');
    };

});
