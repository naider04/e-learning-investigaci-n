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
          "E-learning combines teaching theory with network technologies to enable flexible remote learning.",
          "It is strongly grounded in Connectivism, where knowledge resides within a diversity of stakeholder opinions and is a continuous network-based product.",
          "ICT competencies are vital for academic and professional performance in social media and modern virtual networks."
        ],
        visualType: "mindmap",
        lessonsLearned: "E-learning is not merely about technology; it is a fundamental pedagogical transformation that radically improves flexibility and the efficiency of accessing worldwide human knowledge.",
        qrLink: "https://quiz.unemi.edu.ec/evaluation-learning-theories",
        qrDesc: "Scan the QR code to take an interactive quiz on educational learning theories (Cognitivism, Constructivism, and Connectivism).",
        activityTitle: "Interactive Self-Assessment Quiz",
        icon: "icon_broadcast_tower.png",
        mindmapPath: "U1_T1_ICT_integration.png"
      },
      {
        id: "u1t2",
        title: "Topic 2: Content Development",
        summary: [
          "Educational content can be asynchronous (flexible access anytime) or synchronous (live streaming classes and real-time interactions).",
          "It includes diverse formats and interaction levels such as simulations, serious games, self-tests, and rich text-audio-visual resources.",
          "An online instructor acts as a multifaceted facilitator: a researcher, a content curator, an experience designer, and a constant evaluator."
        ],
        visualType: "roles",
        lessonsLearned: "A successful e-learning methodology allows students to define their own learning pace using clear objectives, milestone schedules, and highly diverse learning media (audio, video, text).",
        qrLink: "https://youtube.com/unemi-elearning-content-design",
        qrDesc: "Scan the QR code to watch a detailed tutorial video explaining the instructional design of educational digital content.",
        activityTitle: "Instructional Design: Module Builder",
        icon: "icon_video_camera.png",
        mindmapPath: "U1_T2_content_development.png"
      },
      {
        id: "u1t3",
        title: "Topic 3: Educational and Cultural Portals",
        summary: [
          "Portals act as specialized web gateways or unified 'anchor sites' that centralize digital learning resources.",
          "Modern cutting-edge resources include virtual reality (VR), augmented reality (AR), rich interactive labs, and collaborative enciclopedias.",
          "Institutionally recommended examples include Google Earth, National Geographic Educational, and The Wonderment."
        ],
        visualType: "portal",
        lessonsLearned: "The strategic use of cultural and educational portals exponentially fosters student autonomy, empowering them to curate and build their own Personal Learning Environment (PLE).",
        qrLink: "https://ar.unemi.edu.ec/augmented-reality-resources",
        qrDesc: "Scan the QR code to interact with an immersive augmented reality demonstration and explore next-generation classroom assets.",
        activityTitle: "Augmented Reality Sandbox Simulator",
        icon: "icon_globe.png",
        mindmapPath: "U1_T3_cultural_portals.png"
      },
      {
        id: "u1t4",
        title: "Topic 4: Social Networks as Learning Spaces",
        summary: [
          "Social networks break geographical and temporal barriers, requiring very little technical entry barrier to get started.",
          "Web 2.0 and its core architecture of active participation allow massive collaborative crowdsourced knowledge creation (e.g., Wikipedia, YouTube).",
          "It is critical to enforce strict netiquette rules: absolute intolerance to cyberbullying, protection of personal privacy, and maintaining professionalism."
        ],
        visualType: "networks",
        lessonsLearned: "A common social network evolves into a formal learning space only when genuine Communities of Practice (CoP) consolidate under clear guidelines of virtual co-existence and respectful interaction.",
        qrLink: "https://padlet.com/unemi/debate-elearning-networks",
        qrDesc: "Follow the QR code to join a collaborative Padlet debate regarding the pedagogical and ethical boundaries of social networks.",
        activityTitle: "Collaborative Discussion Board",
        icon: "icon_chat_bubble.png",
        mindmapPath: "U1_T4_social_networking.png"
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
          "An educational platform is an integrated virtual environment that systematically organizes content and facilitates instant multidirectional communication.",
          "The paradigm is evolving continuously: E-Learning (purely online) → B-Learning (blended/hybrid) → M-Learning (mobile-first accessibility) → U-Learning (ubiquitous learning integrated into daily environments)."
        ],
        visualType: "evolution",
        lessonsLearned: "Modern integrated platforms make it incredibly easy to configure and launch complete interactive courses in clicks and generate live, customizable progress analytics.",
        qrLink: "https://es.slideshare.net/slideshow/e-learning-blearning-mlearning-ulearning-c-learningpptx/267314989",
        qrDesc: "Scan the QR code to read the official SlideShare presentation regarding E-Learning, B-Learning, M-Learning, and U-Learning paradigms.",
        activityTitle: "Learning Evolution Timeline",
        icon: "icon_gears.png",
        mindmapPath: "U2_T1_learning_platforms.png"
      },
      {
        id: "u2t2",
        title: "Topic 2: E-learning Platforms and Services",
        summary: [
          "Coexistence is driven by three main actors: the Student (the center of action), the Teacher/Instructor (the process guide), and the Admin (technical backup and infrastructure).",
          "Tools are grouped into learning-oriented strategies, class structural design templates, and operational productivity tools.",
          "Prominent productivity integrations include Zoom (synchronous videoconferencing), Google Docs (real-time document editing), and ProofHub (task organization)."
        ],
        visualType: "productivity",
        lessonsLearned: "Sustainable productivity in e-learning is not accidental; it is the direct result of systematic pedagogical planning and an unwavering dedication to interactive excellence.",
        qrLink: "https://proofhub.com/unemi-interactive-tasks-example",
        qrDesc: "Scan the QR code to view a live project management board example optimized for organizing student assignments.",
        activityTitle: "Online Student Task Planner",
        icon: "icon_handshake.png",
        mindmapPath: "U2_T2_platforms_services.png"
      },
      {
        id: "u2t3",
        title: "Topic 3: Types of Educational Platforms",
        summary: [
          "Platforms are categorized into 7 core types, primarily divided between LMS (Learning Management Systems) and MOOCs (Massive Open Online Courses).",
          "Open Source Software: Free license, fully customizable, reusable, and modifiable to institutional needs without licensing fees (e.g., Moodle, Chamilo).",
          "Proprietary/Commercial Platforms: Robust paid environments with dedicated enterprise support and streamlined immediate usability (e.g., Coursera, Blackboard)."
        ],
        visualType: "comparison",
        lessonsLearned: "Technical standardization and interoperability guidelines (such as SCORM or LTI) are absolutely crucial to ensure durability, accessibility, and reuse of educational content across diverse systems.",
        qrLink: "https://unemi.edu.ec/lms-detailed-comparative-matrix",
        qrDesc: "Scan the QR code to download the complete technical comparison matrix of leading proprietary and open-source LMS options.",
        activityTitle: "Smart LMS Match Selector",
        icon: "icon_database.png",
        mindmapPath: "U2_T3_types_platforms.png"
      }
    ]
  }
];

