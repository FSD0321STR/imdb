import React from 'react';
import Typography from '@material-ui/core/Typography';
import ContactForm from "./../form/ContactForm";

export default function Contact() {

    return (
        <div>
            <Typography component="h1">
                Contact
            </Typography>
            <ContactForm />
        </div>

    );
}