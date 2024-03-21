import './contacts.css'

function Contacts() {
  return (
    <section className='contact-us'>
      <h1 className='title'>
        <span className='icon-envelope'></span>
        Contact us 
      </h1>
      <p className='subtitle'>
      Contact us for more information reda abdelhakmi reda oupsi
      </p>
      <div className="flex">
        <form className=''>
          <div className='flex'>
            <label htmlFor="email">Email Address:</label>
            <input type="email" id="email" />
          </div>
          <div className='flex'>
            <label htmlFor="message">Your message:</label>
          <textarea required name="message" id="message"></textarea>
          </div>
          <button className='submit'>Submit</button>
        </form>
        <div className=" border animation"></div>
      </div>
    </section>
  )
}

export default Contacts