import { useState } from 'react';
import './main.css';

const myProjets = [
  {
    "Project_title": "Projet 1",
    "category": "css",
    "languages": ["HTML", "CSS", "JavaScript"],
    "imagePath": "./test.jpg"
  },
  {
    "Project_title": "Projet 2",
    "category": "Javascript",
    "languages": ["React Native", "JavaScript"],
    "imagePath": "./test.jpg"
  },
  {
    "Project_title": "Projet 3",
    "category": "Web",
    "languages": ["React", "JavaScript", "Node.js"],
    "imagePath": "./test.jpg"
  },
  {
    "Project_title": "Projet 4",
    "category": "Reactjs",
    "languages": ["Python", "NumPy", "Pandas"],
    "imagePath": "./test.jpg"
  },
  {
    "Project_title": "Projet 5",
    "category": "Reactjs",
    "languages": ["Arduino", "C++"],
    "imagePath": "./test.jpg"
  },
];

function main() {
  const [currentActive, setcurrentActive] = useState("all");
  const [arr, setarr] = useState(myProjets);
  const handleClick = (buttonCategory) => {
    setcurrentActive(buttonCategory);
    if (buttonCategory === "all") {
      // Si le bouton "All Projects" est cliqué, réinitialiser arr avec myProjets
      setarr(myProjets);
    } else {
      // Sinon, filtrer les projets en fonction de la catégorie
      const newArr = myProjets.filter((item) => {
        // Convertir la catégorie en minuscules pour ignorer la casse
        return item.category.toLowerCase() === buttonCategory.toLowerCase();
      });
      setarr(newArr);
    }
  };

  return (
    <main className='flex'>
      <section className='left-section flex'>
        <button onClick={() => { setcurrentActive("all") }} className={currentActive === 'all' ? 'active' : null}>All Projects</button>
        <button onClick={() => { handleClick("css") }} className={currentActive === 'css' ? 'active' : null}>HTML & CSS</button>
        <button onClick={() => { handleClick("Javascript") }} className={currentActive === 'Javascript' ? 'active' : null}>Javascript</button>
        <button onClick={() => { handleClick("Reactjs") }} className={currentActive === 'Reactjs' ? 'active' : null}>Reactjs</button>
      </section>
      <section className='flex right-section'>
        {arr.map((item) => {
          return (
            <article key={item.imagePath} className='card'>
              <img src={item.imagePath} alt="" />
              <div className='box'>
                <h1 className='title'>{item.Project_title}</h1>
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

export default main;
