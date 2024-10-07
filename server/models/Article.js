const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    title: { type: String, required: true },
    summary: { type: String, required: true },
    url:{
        type:String,
        required:true,
        validate: {
            validator: function(value) {
                const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/; // Basic URL validation regex
                return urlPattern.test(value);
            }},
    source:{
     type:String,
     required:true
    }
    }
    // Add other fields as necessary
});


const Article = mongoose.model('Article', articleSchema);
