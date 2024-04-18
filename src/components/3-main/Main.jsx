import { useState } from 'react';
import './main.css';
import { AnimatePresence, motion } from "framer-motion"
import { myProjets } from './myProjets';

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

