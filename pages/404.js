import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

const NotFoundPage = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/');
    }, 5000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className='h-screen flex flex-col justify-center items-center bg-sky-200 text-lg'>
        <h1>Page Not Found</h1>
        <p>Oops! The page you're looking for doesn't exist.</p>
      </div>
    </motion.div>
  );
};

export default NotFoundPage;
