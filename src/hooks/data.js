import VsCode from '../static/images/Visual_Studio_Code_icon.png';
import Vs from '../static/images/Visual_Studio_Icon.png';
import PyCharm from '../static/images/PyCharm_Icon.png';
import GitHub from '../static/images/github.png';
import AdobePS from '../static/images/AdobePs.png';
import AdobeXD from '../static/images/Adobe_XD_icon.png';
import UnityIcon from '../static/images/unityIcon.png';
import MuiIcon from '../static/images/muiLogo.png';
import StackOverflow from '../static/images/SFO.png';
import ReactIcon from '../static/images/ReactIcon.png';
import Js from '../static/images/Js.png';
import Css from '../static/images/Css.png';
import Html from '../static/images/Html.png';
import Py from '../static/images/Py.png';
import Bs from '../static/images/Bs.png';
import Trello from '../static/images/Trello.png';
import Django from '../static/images/Django.jpg';


const data = {
    toolsList: [
        {
            "key": 0,
            "title": "Microsoft, Public domain, via Wikimedia Commons",
            "link": "https://commons.wikimedia.org/wiki/File:Visual_Studio_Code_1.35_icon.svg",
            "altName": "Visual Studio Code Icon",
            "searchIcon": VsCode,
        },
        {
            "key": 1,
            "title": "Microsoft, Public domain, via Wikimedia Commons",
            "link": "https://commons.wikimedia.org/wiki/File:Visual_Studio_Icon_2019.svg",
            "altName": "Visual Studio Icon",
            "searchIcon": Vs,
        },
        {
            "key": 2,
            "title": "GitHub, MIT &lt;http://opensource.org/licenses/mit-license.php&gt;, via Wikimedia Commons",
            "link": "https://commons.wikimedia.org/wiki/File:Octicons-mark-github.svg",
            "altName": "Github",
            "searchIcon": GitHub,
        },
        {
            "key": 3,
            "title": "JetBrains, Public domain, via Wikimedia Commons",
            "link": "https://commons.wikimedia.org/wiki/File:PyCharm_Icon.svg",
            "altName": "PyCharm Icon",
            "searchIcon": PyCharm,
        },
        {
            "key": 4,
            "title": "Adobe, Public domain, via Wikimedia Commons",
            "link": "https://commons.wikimedia.org/wiki/File:Adobe_Photoshop_Mobile_icon.svg",
            "altName": "Adobe Photoshop Icon",
            "searchIcon": AdobePS,
        },
        {
            "key": 5,
            "title": "™/®Adobe Systems, Public domain, via Wikimedia Commons",
            "link": "https://commons.wikimedia.org/wiki/File:Adobe_XD_CC_icon.svg",
            "altName": "Adobe XD CC Icon",
            "searchIcon": AdobeXD,
        },
        {
            "key": 6,
            "title": "Stack Overflow Icon",
            "link": "https://commons.wikimedia.org/wiki/File:Stack_Overflow_icon.svg",
            "altName": "Stack Overflow Icon",
            "searchIcon": StackOverflow,
        },
        {
            "key": 7,
            "title": "Trello",
            "link": "https://commons.wikimedia.org/wiki/File:Antu_trello.svg",
            "altName": "Trello Kanban",
            "searchIcon": Trello,
        },
        {
            "key": 8,
            "title": "Unity, Public domain",
            "link": "https://unity.com/",
            "altName": "Unity Editor Icon",
            "searchIcon": UnityIcon,
        }
    ],
    langsList: [
        {
            "key": 0,
            "title": "React.js Frontend Javascript library",
            "link": "https://commons.wikimedia.org/wiki/File:React-icon.svg",
            "altName": "React.js Icon",
            "searchIcon": ReactIcon,
        },
        {
            "key": 1,
            "title": "Javascript",
            "link": "https://commons.wikimedia.org/wiki/File:Javascript_Logo.png",
            "altName": "Javascript Icon",
            "searchIcon": Js,
        },
        {
            "key": 2,
            "title": "HTML-5",
            "link": "https://commons.wikimedia.org/wiki/File:Devicon-html5-plain.svg",
            "altName": "HTML-5 Icon",
            "searchIcon": Html,
        },
        {
            "key": 3,
            "title": "CSS-3",
            "link": "https://commons.wikimedia.org/wiki/File:CSS3_logo.svg",
            "altName": "CSS-3 Icon",
            "searchIcon": Css,
        },
        {
            "key": 4,
            "title": "Material UI, Public domain",
            "link": "https://material-ui.com/",
            "altName": "Material UI Icon",
            "searchIcon": MuiIcon,
        },
        {
            "key": 5,
            "title": "Bootstrap",
            "link": "https://commons.wikimedia.org/wiki/File:Bootstrap_logo.svg",
            "altName": "Bootstrap Icon",
            "searchIcon": Bs,
        },
        {
            "key": 6,
            "title": "Python",
            "link": "https://commons.wikimedia.org/wiki/File:Python_logo_01.svg",
            "altName": "Python Icon",
            "searchIcon": Py,
        },
        {
            "key": 7,
            "title": "Django",
            "link": "https://icon-library.com/icon/django-icon-0.html.html",
            "altName": "Django Icon",
            "searchIcon": Django,
        }
    ],

// react/django proshop -> id => akBn1xWokfYQZKrxHb
// JS guessNumberGame -> id => XWXB0XqZPJASSZ9HQA
// js dice game = id => ZCJVxraUXAPVmHo1m7
// next.js Meetups clone = id => BmVjF9nkmsghyHCvcc
// next.js-React.js (H&W stair and rail) Hybrid = id => 5362vGll2WQMOXVJDk
// nucamp Bootstrap App = id => l6xLarRafOXpEOlOGk
// React, MUI, BStrap Profile = id => 

    projectCardList: [
        {
            gifId: "5362vGll2WQMOXVJDk",
            imageTitle: "h-and-w-stair-and-rail",
            cardTitle: "H&W Stair and Rail",
            cardDescription: "Built in Next.js with React, Bootstrap and Material UI components. This is a business' information and contact site for local business.",
            projectLink: "https://github.com/miketwheeler/hwstairandrail",
            logoList: [ReactIcon, Js, Css, MuiIcon, Bs]
        },
        {
            gifId: "l6xLarRafOXpEOlOGk",
            imageTitle: "nucamp-bootcamp-bootstrap",
            cardTitle: "Bootstrap Framework Implementation",
            cardDescription: "This site was built with Bootstrap frontend framework, Javascript, HTML5, and CSS. This was built in Nucamp's bootcamp.",
            projectLink: "https://github.com/miketwheeler/bootstrap-tester",
            logoList: [Bs, Js, Css, Html],
        },
        {
            gifId: "akBn1xWokfYQZKrxHb",
            imageTitle: "react-js-with-django-backend",
            cardTitle: "React with Django",
            cardDescription: "This project pairs a React frontend and a Django Framework backend.",
            projectLink: "https://github.com/miketwheeler/Django-React-Ecomerce",
            logoList: [ReactIcon, Py, Django, Css, Html],

        },
        {
            gifId: "XWXB0XqZPJASSZ9HQA",
            imageTitle: "javascript-guess-number-game",
            cardTitle: "Guess My Number Game",
            cardDescription: "Developed with the Flutter ecosystem with datastorage in Firebase.",
            projectLink: "https://github.com/miketwheeler/javaScriptProjects/tree/main/%231-JSproject",
            logoList: [Js, Css, Html],
        },
        {
            gifId: "BmVjF9nkmsghyHCvcc",
            imageTitle: "meetups-clone-next-js ",
            cardTitle: "Meetups Clone - Next.js",
            cardDescription: "Built in sister-framework-to-React, Next.js. Similar events & function to that of the Meetups App. Limited to displaying events, and then browsable further on Selection. Practice using Next.js's router with dynamic routes.",
            projectLink: "https://github.com/miketwheeler/React-MeetupsApp",
            logoList: [Js, Css, Html], // ADD NextJs
        },
        {
            gifId: "ZCJVxraUXAPVmHo1m7",
            imageTitle: "javascript-dice-game",
            cardTitle: "Javascript Dice Game",
            cardDescription: "Web app Dice Game built in React. Graphics, idea, and other code belongs to a tutorial.",
            projectLink: "https://github.com/miketwheeler/javaScriptProjects/tree/main/%233-JSproject",
            logoList: [Js, Css, Html]
        },
        // {
        // 	gifId: "https://google.com",
        // 	imageTitle: "Placeholder",
        // 	cardTitle: "This Profile Site",
        // 	cardDescription: "This site was built in React with Material UI components and personalized components.",
        // },
        // {
        // 	gifId: "https://google.com",
        // 	imageTitle: "Placeholder",
        // 	cardTitle: "Calendar Web App",
        // 	cardDescription: "Simple Javascript calendar tutorial.",
        // },
        // {
        // 	gifId: "https://google.com",
        // 	imageTitle: "Placeholder",
        // 	cardTitle: "Next.js and Strapi",
        // 	cardDescription: "Ecommerce tutorial app using Next.js and Strapi for the backend. ",
        // },
        // {
        // 	gifId: "https://google.com",
        // 	imageTitle: "Flutter App",
        // 	cardTitle: "Flutter App",
        // 	cardDescription: "Developed with the Flutter ecosystem with datastorage in Firebase.",
        // },
    ],
    degreeCardData: {
        collegeDegree: {
            image: "Degree", 
            source: "University of Nebraska at Omaha", 
            location: "Omaha, Nebraska", 
            dateComplete: "Graduated - 12/2019",
            blurb: "Bachelors of Sciences in Management Information Systems. Completed courses in many aspects of software development, design, and managment. "
        },
        collegeCert: {
            image: "Certificate", 
            source: "University of Nebraska at Omaha", 
            location: "Omaha, Nebraska", 
            dateComplete: "Awarded - 12/2019",
            blurb: "Certificate in Systems Development was earned alongside the Degree. Classes taken included project management, upwards to advanced database design and information architecture."
        },
        onlineBlazor: {
            image: "BlazorCert", 
            source: "Blazor Apps & C#", 
            location: "Virtual at Udemy.com", 
            dateComplete: "02/2021",
            blurb: "A complete fullstack course on developing apps with Microsoft's Blazor Framework in C#. This included model-view-controller schema, database, creating the server and client sides, and deployment. (No longer up on the web)"
        },
        onlineReact: {
            image: "DjangoReactCert", 
            source: "Django Framework & React.js", 
            location: "Virtual at Udemy.com", 
            dateComplete: "10/2020",
            blurb: "Developed, fullstack, an application using Python and Django's REST Framework for the backend and React for the frontend."
        },
        fullstackNucamp: {
            image: "FullstackNucamp", 
            source: "Nucamp Fullstack Bootcamp", 
            location: "Online - Redmond, Washington",
            dateComplete: "04/2022",
            blurb: "A 5-part Bootcamp with classes in Bootstrap, React.js, React Native, setting up the server and full deployment."
        },
        frontendNucamp: {
            image: "FrontendNucamp", 
            source: "Nucamp Frontend Bootcamp", 
            location: "Online - Redmond, Washington",
            dateComplete: "04/2022",
            blurb: "In-depth HTML & CSS along with Bootstrap and React frontend styles and javascript libraries"
        },
    }
};


export default data;