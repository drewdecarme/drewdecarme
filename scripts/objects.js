var titleObj = {
	title: 'Hi, my name is Drew and I believe in documentation.',
	description: [
		"I've often maintained that if I didn't major in IT in school, I would have majored in art. There's something about making things come to life using nothing by your hands thats always captivated my interest.",
		"Fast forward 2 years into the workforce, and I found myself at my desk deep into the morning for a better part of 2 years reading, watching, learning, and practicing everything that is front end development. Driven by an intense work ethic and armed with seemingly endless electronic resources, I set out to master the fundamentals and re-align my career trajectory with my passions.",
		"Now, a full time UI/UX developer, I specialize in taking designs / wireframes / ideas and creating clean, accessible, organized, and well documented interfaces at all buisness levels. My development expertise, combined with my foundations in project management, facilitation, and process improvement, provides me the ability to bridge the gap between functional and technology teams, ultimately leading to a final product that exceeds the expections of all stakeholders.",
		"Go Eagles."
	]
}

var socialObj = [
	{
		class: 'resume',
		aria: 'Download Drews Resume',
		type: 'download',
		link: './files/drewdecarme_color.pdf',
		text: 'Resume'
	},
	{
		class: 'linkedin',
		aria: 'Go to Drews Linkedin Page',
		type: 'link',
		link: 'https://www.linkedin.com/in/drewdecarme',
		text: 'LinkedIn'
	},
	{
		class: 'facebook',
		aria: 'Go to Drews Facebook Page',
		type: 'link',
		link: 'https://www.facebook.com/drewdecarme',
		text: 'Facebook'
	},
	{
		class: 'instagram',
		aria: 'Go to Drews Instagram Page',
		type: 'link',
		link: 'https://www.instagram.com/drewdecarme/',
		text: 'Instagram'
	},
	{
		class: 'twitter',
		aria: 'Go to Drews Twitter Page',
		type: 'link',
		link: 'https://twitter.com/drewdecarme',
		text: 'Twitter'
	},
]


