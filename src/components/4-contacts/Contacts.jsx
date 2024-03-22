import { useForm, ValidationError } from '@formspree/react';
import './contacts.css'

function Contacts() {
  const [state, handleSubmit] = useForm("myyrdvzp");

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
        <form onSubmit={handleSubmit}  className=''>
          <div className='flex'>
            <label htmlFor="email">Email Address:</label>
            <input  autoComplete="off" type="email" id="email" name='email' />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className='flex'>
            <label htmlFor="message">Your message:</label>
          <textarea required name="message" id="message"></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button type="submit" disabled={state.submitting}  className='submit'>
            {state.submitting ? "Submitting ... " : "Submit"}
            </button>
          {state.succeeded && (
              <h1>Your message has been sent successfuly </h1>
          )}
        </form>
        <div className=" border animation"></div>
      </div>
    </section>
  )
}

export default Contacts