import { Mongo } from 'meteor/mongo';
 //contains my category collection. Not Tasks.
export const Categories = new Mongo.Collection('categories');
export const SubCategories = new Mongo.Collection('subcategories');

// Categories.insert({Name: "CAREER&POST-GRAD", Description: "Explore career pathways and gain valuable skills for life beyond college."});
// Categories.insert({Name:"CIVIC RESPONSIBILITY", Description: "Grow into a thoughtful citizen" });
// Categories.insert({Name: "COMMUNICATION&CONNECTION", Description: "Learn how to effectively convey messages"});


// SubCategories.insert({Name: "Interview", Category: "CAREER&POST-GRAD", Details: "Prepare, practice, and present yourself professionally for interviews with confidence."})
// SubCategories.insert({Name: "Professionalism / Business Etiquette", Category: "COMMUNICATION&CONNECTION", Details: "Refine your elevator pitch and enhance how you present and explain your skillset in a variety of environments."})
// SubCategories.insert({Name: "Global Citizenship", Category: "CIVIC RESPONSIBILITY", Details: "Prepare for traveling around the world and engaging with other cultures."})