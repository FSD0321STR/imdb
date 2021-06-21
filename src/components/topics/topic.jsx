import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';




const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '25ch',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        maxWidth: 300,
    },
    chips: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    chip: {
        margin: 2,
    },
    noLabel: {
        marginTop: theme.spacing(3),
    },
}));
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};




const categories = [
    'Mobiles',
    'Laptops',
    'Desktops',
    'Monitors',
    'Tablets',
    'Drons',
    'Accessories',
    'Tech & Trend'
];

function getStyles(name, personName, theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

export default function Topic() {

    const classes = useStyles();
    const [categoryName] = React.useState([]);
    const theme = useTheme();

    const handleChange = (event) => {
        setPersonName(event.target.value);
    };

    const SaveTopic = 

    return (
        <div className={classes.root}>
            <div>
                <TextField
                    id="standard-full-width"
                    label="Topic title"
                    style={{ margin: 8 }}
                    placeholder="Topic title..."
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />

                <TextField
                    id="standard-full-width"
                    label="Description..."
                    style={{ margin: 8 }}
                    placeholder="Description"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />



                <FormControl className={classes.formControl}>
                    <InputLabel id="categoryMulti">Category</InputLabel>
                    <Select
                        labelId="categoryMultiLabel"
                        id="categoryMultiSelect"
                        multiple
                        value={categoryName}
                        onChange={handleChange}
                        input={<Input />}
                        MenuProps={MenuProps}
                    >
                        {categories.map((category) => (
                            <MenuItem key={category} value={category} style={getStyles(category, categoryName, theme)}>
                                {category}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <InputLabel id="topicDoc">Topic</InputLabel>
                <TextareaAutosize
                    rowsMax={4}
                    aria-label="maximum height"
                    placeholder="Maximum 4 rows"
                    defaultValue=""
                />

                <Button variant="contained" color="primary" onClick={SaveTopic}>
                    Save
                </Button>
            </div>
        </div>
    );

}
