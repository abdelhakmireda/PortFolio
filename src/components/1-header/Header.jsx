import { useState } from 'react'
import './header.css'

const Header = () => {
  const [showModal, setshowModal] = useState(false);
  return (
    <header className='flex'>
      <button onClick={() => { setshowModal(true) }} className='menu'>
        show model
      </button>
      <div />
      <nav>
        <ul className='flex'>
          <li><a href="">About</a></li>
          <li><a href="">Articles</a></li>
          <li><a href="">Projects</a></li>
          <li><a href="">Speaking</a></li>
          <li><a href="">Contact</a></li>
        </ul>
      </nav>
      <button>
        reda
      </button>
      {showModal && (
        <div className='fixed '>
          <ul className='modal'>
            <li><button onClick={() => { setshowModal(false)  }}>close</button></li>
            <li><a href="">About</a></li>
            <li><a href="">Article</a></li>
            <li><a href="">Projects</a></li>
            <li><a href="">Speaking</a></li>
            <li><a href="">Uses</a></li>
          </ul>
        </div>
      )}

    </header>
  )
}

export default Header