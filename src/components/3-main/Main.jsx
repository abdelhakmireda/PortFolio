import { useState } from 'react';
import './main.css';
import { AnimatePresence, motion } from "framer-motion"

const myProjets = [
  {
    "Project_title": "Hyperviseur KVM",
    "category": "Virtualisation",
    "languages": ["Linux", "KVM", "Python", "Virtualisation"],
    "description": "Modélisation d'une application web pour l'administration d'un superviseur KVM.",
    "imagePath": "./fonts/images/kvm.jpg",
    "link": "https://drive.google.com/drive/folders/1VbcCjeoxKXmhW9mQ9FifpUzzIXt0xNL-?usp=drive_link"
  },
  {
    "Project_title": "Projet OpenStack",
    "category": "Cloud Privé (OpenStack)",
    "languages": ["Centos", "OpenStack"],
    "description": "Projet lié à OpenStack pour le cloud privé.création d'un cloud privé",
    "imagePath": "./fonts/images/openstack.jpg",
    "link": "https://drive.google.com/drive/folders/11immGDhglc0IeCTaOVmbJGnXCyHNYwSJ?usp=drive_link"
  },
  {
    "Project_title": "ObjectStorageS3",
    "category": "ObjectStorageS3",
    "languages": ["MinIO", "Docker", "AWS", "FileSystem"],
    "description": "Application de gestion d'objets avec MinIO et EasyAdmin.",
    "imagePath": "./fonts/images/objectstorages3.jpg",
    "link": "https://github.com/abdelhakmireda/ObjectStorageS3.git"
  },
  {
    "Project_title": "Gestion d'Examens",
    "category": "dev",
    "languages": ["Symfony", "Easyadmin 4", "Twig", "API Platform"],
    "description": "Création d'une application web pour la gestion d'examens.",
    "imagePath": "./fonts/images/Gestionexamen.png",
    "link": "https://github.com/abdelhakmireda/gestion_examen_easyadmin.git"
  },
  {
    "Project_title": "Portfolio",
    "category": "dev",
    "languages": ["ReactJS", "HTML", "CSS"],
    "description": "Portfolio personnel développé avec ReactJS, HTML et CSS.",
    "imagePath": "./fonts/images/portefolio.png",
    "link": "https://github.com/abdelhakmireda/portfolio.git"
  },
  {
    "Project_title": "Oveterinaire ",
    "category": "dev",
    "languages": ["Symfony ", "Twig ", "HTML", "CSS"],
    "description": "Application web pour les vétérinaires , conçut et developer pour interakt agency .",
    "imagePath": "./fonts/images/oveterinaire.jpg",
    "link": "privé"
  },
  {
    "Project_title": "Gestion des Ordinateurs ",
    "category": "dev",
    "languages": [ "Symfony", "Easyadmin", "Twig",  "API Platform"],
    "description": "Création d'une application web pour la gestion des ordinateurs portables.",
    "imagePath": "./fonts/images/laptopmanagement.jpg",
    "link": "privé"
  },
  {
    "Project_title": "Gestion de Transport ",
    "category": "dev",
    "languages": ["Symfony", "Easyadmin", "Twig", "API Platform"],
    "description": "Création d'une application web pour la gestion du transport scolaire.",
    "imagePath": "./fonts/images/managementtransport.jpg",
    "link": "privé"
  }
];

function Main() {
  const [currentActive, setcurrentActive] = useState("all");
  const [arr, setarr] = useState(myProjets);

  const handleClick = (buttonCategory) => {
    const lowerCaseCategory = buttonCategory.toLowerCase();
    setcurrentActive(lowerCaseCategory);
    if (lowerCaseCategory === "all") {
      setarr(myProjets);
    } else if (lowerCaseCategory === "web development") {
      const newArr = myProjets.filter((item) => item.category.toLowerCase() === 'dev');
      setarr(newArr);
    } else if (lowerCaseCategory === "cloud privé (openstack)") {
      const newArr = myProjets.filter((item) => item.category.toLowerCase() === 'cloud privé (openstack)');
      setarr(newArr);
    } else if (lowerCaseCategory === "projets privés") {
      const newArr = myProjets.filter((item) => item.link === 'privé');
      setarr(newArr);
    } else {
      const newArr = myProjets.filter((item) => item.category.toLowerCase() === lowerCaseCategory);
      setarr(newArr);
    }
  };

  return (
    <main className='flex'>
      <section className='left-section flex'>
        <button onClick={() => { handleClick("all") }} className={currentActive.toLowerCase() === 'all' ? 'active' : null}>All Projects</button>
        <button onClick={() => { handleClick("web development") }} className={currentActive.toLowerCase() === 'web development' ? 'active' : null}>Web Development</button>
        <button onClick={() => { handleClick("virtualisation") }} className={currentActive.toLowerCase() === 'virtualisation' ? 'active' : null}>Virtualisation</button>
        <button onClick={() => { handleClick("cloud privé (openstack)") }} className={currentActive.toLowerCase() === 'cloud privé (openstack)' ? 'active' : null}>Cloud Privé (OpenStack)</button>
        <button onClick={() => { handleClick("projets privés") }} className={currentActive.toLowerCase() === 'projets privés' ? 'active' : null}>Projets Privés</button>
      </section>
      <section className='flex right-section'>
        <AnimatePresence>
          {arr.map((item) => (
            <motion.article
              layout
              initial={{ transform: "scale(0)" }}
              animate={{ transform: "scale(1)" }}
              transition={{ type: "spring", damping: 8, stiffness: 50 }}
              key={item.Project_title}
              className='card'>
              <img src={item.imagePath} alt={item.Project_title} loading="lazy" />
              <div className='box'>
                <h1 className='title'>{item.Project_title}</h1>
                <p className='subtitle'>{item.description}</p>
                <div className="languages">
                  <h3>Languages:</h3>
                  <ul>
                    {item.languages.map((language, index) => (
                      <li key={index}>{language}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex icons">
                  <div className='flex'>
                    {item.link !== 'privé' ? (
                      <a href={item.link} className="icon-github" id='icon' title='Github'> </a>
                    ) : (
                      <div className="icon-eye-blocked"></div>
                    )}
                    {item.link === 'privé' && (
                      <button className="icon-private">Privé</button>
                    )}
                  </div>
                  {item.link !== 'privé' && (
                    <a className="link flex" href="">
                      more <span className='icon-arrow-right'></span>
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </section>
    </main>
  );
}

export default Main;

