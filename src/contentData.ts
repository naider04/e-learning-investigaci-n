import { Unit, GlossaryItem, SuggestedReading } from './types';

export const UNITS: Unit[] = [
  {
    id: 1,
    title: "ESSENTIAL ASPECTS AND COMPONENTS OF E-LEARNING",
    topics: [
      {
        id: "u1t1",
        title: "Topic 1: ICT Integration and the Educational System",
        summary: [
          "Information and Communication Technologies (ICT) act as transformative pillars, demanding digital adaptation of traditional teaching centers.",
          "Integration crosses multiple phases: from access and adoption, through adaptation and appropriation, to invention of novel virtual methodologies.",
          "Educational structures must evolve from administrative tools towards deep immersive and connective environments that stimulate student participation."
        ],
        visualType: "mindmap",
        lessonsLearned: "Digital technology is not merely a tool for slide presentation; it represents a native medium that calls for the reorganization of teaching times, roles, and evaluations.",
        qrLink: "https://quiz.unemi.edu.ec/evaluation-learning-theories",
        qrDesc: "Scan the QR code to take an interactive quiz on educational learning theories and ICT integration models.",
        activityTitle: "ICT Integration & Educational Systems Self-Test",
        icon: "icon_broadcast_tower.png",
        mindmapPath: "U1_T1_ICT_integration.png"
      },
      {
        id: "u1t2",
        title: "Topic 2: Learning Theories: Cognitivism & Constructivism",
        summary: [
          "Cognitivism focuses on the brain's internal storage and retrieval of knowledge, modeling it similarly to computer processing units.",
          "Constructivism posits that knowledge is actively built by learners through positive interactions with their environment, rather than passively received.",
          "In digital environments, this requires scaffolding activities, problem-led teaching models, and deep collaborative projects."
        ],
        visualType: "constructivism",
        lessonsLearned: "Constructivist pedagogical layouts require teachers to surrender control, stepping down from 'the sage on the stage' to become 'the guide on the side'.",
        qrLink: "https://quiz.unemi.edu.ec/constructivism-interactive",
        qrDesc: "Scan to learn about Constructivism & Cognitivism scenarios on our digital boards.",
        activityTitle: "Cognitivism vs. Constructivism Scenario Quiz",
        icon: "icon_lightbulb.png"
      },
      {
        id: "u1t3",
        title: "Topic 3: Connectivism: Cybernetic Learning Networks",
        summary: [
          "Connectivism, formulated by George Siemens, constitutes the native learning theory for the internet age.",
          "Knowledge exists inside distributed networks; learning is the process of building connections between information nodes.",
          "The capacity to know more is more critical than what is currently known, requiring continuous updates and pattern recognition."
        ],
        visualType: "connectivism",
        lessonsLearned: "In our connected era, our local intelligence is augmented by the networks we feed. The node connects us not just to cold facts, but to diverse, living social opinions.",
        qrLink: "https://uark.pressbooks.pub/edtech/chapter/elearnspace-connectivism-a-learning-theory-for-the-digital-age/",
        qrDesc: "Scan to read George Siemens’ seminal work regarding Connectivism in higher education.",
        activityTitle: "Network Connections Sandbox Simulator",
        icon: "icon_network_nodes.png",
        mindmapPath: "diagram_connectivism_cycle.png"
      },
      {
        id: "u1t4",
        title: "Topic 4: Educational Content Development (Asynchronous Layouts)",
        summary: [
          "Asynchronous content allows students to access rich educational media at their own pace, breaking strict geographic and temporal limits.",
          "Includes interactive slides, recorded video capsules, simulations, serious games, and automated self-assessments.",
          "Requires strict instructional design planning to prevent student confusion or early course abandonment."
        ],
        visualType: "roles",
        lessonsLearned: "High-quality asynchronous designs resemble responsive games: they must offer continuous, instant feedback, and clear roadmap pathways so students never feel lost.",
        qrLink: "https://youtube.com/unemi-elearning-content-design",
        qrDesc: "Scan to watch a comprehensive walkthrough on instructional design for asynchronous learning materials.",
        activityTitle: "Interactive Content Structuring Planner",
        icon: "icon_video_camera.png",
        mindmapPath: "U1_T2_content_development.png"
      },
      {
        id: "u1t5",
        title: "Topic 5: Synchronous Class Interaction Models",
        summary: [
          "Synchronous virtual lessons create immediate co-presence, facilitating real-time dialogue, instant debates, and instant group collaboration.",
          "Major mechanics: interactive polling panels, live chat feeds, virtual breakout rooms, and collaborative whiteboards (Miro, Jamboard).",
          "Success relies on active engagement, keeping video lecturing short (under 15-20 minutes) interspersed with peer activities."
        ],
        visualType: "synchronous",
        lessonsLearned: "Synchronous hours are highly valuable; they should never be wasted on passive reading, but reserved exclusively for active debates, challenging Q&As, and collaborative workshops.",
        qrLink: "https://zoom.us/webinar-best-practices",
        qrDesc: "Scan to access professional standards for synchronous virtual webinar design.",
        activityTitle: "Live Class Agile Agenda Planner",
        icon: "icon_chat_bubble.png"
      },
      {
        id: "u1t6",
        title: "Topic 6: Role of the Virtual Instructor and Facilitator",
        summary: [
          "Modern virtual instructors must perform as curriculum designers, learning facilitators, active evaluators, and technology curators.",
          "They scaffold learning, spark discussions, evaluate progress, and provide strategic emotional support in virtual channels.",
          "Must map and evaluate their own competences across communication, pedagogy, design, and technical administration."
        ],
        visualType: "teacher_competences",
        lessonsLearned: "Online teaching is not a downgrade of face-to-face instruction; it is a specialized discipline requiring empathy, clear textual communication, and continuous design monitoring.",
        qrLink: "https://quiz.unemi.edu.ec/teacher-competency-wheel",
        qrDesc: "Scan the QR code to review the international UNESCO competency matrix for digital teachers.",
        activityTitle: "Instructor Competency Self-Evaluation Wheel",
        icon: "icon_handshake.png",
        mindmapPath: "diagram_teacher_competences.png"
      },
      {
        id: "u1t7",
        title: "Topic 7: Educational and Cultural Portals as Resource Centers",
        summary: [
          "Educational and cultural portals centralize premium, expert-curated digital media as reliable gateways.",
          "These portals provide free access to databases, multimedia archives, interactive learning objects, and standardized lesson sheets.",
          "Key institutional examples include Google Earth Educational, Smithsonian Institute Learning Lab, and National Geographic Education."
        ],
        visualType: "portal",
        lessonsLearned: "Cultures and portal resources provide authentic contexts, connecting abstract classroom files directly to the world’s heritage and living sciences.",
        qrLink: "https://ar.unemi.edu.ec/augmented-reality-resources",
        qrDesc: "Scan to access virtual portals and digital world directories validated by our language program.",
        activityTitle: "Digital Library Gateway Curator",
        icon: "icon_globe.png",
        mindmapPath: "U1_T3_cultural_portals.png"
      },
      {
        id: "u1t8",
        title: "Topic 8: Immersive Simulations and AR/VR in Classroom Gates",
        summary: [
          "Immersive systems like Augmented Reality (AR) and Virtual Reality (VR) foster highly interactive experiential learning.",
          "PhET simulations allow students to explore complex molecular biological configurations or astrophysics orbits safely.",
          "These experiences increase critical thinking by transforming passive abstract readings into active exploration scenarios."
        ],
        visualType: "sandbox",
        lessonsLearned: "Simulations bridge theory and direct observation. They allow students to hypothesize, change physical patterns, and observe real-time consequences instantly.",
        qrLink: "https://phet.colorado.edu/sims/html/gene-expression-essentials/latest/gene-expression-essentials_en.html",
        qrDesc: "Scan to explore open-source physical and chemical simulators hosted by the University of Colorado.",
        activityTitle: "Virtual Scientific Simulator Laboratory",
        icon: "icon_laptop.png"
      },
      {
        id: "u1t9",
        title: "Topic 9: Personal Learning Environments (PLE) Configuration",
        summary: [
          "A Personal Learning Environment (PLE) constitutes the customized ecosystem created by an individual student to manage their learning.",
          "Consists of three primary processes: reading/receiving information, creating/producing artifacts, and sharing/collaborating (PLN - Personal Learning Network).",
          "Developing a robust PLE empowers students with lifelong learning tools, helping them take continuous ownership of their career path."
        ],
        visualType: "ple",
        lessonsLearned: "Excellent education doesn’t just deliver content; it teaches how to construct a personalized PLE—curating feeds, selecting tools, and compiling directories of networks.",
        qrLink: "https://quiz.unemi.edu.ec/ple-design-guide",
        qrDesc: "Scan to review strategies for constructing your own Personal Learning Environments.",
        activityTitle: "PLE Personal Workspace architect",
        icon: "icon_speedometer.png"
      },
      {
        id: "u1t10",
        title: "Topic 10: Social Networks as Active Pedagogical Spaces",
        summary: [
          "Social media channels (Facebook Groups, Discord, Reddit) dismantle classic classroom communication barriers.",
          "Low technical entry thresholds allow immediate sharing, collaborative peer reviews, and organic crowdsourced learning.",
          "Instructors use these spaces to spark informal, high-interest thematic debates and gather community feedback."
        ],
        visualType: "networks",
        lessonsLearned: "A standard chat group becomes an educational space only when the teacher establishes clear, systematic learning milestones.",
        qrLink: "https://padlet.com/unemi/debate-elearning-networks",
        qrDesc: "Scan to join our active Padlet whiteboard debatering the limits of social networks in languages coaching.",
        activityTitle: "Active Social Forum Builder",
        icon: "icon_chat_bubble.png",
        mindmapPath: "U1_T4_social_networking.png"
      },
      {
        id: "u1t11",
        title: "Topic 11: Web 1.0 vs. Web 2.0 Web Architecture",
        summary: [
          "Web 1.0 was a read-only medium where centralized institutions published static data grids processed by passive readers.",
          "Web 2.0 introduced a write-and-read structure, enabling user-generated collaboration, social feeds, and distributed wikis.",
          "This architecture shift underpins democratic, learner-driven virtual communities where everyone contributes knowledge."
        ],
        visualType: "web_comparison",
        lessonsLearned: "The shift to Web 2.0 was a democratic, social, and pedagogical decentralization of authority. The internet became a canvas, not just a catalog.",
        qrLink: "https://quiz.unemi.edu.ec/web1-web2-artifacts",
        qrDesc: "Scan to play our concept sorting game comparing Web 1.0 static artifacts with Web 2.0 collaborative portals.",
        activityTitle: "Web Generation Feature Matrix Clicker",
        icon: "icon_plug.png",
        mindmapPath: "diagram_web1_vs_web2.png"
      },
      {
        id: "u1t12",
        title: "Topic 12: Communities of Practice (CoP)",
        summary: [
          "Communities of Practice are groups of people who share a concern or passion for active learning and do it better as they interact.",
          "Defined by three core characteristics: the Domain (shared value), the Community (joint activities and relationships), and the Practice (shared resources).",
          "CoPs represent the highest level of social integration inside e-learning networks, fostering mutual peer coaching."
        ],
        visualType: "cop_flowchart",
        lessonsLearned: "Professional growth in digital schools relies heavily on belonging to a CoP—sharing tips, templates, and classroom strategies with global colleagues.",
        qrLink: "https://quiz.unemi.edu.ec/communities-of-practice",
        qrDesc: "Scan to download our administrative flowchart on creating and managing school Communities of Practice.",
        activityTitle: "Community of Practice Alignment checklist",
        icon: "icon_gears.png",
        mindmapPath: "diagram_social_network_flowchart.png"
      },
      {
        id: "u1t13",
        title: "Topic 13: Ethics, Netiquette and Virtual Coexistence",
        summary: [
          "Netiquette constitutes the suite of ethical rules and manners governing online communication.",
          "Strict principles: respect for personal privacy, professional dialogue, protection against cyberbullying, and clear copyright citations.",
          "Creating inclusive digital spaces requires transparent agreements and proactive moderation from course administrators."
        ],
        visualType: "netiquette",
        lessonsLearned: "In virtual spaces, text lacks tone; hence, maintaining empathy is a vital prerequisite for any intellectual exchange.",
        qrLink: "https://quiz.unemi.edu.ec/netiquette-rules-pdf",
        qrDesc: "Scan to read our student code of conduct regarding digital communication and netiquette parameters.",
        activityTitle: "Academic Netiquette Pledge Builder",
        icon: "icon_shield.png"
      }
    ]
  },
  {
    id: 2,
    title: "PRINCIPAL E-LEARNING SYSTEMS AND PLATFORMS",
    topics: [
      {
        id: "u2t1",
        title: "Topic 1: Platforms as New Educational Settings",
        summary: [
          "LMS platforms offer secure, centralized, and customizable environments to deliver educational courses systematically.",
          "They handle user database records, enrollments, course content trees, evaluation modules, and detailed progress analytics.",
          "E-learning settings can scale to hundreds of thousands of concurrent active students, democratizing access to higher education."
        ],
        visualType: "evolution",
        lessonsLearned: "An educational platform is not a server folder; it is an active classroom where communication must flow bidirectionally among all users.",
        qrLink: "https://es.slideshare.net/slideshow/e-learning-blearning-mlearning-ulearning-c-learningpptx/267314989",
        qrDesc: "Scan to review the evolutionary slide deck on platforms and digital learning environments.",
        activityTitle: "Virtual Platforms Core Feature Quiz",
        icon: "icon_gears.png",
        mindmapPath: "U2_T1_learning_platforms.png"
      },
      {
        id: "u2t2",
        title: "Topic 2: Learning Management Systems - LMS Evolution",
        summary: [
          "The first generation utilized local file storages and CD-ROM modules, which lacked interactive communication.",
          "The second generation introduced centralized web portals (classic LMS like early Moodle), centering on content delivery.",
          "The contemporary third generation features multi-tenant cloud-hosted hubs, incorporating automated analytics and native mobile support."
        ],
        visualType: "evolution_timeline",
        lessonsLearned: "Viewing LMS evolution helps us avoid repeating outdated methods. Modern environments are designed for active student creators, not passive text readers.",
        qrLink: "https://quiz.unemi.edu.ec/lms-generations-history",
        qrDesc: "Scan to study the comparative timeline of LMS platform architectures from 1990 to 2026.",
        activityTitle: "Decadal LMS Evolution Card Sorter",
        icon: "icon_speedometer.png",
        mindmapPath: "diagram_evolution_timeline.png"
      },
      {
        id: "u2t3",
        title: "Topic 3: Blended Learning Mode - B-Learning",
        summary: [
          "B-Learning harmonizes face-to-face physical workshops with systematic, online asynchronous digital pathways.",
          "It uses strategies like the 'Flipped Classroom'—where core readings are done at home, and in-person slots focus on hands-on practice.",
          "This model offers high flexibility while maintaining important regular in-person mentorship and socialization."
        ],
        visualType: "five_trends",
        lessonsLearned: "Blended learning is not a simple double delivery; it is a unified pedagogical strategy designed to optimize the strengths of both environments.",
        qrLink: "https://quiz.unemi.edu.ec/blended-flipped-classroom",
        qrDesc: "Scan to view our infographic outlining successful flipped classroom models for college programs.",
        activityTitle: "Flipped Classroom Activity Allocator",
        icon: "icon_laptop.png",
        mindmapPath: "diagram_five_trends.png"
      },
      {
        id: "u2t4",
        title: "Topic 4: Mobile Learning & Microlearning Systems - M-Learning",
        summary: [
          "M-Learning utilizes the portable nature of smartphones to facilitate flexible learning anywhere, at any time.",
          "It pairs with microlearning: slicing broad syllabus guides into bite-sized 3-5 minute tasks, flashcards, or interactive quiz capsules.",
          "It helps students optimize idle times (commuting, wait times), keeping high learning habits outside formal settings."
        ],
        visualType: "mobile_screen",
        lessonsLearned: "Mobile interfaces must follow strict simplicity rules. If a module takes more than two screen taps to start, completion rates plunge.",
        qrLink: "https://quiz.unemi.edu.ec/mobile-learning-trends",
        qrDesc: "Scan to explore key UI design strategies for mobile-first university courses.",
        activityTitle: "Mobile Interactive Microlearning Simulator",
        icon: "icon_broadcast_tower.png"
      },
      {
        id: "u2t5",
        title: "Topic 5: Ubiquitous Ecosystems - U-Learning",
        summary: [
          "Ubiquitous learning integrates digital coaching seamlessly into our daily physical environments.",
          "Driven by advanced cloud systems, IoT devices, augmented reality markers, and localized context-aware QR codes.",
          "The entire physical world becomes a learning dashboard, triggering information relative to location and time."
        ],
        visualType: "ulearning",
        lessonsLearned: "Ubiquitous setups erase the psychological division of 'going to study'. Learning becomes an ambient utility, always accessible as needed.",
        qrLink: "https://quiz.unemi.edu.ec/ubiquitous-iot-spaces",
        qrDesc: "Scan to study case examples on using QR codes and environmental IoT tags in hybrid university museums.",
        activityTitle: "Ubiquitous QR Location Scenario Sandbox",
        icon: "icon_globe.png"
      },
      {
        id: "u2t6",
        title: "Topic 6: The Three Essential Actors of LMS Environments",
        summary: [
          "E-learning relies on an active relationship among: the Learner (the active center), the Teacher (the curator), and the Admin (the technical anchor).",
          "The Learner produces content and reviews peers; the Teacher designs modules, scaffolds concepts, and assesses progress.",
          "The Admin maintains server stability, manages credentials, secures database fields, and integrates external API keys."
        ],
        visualType: "three_actors",
        lessonsLearned: "A platform fails if any pillar is neglected: without admin maintenance, the system crashes; without instructor guidance, students drop out; without learner agency, content is useless.",
        qrLink: "https://quiz.unemi.edu.ec/actors-roles-matrix",
        qrDesc: "Scan to view our administrative permission map explaining role assignments inside university LMS platforms.",
        activityTitle: "Platform Roles & Authority Hot-Spot Mapper",
        icon: "icon_puzzle.png",
        mindmapPath: "diagram_three_actors.png"
      },
      {
        id: "u2t7",
        title: "Topic 7: Pedagogical Planning & Productivity Platforms",
        summary: [
          "Online instructors utilize high-productivity, specialized toolkits to organize content delivery templates and monitor student teams.",
          "Synchronous videoconferencing services (Zoom, Teams) provide reliable face-to-face links and automatic meeting transcriptions.",
          "Collaborative workspaces (Google Docs) and project planners (ProofHub, Trello) maintain task tracking and progress transparently."
        ],
        visualType: "productivity",
        lessonsLearned: "Productivity in e-learning is not accidental. It requires selecting tools that seamlessly align with-and support-your specific learning objectives.",
        qrLink: "https://proofhub.com/unemi-interactive-tasks-example",
        qrDesc: "Scan to inspect our live study group task organizer template on ProofHub.",
        activityTitle: "Agile Academic Project Kanban Board",
        icon: "icon_handshake.png",
        mindmapPath: "U2_T2_platforms_services.png"
      },
      {
        id: "u2t8",
        title: "Topic 8: Open Source Software Platforms: Moodle & Chamilo",
        summary: [
          "Open Source LMS software is distributed under free licensing (like GNU GPL), allowing complete code adaptations and hosting flexibility.",
          "They have massive developer communities, creating thousands of free modules, security patches, and interactive integrations.",
          "Leading institutional choices include Moodle (highly customizable and robust) and Chamilo (highly visual, clean, and intuitive)."
        ],
        visualType: "free_vs_commercial",
        lessonsLearned: "Though Open Source software is free from licensing fees, it requires dedicated IT departments to handle installation, hosting, and security configurations.",
        qrLink: "https://unemi.edu.ec/open-source-matrix-guide",
        qrDesc: "Scan to review our evaluation matrix of top open-source virtual campus engines.",
        activityTitle: "Open Source LMS Setup Configurator",
        icon: "icon_database.png",
        mindmapPath: "diagram_free_vs_commercial.png"
      },
      {
        id: "u2t9",
        title: "Topic 9: Commercial & Proprietary LMS Alternatives",
        summary: [
          "Proprietary platforms are commercial systems backed by dedicated tech support, high SLA hosting, and immediate setup workflows.",
          "While they demand high licensing or subscription fees per user, they eliminate the need to maintain private servers.",
          "Prominent examples include Blackboard (enterprise-level), Canvas (popular in higher ed), and course hubs like Coursera."
        ],
        visualType: "platform_grid",
        lessonsLearned: "Under commercial paradigms, software is a reliable background service. This allows teaching departments to focus purely on content curation, not server configurations.",
        qrLink: "https://unemi.edu.ec/commercial-lms-pricing-models",
        qrDesc: "Scan to view our technical comparison matrix of leading commercial and proprietary LMS setups.",
        activityTitle: "Institutional LMS Budget Planner & Estimator",
        icon: "icon_shield.png",
        mindmapPath: "diagram_nine_platforms_grid.png"
      },
      {
        id: "u2t10",
        title: "Topic 10: System Standardization & Interoperability",
        summary: [
          "Technical standards ensure learning contents can migrate seamlessly across brand LMS environments without breaking.",
          "SCORM (Sharable Content Object Reference Model) bundles modules with precise tracking rules for scores and study times.",
          "LTI (Learning Tools Interoperability) links external interactive apps, simulations, or textbook libraries directly inside your main LMS.",
          "Interoperability ensures digital materials remain accessible, durable, and reusable over decades of system updates."
        ],
        visualType: "scorm_lti",
        lessonsLearned: "Creating non-standard content secures a short-term layout, but adopting standardized files (SCORM/LTI) preserves your curriculum assets for future platform shifts.",
        qrLink: "https://quiz.unemi.edu.ec/scorm-lti-differences-chart",
        qrDesc: "Scan to review our comparative study on SCORM package packaging and LTI integration standards.",
        activityTitle: "SCORM Packaging & Interoperability Simulator",
        icon: "icon_plug.png"
      },
      {
        id: "u2t11",
        title: "Topic 11: Virtual Classroom Quality Criteria & Accessibility",
        summary: [
          "Virtual course reviews verify high standards of pedagogical alignment, user navigation paths, and platform performance.",
          "Accessibility standards (such as WCAG 2.1) guarantee disabled students can access content using screen readers, captions, and keyboard controls.",
          "Syllabus evaluations must systematically audit: accessibility, reusability, durability, maintainability, adaptability, and interoperability."
        ],
        visualType: "standardization_criteria",
        lessonsLearned: "Accessibility is not a feature; it is an ethical and often legal mandate. An educational space is only successful if it can be accessed by everyone.",
        qrLink: "https://unemi.edu.ec/lms-detailed-comparative-matrix",
        qrDesc: "Scan to download the official university checklist for validating virtual classroom accessibility compliance.",
        activityTitle: "LMS Accessibility Compliance Evaluation Form",
        icon: "icon_speedometer.png",
        mindmapPath: "diagram_standardization_criteria.png"
      }
    ]
  }
];

