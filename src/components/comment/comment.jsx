//List of insults https://www.insult.wiki/list-of-insults
import React, { Component } from 'react';
import DialogMessage from '../dialog/dialog';
import CommentIcon from '@material-ui/icons/Comment';




export default function Coment() {
    let value = "", error_msg = "Unable to post comment"
    let comments = []
    let blackList = ["fucker", "bitch"]
    const comment = () => {
        if (goodComent(value)) save(value)
        else dialogMsg(error_msg)
    }
    const goodComent = (comm) => {
        let res = comm.split(" ");
        //console.log(res);
        //console.log(blackList);

        for (let i = 0; i < res.length; i++)
            for (let j = 0; j < blackList.length; j++)
                if (res[i].toLowerCase() === blackList[j].toLowerCase()) return false

        return true
    }
    const save = (comm) => {
        comments.push(comm)
        console.log(comments);
        dialogMsg("comment save")

    }
    const dialogMsg = (msg) => {
        alert(msg)
    }



    const handleChange = (event) => {
        value = event.target.value

    };

    return (
        <div>


            <textarea id="w3review" name="w3review" rows="4" cols="50" maxLength="255" onChange={handleChange} >

            </textarea> <br />
            <button onClick={comment}>
                Comment
            </button>

        </div>








    );
}