var projectObj = [
	{
		id: 'proj-1',
		summary: {
			logo: 'logo-comcast.png',
			type: 'Pattern Library',
			short: "Developed complete pattern & component library from UX designs for Comcast's internal agent tool, Einstein 360&deg;",
		},
		detail: {
			url: 'project-comcast-patternLibrary.png',
			title: 'Einstein 360&deg; Pattern & Component Library',
			description: "<p>Converted raw designs from Sketch into a collection of reuseable components to standardize the interface of the internal agent system troubleshooting, billing, and outages tool. Worked closely with design teams to recommend adjustments and tweaks based upon development feasability.</p><p>Created custom JavaScript jQuery plugins to regulate interactions and behavior of components.</p><p>Made every effort to use CSS3 to govern transitions and animations in an effort to reduce reliance on JavaScript and respond consistently in any browser.</p><p>Resulted in 1 common JS file and 1 common CSS file. Heavily documented all aspects of structure and initalization (if required).</p>",
			actions: [{
				type: 'button',
				text: 'Take a look at a sample',
				url: 'projects/PatternLibrary/index.html'
			}],
			tags: ['HTML5', 'CSS3', 'JavaScript', 'jQuery']
		}
	},
	{
		id: 'proj-2',
		summary: {
			logo: 'logo-geHealthcare.png',
			type: 'Application',
			short: "Designed and developed a single page application to gain visibility, manage, and report on the systemic integrity of medical parts across ~4 oracle implementations.",
		},
		detail: {
			url: 'project-ge-dataRemediation.png',
			title: 'Product Controllership Data Remediation Workspace',
			description: '<p>Designed, developed, and supported a bootstrap based single page application to consolidate, evaluate, and report on the sanity of medical device part data across internal oracle systems.</p><p>Implemented custom installation of Apache, PHP, and MySQL on an internal virtual server to gather and store massive daily data dumps of part data via scheduled connections to oracle staging servers.</p><p>Wrote several shell scripts to scrub, organize, and populate relational tables with part data to pull from. Develped front end using Bootstrap, jQuery, HTML5, and CSS3 to interface table in an intuitive manner. Utilized various ajax calls to allow application admins to edit and publish reports on data remediation efforts.',
			actions: [{
				type: 'text',
				text: 'Unfortunately, this application is proprietary to GE Healthcare and cannot be displayed.'
			}],
			tags: ['Bootstrap','HTML5','MySQL','jQuery','JavaScript','Ajax','Shell','PHP','Responsive Design','CSS3', 'Pseudo Elements']
		}
	},
	{
		id: 'proj-3',
		summary: {
			logo: 'logo-primaryHomeCare.png',
			type: 'Application',
			short: 'Designed and developed single page survey application to collect yearly medical assessment data on current patients for Medicare.',
		},
		detail: {
			url: 'project-primaryHomeCare-application.png',
			title: 'Primary HomeCare Wellness Survery Application',
			description: '<p>Designed and developed a single page survery application to simplify the collection of paitent wellness data and the generation of a report required by Medicare. Any assessor (RN) can use either a laptop or tablet (platform agnostic excluding smart phones) to walk thorugh the workflow with ease.</p><p>Smart object oriented logic was used to determine if a future question was required based upon preivous answers.</p><p>Implemented a CSV backend so the client can edit, change, adjust categories and questions based upon the requirements of Mediacre for that year. PHP, Ajax, jQuery, JavaScript and HTML connect the rest of the application.</p>',
			actions: [{
				type: 'button',
				text: 'View a Demo',
				url: 'projects/PHCSurvey/index.html'
			},
			{
				type: 'pdf',
				text: 'Inital Designs',
				url: 'projects/PHCSurvey/files/PHCSurveyInitialDesigns.pdf',
			},
			{
				type: 'pdf',
				text: 'Sample Report',
				url: 'projects/PHCSurvey/files/PHCSurveySampleReport.pdf',
			},
			{
				type: 'pdf',
				text: 'Survery How-to',
				url: 'projects/PHCSurvey/files/PHCSurveySOP.pdf',
			}],
			tags: ['HTML5','jQuery','JavaScript','AJAX','PHP','Responsive Design','CSS3', 'Pseudo Elements']
		}
	},
	{
		id: 'proj-4',
		summary: {
			logo: 'logo-primaryHomeCare.png',
			type: 'Website',
			short: "Designed, developed, and re-architected Primary HomeCare's company webspace",
		},
		detail: {
			url: 'project-primaryHomeCare-website.png',
			title: 'Primary Homecare Website',
			description: '<p>Designed and developed a new website for Primary HomeCare, a mid-sized home healthcare company that provides medical services to paitents who are otherwise unable to make routine office visits.</p><p>Transfered architecture from outdated GoDaddy drag and drop web builder to single page, common container based interface. HTML, JavaScript, and jQuery regulate the front end.</p>',
			actions: [{
				type: 'button',
				text: 'Check out the site',
				url: 'http://nphousecalls.org/'
			}],
			tags: ['HTML5','jQuery','JavaScript','Responsive Design','Custom Prototypes','CSS3', 'Pseudo Elements']
		}
	},
	{
		id: 'proj-5',
		summary: {
			logo: 'logo-personal-dark.svg',
			type: 'Collection',
			short: 'Developed a library/collection of commonly used components across web applications',
		},
		detail: {
			url: 'project-personal-componentLibrary.png',
			title: 'Common Front End Component Library',
			description: "<p>This is a collection of custom built web components (validators, datepickers, datatable interfaces, search functions, etc...) that I've developed over the years to standardize common development tasks.</p>\
							<p>This is also a quasi sandbox for me to experiement and try out different development techniques and methodlogies to further progress my understanding of how the user can effectively and efficiently interact with the DOM.</p>\
							<p>These components are written entirely in JavasScript/jQuery and <u><i>without</i></u> the help of any modern JS frameworks. Each component boils down to a simple configuration object that is initiated when the DOM is loaded. Each widget/component/helper is designed specifically to help the developer move faster and make the user experience more intuitive.</p>",
			actions: [{
				type: 'button',
				text: 'Explore the components',
				url: 'projects/ComponentLibrary/index.html'
			}],
			tags: ['HTML5', 'HTML' ,'CSS3', 'Sass','Precompilers','JavaScript','jQuery', 'AJAX' ,'Custom Prototypes', 'Extending jQuery', 'Pseudo Elements']
		}
	},
	{
		id: 'proj-6',
		summary: {
			logo: 'logo-septa.png',
			type: 'Application',
			short: 'COMING SOON - View SEPTA schedules and plan your trip using an interactive map',
		},
		detail: {
			url: 'project-septa-application.png',
			title: 'Interactive SEPTA Map and Trip Planner',
			description: "COMING SOON",
			actions: [{
				type: 'button',
				text: 'COMING SOON',
				url: '#'
			}],
			tags: ['React']
		}
	}
]
// var timeline = [
// 	{
// 		date: {
// 			start: '10/15/2016',
// 			end: null,
// 		},
// 		type: 'experience',
// 		company: 'Comcast',
// 		location: 'Philadelphia, Pennsylvania',
// 		title: 'Lead UI/UX Front End Development',
// 		description: [
// 			"Co-Lead UI developer that creates custom intuitive, simple, elegant front end web interfaces for Comcast's internal agent troubleshooting tool, Einstein 360",
// 			"Liason between the Comcast's internal tools UX team and on/offshore backend developers to come to the best resolution between user experience and application function",
// 			"Advise on certain UI designs to ensure that ease of implementation and power of function are considered",
// 			"Design and develop with a focus accessibility to ensure that all individuals of varying mental and physical capacities can use the application with seamless effort; emphasis on FED with correct markup and cross browser compatability"
// 		]
// 	},{
// 		date: {
// 			start: '8/14/2014',
// 			end: '10/14/2015'
// 		},
// 		type: 'experience',
// 		company: 'GE Healthcare',
// 		location: 'Wauwatosa, Wisconsin',
// 		title: 'IT Project Manager, Product Controllership',
// 		description: [
// 			"Designed a new cross-functional/project/system support strategy to proactively identify & remediate severe deployment risk",
// 			"Drove stakeholder acceptance & implementation of the support strategy across 15+ independent application teams",
// 			"Invented, coded, and implemented 3 web based applications that consolidated 8 manual processes that provided single area for obtaining visibility into 300+ project execution metrics against plans",
// 			"Owned/Managed 10+ project custom project tools that were responsible for tracking project execution for 100MM program"
// 		]
// 	},{
// 		date: {
// 			start: '3/15/2014',
// 			end: '8/14/2014'
// 		},
// 		type: 'experience',
// 		location: "Wauwatosa, Wisconsin",
// 		company: 'GE Healthcare',
// 		title: 'Product Controllership Risk Portfolio Manager (ITLP Rotation #4)',
// 		description: [
// 			"Invented, coded, and implemented project risk tracker that aggregated 1400+ risks; reduced program risk profile by a factor of 2",
// 			"Facilitated the closure of 120+ risks over a 5 month period; Application enhancement projects met 100% of agreed deadlines",
// 			"Facilitated mechanisms & risk reporting to senior level executives that drove critical next steps and  functional tollgate decisions"
// 		]
// 	},{
// 		date: {
// 			start: '9/13/2013',
// 			end: '3/14/2014',
// 		},
// 		type: 'experience',
// 		company: 'GE Healthcare - Surgery Division',
// 		location: 'Salt Lake City, Utah',
// 		title: 'Supply Chain IT Interim Program Manager (ITLP Rotation #3)',
// 		description: [
// 			"Owned GE Healthcare's Surgery business supply chain project proposal portfolio; consolidated 4 project trackers into 1 standard",
// 			"Developed API/Excel app; simplified Kaizen tracking by 99% (2hrs to 1min)"
// 		]
// 	},{
// 		date: {
// 			start: '6/13/2013',
// 			end: '8/14/2014'
// 		},
// 		type: 'experience',
// 		company: "GE Healthcare",
// 		location: 'Wauwatosa, Wisconsin',
// 		title: "ITLP Early-Identifcation (Intern) Program Lead",
// 		description: [
// 			"Led team of 4 to manage/coordinate/deliver GE Healthcare's Information Technology Leadership 2013 intern program",
// 			"Managed 34 interns in 2 locations from 16 states; created use case based onboarding, location centric retention strategies, & drove significant acceptance of the need to increase technical role offerings"
// 		]
// 	},{
// 		date: {
// 			start: '3/15/2013',
// 			end: '8/13/2013'
// 		},
// 		type: 'experience',
// 		company: 'GE Healthcare',
// 		location: "Wauwatosa, Wisconsin",
// 		title: "On Demand (Virtualization) Technology Analyst (ITLP Rotation #2)",
// 		description: [
// 			"Drove purchasing & implementation of Palo Alto virtual firewalls to segment GEHC's virtual network",
// 			"Developed Linux bash script to 1-click configure acquisition absorbed servers; led proof of concept"
// 		]
// 	},{
// 		date: {
// 			start: '8/14/2012',
// 			end: '3/14/2012'
// 		},
// 		type: 'experience',
// 		company: "GE Healthcare",
// 		location: "Wauwatosa, Wisconsin",
// 		title: 'Config/Price/Quote Validation Analyst (ITLP Rotation #1)',
// 		description: [
// 			"Created training & standards to coach 30+ people resulting in +150% reduction in PQ testing errors",
// 			"Teamed with development team & translated 1000+ technical operations into functional user stories"
// 		]
// 	},{
// 		date: {
// 			start: '5/15/2011',
// 			end: '8/15/2011'
// 		},
// 		type: 'experience',
// 		company: "GE Healthcare",
// 		location: "Wauwatosa, Wisconsin",
// 		title: 'Internal Application Securtity Analyst (Internship)',
// 		description: [
// 			"Push Legacy Applications Through Vulnerability Assessment and Remediation.",
// 			"Working to Implement a New and Improved In-House Threat and Vulnerabilty Management System.",
// 			"Work on the Security Team Collaboration Webspace and Website"
// 		]
// 	},{
// 		date: {
// 			start: '5/15/2010',
// 			end: '8/15/2010'
// 		},
// 		type: 'experience',
// 		company: "AstraZeneca Pharmaceuticals LP thorugh Kelly Services",
// 		location: "Wilmington, Delaware",
// 		title: "Business Objects Analyst",
// 		description: [
// 			"Communication liaison between the IS and functional teams",
// 			"Initiated and facilitated frequent conversations/meetings to move stagnant projects forward",
// 			"Assisted in executing small reporting tasks to bolster AstraZeneca's Patient Assistant Program.",
// 			"Created and implemented a plan to eradicate irrelevant data structures in AZ's BO Universes.",
// 			"Analyzed Gartner & Forrester white papers to prepare 3 fit-gap analyses to start of AZ Mobility"
// 		]
// 	},{
// 		date: {
// 			start: '8/1/2015',
// 			end: '9/1/2015'
// 		},
// 		type: 'travel',
// 		company: 'GE Healthare (Training)',
// 		location: 'Shanghai, Bejing, Thailand',
// 		title: "Traveled to China & the Greater Pacfic Region",
// 		description: [
// 			"3 Week intensive training on all aspects and areas of Corporate IT",
// 			"1 Week of immersive group projects ranging from hypothetical ERP deployments to server-side development & virtualization",
// 			"1 Week of travel experiencing everything China and Thailand had to offer from the climbing to the Great Wall to exploring the streets of Bankok"
// 		]
// 	},{
// 		date: {
// 			start: '8/15/2015',
// 			end: '8/30/2015'
// 		},
// 		type: 'event',
// 		company: 'Career Change',
// 		location: "Philadelphia, Pennsylvania",
// 		title: 'Moved back to Philadelphia',
// 		description: [
// 			"Was offered the opportunity to move back to Philadelphia to pursue a career in front-end and full-stack development",
// 			"Self taught from the ground up, took it upon myself to align myself to development projects (both work and personal) to expand my knowledge",
// 			"Spent the greater part of a year focusing on starting a career in Web Development",
// 			"Discovered a passion for development and coding during 2015 in Wisconsin"
// 		]
// 	},{
// 		date: {
// 			start: '8/15/2012',
// 			end: '8/30/2012'
// 		},
// 		type: 'event',
// 		company: 'Career Change',
// 		location: 'Wauwatosa, Wisconsin',
// 		title: "Moved to Wisconsin to join GE Healthcare ITLP",
// 		description: [
// 			"Moving to another state was definitely a great opportunity to learn the ropes of corporate IT but also a great opprotunity to learn a lot about myself",
// 			"Was offered a fantastic opportunity to work with some really great people in Wisconsin to start my career"
// 		]
// 	}
// ]




