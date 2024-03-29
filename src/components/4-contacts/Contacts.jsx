import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useForm } from '@formspree/react';
import './contacts.css';
import Lottie from 'lottie-react';
import doneAnimation from '../../../public/animations/done.json';
import contactAnimation from '../../../public/animations/contact.json';
import React, { useState } from 'react'; // Importez React et useState

function Contacts() {
  const [state, handleSubmitFormspree] = useForm("myyrdvzp");
  const [isSuccess, setIsSuccess] = useState(false);

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Adresse e-mail invalide').required('Veuillez saisir votre adresse e-mail'),
    message: Yup.string().required('Veuillez saisir votre message')
  });

  const handleSubmit = async (values, actions) => {
    // Soumission du formulaire avec Formspree
    await handleSubmitFormspree(values);
    actions.resetForm(); // Réinitialisation du formulaire après la soumission

    // Afficher le message de succès et réinitialiser après 3 secondes
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
    }, 3000);
  };

  return (
    <section className='contact-us'>
      <h1 className='title'>
        <span className='icon-envelope'></span>
        Contactez-nous
      </h1>
      <p className='subtitle'>
        Contactez-moi pour plus d'informations sur Reda Abdelhakmi
      </p>
      <div className="flex">
        {isSuccess ? (
          <div className='lottie flex'>
            <Lottie // animation
              loop={false}
              style={{ height: 150 }}
              animationData={doneAnimation}
            />
            <h1>Votre message a été envoyé avec succès !</h1>
          </div>
        ) : (
          <Formik
            initialValues={{ email: '', message: '' }}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          >
            {(formikProps) => (
              <Form>
                <div className='form-group'>
                  <label htmlFor="email">Adresse e-mail :</label>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="off"
                    placeholder="Adresse e-mail"
                    onBlur={formikProps.handleBlur}
                  />
                  <ErrorMessage name="email" component="div" className="error-message" />
                </div>
                <div className='form-group'>
                  <label htmlFor="message">Votre message :</label>
                  <Field
                    as="textarea"
                    id="message"
                    name="message"
                    placeholder="Votre message"
                    onBlur={formikProps.handleBlur}
                  />
                  <ErrorMessage name="message" component="div" className="error-message" />
                </div>
                <button type="submit" disabled={!formikProps.isValid || formikProps.isValidating} className='submit'>
                  {state.submitting || formikProps.isSubmitting ? "Envoi en cours ..." : "Envoyer"}
                </button>
              </Form>
            )}
          </Formik>
        )}

        <div className="animation">
          <Lottie
            className="contact-animation"
            style={{ height: 360 }}
            animationData={contactAnimation}
          />
        </div>
      </div>
    </section>
  );
}

export default Contacts;
