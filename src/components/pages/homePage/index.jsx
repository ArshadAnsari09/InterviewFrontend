import React from 'react';
import Header from '../../common/header';
import Overview from './overview';
import FeaturesSection from './featuresSection';
import { VideoCall as VideoCallIcon, Code as CodeIcon, Group as GroupIcon } from "@mui/icons-material";

const HomePage = () => {
  return (
    <>
    <Header/>
    <Overview heading="Code Together, Learn Together" 
      description="The ultimate platform for collaborative coding interviews and pair programming. Connect face-to-face, code in real-time, and ace your technical interviews." 
      features={
        [
          {
            label: "Live Video Chat",
            value: "Connect face-to-face, code in real-time, and ace your technical interviews.",
          },
          {
            label: "Code Editor",
            value: "Connect face-to-face, code in real-time, and ace your technical interviews.",
          },
          {
            label: "Multi-Language",
            value: "Connect face-to-face, code in real-time, and ace your technical interviews.",
          },
        ]
      }
      />
      <FeaturesSection
        heading="Everything You Need to Succeed"
        description="Powerful features designed to make your coding interviews seamless and productive"
        features={
          [
            {
              title: "HD Video Call",
              description: "Crystal clear video and audio for seamless communication during interviews.",
              icon: <VideoCallIcon size={40} />,
            },
            {
              title: "Live Code Editor",
              description: "Collaborate in real-time with syntax highlighting and multiple language support.",
              icon: <CodeIcon size={40} />,
            },
            {
              title: "Easy Collaboration",
              description: "Share your screen, discuss solutions, and learn from each other in real-time.",
              icon: <GroupIcon size={40} />,
            },
          ]
        }
      />
    </>
  )
}

export default HomePage