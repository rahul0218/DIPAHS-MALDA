import React from 'react';
import AnimatedPage from '../components/AnimatedPage';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const coursesData = [
  {
    title: "Bachelor in-Physiotherapy (B.P.T)",
    description: "Bachelor of Physiotherapy or BPT is an undergraduate degree programme that deals with the structure of the human body. BPT course duration is four years and six months, students are required to complete a six months internship after the fourth year of studies.",
    imgSrc: "/image/course/back-pain-pain-body-5308969.jpg"
  },
  {
    title: "Bachelor in-Medical Laboratory Technology (BMLT)",
    description: "BMLT stands for Bachelor of Medical Laboratory Technology, which is a three-year undergraduate degree program. The program provides students with a broad understanding of laboratory science and technology, as well as the practical skills required to work in a medical laboratory.",
    imgSrc: "/image/course/laboratory-analysis-chemistry-2815641.jpg"
  },
  {
    title: "B.Sc in Critical Care Technology",
    description: "B.Sc Critical care technology is a three years degree programme to provide critical and intensive care to patients in the emergency ward of a hospital. Candidates are also trained to monitor equipment, record important data, and same vital data with physician.",
    imgSrc: "/image/course/hospital-labor-delivery-840135.jpg"
  },
  {
    title: "Master of Physiotherapy Therapy (Orthopaedics)",
    description: "Master of Physiotherapy (MPT) is a two-year postgraduate degree programme, which comes under the stream of Medicine and Allied Science. This degree programme deals with physical therapy, which is used to improve a patient's physical functions through physical therapy.",
    imgSrc: "/image/course/physical-therapy-rehabilitation-physiotherapy-7321056.png"
  },
  {
    title: "B.Sc in Operation Theatre Technology",
    description: "Operation Theatre Technology is a branch of paramedical science that deals with different aspects related to surgery performed at the operation theatre. Those who have expertise in this technology are called Operation Theatre Technicians.",
    imgSrc: "/image/course/doctor-surgeon-operation-650534.jpg"
  },
  {
    title: "B.Sc in Physician Assistant",
    description: "A physician assistant (PA) is a licensed medical professional who holds an advanced degree and is able to provide direct patient care. They work with patients of all ages in virtually all specialty and primary care areas, diagnosing and treating common illnesses and working with minor procedures.",
    imgSrc: "/image/course/child-patient-doctor-8117667.jpg"
  }
];

const Course: React.FC = () => {
  return (
    <AnimatedPage>
      <div className="bg-white">
        <header className="bg-primary-blue-light py-16 text-center">
          <div className="container mx-auto px-6">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-text-primary font-lexend tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Our Courses
            </motion.h1>
            <motion.p 
              className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Explore our wide range of paramedical and allied health science programs designed to prepare you for a successful career in healthcare.
            </motion.p>
          </div>
        </header>

        <main className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coursesData.map((course, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl shadow-card overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="overflow-hidden">
                    <img src={course.imgSrc} alt={course.title} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-text-primary font-lexend mb-3">{course.title}</h3>
                    <p className="text-text-secondary text-sm mb-6 leading-relaxed flex-grow">{course.description}</p>
                    <a href="/contact" className="font-semibold text-primary-blue flex items-center gap-2 group-hover:gap-3 transition-all duration-300 mt-auto self-start">
                      Apply Now <ArrowRight size={16} />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </AnimatedPage>
  );
};

export default Course;
