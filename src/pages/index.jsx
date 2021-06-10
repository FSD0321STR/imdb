import React, { useState } from 'react'
import Menu from "./../components/menu"

function Index() {
  const [count, setCount] = useState(0)

  return (
    <div className="index">
   <Menu></Menu>
    </div>
  )
}

export default Index
