import React, { useState, useEffect } from 'react';
import AnimatedPage from '../components/AnimatedPage';
import { motion } from 'framer-motion';
import { ArrowRight, School, FlaskConical, Users, Award } from 'lucide-react';

const courses = [
  {
    title: "Bachelor in-Physiotherapy (B.P.T)",
    description: "A comprehensive program focusing on physical therapy and rehabilitation sciences.",
    imgSrc: "/image/course/back-pain-pain-body-5308969.jpg"
  },
  {
    title: "Bachelor in-Medical Laboratory Technology (BMLT)",
    description: "Gain expertise in clinical laboratory procedures to diagnose and manage diseases.",
    imgSrc: "/image/course/laboratory-analysis-chemistry-2815641.jpg"
  },
  {
    title: "B.Sc in Critical Care Technology",
    description: "Specialize in the care of critically ill patients in intensive care units.",
    imgSrc: "/image/course/hospital-labor-delivery-840135.jpg"
  },
  {
    title: "Master of Physiotherapy Therapy (Orthopaedics)",
    description: "Advanced studies in physiotherapy with a specialization in orthopedic conditions.",
    imgSrc: "/image/course/physical-therapy-rehabilitation-physiotherapy-7321056.png"
  },
  {
    title: "B.Sc in Operation Theatre Technology",
    description: "Train to become a skilled professional in managing the operation theatre.",
    imgSrc: "/image/course/doctor-surgeon-operation-650534.jpg"
  },
  {
    title: "B.Sc in Physician Assistant",
    description: "Develop the skills to work alongside physicians in providing patient care.",
    imgSrc: "/image/course/child-patient-doctor-8117667.jpg"
  }
];

const features = [
  {
    icon: <School size={32} className="text-primary-blue"/>,
    title: "10+ Courses Offered",
    description: "A wide range of specialized paramedical programs."
  },
  {
    icon: <FlaskConical size={32} className="text-primary-blue"/>,
    title: "State-of-the-Art Labs",
    description: "Modern facilities for hands-on practical training."
  },
  {
    icon: <Users size={32} className="text-primary-blue"/>,
    title: "Experienced Faculty",
    description: "Learn from industry experts and dedicated educators."
  },
  {
    icon: <Award size={32} className="text-primary-blue"/>,
    title: "Placement Assistance",
    description: "Dedicated support to kickstart your professional career."
  }
];

const slideImages = [
  {
    imageSrc: "/image/hero/image (1).png",
    alt: "Healthcare professional 1",
    title: "Shape Your Future in Healthcare",
    description: "Join us to gain the skills and knowledge needed for a successful career in the paramedical and allied health sciences."
  },
  {
    imageSrc: "/image/hero/image.png",
    alt: "Healthcare professional 2",
    title: "Learning Begins With Us",
    description: "We, at Dishari Institute Of Paramedical Allied Health Science offer supportive and inspirational environments for young enquiring minds to learn and grow with us."
  }
];

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatedPage>
      <section className="relative h-[720px] flex items-center justify-center text-center text-white">
        <div className="absolute inset-0">
          <img
            src={slideImages[currentSlide].imageSrc}
            alt={slideImages[currentSlide].alt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/60"></div>
        </div>
        <motion.div
          className="relative z-10 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold font-lexend tracking-tighter mb-4">{slideImages[currentSlide].title}</h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-white-tertiary mb-8">{slideImages[currentSlide].description}</p>
          <a href="/contact" className="bg-primary-blue text-white font-lexend text-base font-medium py-3 px-6 rounded-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105">
            Explore Courses
          </a>
        </motion.div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary font-lexend tracking-tight mb-4">
                Welcome to Dishari Institute Of Paramedical & Allied Health Science Malda
              </h2>
              <p className="text-text-secondary leading-relaxed mb-6">
                Welcome to Dishari Institute Of Paramedical & Allied Health Science Malda, where knowledge, compassion, and innovation converge to shape the healthcare professionals of tomorrow. Our institution is a beacon of excellence in the field of paramedical and allied health sciences, dedicated to providing high-quality education, training, and guidance to aspiring healthcare professionals
              </p>
              <a href="#" className="bg-primary-blue text-white font-lexend text-base font-medium py-3 px-6 rounded-lg hover:bg-opacity-90 transition-colors">
                Learn More About Us
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <img 
                src="https://img-wrapper.vercel.app/image?url=https://s3-alpha-sig.figma.com/img/5949/0a32/a881c6d146286e12b70e94d296e30920?Expires=1763942400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ik0f0waW0KBqKujqblylN0CYSMJUz-i4WXVR7ZtnfRGxOmTdTBypxis4GzqnmjbardTLao9qEoXqZ6Jfc~qPMgiOG2-Jsj2rVPCHPFlWwDorkLp5zLRW0ZduXky-9tHANHqLd5OEoNQV8Uqukr6gODTlyEj2--ZzUiHE9oqX8OjKt-Mt09ujKb8ZFp~bVnJcjxHmACbF1ZH2LO~ixO2sARDQVVVApYGm--S9EYfqfmejvQyMg67v9fS4piwDGmmVWBptIMHq4-9bKcI25aIfcWaJFJ1hPf-3T9g6YkmWU8AbzFhprG87DyrW65wpZPOyX4yfa4ENhsn4HBeXSjMpvQ__" 
                alt="Students in a classroom" 
                className="rounded-xl shadow-hero-image w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Learning Begins Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary font-lexend tracking-tight mb-2">Learning Begins With Us</h2>
            <p className="text-lg text-text-secondary">We, at Dishari Institute Of Paramedical Allied Health Science offer supportive and inspirational environments for young enquiring minds to learn and grow with us. Our passion for learning means we achieve more than outstanding results. We strive to build confident and creative thinkers and aim at delivering an education that is truly relevant to their future.</p>
        </div>
      </section>

      {/* At a Glance Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary font-lexend tracking-tight text-center mb-12">
            Dishari Institute at a Glance
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-background p-6 rounded-xl text-center flex flex-col items-center gap-4 transition-transform duration-300 hover:-translate-y-2"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-primary-blue-light w-16 h-16 rounded-full flex items-center justify-center mb-2">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-text-primary font-lexend">{feature.title}</h3>
                <p className="text-text-muted text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary font-lexend tracking-tight text-center mb-12">
            These are the courses
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-card overflow-hidden flex flex-col group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="overflow-hidden">
                  <img src={course.imgSrc} alt={course.title} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-text-primary font-lexend mb-2 flex-grow">{course.title}</h3>
                  <p className="text-text-secondary text-sm mb-4">{course.description}</p>
                  <a href="#" className="font-semibold text-primary-blue flex items-center gap-2 group-hover:gap-3 transition-all duration-300 mt-auto">
                    Learn More <ArrowRight size={16} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </AnimatedPage>
  );
};

export default Home;
