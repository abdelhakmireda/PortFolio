import { useForm, ValidationError } from '@formspree/react';
import './contacts.css';
import Lottie from 'lottie-react';
import doneAnimation from '../../../public/animations/done.json';
import contactAnimation from '../../../public/animations/contact.json'

function Contacts() {
  const [state, handleSubmit] = useForm("myyrdvzp");

  return (
    <section className='contact-us'>
      <h1 className='title'>
        <span className='icon-envelope'></span>
        Contactez-nous
      </h1>
      <p className='subtitle'>
        Contactez-nous pour plus d'informations reda abdelhakmi reda oupsi
      </p>
      <div className=" flex">
        <form onSubmit={handleSubmit} className=''>
          <div className='flex'>
            <label htmlFor="email">Adresse e-mail :</label>
            <input autoComplete="off" type="email" id="email" name='email' />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className='flex'>
            <label htmlFor="message">Votre message :</label>
            <textarea required name="message" id="message"></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button type="submit" disabled={state.submitting} className='submit'>
            {state.submitting ? "Envoi en cours ..." : "Envoyer"}
          </button>
          {state.succeeded && (
            <p className='lottie flex'>
              <Lottie // animation
                loop={false} // définir loop sur false pour une lecture unique
                style={{height:150}}
                animationData={doneAnimation}
              />
              <h1>Votre message a été envoyé avec succès !</h1>
            </p>
          )}
        </form>
        <div className="animation">
          <Lottie // animation
          className="contact-animation"
            style={{ height: 360}}
            animationData={contactAnimation}
          />
        </div>
      </div>
    </section>
  );
}

export default Contacts;