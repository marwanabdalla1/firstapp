require('dotenv').config();

const mongoose = require('mongoose')
const connectDB = require('./nf')



//Connect to the DB 
 connectDB();


//we will now define the schema for the model that we're creating 


const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date : { type: Date, default: Date.now },
    isPublished : Boolean
})

const Course = mongoose.model ('Course', courseSchema)


async function uploadCourse() {
    const course = new Course ({
        name: 'Angular course',
        author: 'Mosh',
        tags: ['angular', 'frontend'], 
        isPublished: true 
    
    })

    const result = await course.save()
    console.log(result)
}


async function getCoursses(){
    const courses = await Course
    .find({isPublished: true, tags: 'backend' })
    .sort({name: 1})
    .select({name: 1, author: 1})
    console.log(courses)
}




//get all published backend courses, sort them by their name, pick only their name and author and diplay them






getCoursses()