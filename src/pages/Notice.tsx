import React from 'react';
import AnimatedPage from '../components/AnimatedPage';
import { motion } from 'framer-motion';
import { Calendar, FileText } from 'lucide-react';

const notices = [
  {
    id: 1,
    title: 'Extension of Admission Deadline for 2025-26 Session',
    date: 'July 15, 2025',
    category: 'Admissions',
    content: 'The deadline for submitting applications for all undergraduate and postgraduate courses for the academic session 2025-26 has been extended to July 30, 2025. Interested candidates are advised to complete their applications before the new deadline.',
  },
  {
    id: 2,
    title: 'Mid-Term Examination Schedule for BPT & BMLT Courses',
    date: 'July 10, 2025',
    category: 'Academic',
    content: 'The mid-term examinations for the 2nd and 4th semesters of B.P.T and B.M.L.T programs will commence from August 5, 2025. The detailed schedule and seating plan have been uploaded to the student portal.',
  },
  {
    id: 3,
    title: 'Annual Sports Day Event Announcement',
    date: 'July 05, 2025',
    category: 'Events',
    content: 'The annual sports day will be held on August 15, 2025. All students are encouraged to participate in the various athletic events. Registration for events is now open and will close on August 1, 2025.',
  },
  {
    id: 4,
    title: 'Holiday Notice: Independence Day',
    date: 'July 01, 2025',
    category: 'General',
    content: 'The institute will remain closed on August 15, 2025, on account of Independence Day. Regular classes will resume on August 16, 2025.',
  },
];

const getCategoryClass = (category: string) => {
  switch (category) {
    case 'Admissions':
      return 'bg-green-100 text-green-800';
    case 'Academic':
      return 'bg-blue-100 text-blue-800';
    case 'Events':
      return 'bg-yellow-100 text-yellow-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

const Notice: React.FC = () => {
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
              Notice Board
            </motion.h1>
            <motion.p
              className="mt-4 text-lg text-text-secondary max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Stay updated with the latest news, announcements, and important information from Dishari Institute.
            </motion.p>
          </div>
        </header>

        <main className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">
                {notices.map((notice, index) => (
                  <motion.div
                    key={notice.id}
                    className="bg-background border border-gray-200/80 rounded-xl p-6 transition-all duration-300 hover:shadow-md hover:border-primary-blue/30"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-3">
                      <h3 className="text-xl font-bold text-text-primary font-lexend mb-2 sm:mb-0">{notice.title}</h3>
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${getCategoryClass(notice.category)}`}>
                        {notice.category}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-text-muted mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar size={14} />
                        <span>{notice.date}</span>
                      </div>
                    </div>
                    <p className="text-text-secondary leading-relaxed mb-5">
                      {notice.content}
                    </p>
                    <a href="#" className="font-semibold text-primary-blue flex items-center gap-2 group">
                      Download PDF <FileText size={16} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </AnimatedPage>
  );
};

export default Notice;
