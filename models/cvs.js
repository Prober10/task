const mongoose = require('mongoose');

const LanguageSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    level:{
        type: String,
        required: true
    }
  
    
});



const TaskSchema = mongoose.Schema({
    description:{
        type: String,
        required: true
    }
  
    
});


const SkillSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    }
  
    
});




const ExperienceSchema = mongoose.Schema({
    job_title:{
        type: String,
        required: true
    },
    company:{
        type: String,
        required: true
    },

    date_from:{
        type: String,
        required: true
    },
    date_to:{
        type: String,
        required: true
    },
    tasks:[TaskSchema]

    
});

const EducationSchema = mongoose.Schema({
    school_name:{
        type: String,
        required: true
    },
    date_from:{
        type: String,
        required: true
    },
    date_to:{
        type: String,
        required: true
    },
    degree:{
        type: String,
        required: true
    },

    
});



const CvSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    major:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    languages:[LanguageSchema],

    educations:[EducationSchema],

    experiences:[ExperienceSchema],

    skills:[SkillSchema]

});


const Cv = module.exports = mongoose.model('Cv',CvSchema);