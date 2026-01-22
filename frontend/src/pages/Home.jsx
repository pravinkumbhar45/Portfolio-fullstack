import { motion } from "framer-motion";

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h1>Hi, I’m Pravin Kumbhar 👋</h1>
      <p>
        Full Stack Developer | React | Node.js | MySQL
      </p>
    </motion.div>
  );
}

export default Home;
