import React from 'react';
import Typography from '@material-ui/core/Typography';
import Topic from "../../components/topics/topic";
import TopicView from "../../components/topics/topicView";
import { Box, Icon } from "@material-ui/core";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";



export default function Categories() {


    return (
        <Box display="flex" justifyContent="space-between" padding="20px">
            <div>
                <Typography component="h1">
                    Categories
                    
                </Typography>
                <TopicView title='Esto es una Prueba' posts='Prueba prueba prueba pruebna' />
            </div>
            <div>
                
                <Link to="/create-topic" className="btn btn-primary">
                    Create Topic
                </Link>
            </div>
            

           

        </Box>

    );
}