export const PROFILE = {
	name: "Vaishnav",
	tagline: "Engineering Physics @IIT Guwahati",
	bio: "Engineering Physics student at IIT Guwahati building at the intersection of AI, product and data. Currently an AI Product Intern at Oliv AI.",
};

export const SKILLS_DATA = [
	{
		title: "Data & Analytics",
		items: ["Python", "SQL", "Pandas", "NumPy", "Power BI", "Tableau", "Excel", "Matplotlib", "PostHog"],
	},
	{
		title: "ML / DL",
		items: ["Scikit-Learn", "PyTorch", "OpenCV", "TrackPy", "RNN", "Transformers"],
	},
	{
		title: "Product & Design",
		items: ["Figma", "Framer", "Lovable", "Notion", "Jira"],
	},
	{
		title: "AI & Automation",
		items: ["n8n", "Zapier", "LLM Evals", "Prompt Engineering"],
	},
	{
		title: "Development",
		items: ["C/C++", "Python", "HTML/CSS", "JavaScript", "Git/GitHub"],
	},
];

export const CASE_STUDIES = [
	{
		title: "CaBEL - Predictive Cable Failure Monitoring",
		meta: "Belden InnovateX 2026 National Finalist - Mar 2026",
		description:
			"Industrial SaaS for predictive cable monitoring, preventing downtime for 10,000+ Belden customers. Built a 3-year monetization model reaching $18M ARR, with enterprise API integrations for ecosystem lock-in and ~$500K saved per prevented outage.",
		liveUrl: "https://canva.link/wienjerekkcibl7",
	},
	{
		title: "Revenue Leakage in Hospitality",
		meta: "Consulting & Analytics Club, IITG - Jun 2025",
		description:
			"EDA and root-cause analysis on 10K+ booking records, with a SQL + Power BI dashboard tracking ADR and RevPAR that surfaced 15% revenue leakage. Proposed a revenue framework for +10% weekday occupancy and 200% ROI.",
		liveUrl: "https://github.com/vaishvan/Optimizing-Revenue-Leakages-and-Profitability-in-the-Hospitality-Sector",
	},
	{
		title: "GrameenScore",
		meta: "E-Cell IITG Summer Project - May 2025",
		description:
			"Rural lending framework built from 25+ industry reports and 20+ credit-access pain points, targeting +35% rural credit coverage. Credit scoring model cut credit-history dependency by 40%; benchmarked 10+ fintechs to find 4 market gaps.",
		liveUrl: "https://drive.google.com/file/d/1s81d0C5VQon5Yr3_li3mhZRTXDILQPH3/view",
	},
];

const repo = (name) => `https://github.com/vaishvan/${name}`;

