import React, { useState } from 'react'
import './menu.css'

function Menu() {
    const [count, setCount] = useState(0)

    return (
        <div class="menu" className="menu">
            <div class="left">
                <div class="Logo">Medium</div>

            </div>
            <div class="right">
            <ul class="ul">
                    <li><a href="/trends">Trends</a></li>
                    <li><a href="/category">Category</a></li>
                    <li><a href="/contact">contact</a></li>
                    <li><a href="/singin">Sing in</a></li>
                    <li id="getStarted"><a href="/register">Get started</a></li>
                    
                </ul>


            </div>
        </div>
    )
}

export default Menu