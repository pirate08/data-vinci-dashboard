import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

const PageNotFound = () => {
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
      exit={{ opacity: 0 }}>
      <h1>Page Not Found</h1>
      <p>Oops! The page you're looking for doesn't exist.</p>
    </motion.div>
  );
};

export default PageNotFound;