// Newest first (project date from job-kb, else GitHub repo creation date).
export const PROJECTS_DATA = [
	{
		title: "Grade-ient",
		meta: "Web App - Python",
		description:
			"Anonymous, session-only grade prediction and academic analytics app for IIT Guwahati.",
		liveUrl: repo("Course-s"),
	},
	{
		title: "Cardmember Profitability Modeling",
		meta: "Amex Strategy Track 2026 - Python",
		description:
			"Vectorized P&L model over 500K credit card accounts with a label-free optimization loop under a 20-query limit. Score went from 0.811 to 0.898.",
		liveUrl: repo("Amex-ST-2026"),
	},
	{
		title: "Brownian Motion Particle Tracking",
		meta: "Research, IITG - Python",
		description:
			"OpenCV + TrackPy detection pipeline at 72% accuracy, engineered features that cut false positives by 31%, and trajectory linking with 0.91 R² motion fits.",
		liveUrl: repo("Trackpy_Particle_Detection"),
		reportUrl: "https://drive.google.com/file/d/1iYzd6tOutzLb7xTVIECin7vwPBDV4omZ/view",
	},
	{
		title: "U-Net Skin Lesion Segmentation",
		meta: "Deep Learning - Python",
		description:
			"Attention U-Net on ISIC-2016 dermoscopy images, reaching 0.869 Dice, 0.866 recall and 0.903 precision over 5-fold cross-validation.",
		liveUrl: repo("Skin-Lesion"),
	},
	{
		title: "Housing Price Prediction",
		meta: "Machine Learning - Jupyter",
		description: "Housing price regression exploring L1 and L2 regularization.",
		liveUrl: repo("Housing-Price-Prediction"),
	},
	{
		title: "Employee Retention",
		meta: "Machine Learning - Jupyter",
		description: "Predicting employee retention with logistic regression.",
		liveUrl: repo("Employee_Retention"),
	},
	{
		title: "Transcript Analyzer",
		meta: "NLP - Python",
		description:
			"Reads a transcript, runs it through sentence-transformers and scores it against a given rubric.",
		liveUrl: repo("Transcript-Analyzer"),
	},
	{
		title: "Airline Assistant",
		meta: "AI Chatbot - Python",
		description:
			"Conversational assistant for airlines built on FastAPI with AI models for natural language understanding.",
		liveUrl: repo("Airline-Assistant"),
	},
	{
		title: "CNN Traffic Sign Classifier",
		meta: "Computer Vision - Python",
		description: "Traffic sign classification using a convolutional neural network.",
		liveUrl: repo("CNN-Traffic-Sign"),
	},
	{
		title: "SSH Log Analyzer",
		meta: "Security - PowerShell",
		description:
			"PowerShell SIEM with SOAR features that detects and responds to SSH attacks in real time.",
		liveUrl: repo("SSH_log_analyzer"),
	},
	{
		title: "Algorithmic Cost Optimization",
		meta: "Algorithms - C++",
		description: "Command-line C++ solution to a building cost optimization problem.",
		liveUrl: repo("Algorithmic-Cost-Optimization"),
	},
	{
		title: "CompanyGrow",
		meta: "Coding Club Project - JavaScript",
		description: "Coding Club even-semester team project.",
		liveUrl: repo("CompanyGrow"),
	},
	{
		title: "Trust No One",
		meta: "React Jam Spring 2025 - React",
		description: "A game built in React for React Jam Spring 2025.",
		liveUrl: repo("trust-no-one"),
	},
	{
		title: "Credit Card Fraud Detection",
		meta: "Machine Learning - Python",
		description:
			"Three models on 280K+ transactions balancing fraud against customer friction. ROC-AUC 0.94 to 0.98 and 24% fewer false positives.",
		liveUrl: repo("Credit-Card-Fraud-Detection"),
	},
	{
		title: "File Compressor",
		meta: "Desktop App - C++",
		description: "File compression and decompression app built in C++ with a Dear ImGui interface.",
		liveUrl: repo("FileCompressor"),
	},
	{
		title: "Drawrrr",
		meta: "Web App - JavaScript",
		description: "Excalidraw-style whiteboard and diagramming tool built with Fabric.js.",
		liveUrl: repo("drawrrr"),
	},
	{
		title: "PKMN Analyzer",
		meta: "Web App - JavaScript",
		description: "Web app that analyzes matchups between two Pokemon teams.",
		liveUrl: repo("PKMN_ANALYZER"),
	},
	{
		title: "TCP Server",
		meta: "Networking - C++",
		description: "A simple networking server written in C++.",
		liveUrl: repo("tcp-server"),
	},
	{
		title: "Spirographish",
		meta: "Graphics - C++",
		description: "Spirograph animation driven by command-line inputs, written in C++ with SFML.",
		liveUrl: repo("spirographish"),
	},
];

// Everything with a link, for the Socials "Project Links" tab.
export const PROJECT_LINKS = [...CASE_STUDIES, ...PROJECTS_DATA].flatMap((item) => [
	...(item.liveUrl ? [{ label: item.title, href: item.liveUrl }] : []),
	...(item.reportUrl ? [{ label: `${item.title} Report`, href: item.reportUrl }] : []),
]);

export const SOCIAL_LINKS = [
	{ label: "GitHub", href: "https://github.com/vaishvan" },
	{ label: "LinkedIn", href: "https://www.linkedin.com/in/vaishnav314159/" },
	{ label: "Email", href: "mailto:vaishnav314195@gmail.com" },
];

export const ALL_LINKS = [
	...SOCIAL_LINKS,
	...PROJECT_LINKS,
].filter(
	(entry, index, all) =>
		all.findIndex((item) => item.href === entry.href) === index,
);
