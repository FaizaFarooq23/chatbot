import React, { useState } from 'react'
import Sidebar from './sidebar'

export default function Dashboard() {

    const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div>
        <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed}/>
    </div>
  )
}
