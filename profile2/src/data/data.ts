// import * as icons from ""
import VsCode from '/icons/Visual_Studio_Code_icon.png';
import Vs from '/icons/Visual_Studio_Icon.png';
import PyCharm from '/icons/PyCharm_Icon.png';
import GitHub from '/icons/github.png';
import AdobePS from '/icons/AdobePs.png';
import AdobeXD from '/icons/Adobe_XD_icon.png';
import UnityIcon from '/icons/unityIcon.png';
import MuiIcon from '/icons/muiLogo.png';
import StackOverflow from '/icons/SFO.png';
import ReactIcon from '/icons/ReactIcon.png';
import Js from '/icons/Js.png';
import Css from '/icons/Css.png';
import Html from '/icons/Html.png';
import Py from '/icons/Py.png';
import Bs from '/icons/Bs.png';
import Trello from '/icons/Trello.png';
import Django from '/icons/Django.jpg';
import TypeScriptIcon from '/icons/Typescript_logo_2020.svg';
import BlazorIcon from '/icons/blazor.svg';
import MudBlazorIcon from '/icons/mudblazor.svg';
import CSharpIcon from '/icons/CSharp.svg';
import VuetifyIcon from '/icons/v-logo-atom.svg';
import FastAPIIcon from '/icons/FastAPI.svg';
import MongoDBIcon from '/icons/MongoDB.svg';
import Sql from '/icons/SQLDatabase.svg';
import Azure from '/icons/Azure.svg';


