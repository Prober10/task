const express = require('express');


const router = express.Router();

const Cv = require('../models/cvs');

//Retrieving cvs
router.get('/cvs', (req, res, next)=>{
    Cv.find(function(err, cvs){
        res.json(cvs);
    });
});

//add cv
router.post('/addcv',(req,res,next)=>{
    let newCv = new Cv({
        name:'Roberto Naddaf',
        phone:'71048697',
        email:'robertoynaddaf@gmail.com',
        address:'Ain el remmaneh',
        major:'Software Engineering',
        educations:[{
            school_name:'Note dame des anges',
            date_from:'september 2002',
            date_to:'may 2017',
            degree:'Lebanese Baccalaureate in General Sciences',
        },
        {
            school_name:'Université Antonine',
            date_from:'september 2017',
            date_to:'est. 2022',
            degree:'Computer and communication engineering - Software Engineering',
        }
    
    ],

    experiences:[{
        job_title:'Full-Stack developper',
        company:'Google',
        date_from:'June 2021',
        date_to:'Now',
        tasks:[
            {
                description:'Developped a simple mean stack website',
            }
           
            

        ]
      

    }],

    skills:[
        {
            name:'dotnet'
        },

        {
            name:'nodejs'
        },
        {
            name:'java'
        }
    ],
    languages:[
        {
            name:'Arabic',
            level:'Native'
        },
        {
            name:'English',
            level:'Advanced'
        },
        {
            name:'French',
            level:'Advanced'
        }
    ]

    });

    newCv.save((err, cv)=>{
            if(err)
            {
                res.json({msg:'Failed to add cv: '+err});
            }
            else
            {
                res.json({msg:'Cv added successfully'});
            }
    });

});

module.exports = router;