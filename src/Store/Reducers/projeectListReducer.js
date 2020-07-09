

 const initState= {

    projects:[
        { 
            name:"GGFXI", 
            detailsOfProject:"A Job for a client to design a Forex investment Site",
            link:"https://www.globalgatesfxinvestment.org",
            GithubRepo:"",
            id: 0,
            img: '../../images/ggfxi.png'
        },

        { 
            name:"React mini Ecommerce page With Firebase Auth", 
            detailsOfProject:"Implementing Firebase Auth in a react-redux mini project",
            link:"https://5ef4f89bccde0384c7722043--error-site.netlify.app/",
            GithubRepo:"",
            id: 1,
            img: '../../images/logi.png'
        },

        { 
            name:"Logistics Page", 
            detailsOfProject:"A sample to a client for a logistics page",
            link:"https://logisticpagesamplebygitarackur.netlify.app/",
            GithubRepo:"",
            id: 2,
            img: '../../images/Logi.png'
        },

        { 
            name:"COVID Country list App", 
            detailsOfProject:"A Vanilla Js app showing the statistics of all corona virus infected countries using a fetch API",
            link:"https://covidcountrystats.netlify.app/",
            GithubRepo:"https://github.com/Gitarackur/COVID-COUNTRY-STATS-APP",
            id: 3,
            img: "../../images/covv.png"
        },

        { 
            name:"Clothing Mini Ecommerce App", 
            detailsOfProject:"First Project In implementing react",
            link:"https://react-test-ecommerce.netlify.app/",
            GithubRepo:"",
            id: 3,
            img: "../../images/covv.png"
        },

        { 
            name:"Calculator With Vanilla Js", 
            detailsOfProject:"A small calculator project using Vanilla js",
            link:"https://react-test-ecommerce.netlify.app/",
            GithubRepo:"",
            id: 3,
            img: "../../images/covv.png"
        },
    ],

    // https://github.com/Gitarackur/Semi-Scientific-Calculator-With-Vanilla-Javascript

    collabs:[
        { 
            name:"COVID Chart", 
            detailsOfProject:"A Chart showing the statistics of covid patients in Nigeria",
            link:"https://covid19chartng.netlify.app",
            GithubRepo:"",
            id: 0
        },

        { 
            name:"DC and Marvel Superhero Characters Stats Page", 
            detailsOfProject:"A fun project to search for DC and Marvel Characters from an API",
            link:"https://comicharacter.netlify.app",
            GithubRepo:"",
            id: 1
        },

        { 
            name:"Expense Tracker With Firebase", 
            detailsOfProject:"An Expense Tracker App done using Vanilla JS and firebase Auth Service",
            link:"https://expense-tracker-8c7a5.firebaseapp.com",
            GithubRepo:"",
            id: 2
        },

    ]
}

const projectListReducer= (state= initState, action)=>{
    return state;
}


export default projectListReducer;