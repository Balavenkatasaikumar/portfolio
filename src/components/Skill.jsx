/**
 * @copyright (c) 2023 by Unstoppable Domains, Inc.
 * @license Apache-2.0
 */


/**
 * Components
 */
import SkillCard from "./SkillCard";




const skillItem = [
  {
    imgSrc: 'Figma.svg',
    label: 'Figma',
    desc: 'Design tool'
  },
  {
    imgSrc: 'CSS3.svg',
    label: 'CSS',
    desc: 'User Interface'
  },
  {
    imgSrc: 'JavaScript.svg',
    label: 'JavaScript',
    desc: 'Interaction'
  },
  {
    imgSrc: 'Node.svg',
    label: 'NodeJS',
    desc: 'Web Server'
  },
  {
    imgSrc: 'AWS.svg',
    label: 'AWS',
    desc: 'Cloud Services'
  },
  {
    imgSrc: 'C++.svg',
    label: 'C++',
    desc: 'Programming Language'
  },
  {
    imgSrc: 'Git.svg',
    label: 'Git',
    desc: 'Version Control'
  },
  {
    imgSrc: 'GitLab.svg',
    label: 'GitLab',
    desc: 'DevOps Platform'
  },
  {
    imgSrc: 'Hibernate.svg',
    label: 'Hibernate',
    desc: 'ORM Framework'
  },
  {
    imgSrc: 'HTML5.svg',
    label: 'HTML5',
    desc: 'Markup Language'
  },
  {
    imgSrc: 'Java.svg',
    label: 'Java',
    desc: 'Programming Language'
  },
  {
    imgSrc: 'Jenkins.svg',
    label: 'Jenkins',
    desc: 'CI/CD Tool'
  },
  {
    imgSrc: 'Kubernetes.svg',
    label: 'Kubernetes',
    desc: 'Container Orchestration'
  },
  {
    imgSrc: 'MySQL.svg',
    label: 'MySQL',
    desc: 'Relational Database'
  },
  {
    imgSrc: 'PostgresSQL.svg',
    label: 'PostgresSQL',
    desc: 'Relational Database'
  },
  {
    imgSrc: 'Python.svg',
    label: 'Python',
    desc: 'Programming Language'
  },
  {
    imgSrc: 'Spring.svg',
    label: 'Spring',
    desc: 'Java Framework'
  }, 
  {
    imgSrc: 'Express.svg',
    label: 'ExpressJS',
    desc: 'Node Framework'
  },
  {
    imgSrc: 'MongoDB.svg',
    label: 'MongoDB',
    desc: 'Database'
  },
  {
    imgSrc: 'React.svg',
    label: 'React',
    desc: 'Framework'
  },
  {
    imgSrc: 'Tailwind CSS.svg',
    label: 'TailwindCSS',
    desc: 'User Interface'
  },
];



const Skill = () => {
  return (
    <section className="section mt-12">
      <br/>
        <div className="container">
            <h2 className="headline-2 reveal-up mt-12">
                Essential Tools I Use
            </h2>
            <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">    
                I am a full-stack developer with a passion for creating dynamic and responsive web applications. I have experience in both front-end and back-end development, and I am always eager to learn new technologies and improve my skills.
            </p>

            <div className="grid gap-3 grid-cols-[repeat(auto-fill,minmax(250px,_1fr))]">
                {
                skillItem.map(({ imgSrc, label, desc }, key) => 
                (
                    <SkillCard 
                    
                    key={key}
                    imgSrc={imgSrc}
                    label={label}
                    desc={desc}
                    classes="reveal-up"   


                    />
                ))
                }
            </div>
        </div>
    </section>
  )
}

export default Skill