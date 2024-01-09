import { Link, Route, Routes, useLocation } from "react-router-dom";
import Payments from "../applets/Payments";
import TopBar from "./TopBar";
import { AnimatePresence, motion } from "framer-motion";
import { RiLink } from "react-icons/ri";

const pageTransitions = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

function Workspace() {
  const location = useLocation();

  return (
    <div className="flex-grow flex flex-col bg-[#fafafa]">
      <TopBar />

      <AnimatePresence mode="wait">
        <Routes location={location}>
          <Route
            path="/payments"
            element={
              <motion.div
                key={"/payments"}
                className="flex-grow m-10 flex flex-col"
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageTransitions}
                transition={{ duration: 0.1, delay: 0 }}
              >
                <Payments />
              </motion.div>
            }
          />
          <Route
            path="*"
            element={
              <motion.div
                key="null"
                className="flex-grow m-10 flex flex-col justify-center items-center"
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageTransitions}
                transition={{ duration: 0.1, delay: 0 }}
              >
                <div className="mb-5 text-8xl">404</div>
                <span className="text-gray-400 group h-4">
                  Resource not found. Go to&nbsp;
                  <Link
                    to="/payments"
                    className="group-hover:border-b font-semibold inline-block text-blue-500 group-hover:text-blue-400 border-blue-500"
                  >
                    payments
                  </Link>
                  <RiLink
                    fontSize={20}
                    className="ml-1 inline-block text-blue-500 group-hover:text-blue-400"
                  />
                </span>
              </motion.div>
            }
          />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default Workspace;
