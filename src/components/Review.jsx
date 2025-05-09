import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useRef, useEffect } from 'react';
import ReviewCard from './ReviewCard';

gsap.registerPlugin(ScrollTrigger);

const reviews = [
  { content: 'Exceptional work! Delivered our e-commerce platform ahead of schedule with flawless functionality and beautiful UI.', name: 'Emma Johnson', imgSrc: 'https://randomuser.me/api/portraits/women/44.jpg', company: 'ShopNest', rating: 5 },
  { content: 'Reliable, professional, and highly skilled. Our admin dashboard has never been more intuitive or powerful.', name: 'David Wilson', imgSrc: 'https://randomuser.me/api/portraits/men/75.jpg', company: 'AdminPro', rating: 5 },
  { content: 'The mobile-responsive design work was outstanding. Our bounce rate decreased by 60% after the redesign.', name: 'James Kim', imgSrc: 'https://randomuser.me/api/portraits/men/22.jpg', company: 'MobileFirst', rating: 4.9 },
  { content: "Their approach to backend optimization dramatically improved our API response times. Our system runs smoother than ever!", name: "Nina Thompson", imgSrc: "https://randomuser.me/api/portraits/women/23.jpg", company: "SpeedifyTech", rating: 4.8 },
  { content: "Absolutely brilliant problem-solving skills. Helped us debug a critical issue that had been causing downtime for weeks!", name: "Robert Taylor", imgSrc: "https://randomuser.me/api/portraits/men/54.jpg", company: "FixIT Solutions", rating: 5 },
  { content: "Their commitment to UI/UX excellence transformed our user experience. Engagement metrics have skyrocketed!", name: "Sophia Lopez", imgSrc: "https://randomuser.me/api/portraits/women/45.jpg", company: "PixelPerfect Designs", rating: 4.9 },
  { content: 'Implemented complex real-time features with WebSockets flawlessly. Highly recommend for advanced web applications.', name: 'Sophie Williams', imgSrc: 'https://randomuser.me/api/portraits/women/55.jpg', company: 'LiveTech', rating: 5 },
  { content: 'Redesigned our entire UX/UI with a focus on accessibility. Received numerous compliments from our users.', name: 'Daniel Brown', imgSrc: 'https://randomuser.me/api/portraits/men/88.jpg', company: 'AccessAll', rating: 4.8 },
  { content: 'Their full-stack expertise saved us months of development time. Delivered a perfect solution under tight deadlines.', name: 'Aisha Rahman', imgSrc: 'https://randomuser.me/api/portraits/women/33.jpg', company: 'QuickDeploy', rating: 5 }
];



const Review = () => {
  const slideRef = useRef();
  const wrapperRef = useRef();

  useGSAP(() => {
    const slide = slideRef.current;
    const scrollAmount = slide.scrollWidth - wrapperRef.current.clientWidth;

    gsap.to(slide, {
      x: () => `-${scrollAmount}`,
      ease: 'power2.inOut',
      scrollTrigger: {
        trigger: wrapperRef.current,
        start: 'top center',
        end: () => `+=${scrollAmount}`,
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });

    gsap.from(wrapperRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: wrapperRef.current,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    });
  }, []);

  return (
    <section id="reviews" className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-full mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-zinc-100 mb-8">
          What People Say About Me
        </h2>
        
        <div className="relative">
          <div ref={wrapperRef} className="py-6 bg-zinc-900 rounded-lg shadow-md overflow-x-auto scrollbar-thin scrollbar-dark w-full">
            <div ref={slideRef} className="flex gap-6 px-4 w-full justify-start">
              {reviews.map((review, index) => (
                <div key={index} className="transform transition-all hover:scale-105">
                  <ReviewCard {...review} />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-2 overflow-x-auto scrollbar-thin scrollbar-dark">
            <div className="w-full h-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;