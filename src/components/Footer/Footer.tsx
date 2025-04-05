import React from 'react'
import "./Footer.css"

function Footer() {
  return (
    <div>
      <footer>
        <h3 onClick={() => {window.location.href="/"}}>トップページへ戻る</h3>
      </footer>
    </div>
  )
}

export default Footer 