export const GLOSSARY: GlossaryItem[] = [
  {
    term: "Asynchronous Learning",
    definition: "An educational workflow where communication does not occur in real-time. Students access modules, watch videos, and submit exams at their own pace within structured weekly schedules."
  },
  {
    term: "B-Learning (Blended Learning)",
    definition: "A hybrid framework combining traditional, face-to-face classroom lectures with flexible, online e-learning activities and discussions."
  },
  {
    term: "LMS (Learning Management System)",
    definition: "An integrated web software utilized to create, manage, deliver, track, assess, and report on structured digital courses and student enrollments."
  },
  {
    term: "U-Learning (Ubiquitous Learning)",
    definition: "Omnipresent learning that happens anywhere and at any moment, seamlessly integrated into daily life via portable mobile phones, IoT tags, QR links, and context-aware systems."
  },
  {
    term: "Connectivism",
    definition: "The native digital-age learning theory formulated by George Siemens. It asserts that knowledge is distributed across networks of people and systems; learning consists of navigating and linking information nodes."
  },
  {
    term: "SCORM (Sharable Content Object)",
    definition: "A industry standard for packaging educational content. It allows interactive modules to be imported into any SCORM-compliant LMS, tracking grading, progress, and study times uniformly."
  },
  {
    term: "LTI (Learning Tools Interoperability)",
    definition: "An open standard from IMS Global that allows external digital tools, simulators, or databases to launch and link grades securely within an institution's central LMS."
  },
  {
    term: "M-Learning (Mobile Learning)",
    definition: "A subset of e-learning optimized specifically for smartphones and tablets. Focuses on responsiveness, fluid touch screens, and micro-content."
  },
  {
    term: "Community of Practice (CoP)",
    definition: "A collaborative group of people who share a passion or a profession and interact regularly to share tips, build portfolios, and solve digital classroom issues together."
  },
  {
    term: "Netiquette",
    definition: "The polite and ethical guidelines that govern virtual interactions. Includes rules on writing tone, respecting privacy, citing content, and opposing cyberbullying."
  },
  {
    term: "PLE (Personal Learning Environment)",
    definition: "The custom network of tools, blogs, databases, and digital circles created by an individual student or teacher to guide and direct their own ongoing professional learning."
  },
  {
    term: "MOOC (Massive Open Online Course)",
    definition: "An online course framework designed for unlimited enrollments, open access, and structured web forums. Celebrated for democratizing higher education worldwide."
  },
  {
    term: "Synchronous Learning",
    definition: "Virtual lessons occurring live in real-time (e.g., Zoom sessions, active chats, real-time whiteboards) requiring instant attendance and active digital dialogues."
  },
  {
    term: "WCAG (Web Content Accessibility Guidelines)",
    definition: "The international standards ensuring web pages are fully accessible to people with disabilities, such as having contrast controls, alt texts, screen readers, and clear keyboard layouts."
  }
];

export const SUGGESTED_READINGS: SuggestedReading[] = [
  {
    title: "Impact of Modern Technology in Education: A Critical Review of Pedagogical Paradigms",
    authorOrRef: "UNEMI Educational Sciences Department Quarterly (2024)",
    link: "https://unemi.edu.ec/investigacion"
  },
  {
    title: "Entering the 3rd Generation of E-Learning: Personal Learning Networks and Ubiquitous Spaces",
    authorOrRef: "Siemens, G. & Downes, S. (Advanced Pedagogical Research)",
    link: "https://uark.pressbooks.pub/edtech"
  },
  {
    title: "Standards for learning, teaching, and leading in the digital age",
    authorOrRef: "International Society for Technology in Education (ISTE, 2025)",
    link: "https://iste.org/standards"
  },
  {
    title: "Social Networks as structured learning and teaching environments: Security and Pedagogical Guidelines",
    authorOrRef: "Tosun, N. (Journal of Education and Training Studies)",
    link: "https://eric.ed.gov/?id=EJ1208397"
  },
  {
    title: "Instructional Design Standards for Higher Education and Hybrid E-Learning Modules",
    authorOrRef: "UNEMI academic board publication on digital guidelines",
    link: "https://quiz.unemi.edu.ec/"
  }
];