const data = {
    toolsList: [
        {
            "key": 0,
            "title": "Microsoft Visual Studio Code, Code Editor",
            "link": "https://https://code.visualstudio.com/",
            "linkedImgSource": "https://commons.wikimedia.org/wiki/File:Visual_Studio_Code_1.35_icon.svg",
            "altName": "Visual Studio Code Icon",
            "searchIcon": VsCode,
        },
        {
            "key": 1,
            "title": "Microsoft Visual Studio IDE",
            "link": "https://visualstudio.microsoft.com/",
            "linkedImgSource": "https://commons.wikimedia.org/wiki/File:Visual_Studio_Icon_2019.svg",
            "altName": "Visual Studio Icon",
            "searchIcon": Vs,
        },
        {
            "key": 2,
            "title": "GitHub",
            "link": "https://github.com/",
            "linkedImgSource": "https://commons.wikimedia.org/wiki/File:Octicons-mark-github.svg",
            "altName": "Github",
            "searchIcon": GitHub,
        },
        {
            "key": 3,
            "title": "JetBrains PyCharm IDE",
            "link": "https://www.jetbrains.com/pycharm/",
            "linkedImgSource": "https://commons.wikimedia.org/wiki/File:PyCharm_Icon.svg",
            "altName": "PyCharm Icon",
            "searchIcon": PyCharm,
        },
        {
            "key": 4,
            "title": "Adobe Photoshop",
            "link": "https://www.adobe.com/",
            "linkedImgSource": "https://commons.wikimedia.org/wiki/File:Adobe_Photoshop_Mobile_icon.svg",
            "altName": "Adobe Photoshop Icon",
            "searchIcon": AdobePS,
        },
        {
            "key": 5,
            "title": "Adobe XD",
            "link": "https://www.adobe.com/",
            "linkedImgSource": "https://commons.wikimedia.org/wiki/File:Adobe_XD_CC_icon.svg",
            "altName": "Adobe XD CC Icon",
            "searchIcon": AdobeXD,
        },
        {
            "key": 6,
            "title": "Stack Overflow",
            "link": "https://stackoverflow.com/",
            "linkedImgSource": "https://commons.wikimedia.org/wiki/File:Stack_Overflow_icon.svg",
            "altName": "Stack Overflow Icon",
            "searchIcon": StackOverflow,
        },
        {
            "key": 7,
            "title": "Trello",
            "link": "https://trello.com/home",
            "linkedImgSource": "https://commons.wikimedia.org/wiki/File:Antu_trello.svg",
            "altName": "Trello Kanban",
            "searchIcon": Trello,
        },
        {
            "key": 8,
            "title": "Unity Editor",
            "link": "https://unity.com/",
            "linkedImgSource": "https://unity.com/",
            "altName": "Unity Editor Icon",
            "searchIcon": UnityIcon,
        },
        {
            "key": 9,
            "title": "Azure",
            "link": "https://techicons.dev/icons/azure",
            "linkedImgSource": "https://techicons.dev/icons/azure",
            "altName": "Azure Icon",
            "searchIcon": Azure,
        },
    ],
    langsList: [
        {
            "key": 0,
            "title": "TypeScript",
            "link": "https://typescript.org/",
            "linkedImgSource": "https://commons.wikimedia.org/wiki/File:Typescript_logo_2020.svg",
            "altName": "TypeScript Icon",
            "searchIcon": TypeScriptIcon,
        },
        {
            "key": 1,
            "title": "Javascript",
            "link": "https://www.javascript.com/",
            "linkedImgSource": "https://commons.wikimedia.org/wiki/File:Javascript_Logo.png",
            "altName": "Javascript Icon",
            "searchIcon": Js,
        },
        {
            "key": 2,
            "title": "Blazor",
            "link": "https://dotnet.microsoft.com/en-us/apps/aspnet/web-apps/blazor",
            "linkedImgSource": "https://dotnet.microsoft.com/en-us/apps/aspnet/web-apps/blazor",
            "altName": "Blazor Icon",
            "searchIcon": BlazorIcon,
        },
        {
            "key": 3,
            "title": "C#",
            "link": "https://commons.wikimedia.org/wiki/File:Csharp_Logo.png",
            "linkedImgSource": "https://commons.wikimedia.org/wiki/File:Csharp_Logo.png",
            "altName": "C Sharp Icon",
            "searchIcon": CSharpIcon,
        },
        {
            "key": 4,
            "title": "Vuetify",
            "link": "https://vuetifyjs.com/en/",
            "linkedImgSource": "https://vuetifyjs.com/en/",
            "altName": "Vuetify Icon",
            "searchIcon": VuetifyIcon,
        },
        {
            "key": 4,
            "title": "Reactjs",
            "link": "https://reactjs.org/",
            "linkedImgSource": "https://commons.wikimedia.org/wiki/File:React-icon.svg",
            "altName": "React.js Icon",
            "searchIcon": ReactIcon,
        },
        {
            "key": 5,
            "title": "MudBlazor",
            "link": "https://reactjs.org/",
            "linkedImgSource": "https://mudblazor.com",
            "altName": "MudBlazor Icon",
            "searchIcon": MudBlazorIcon,
        },
        {
            "key": 6,
            "title": "HTML5",
            "link": "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics",
            "linkedImgSource": "https://commons.wikimedia.org/wiki/File:Devicon-html5-plain.svg",
            "altName": "HTML-5 Icon",
            "searchIcon": Html,
        },
        {
            "key": 7,
            "title": "CSS3",
            "link": "https://developer.mozilla.org/en-US/docs/Web/CSS",
            "linkedImgSource": "https://commons.wikimedia.org/wiki/File:CSS3_logo.svg",
            "altName": "CSS-3 Icon",
            "searchIcon": Css,
        },
        {
            "key": 8,
            "title": "Material UI",
            "link": "https://mui.com/",
            "linkedImgSource": "https://material-ui.com/",
            "altName": "Material UI Icon",
            "searchIcon": MuiIcon,
        },
        {
            "key": 9,
            "title": "Bootstrap",
            "link": "https://getbootstrap.com/",
            "linkedImgSource": "https://commons.wikimedia.org/wiki/File:Bootstrap_logo.svg",
            "altName": "Bootstrap Icon",
            "searchIcon": Bs,
        },
        {
            "key": 10,
            "title": "Python",
            "link": "https://www.python.org/",
            "linkedImgSource": "https://commons.wikimedia.org/wiki/File:Python_logo_01.svg",
            "altName": "Python Icon",
            "searchIcon": Py,
        },
        {
            "key": 11,
            "title": "Django Framework & Django Rest Framework",
            "link": "https://www.djangoproject.com/",
            "linkedImgSource": "https://icon-library.com/icon/django-icon-0.html.html",
            "altName": "Django Icon",
            "searchIcon": Django,
        },

        {
            "key": 10,
            "title": "MongoDB",
            "link": "https://techicons.dev/icons/mongodb",
            "linkedImgSource": "https://techicons.dev/icons/mongodb",
            "altName": "MongoDB Icon",
            "searchIcon": MongoDBIcon,
        },
        {
            "key": 11,
            "title": "SQL",
            "link": "https://techicons.dev/icons/azuresqldatabase",
            "linkedImgSource": "https://techicons.dev/icons/azuresqldatabase",
            "altName": "SQL Icon",
            "searchIcon": Sql,
        },
        {
            "key": 12,
            "title": "FastAPI",
            "link": "https://techicons.dev/icons/fastapi",
            "linkedImgSource": "https://techicons.dev/icons/fastapi",
            "altName": "FastAPI Icon",
            "searchIcon": FastAPIIcon,
        },
    ],

    // react/django proshop ->  akBn1xWokfYQZKrxHb
    // JS guessNumberGame ->  XWXB0XqZPJASSZ9HQA
    // js dice game -> ZCJVxraUXAPVmHo1m7
    // next.js Meetups clone -> BmVjF9nkmsghyHCvcc
    // next.js-React.js (H&W stair and rail) -> 5362vGll2WQMOXVJDk
    // nucamp Bootstrap App -> l6xLarRafOXpEOlOGk

    projectCardList: [
        {
            id: 'personaprint',
            featured: true,
            // gifId: "5362vGll2WQMOXVJDk", // TODO: yyoutube private listing ID(?)
            imageTitle: "personaprint-image",
            cardTitle: "Personaprint",
            subtitle: "Active project – planned deployment",
            cardDescription: `Personaprint is a personality-driven matching platform built to make meaningful connections faster and more intentional in an increasingly digital world. Instead of allowing personality traits to surface slowly over time, Personaprint captures and abstracts deeper personality data up front, providing a stronger starting point for connection. \n\nThe frontend is built with Vuetify, TypeScript, HTML, and CSS, while the backend is powered by FastAPI(Python) with Pydantic models and MongoDB.At its core is a fully custom matching engine designed from scratch, leveraging richer, multidimensional personality data rather than shallow surface- level attributes.AI is used as a supportive layer to assist with early interactions, informed by personality traits to encourage more thoughtful and compatible connections.`,
            // projectLink: "https://github.com/miketwheeler/hwstairandrail",
            // sitelink: "https://hwstairandrail.netlify.app",
            logoList: [VuetifyIcon, TypeScriptIcon, Css, Py, FastAPIIcon, MongoDBIcon]
        },
        {
            id: 'automagicalmanual',
            featured: true,
            // gifId: "5362vGll2WQMOXVJDk",
            imageTitle: "automagical-manual-image",
            subtitle: "Active project – Concept / MVP",
            cardTitle: "Aut🧐magical Manual",
            cardDescription: "Automagical Manual is a no-code documentation platform designed to make creating and maintaining complex documentation accessible to anyone. Starting from a blank canvas, users can construct structured, visually polished documents directly from the UI without writing code. \n\nBuilt with Vuetify, TypeScript, HTML, and CSS on the frontend and FastAPI, Pydantic, and MongoDB on the backend, the system uses a purpose-built data schema that dynamically translates document sections into clean, consistent UI components. The platform also integrates a Retrieval-Augmented Generation (RAG) AI system that understands documents in real time — even while they are being built — and can assist with editing, expanding sections, generating new content, and answering questions about the documentation corpus.",
            // projectLink: "https://github.com/miketwheeler/hwstairandrail",
            // sitelink: "https://hwstairandrail.netlify.app",
            logoList: [VuetifyIcon, TypeScriptIcon, Css, Py, FastAPIIcon, MongoDBIcon]
        },
        {
            id: 'polarpolicyassurancereviewer',
            featured: true,
            // gifId: "5362vGll2WQMOXVJDk",
            imageTitle: "polar-policy-assurance-reviewer-image",
            subtitle: "Concept / MVP",
            cardTitle: "POLAR",
            cardDescription: "POLAR (Policy Assurance Reviewer) is a cloud-native proof of concept focused on intelligent document extraction and analysis. Built with Blazor Server, .NET 8, C#, and MudBlazor, it leverages Microsoft Azure Document Intelligence AI to process and extract structured data from a wide range of document types.\n\nThe system supports typed, scanned, handwritten (across multiple languages), and photographed documents, handling ambiguous and inconsistent formats with high accuracy. POLAR significantly reduces manual processing effort while improving efficiency and data reliability. The platform is intentionally open-ended, designed to serve as a foundation for varied document-driven workflows and future implementations.",
            // projectLink: "https://github.com/miketwheeler/hwstairandrail",
            // sitelink: "https://hwstairandrail.netlify.app",
            logoList: [BlazorIcon, CSharpIcon, MudBlazorIcon, Js, Css, Azure]
        },
        {
            id: 'communityactionprogram',
            featured: true,
            // gifId: "5362vGll2WQMOXVJDk",
            imageTitle: "community-action-program-image",
            subtitle: "Client / nonprofit project (in production)",
            cardTitle: "Community Action Program",
            cardDescription: "A full-stack, server-side web application built primarily in Blazor Server using C#, .NET, and MudBlazor components. The platform is backed by Microsoft SQL Server and hosted on Microsoft Azure, with development and deployment managed through GitHub, Azure DevOps, and regular stakeholder standups.\n\nThe application serves as a business and operations management system for a nonprofit organization and is actively used in production with sensitive data. It includes a custom checkout and point-based purchasing system that functions as an in-store register, allowing enrolled individuals to spend assigned monthly points in place of traditional currency.\n\nAn administrative interface supports volunteer management, product and category management (including cost configuration for downstream reporting), and a reporting system built around predefined use cases and configurable selection inputs. While the reporting UI was constrained by third-party licensing, I contributed significantly to the underlying data modeling and query logic.",
            // projectLink: "https://github.com/miketwheeler/hwstairandrail",
            // sitelink: "https://hwstairandrail.netlify.app",
            logoList: [BlazorIcon, CSharpIcon, MudBlazorIcon, Js, Css, Sql, Azure]
        },
        {
            id: 'goodsipcoffeecompany',
            featured: true,
            // gifId: "5362vGll2WQMOXVJDk",
            imageTitle: "good-sip-coffee-company-image",
            subtitle: "Ecommerce project – paused",
            cardTitle: "Good Sip Coffee Company",
            cardDescription: "A multi-tenant e-commerce and operations platform designed to support bulk coffee roasting and branded corporate gifting workflows. The system was architected to support both a low-volume public storefront and a dedicated corporate ordering portal, with the public site serving as a landing and entry point for business clients.\n\nThe corporate portal handled authenticated client ordering, inventory and materials management (coffee, packaging, labels, and supplies), roasting profile configuration, production batching to optimize roasting efficiency, label generation and assignment, and order aggregation across clients. The project reached an advanced stage of development before being paused and remains shelved for potential future continuation.",
            // projectLink: "https://github.com/miketwheeler/hwstairandrail",
            // sitelink: "https://hwstairandrail.netlify.app",
            logoList: [BlazorIcon, CSharpIcon, MudBlazorIcon, Js, Css, Sql, Azure]
        },
        {
            id: 'hwstairandrail',
            featured: false,
            gifId: "5362vGll2WQMOXVJDk",
            imageTitle: "h-and-w-stair-and-rail",
            subtitle: "Client Project (Volunteered)",
            cardTitle: "H&W Stair and Rail",
            cardDescription: "A single-page application built with Next.js, JavaScript, HTML, and CSS, incorporating both custom components and Material UI. The project includes API integrations for data handling and communication management, delivering a clean, modern interface tailored to client needs.",
            projectLink: "https://github.com/miketwheeler/hwstairandrail",
            sitelink: "https://hwstairandrail.netlify.app",
            logoList: [ReactIcon, Js, Css, MuiIcon, Bs]
        },
        {
            id: 'nucampcampsiteapp',
            featured: false,
            gifId: "l6xLarRafOXpEOlOGk",
            imageTitle: "nucamp-bootcamp-bootstrap",
            cardTitle: "Nucamp Campsites App",
            cardDescription: "A full-stack learning project developed during the NuCamp Web Development Program. Built using Bootstrap, JavaScript, HTML, and CSS, the application demonstrates foundational frontend development concepts, responsive design, and structured UI composition.",
            projectLink: "https://github.com/miketwheeler/bootstrap-tester",
            logoList: [Bs, Js, Css, Html],
        },
        {
            id: 'ecommerceapp',
            featured: false,
            gifId: "akBn1xWokfYQZKrxHb",
            imageTitle: "react-js-with-django-backend",
            cardTitle: "Ecommerce Shopping App",
            cardDescription: "A guided full-stack ecommerce application built with React on the frontend and Django REST Framework on the backend. The project includes REST API integration, an administrative interface for product and account management, and end-to-end data flow between client and server.",
            projectLink: "https://github.com/miketwheeler/Django-React-Ecomerce",
            logoList: [ReactIcon, Py, Django, Css, Html],

        },
        {
            id: 'meetupsclone',
            featured: false,
            gifId: "BmVjF9nkmsghyHCvcc",
            imageTitle: "meetups-clone-next-js ",
            cardTitle: "Meetups Clone",
            cardDescription: "A lightweight events platform inspired by Meetup, built with Next.js, JavaScript, HTML, CSS, and Sass. Features include searchable event listings and an admin interface for managing events.",
            projectLink: "https://github.com/miketwheeler/React-MeetupsApp",
            logoList: [Js, Css, Html],
        },
        {
            id: 'guessnumbergame',
            featured: false,
            gifId: "XWXB0XqZPJASSZ9HQA",
            imageTitle: "javascript-guess-number-game",
            subtitle: "Tutorial / learning project",
            cardTitle: "Guess My Number Game",
            cardDescription: "A project game built with Javascript, HTML and CSS.",
            projectLink: "https://github.com/miketwheeler/javaScriptProjects/tree/main/%231-JSproject",
            logoList: [Js, Css, Html],
        },
        {
            id: 'dicegame',
            featured: false,
            gifId: "ZCJVxraUXAPVmHo1m7",
            imageTitle: "javascript-dice-game",
            cardTitle: "Javascript Dice Game",
            cardDescription: "A small browser-based game built with JavaScript, HTML, and CSS as part of a structured learning course. The project focuses on core JavaScript fundamentals, including game state, user input handling, conditional logic, and DOM manipulation.",
            projectLink: "https://github.com/miketwheeler/javaScriptProjects/tree/main/%233-JSproject",
            logoList: [Js, Css, Html]
        },
    ],
    degreeCardData: {
        'accredited': [
            {
                source: "University of Nebraska at Omaha",
                dateComplete: "Graduated - 12/2019",
                what: "Bachelor's of Science in Management Information Systems",
                location: "Omaha, Nebraska",
                blurb: "Completed a comprehensive program focused on software development, systems analysis, databasing, and project management. Coursework emphasized both technical implementation and high-level system design, covering the full software development lifecycle.\n\nKey areas of study included advanced database systems, information systems assurance, project management, web development, and object-oriented programming (Java). The two-part project management sequence spanned an entire academic year and involved identifying a real-world client, conducting requirements gathering and consultation, and delivering a functional application.\n\nDesigned and built a volunteer management system for the American Foundation for Suicide Prevention (AFSP), Omaha Chapter, applying end-to-end SDLC practices from requirements analysis through implementation."
            },
            {
                source: "University of Nebraska at Omaha",
                what: "Certificate in Systems Development",
                location: "Omaha, Nebraska",
                dateComplete: "Achieved - 12/2019",
                blurb: "Earned concurrently with the bachelor’s degree, with additional focus on enterprise and infrastructure-oriented topics. Coursework included Windows Server administration, advanced database management, and information architecture, strengthening practical understanding of system-level design, data organization, and operational environments."
            },
        ],
        'extracurricular': [
            {
                source: "Microsoft C# Fundamentals",
                dateComplete: "06/2024",
                what: "Certificate of Completion (Professional Coursework)",
                location: "Virtual at Microsft Learning",
                blurb: "Completed foundational training in C# and .NET, covering core language features, object-oriented principles, and application development fundamentals within the Microsoft ecosystem."
            },
            {
                source: "Blazor Server Course",
                dateComplete: "09/2023",
                what: "Certificate of Completion (Professional Coursework)",
                location: "Virtual at Udemy",
                blurb: "Developed an inventory management system for a mock bicycle shop using Blazor Server, applying Clean (Onion) Architecture principles. The course emphasized use-case–driven development, separation of concerns, and maintainable backend-focused application design."
            },
            {
                source: "Blazor WASM Course",
                dateComplete: "07/2022",
                what: "Certificate of Completion",
                location: "Virtual at Udemy",
                blurb: "Coursework focused on building client-side applications using Blazor WebAssembly with C# and .NET. Topics included application architecture, MVC-style separation, frontend–backend communication, data management, and deployment considerations."
            },
            {
                source: "Nucamp Coding Bootcamp",
                dateComplete: "Graduated - 04/2022",
                what: "Certificate in Full Stack Web Development",
                location: "Redmond, Washington",
                blurb: "Completed a full-stack bootcamp covering modern web development tools and workflows. Built dynamic applications using React, React Native, MongoDB, Redux, Bootstrap, and CSS, with backend services assembled using Node.js and Express, culminating in a cloud deployment."
            },
            {
                source: "Python ",
                dateComplete: "02/2021",
                what: "Completed",
                location: "Virtual at Udemy",
                blurb: "Completed comprehensive Python training covering the core language, scripting, and practical application development. Coursework included data structures, control flow, reusable functions, and applying Python to backend and web-oriented use cases."
            },
            {
                source: "Django REST Framework with React.js Course",
                dateComplete: "10/2020",
                what: "Completed",
                location: "Virtual at Udemy",
                blurb: "Developed a full-stack ecommerce application with React on the frontend and Django REST Framework (Python) on the backend. Implemented REST APIs, data persistence, and administrative interfaces supporting full CRUD operations for product and account management."
            },
        ]
    }
};


export default data;