// var skills = {
// 	category: ['Languages','Design / Tools','Project Mgmt.'],
// 	scale: {
// 		level_1: {
// 			title: 'Fundamental Awareness',
// 			description: 'Possess common knowledge or an understanding of basic techniques and concepts (Focus is on learning)'
// 		},
// 		level_2: {
// 			title: 'Novice',
// 			description: 'Possess an experimental/classroom working knowledge of basic techniques and concepts (Focus is on personal and and on-the-job based learning/experience)'
// 		},
// 		level_3: {
// 			title: 'Practical',
// 			description: 'Possess the ability to successfully complete tasks as requested. Help from an expert might be required from time to time, but can usually perform the skill independently (Focus is on applying and enhancing knowledge or skill)'
// 		},
// 		level_4: {
// 			title: 'Advanced',
// 			description: 'Possess the ability to perform actions without assistance. Known as the “person to ask” when difficult questions arise regarding this skill. (Focus is on board organizational/professional issues)'
// 		},
// 		level_5: {
// 			title: 'Professional',
// 			description: 'Known as an expert. Can provide guidance, troubleshoot and answer questions and issues where the skill is used (Focus is strategic)'
// 		}
// 	},
// 	entry: {
// 		g_0: {
// 			title: "Languages",
// 			labels: ['Language','Skill Level','Experience'],
// 			skills: [
// 					{
// 						name: 'HTML5',
// 						level: {
// 							id: 5,
// 							title: 'Professional',
// 							description: 'Known as an expert. Can provide guidance, troubleshoot and answer questions and issues where the skill is used (Focus is strategic)'
// 						},
// 						exp: 4
// 					},{
// 						name: 'CSS3',
// 						level: {
// 							id: 5,
// 							title: 'Professional',
// 							description: 'Known as an expert. Can provide guidance, troubleshoot and answer questions and issues where the skill is used (Focus is strategic)'
// 						},
// 						exp: 4
// 					},{
// 						name: 'JavaScript',
// 						level: {
// 							id: 4,
// 							title: 'Advanced',
// 							description: 'Possess the ability to perform actions without assistance. Known as the “person to ask” when difficult questions arise regarding this skill. (Focus is on board organizational/professional issues)'
// 						},
// 						exp: 4
// 					},{
// 						name: 'jQuery',
// 						level: {
// 							id: 4,
// 							title: 'Advanced',
// 							description: 'Possess the ability to perform actions without assistance. Known as the “person to ask” when difficult questions arise regarding this skill. (Focus is on board organizational/professional issues)'
// 						},
// 						exp: 4
// 					},{
// 						name: 'PHP',
// 						level: {
// 							id: 2,
// 							title: 'Novice',
// 							description: 'Possess an experimental/classroom working knowledge of basic techniques and concepts (Focus is on personal and and on-the-job based learning/experience)'
// 						},
// 						exp: 2
// 					},{
// 						name: 'SQL',
// 						level: {
// 							id: 3,
// 							title: 'Practical',
// 							description: 'Possess the ability to successfully complete tasks as requested. Help from an expert might be required from time to time, but can usually perform the skill independently (Focus is on applying and enhancing knowledge or skill)'
// 						},
// 						exp: 4
// 					},{
// 						name: 'Shell',
// 						level: {
// 							id: 1,
// 							title: 'Fundamental Awareness',
// 							description: 'Possess common knowledge or an understanding of basic techniques and concepts (Focus is on learning)'
// 						},
// 						exp: '> 1 Year'
// 					},{
// 						name: 'NodeJS',
// 						level: {
// 							id: 1,
// 							title: 'Fundamental Awareness',
// 							description: 'Possess common knowledge or an understanding of basic techniques and concepts (Focus is on learning)'
// 						},
// 						exp: '> 1 Year'
// 					},{
// 						name: 'React',
// 						level: {
// 							id: 1,
// 							title: 'Fundamental Awareness',
// 							description: 'Possess common knowledge or an understanding of basic techniques and concepts (Focus is on learning)'
// 						},
// 						exp: '> 1 Year'
// 					},
// 					{
// 						name: 'AngularJS',
// 						level: {
// 							id: 1,
// 							title: 'Fundamental Awareness',
// 							description: 'Possess common knowledge or an understanding of basic techniques and concepts (Focus is on learning)'
// 						},
// 						exp: '> 1 Year'
// 					},{
// 						name: 'Bootstrap',
// 						level: {
// 							id: 4,
// 							title: 'Advanced',
// 							description: 'Possess the ability to perform actions without assistance. Known as the “person to ask” when difficult questions arise regarding this skill. (Focus is on board organizational/professional issues)'
// 						},
// 						exp: 4
// 					},{
// 						name: 'Responsive Design',
// 						level: {
// 							id: 4,
// 							title: 'Advanced',
// 							description: 'Possess the ability to perform actions without assistance. Known as the “person to ask” when difficult questions arise regarding this skill. (Focus is on board organizational/professional issues)'
// 						},
// 						exp: 4
// 					}
// 			],
// 		},
// 		g_1: {
// 			title: 'Design / Tools',
// 			labels: ['Tool','Skill Level','Experience'],
// 			skills: [{
// 					name: 'MVC',
// 					level: {
// 						id: 2,
// 						title: 'Novice',
// 						description: 'Possess an experimental/classroom working knowledge of basic techniques and concepts (Focus is on personal and and on-the-job based learning/experience)'
// 					},
// 					exp: '> 1 Year'
// 				},{
// 					name: 'Visual Studio 2015',
// 					level: {
// 						id: 3,
// 						title: 'Practical',
// 						description: 'Possess the ability to successfully complete tasks as requested. Help from an expert might be required from time to time, but can usually perform the skill independently (Focus is on applying and enhancing knowledge or skill)'
// 					},
// 					exp: '> 1 Year'
// 				},{
// 					name: 'Sublime Text',
// 					level: {
// 						id: 4,
// 						title: 'Advanced',
// 						description: 'Possess the ability to perform actions without assistance. Known as the “person to ask” when difficult questions arise regarding this skill. (Focus is on board organizational/professional issues)'
// 					},
// 					exp: 4
// 				},{
// 					name: 'Sketch',
// 					level: {
// 						id: 2,
// 						title: 'Novice',
// 						description: 'Possess an experimental/classroom working knowledge of basic techniques and concepts (Focus is on personal and and on-the-job based learning/experience)'
// 					},
// 					exp: '> 1 Year'
// 				},{
// 					name: 'Photoshop CS6',
// 					level: {
// 						id: 2,
// 						title: 'Novice',
// 						description: 'Possess an experimental/classroom working knowledge of basic techniques and concepts (Focus is on personal and and on-the-job based learning/experience)'
// 					},
// 					exp: '> 1 Year'
// 				},{
// 					name: 'Debugging',
// 					level: {
// 						id: 4,
// 						title: 'Advanced',
// 						description: 'Possess the ability to perform actions without assistance. Known as the “person to ask” when difficult questions arise regarding this skill. (Focus is on board organizational/professional issues)'
// 					},
// 					exp: 4
// 				}
// 			]
// 		},
// 		g_2: {
// 			title: 'Project Mgmt',
// 			labels: ['Concept','Skill Level','Experience'],
// 			skills: [{
// 					name: 'Microsoft Project',
// 					level: {
// 						id: 2,
// 						title: 'Novice',
// 						description: 'Possess an experimental/classroom working knowledge of basic techniques and concepts (Focus is on personal and and on-the-job based learning/experience)'
// 					},
// 					exp: 1
// 				},{
// 					name: 'Gantt Charting',
// 					level: {
// 						id: 3,
// 						title: 'Practical',
// 						description: 'Possess the ability to successfully complete tasks as requested. Help from an expert might be required from time to time, but can usually perform the skill independently (Focus is on applying and enhancing knowledge or skill)'
// 					},
// 					exp: 3
// 				},{
// 					name: 'Chartering',
// 					level: {
// 						id: 2,
// 						title: 'Novice',
// 						description: 'Possess an experimental/classroom working knowledge of basic techniques and concepts (Focus is on personal and and on-the-job based learning/experience)'
// 					},
// 					exp: 1
// 				},{
// 					name: 'Time Mangement',
// 					level: {
// 						id: 5,
// 						title: 'Professional',
// 						description: 'Known as an expert. Can provide guidance, troubleshoot and answer questions and issues where the skill is used (Focus is strategic)'
// 					},
// 					exp: 4
// 				},{
// 					name: 'Microsoft Excel',
// 					level: {
// 						id: 5,
// 						title: 'Professional',
// 						description: 'Known as an expert. Can provide guidance, troubleshoot and answer questions and issues where the skill is used (Focus is strategic)'
// 					},
// 					exp: 4
// 				},{
// 					name: 'Stakeholder Management',
// 					level: {
// 						id: 3,
// 						title: 'Practical',
// 						description: 'Possess the ability to successfully complete tasks as requested. Help from an expert might be required from time to time, but can usually perform the skill independently (Focus is on applying and enhancing knowledge or skill)'
// 					},
// 					exp: 3
// 				},{
// 					name: 'Scorecarding',
// 					level: {
// 						id: 3,
// 						title: 'Practical',
// 						description: 'Possess the ability to successfully complete tasks as requested. Help from an expert might be required from time to time, but can usually perform the skill independently (Focus is on applying and enhancing knowledge or skill)'
// 					},
// 					exp: 2
// 				}
// 			]
// 		}	
// 	}
// }