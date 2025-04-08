import React from "react";
import { motion } from "framer-motion";
import { TimelineDemo } from "../components/Shared/TimelineDemo";

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen pt-0 pb-0">
      {/* Section Container */}
      {/* <div className="max-w-7xl mx-auto px-6"> */}
      {/* Heading */}
      {/* <motion.h1
          className="text-4xl font-bold text-center text-blue-700 mb-6"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Stair Ecosystem
        </motion.h1> */}

      {/* Mission Statement */}
      {/* <motion.p
          className="text-gray-700 text-center max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          At{" "}
          <span className="text-blue-700 font-semibold">Stair Ecosystem</span>,
          we are committed to revolutionizing renewable energy solutions. Our
          goal is to make solar energy accessible, efficient, and affordable for
          everyone.
        </motion.p> */}

      {/* Milestones Timeline */}
      {/* <div className="mt-12 space-y-8"> */}
      {/* <h2 className="text-3xl font-semibold text-center text-blue-600">
            Our Journey
          </h2> */}

      {/* <div className="relative border-l-4 border-blue-600 pl-6 space-y-6">
            <motion.div
              className="bg-white p-5 rounded-lg shadow-md"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h3 className="text-lg font-bold text-blue-600">
                2015 - Founded
              </h3>
              <p className="text-gray-600">
                Stair Ecosystem was founded with a vision to transform energy
                consumption.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-5 rounded-lg shadow-md"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <h3 className="text-lg font-bold text-blue-600">
                2018 - Expanded Nationwide
              </h3>
              <p className="text-gray-600">
                Our solar solutions reached customers across multiple states.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-5 rounded-lg shadow-md"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <h3 className="text-lg font-bold text-blue-600">
                2022 - Smart Solar Tech Introduced
              </h3>
              <p className="text-gray-600">
                We launched smart solar solutions with IoT-based monitoring.
              </p>
            </motion.div>
          </div> */}
      {/* </div> */}

      {/* Why Choose Us Section */}
      {/* <div className="mt-16">
          <h2 className="text-3xl font-semibold text-center text-blue-600">
            Why Choose Us?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mt-6">
            {[
              {
                title: "Eco-Friendly",
                desc: "100% renewable energy solutions.",
              },
              {
                title: "Affordable",
                desc: "Cost-effective and efficient solar power.",
              },
              {
                title: "Reliable",
                desc: "Long-lasting and durable solar panels.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 * index, duration: 0.6 }}
              >
                <h3 className="text-xl font-semibold text-blue-700">
                  {item.title}
                </h3>
                <p className="text-gray-600 mt-2">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div> */}
      {/* </div> */}
      <TimelineDemo />
    </div>
  );
};

export default About;
