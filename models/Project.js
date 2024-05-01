// models/Project.js
import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
    name: String,
    totalDuration: Number, 
    startDate: Date,
    endDate: Date,
    description: String,
    keywords: [String],
    teamLeader: String,
    members: [String],
    isComplete: Boolean,
});


const Project = mongoose.model('Project', projectSchema);

export default Project;
