import './hero.css'

const Hero = () => {
  return (
    <section className='hero flex'>
      <div className='left-section '>
        <div className='parent-avatar flex'>
          <img src="./profile.png" className='avatar' alt="" />
          <div className='icon-verified'></div>
        </div>
        <h1 className='title'>FullStack Developer(Symfony / Reactjs) </h1>
        <p className='sub-title'> 
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt aliquam molestiae minima error iusto consequatur, magni itaque illum cumque quos tempora vel quam laudantium nemo, est enim quae doloremque ab.
        Ea amet iusto aperiam aliquam, obcaecati explicabo doloribus eligendi quas tempore. Fugit inventore, ipsum itaque suscipit accusantium ad pariatur quod dolore voluptatum eaque temporibus obcaecati alias? Iusto ad quidem dolore!
        Modi dolorum sit delectus quis quaerat reprehenderit animi ullam voluptas, ipsum ratione eligendi ut dolores, beatae laborum iure vero dolore quas similique facere temporibus repellat sunt fugit doloremque aperiam! Voluptatem.
        </p>
        <div className="all-icons flex">
          <div className="icon icon-twitter"></div>
          <div className="icon icon-instagram"></div>
          <div className="icon icon-github"></div>
          <div className="icon icon-linkedin"></div>
        </div>
      </div>
      <div className='right-section animation border'>
aa
      </div>
    </section>
  )
}

export default Hero