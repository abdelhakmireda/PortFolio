import './hero.css'
import Lottie from 'lottie-react';
import devAnimation from '../../../public/animations/hero.json';
import { useRef } from 'react';
import { motion } from "framer-motion"

const Hero = () => {
  const lottieRef = useRef();

  return (
    <section className='hero flex'>
      <div className='left-section '>
        <div className='parent-avatar flex'>
          <motion.img
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1.1)" }}
            transition={{ damping: 6, type: "spring", stiffness: 100 }}
            src="./profile.png" className='avatar' alt="" loading="lazy" /> {/* Ajout de loading="lazy" pour le chargement paresseux */}
          <div className='icon-verified'></div>
        </div>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className='title'>Développeur FullStack <span>(Symfony / Reactjs)</span>
        </motion.h1>
        <p className='sub-title'>
          Je suis Reda Abdelhakmi, détenteur d'un Master Spécialisé 3i en Ingénierie Internet & Informatique de la Faculté des Sciences Aïn Chock. Actuellement développeur Fullstack chez InterakAgency, j'ai acquis une expertise en Symfony grâce à des projets externes depuis 2022, tout en consolidant mes connaissances en ReactJS. Passionné par le travail d'équipe et le développement web, je recherche constamment de nouvelles opportunités pour relever des défis innovants.
        </p>
        <div className="all-icons flex">
          <a href="mailto:abdelhakmireda@gmail.com?subject=Développeur FullStack(Symfony/React)" className="icon-envelope" id='icon' title='Contactez-moi'> </a>
          <a href="https://github.com/abdelhakmireda" className="icon-github" id='icon' title='Github'> </a>
          <a href="https://www.linkedin.com/in/reda-abdelhakmi-4146371b3/" className="icon-linkedin" id='icon' title='Linkedin'> </a>
          <a href="../../../public/abdelhakmireda.pdf" target='_blank' className="icon-cloud-download" id='icon' title='Télécharger Mon Cv'> </a>
        </div>
      </div>
      <div className='right-section animation'>
        <Lottie
          lottieRef={lottieRef}
          animationData={devAnimation}
          onLoadedImages={() => {
            lottieRef.current.setSpeed(1);
          }}
        />
      </div>
    </section>
  )
}

export default Hero
