import React from 'react'
import './member.scss'

export default function member({ projectName, techStack }) {
    return (
        <div class="container">
  <div class="card">
    
    <div class="contentBx">
      <h2>{projectName}</h2>
      <div class="size">
      <h2 style={{fontSize:"1vw"}}>{techStack}</h2>
      </div>
      
    </div>
  </div>
</div>
    )
}
