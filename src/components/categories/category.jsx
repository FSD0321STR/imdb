import React, {useState, useEffect} from 'react';
import "./category.css"
import CategoryCard from '../cards/card';
import api from "../../utils/auth-api";



export default function Category() {
    /*let list_categories = [
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
    
        {
            Image: "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png" , 
            title: "Category 7" ,
            date: "Juny 14." 
    
        },
        {
            Image: "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png" , 
            title: "Category 8" ,
            date: "Juny 14." 
    
        },
    ]*/



    const [categories,setCategories] = useState([]);



    async function getCategories() {
        return await api
            .getCategories()
            .then((t) => {
                console.log(t);
                setCategories(t);
                console.log(categories.length);
                localStorage.setItem("Categories", JSON.stringify(t));
                //console.log(topics);
            })
            .catch((e) => {
                Promise.reject(e);
            });
    }

    console.log(categories)

    useEffect(async () => {
        getCategories();
    }, [])


    return (
        <div>
            <CategoryCard categories={categories} />
        </div>





    );
}
