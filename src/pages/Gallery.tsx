import React from 'react';
import AnimatedPage from '../components/AnimatedPage';
import { motion } from 'framer-motion';

const activities = [
  {
    title: 'Athletics',
    description: 'Our students are passionate about sports and athletics and have the freedom to choose the one they like and wish to take up. We also participate in inter-school, district, state and national level competitions.',
    imgSrc: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://s3-alpha-sig.figma.com/img/5949/0a32/a881c6d146286e12b70e94d296e30920?Expires=1763942400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ik0f0waW0KBqKujqblylN0CYSMJUz-i4WXVR7ZtnfRGxOmTdTBypxis4GzqnmjbardTLao9qEoXqZ6Jfc~qPMgiOG2-Jsj2rVPCHPFlWwDorkLp5zLRW0ZduXky-9tHANHqLd5OEoNQV8Uqukr6gODTlyEj2--ZzUiHE9oqX8OjKt-Mt09ujKb8ZFp~bVnJcjxHmACbF1ZH2LO~ixO2sARDQVVVApYGm--S9EYfqfmejvQyMg67v9fS4piwDGmmVWBptIMHq4-9bKcI25aIfcWaJFJ1hPf-3T9g6YkmWU8AbzFhprG87DyrW65wpZPOyX4yfa4ENhsn4HBeXSjMpvQ__',
    alt: 'Students participating in sports'
  },
  {
    title: 'In-house Publications',
    description: 'We have several writers who are encouraged to come up with creations that are regularly published in our in-house magazines. We host a book sale every 2 years to promote our writers and their work.',
    imgSrc: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://s3-alpha-sig.figma.com/img/b2a0/3768/8112576e3a8a363a12e49a27a76e55a8?Expires=1763942400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=IuGMJrTuYBxEX7ugR6LR0zTaVJ0EwB8ooANqBU~SWPD6UVIcbIZmKxfWXp8YBwre~9Jnu0rvQdTz1BwO2DAPMfZotK6Mc2gRuQANFxsnrVaI~91TCOJiGS5yUBl5z6DprhUzNI32~j9O9bcXiJ5t5l2-3ZapEBA~x-vp6opgRQMcZhEVRHZ0fztHcejHN6tuVjg2vLIpX6dwTe5yBfByjZ5qVoKA-HsbDqY1xxRmoxgdhaNBcqkoPE0MPkWDV5dwPQucLh8pFs16h9vQb9HM1LiQ6PzNt33CgNmglh5donECLeQ4j-WnMer9RFktfBV7HWLv58iDSEoJb2TXEd79vA__',
    alt: 'A stack of books and magazines'
  },
  {
    title: 'Performing Arts & Music',
    description: 'With professionals on board, we take pride in training our students in art forms like dance, drama, painting and more. We organize exhibitions, concerts and musical events to encourage our students.',
    imgSrc: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://s3-alpha-sig.figma.com/img/ed28/2267/d347394a2218a13cb0e56beb2a4779c1?Expires=1763942400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=fP1gpYDyKy4CEw~emXCZGpuqOSyHdd~5GYdLc8rjF8sQRQ5a~ES6BPogaUwMOht-46bbMPDR-KGziQFscFst-Xy28CnhDFnxsvdG0WKPwLu2OPuZ3ePvgaSLKE~P9y7rWOEt7rdLupOgKx6Vou0u3-eUuAW~Gm1cDPhw2Ai6FOOnU61cruV8G4E99IdEdCTpa1BC7x47WhIz-KHWb88x7B0uwcquIVgAxdcsQzctzKAC~-wlmVW38Y00TdDetEkvk~p2CTHOF5zb32WKuzV9NFSEouZ7G6MdQia9-iqBap4wz6AjPUIbjoJAmNHTTVeJDhublB6Vdy4GIxQyCeuvbg__',
    alt: 'A person playing a guitar on stage'
  },
];

const Gallery: React.FC = () => {
  return (
    <AnimatedPage>
      <div className="bg-white">
        <header className="bg-primary-blue-light py-16 md:py-20 text-center">
          <div className="container mx-auto px-6">
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-text-primary font-lexend tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Gallery & Activities
            </motion.h1>
            <motion.p
              className="mt-4 text-lg text-text-secondary max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Explore the vibrant life at Dishari Institute, where we foster talent and holistic development beyond the classroom.
            </motion.p>
          </div>
        </header>

        <main className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {activities.map((activity, index) => (
                <motion.div
                  key={index}
                  className="group relative rounded-xl overflow-hidden shadow-lg h-96 flex flex-col justify-end p-6 text-white"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <img src={activity.imgSrc} alt={activity.alt} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold font-lexend mb-2">{activity.title}</h3>
                    <p className="text-sm text-white-tertiary opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-40 transition-all duration-500">
                      {activity.description}
                    </p>
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

export default Gallery;
