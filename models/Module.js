import mongoose from 'mongoose';

const moduleSchema = new mongoose.Schema({
    module_name: String,
    moduleStartDate: Date, 
    moduleEndDate: Date, 
    totalDuration: Number, 
    projectID: { type: mongoose.Schema.Types.ObjectId, ref: 'Project' },
    teamM: [{ type: String }]
});

const Module = mongoose.model('Module', moduleSchema);

export default Module;
