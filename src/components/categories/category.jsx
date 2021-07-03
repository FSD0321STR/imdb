import React from 'react';
import "./category.css" 
import CategoryCard from '../cards/card';
  

export default function Category() {
let list_categories = [
    {
        Image: "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png" , 
        title: "Category 1 " ,
        date: "Juny 14." 

    },
    {
        Image: "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png" , 
        title: "Category 2 " ,
        date: "Juny 14." 

    },
    {
        Image: "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png" , 
        title: "Category 3 " ,
        date: "Juny 14." 

    },

    {
        Image: "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png" , 
        title: "Category 4 " ,
        date: "Juny 14." 

    },
    {
        Image: "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png" , 
        title: "Category 5 " ,
        date: "Juny 14." 

    },
    {
        Image: "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png" , 
        title: "Category 6" ,
        date: "Juny 14." 

    },
]
  return (
      <div>
         <CategoryCard categories= {list_categories} />  
      </div>
    

        
        
    
  );
}