export const GLOSSARY: GlossaryItem[] = [
  {
    term: "Asynchronous Learning",
    definition: "A student-centered instruction method where learning experiences occur outside of real-time. It permits participants to access courseware and engage in activities at their custom pace."
  },
  {
    term: "B-Learning (Blended Learning)",
    definition: "An educational model representing a hybrid structure that combines classic face-to-face physical classroom sessions with virtual online activities and learning resources."
  },
  {
    term: "LMS (Learning Management System)",
    definition: "An integrated software hosted on web servers used to administer, distribute, track, record, and assess virtual learning programs."
  },
  {
    term: "U-Learning (Ubiquitous Learning)",
    definition: "Omnipresent instruction. The core premise is that learning can happen anywhere, at any moment, seamlessly integrated with daily life through mobile devices, IoT, and high-speed networks."
  },
  {
    term: "Connectivism",
    definition: "A learning theory for the digital age, formulated by George Siemens. It suggests that knowledge resides across diverse networks of connections and learning consists of the ability to connect information nodes."
  },
  {
    term: "SCORM",
    definition: "Sharable Content Object Reference Model. A collection of technical specifications and standards that allows structured digital content to be easily imported and shared across compliant learning management systems."
  }
];

export const SUGGESTED_READINGS: SuggestedReading[] = [
  {
    title: "Impact of modern technology in education: A critical review of pedagogical paradigms",
    authorOrRef: "UNEMI Educational Sciences Department Quarterly (2024)",
  },
  {
    title: "Entering the 3rd Generation of e-Learning: Personal Learning Networks and Ubiquitous spaces",
    authorOrRef: "Siemens, G. & Downes, S. (Advanced Pedagogical Research)",
  },
  {
    title: "Standards for learning, teaching, and leading in the digital age - International Society for Technology in Education (ISTE)",
    authorOrRef: "Official Guidelines and National Policies in Higher Education (2025)",
  }
];
