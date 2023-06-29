import { useEffect, useRef } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import { Header, Projects, AboutMe } from '../containers'

const sectionToPathMapping = {
  header: 'home',
  projects: 'projects',
  aboutme: 'aboutme',
};

const pathToRefMapping = {};

const MainPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const headerRef = useRef();
  const projectsRef = useRef();
  const aboutMeRef = useRef();

  pathToRefMapping['home'] = headerRef;
  pathToRefMapping['projects'] = projectsRef;
  pathToRefMapping['aboutme'] = aboutMeRef;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const path = sectionToPathMapping[entry.target.id];
          if (path) {
            navigate(`/${path}`, { replace: true });
          }
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
      }
    );
    
    const currentHeaderRef = headerRef.current;
    const currentProjectsRef = projectsRef.current;
    const currentAboutMeRef = aboutMeRef.current;

    // Now we observe our current values
    if(currentHeaderRef) {
      observer.observe(currentHeaderRef);
    }
    if(currentProjectsRef) {
      observer.observe(currentProjectsRef);
    }
    if(currentAboutMeRef) {
      observer.observe(currentAboutMeRef);
    }
  
    return () => {
      // Now we unobserve our current values
      if(currentHeaderRef) {
        observer.unobserve(currentHeaderRef);
      }
      if(currentProjectsRef) {
        observer.unobserve(currentProjectsRef);
      }
      if(currentAboutMeRef) {
        observer.unobserve(currentAboutMeRef);
      }
    };
}, [navigate]);


  useEffect(() => {
    // This is called whenever the path changes
    const { pathname } = location;
    const section = pathname.substring(1); // Remove leading slash
    const ref = pathToRefMapping[section];
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  return (
    <div>
      <Header ref={headerRef} id='header' />
      <Projects ref={projectsRef} id='projects' />
      <AboutMe ref={aboutMeRef} id='aboutme' />
    </div>
  );
};

export default MainPage;
