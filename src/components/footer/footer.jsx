import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import IconButton from '@material-ui/core/IconButton';
import { Box } from '@material-ui/core';

  1

export default function Footer() {

  return (
    <Box display="flex" justifyContent="space-between" padding="20px">

        <div>
            <IconButton color="primary" aria-label="upload picture" component="span">
            <FacebookIcon />
            </IconButton>
            <IconButton color="primary" aria-label="upload picture" component="span">
            <InstagramIcon />
            </IconButton>
            <IconButton color="primary" aria-label="upload picture" component="span">
            <TwitterIcon />
            </IconButton>
        </div>

        <div>© Copyright 2021</div>
        
    </Box>
  );
}
