/**
 * @copyright (c) 2023 by Unstoppable Domains, Inc.
 * @license Apache-2.0
 */


/**
 * Components
 */
import PorjectCard from "./PorjectCard";




const works = [
  {
    imgSrc: 'fam.png',
    title: 'Website for Family Business',
    tags: ['Full Stack', 'SEO Optimization', 'API Development'],
    projectLink: '' // Add the actual website link if available
  },
  {
    imgSrc: 'clg.jpg',
    title: 'University Vehicle Data Management System',
    tags: ['Spring Boot', 'Security', 'Data Processing'],
    projectLink: '' // Add GitHub link if available
  },
  {
    imgSrc: 'exo.svg',
    title: 'Exoplanet Detection System',
    tags: ['Java', 'Spring Boot', 'Data Visualization'],
    projectLink: '' // Add GitHub link if available
  },
      {
        imgSrc: 'download.jpeg',
        title: 'Task Manager App',
        tags: ['Java', 'ServiceNow', 'REST APIs'],
        projectLink: ''
      },
      {
        imgSrc: 'pla.jpeg',
        title: 'Incident Management System',
        tags: ['Java', 'API Integration', 'Automation'],
        projectLink: ''
      }
];



const Work = () => {
  return (

<section
    id="work" 
    className="section mt-12"
    >
     <div className="container" >
        <h2 className="headline-2 mb-8 ">
            My portfolio highlights
        </h2>
        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,minmax(280px,1fr))]">
            {works.map(({imgSrc, title, tags, projectLink}, key) => (
                
                <PorjectCard 
                
                key={key}
                imgSrc={imgSrc}
                title={title}
                tags={tags}
                projectLink={projectLink}
                
                />

            ))}
        </div>
    </div>

</section>

)
}

export default Work