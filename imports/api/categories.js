import { Mongo } from 'meteor/mongo';
 //contains my category collection. Not Tasks.
export const Categories = new Mongo.Collection('categories');
export const SubCategories = new Mongo.Collection('subcategories');

