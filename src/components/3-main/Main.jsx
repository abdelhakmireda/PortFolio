import './main.css'

function main() {
  return (
    <main className='flex'>
      <section className='left-section flex'>
      <button className='active'>All Projects</button>
      <button>HTML & CSS</button>
      <button>Javascript</button>
      <button>Reactjs</button>
      </section>
      <section className=' border flex right-section'>
{["a","b","c","d","e","f"].map((item) => { 
  return(
    <article key={item} className='card'>
      <img src="./test.jpg" alt="" />
      <div className='box'>
        <h1 className='title'>project name</h1>
        <p className='subtitle'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In obcaecati labore quos perferendis perspiciatis dicta consequatur fuga porro. Adipisci fuga consequatur excepturi quae necessitatibus quisquam illo ipsa ipsum. Aperiam, mollitia.</p>
        <div className="flex icons">
          <div className='flex'>
            <div className="icon-link"></div>
            <div className='icon-github'></div>
          </div>
          <a className="link flex" href="">
            more <span className='icon-arrow-right'></span>
          </a>
        </div>
      </div>
    </article>
  )
 })}
      </section>
    </main>
  )
}

export default main