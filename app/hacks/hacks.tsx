
import React from 'react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Button } from "@/components/ui/button"

const hackathons = [
  {
    title: 'SwitchCon - 2024',
    date: '2023-10-14',
    status: 'Success',
    location: 'Zone Tech Gbagada, Lagos.',
    theme: 'The Ignition 2023',
    projectLink: 'Link Is Broken.',
    challengesFaced: 'Time constraints',
    technologiesUsed: ['React', 'Node.js', 'MongoDB'],
    judgesFeedback: 'Innovative use of emerging technologies in solving Nigerian problems.',
    award: 'Final 10',
    teamMembers: ['Muhammad', 'Joy', 'Victoria'],
    preparationTime: '1 Month',
    keyLearnings: 'Importance of clear communication.',
    sponsorships: [],
    futurePlans: 'Expand the project into a startup.',
    memorableMoments: 'Being recognized by industry experts and clinching final 10.',
  },
  {
    title: 'Cavista ML Hackathon',
    date: '2024-04-26',
    status: 'Failure',
    location: 'University Of Lagos, Nigeria.',
    theme: 'Health Tech with AI.',
    projectLink: 'https://github.com/Cavista-Hackathon-2024/The-Nodes/tree/main/Node-Engine',
    challengesFaced: 'Lack of time and technical expertise.',
    technologiesUsed: ['Typescript', 'Express', 'Flutter'],
    judgesFeedback: 'nil.',
    award: 'N/A',
    teamMembers: ['Ibraaheem', 'Bashir', 'Habeeb'],
    preparationTime: '1 day',
    keyLearnings: 'Need for better planning and division of tasks.',
    sponsorships: [],
    futurePlans: 'Refine the project and try again.',
    memorableMoments: 'Building with friends.',
  },
  {
    title: 'Hackops By Pipeops',
    date: '2024-07-06',
    status: 'Success',
    location: 'Zone Tech Gbagada, Lagos.',
    theme: 'Building for productivity.',
    projectLink: 'https://github.com/Tryouts-HK/Pipe_Hack',
    challengesFaced: 'Lack of time and technical expertise.',
    technologiesUsed: ['Typescript', 'Express', 'Tensorflow'],
    judgesFeedback: 'nil.',
    award: 'Finalist',
    teamMembers: ['Daniel Asaboro'],
    preparationTime: '2 Weeks',
    keyLearnings: 'Need for better planning and division of tasks.',
    sponsorships: [],
    futurePlans: 'Refine the project and SHIP!',
    memorableMoments: 'Being a finalist!',
  }
];



const HackathonCard = ({ hackathon, index }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="relative bg-white shadow-lg p-6 mb-8 transition-transform transform hover:scale-105 z-10 rounded-2xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={() => setIsOpen(!isOpen)}
    >
      <h3 className="text-2xl font-bold text-gray-800">{hackathon.title}</h3>
      <p className={`text-sm ${hackathon.status === 'Success' ? 'text-green-600' : 'text-red-600'}`}>
        {hackathon.date} | {hackathon.status} | {hackathon.location}
      </p>
      {isOpen && (
        <div className="mt-4 text-gray-700">
          <h4 className="font-semibold">Details:</h4>
          <ul className="list-disc list-inside mb-2">
            <li><strong>Theme:</strong> {hackathon.theme}</li>
            <li><strong>Project Link:</strong> <a href={hackathon.projectLink} className="text-blue-500 underline">{hackathon.projectLink}</a></li>
            <li><strong>Challenges Faced:</strong> {hackathon.challengesFaced}</li>
            <li><strong>Technologies Used:</strong> {hackathon.technologiesUsed.join(', ')}</li>
            <li><strong>Judges Feedback:</strong> {hackathon.judgesFeedback}</li>
            <li><strong>Award:</strong> {hackathon.award}</li>
            <li><strong>Team Members:</strong> {hackathon.teamMembers.join(', ')}</li>
            <li><strong>Preparation Time:</strong> {hackathon.preparationTime}</li>
            <li><strong>Key Learnings:</strong> {hackathon.keyLearnings}</li>
            <li><strong>Sponsorships:</strong> {hackathon.sponsorships.join(', ')}</li>
            <li><strong>Future Plans:</strong> {hackathon.futurePlans}</li>
            <li><strong>Memorable Moments:</strong> {hackathon.memorableMoments}</li>
          </ul>
        </div>
      )}
    </motion.div>
  );
};

const HackathonTimeline = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-10 relative rounded-2xl">
      <h1 className="text-5xl font-extrabold mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600">
        My Hackathon Journey
      </h1>
      <div className="relative">
        <div className="absolute top-0 left-0 w-1 bg-gray-500 h-full"></div>
        <div className="max-w-6xl mx-auto">
          {hackathons.map((hackathon, index) => (
            <motion.div key={hackathon.title} className={`flex flex-col items-${index % 2 === 0 ? 'start' : 'end'} mb-8 relative`}>
              <div className="z-20">
                <HackathonCard hackathon={hackathon} index={index} />
              </div>
              <div className="absolute left-0 top-0 transform -translate-y-1/2 w-4 h-4 rounded-full bg-blue-500"></div>
              {index < hackathons.length - 1 && (
                <div className="absolute left-1.5 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-blue-500"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-6">Want to Hack Together?</h2>
        <p className="text-xl text-primary-foreground/80 mb-8">
          Looking for a hackathon teammate or organizing an event? Let's build something amazing in record time.
        </p>
        <Button
          size="lg"
          variant="secondary"
          className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-4 text-lg font-semibold"
        >
          Let's Collaborate
        </Button>
      </div>
    </div>
  );
};


export default HackathonTimeline;