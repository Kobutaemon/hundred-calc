import "./Footer.css"
import { Button } from '@mui/material';

function Footer() {
  return (
    <div>
      <footer className='no-print'>
        <Button variant='outlined' onClick={() => {window.location.href="/"}}>トップページへ戻る</Button>
      </footer>
    </div>
  )
}

export default Footer 