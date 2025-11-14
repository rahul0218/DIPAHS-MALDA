import React from 'react';
import AnimatedPage from '../components/AnimatedPage';
import { motion } from 'framer-motion';
import { Target, Lightbulb, Award, Users, TrendingUp } from 'lucide-react';

const coreValues = [
  {
    icon: <TrendingUp size={28} className="text-primary-blue" />,
    title: 'Modern & Relevant',
    description: 'We have a culture that is modern, relevant, and inspires students to have a brighter future.',
  },
  {
    icon: <Award size={28} className="text-primary-blue" />,
    title: 'Creative & Determined',
    description: 'We are determined in our approach to learning, creative in our thinking, and bold in our ambitions.',
  },
  {
    icon: <Users size={28} className="text-primary-blue" />,
    title: 'Child-Centered',
    description: 'We follow a child-centered educational approach, believing each child is naturally curious and capable.',
  },
];

const About: React.FC = () => {
  return (
    <AnimatedPage>
      <div className="bg-white">
        {/* Header */}
        <header className="bg-primary-blue-light py-16 md:py-20 text-center">
          <div className="container mx-auto px-6">
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-text-primary font-lexend tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              About Dishari Institute
            </motion.h1>
            <motion.p
              className="mt-4 text-lg text-text-secondary max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Shaping the future of healthcare where knowledge, compassion, and innovation converge.
            </motion.p>
          </div>
        </header>

        <main className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            {/* Welcome Section */}
            <section className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20 md:mb-28">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-text-primary font-lexend tracking-tight mb-4">
                  Welcome to Dishari Institute Of Paramedical & Allied Health Science Malda
                </h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  Our institution is a beacon of excellence in the field of paramedical and allied health sciences, dedicated to providing high-quality education, training, and guidance to aspiring healthcare professionals.
                </p>
                <p className="text-text-secondary leading-relaxed">
                  Everyday at the Dishari Institute is a blessing with our active students and talented staff members. We provide a conducive learning environment that fosters holistic development and empowers our students to excel.
                </p>
              </motion.div>
              <motion.div
                className="w-full h-full"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <img
                  src="https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://s3-alpha-sig.figma.com/img/5949/0a32/a881c6d146286e12b70e94d296e30920?Expires=1763942400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ik0f0waW0KBqKujqblylN0CYSMJUz-i4WXVR7ZtnfRGxOmTdTBypxis4GzqnmjbardTLao9qEoXqZ6Jfc~qPMgiOG2-Jsj2rVPCHPFlWwDorkLp5zLRW0ZduXky-9tHANHqLd5OEoNQV8Uqukr6gODTlyEj2--ZzUiHE9oqX8OjKt-Mt09ujKb8ZFp~bVnJcjxHmACbF1ZH2LO~ixO2sARDQVVVApYGm--S9EYfqfmejvQyMg67v9fS4piwDGmmVWBptIMHq4-9bKcI25aIfcWaJFJ1hPf-3T9g6YkmWU8AbzFhprG87DyrW65wpZPOyX4yfa4ENhsn4HBeXSjMpvQ__"
                  alt="Students and faculty at Dishari Institute"
                  className="rounded-xl shadow-hero-image w-full h-auto object-cover"
                />
              </motion.div>
            </section>

            {/* Mission & Philosophy */}
            <section className="grid md:grid-cols-2 gap-10 mb-20 md:mb-28">
              <motion.div
                className="bg-background p-8 rounded-xl"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <Target size={32} className="text-primary-blue flex-shrink-0" />
                  <h3 className="text-2xl font-bold text-text-primary font-lexend">Mission Statement</h3>
                </div>
                <p className="text-text-muted leading-relaxed">
                  Our mission is to develop the unique abilities and potential of each student by offering an enriched educational program. We strive for excellence through a hands-on approach, growing productive, caring, and intellectually curious citizens.
                </p>
              </motion.div>
              <motion.div
                className="bg-background p-8 rounded-xl"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <Lightbulb size={32} className="text-primary-blue flex-shrink-0" />
                  <h3 className="text-2xl font-bold text-text-primary font-lexend">Our Philosophy</h3>
                </div>
                <p className="text-text-muted leading-relaxed">
                  We follow a child-centered educational approach based on scientific observations. We believe that a child is naturally curious and capable of initiating learning in a supportive and thoughtfully prepared environment.
                </p>
              </motion.div>
            </section>

            {/* Core Values */}
            <section>
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary font-lexend tracking-tight text-center mb-12">
                Our Core Values
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {coreValues.map((value, index) => (
                  <motion.div
                    key={index}
                    className="bg-white border border-gray-200/80 p-6 rounded-xl text-center flex flex-col items-center gap-3 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="bg-primary-blue-light w-16 h-16 rounded-full flex items-center justify-center mb-2">
                      {value.icon}
                    </div>
                    <h4 className="text-xl font-bold text-text-primary font-lexend">{value.title}</h4>
                    <p className="text-text-muted text-sm">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>
    </AnimatedPage>
  );
};

export default About;
