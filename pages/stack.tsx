import React from 'react';
import Head from 'next/head'

// Components
import BackButtonHeader from '../src/components/nav/backHeader'
import StackCard from "../src/components/cards/stackCard";

interface Section {
  id: string;
  title: string;
  image: string;
  links: string[];
  images: string[];
  itemsPerRow?: number;
}

const stackSections: Section[] = [
    {
        id: "section1",
        title: "DESIGN",
        image: "/images/Empty.png",
        links: [
          "https://www.figma.com/design/",
          "https://www.framer.com/",
          "https://www.adobe.com/products/xd/learn/get-started/what-is-adobe-xd-used-for.html",
          "https://www.adobe.com/products/aftereffects.html",
          "https://www.adobe.com/products/photoshop.html",
          "https://www.adobe.com/products/illustrator.html",
          "https://www.adobe.com/products/photoshop-lightroom.html",
          "https://www.adobe.com/products/indesign.html",
          "https://www.maxon.net/en/cinema-4d",
          "https://home.otoy.com/render/octane-render/",
          "https://lottiefiles.com/"
        ],
        images: [
          "/images/stack/Figma.png",
          "/images/stack/Framer.png",
          "/images/stack/XD.png",
          "/images/stack/AE.png",
          "/images/stack/PS.png",
          "/images/stack/AI.png",
          "/images/stack/LR.png",
          "/images/stack/ID.png",
          "/images/stack/C4D.png", 
          "/images/stack/Octane.png", 
          "/images/stack/Lottie.png",
        ],
      },
      {
        itemsPerRow: 2,
        id: "section2",
        title: "DEVELOPMENT",
        image: "/images/Empty.png",
        links: [
          "https://code.visualstudio.com/",
          "https://github.com/",
          "https://www.w3.org/standards/webdesign/htmlcss",
          "https://www.w3.org/standards/webdesign/htmlcss",
          "https://react.dev/",
          "https://www.swift.org/",
        ],
        images: [
          "/images/stack/VSC.png",
          "/images/stack/GH.png",
          "/images/stack/HTML.png",
          "/images/stack/CSS.png",
          "/images/stack/React.png",
          "/images/stack/Swift.png",
        ],
      },
      {
        itemsPerRow: 2,
        id: "section3",
        title: "PERSONAL",
        image: "/images/Empty.png",
        links: [
          "https://arc.net/",
          "https://discord.com/",
          "https://slack.com/",
          "https://signal.org/en/",
          "https://metamask.io/",
          "https://coinbase.com/",
        ],
        images: [
          "/images/stack/Arc.png",
          "/images/stack/Discord.png",
          "/images/stack/Slack.png",
          "/images/stack/Signal.png",
          "/images/stack/MM.png",
          "/images/stack/CB.png",
        ],
      },
      {
        itemsPerRow: 2,
        id: "section4",
        title: "OTHER",
        image: "/images/Empty.png",
        links: [
          "https://www.apple.com/logic-pro/",
          "https://www.ableton.com/en/live/",
          "https://www.apple.com/final-cut-pro/",
          "https://www.adobe.com/products/premiere.html",
          "https://www.office.com/",
          "https://www.notion.so/product",
        ],
        images: [
          "/images/stack/Logic.png",
          "/images/stack/Ableton.png",
          "/images/stack/FC.png",
          "/images/stack/PR.png",
          "/images/stack/365.png",
          "/images/stack/Notion.png",
        ],
      },
    ];

const Stack: React.FC = () => (
  <>
    <Head>
        <title>Caleb Faulkner - Stack</title>
    </Head>
    <BackButtonHeader title="STACK" />
    <div id="mainContainer">
    <main id="cardContainer">
        {stackSections.map((section) => (
        <StackCard {...section} itemsPerRow={section.itemsPerRow || 4} />
        ))}
    </main>
    </div>
  </>
);

export default Stack;