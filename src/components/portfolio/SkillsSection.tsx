"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [animatedItems, setAnimatedItems] = useState(new Set());

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const handleAnimationComplete = (itemId: string) => {
    setAnimatedItems((prev) => new Set([...prev, itemId]));
  };

  // Official React Logo SVG Component
  const ReactLogo = () => (
    <svg width="40" height="40" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="1.5" fill="#61DAFB" />
      <ellipse
        cx="12"
        cy="12"
        rx="11"
        ry="4.2"
        fill="none"
        stroke="#61DAFB"
        strokeWidth="1"
      />
      <ellipse
        cx="12"
        cy="12"
        rx="11"
        ry="4.2"
        fill="none"
        stroke="#61DAFB"
        strokeWidth="1"
        transform="rotate(60 12 12)"
      />
      <ellipse
        cx="12"
        cy="12"
        rx="11"
        ry="4.2"
        fill="none"
        stroke="#61DAFB"
        strokeWidth="1"
        transform="rotate(120 12 12)"
      />
    </svg>
  );

  // Angular Logo SVG Component
  const AngularLogo = () => (
    <svg width="40" height="40" viewBox="0 0 24 24">
      <path d="M12 2L3 7l1.5 13L12 22l7.5-2L21 7l-9-5z" fill="#DD0031" />
      <path fill="#C3002F" d="M12 2v20l7.5-2L21 7l-9-5z" />
      <path
        fill="white"
        d="M12 6.5L8.5 17h2.25l.75-2.5h3l.75 2.5H17L12 6.5zm-1 6.5L12 10l1 3h-2z"
      />
    </svg>
  );

  // Node.js Logo SVG Component
  const NodeLogo = () => (
    <svg width="40" height="40" viewBox="0 0 24 24">
      <path
        d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.276-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z"
        fill="#339933"
      />
    </svg>
  );

  // PostgreSQL Logo
  const PostgreSQLLogo = () => (
    <svg width="40" height="40" viewBox="0 0 24 24">
      <path
        d="M17.128 0c.908 0 1.728.362 2.271 1.018C20.711 2.108 21 3.57 21 5.188v13.625c0 1.617-.289 3.08-1.601 4.17-.543.656-1.363 1.018-2.271 1.018-.908 0-1.728-.362-2.271-1.018C13.539 21.893 13.25 20.43 13.25 18.813V5.188c0-1.617.289-3.08 1.601-4.17C15.4.362 16.22 0 17.128 0z"
        fill="#336791"
      />
      <ellipse
        cx="8.5"
        cy="12"
        rx="6.5"
        ry="8"
        fill="none"
        stroke="#336791"
        strokeWidth="2"
      />
      <circle cx="8.5" cy="8" r="1.5" fill="#336791" />
      <path
        d="M2 12c0-2.5 2.91-4.5 6.5-4.5"
        stroke="#336791"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  );

  // MySQL Logo
  const MySQLLogo = () => (
    <svg width="40" height="40" viewBox="0 0 24 24">
      <path
        d="M0 12.5v-.813c0-1.156.328-2.062.984-2.719.656-.656 1.563-.984 2.719-.984h.813v8h-.813c-1.156 0-2.063-.328-2.719-.984C.328 14.344 0 13.437 0 12.281v-.219zM8 8h8v8H8V8z"
        fill="#4479A1"
      />
      <path
        d="M20 8h1.5c.828 0 1.5.672 1.5 1.5v5c0 .828-.672 1.5-1.5 1.5H20V8z"
        fill="#4479A1"
      />
      <circle cx="6" cy="6" r="2" fill="#F29111" />
      <circle cx="18" cy="6" r="2" fill="#F29111" />
    </svg>
  );

  // CSS3 Logo
  const CSS3Logo = () => (
    <svg width="40" height="40" viewBox="0 0 24 24">
      <path d="M5.5 22L3 2h18l-2.5 20L12 24z" fill="#1572B6" />
      <path d="M12 22.5L17.5 21l2-16H12z" fill="#33A9DC" />
      <path
        d="M12 13H8.5l-.5-2H12V9H6l1.5 6H12zM12 18H9.5l-.5-2H12v-2H7l1.5 6H12z"
        fill="white"
      />
    </svg>
  );

  // Flutter Logo
  const FlutterLogo = () => (
    <svg width="40" height="40" viewBox="0 0 24 24">
      <path
        d="M14.314 0L6.086 8.228l2.828 2.829L17.142 2.829z"
        fill="#42A5F5"
      />
      <path
        d="M14.314 8.228L8.914 13.628l2.828 2.829L16.142 11.057z"
        fill="#1976D2"
      />
      <path
        d="M11.742 13.628L8.914 16.457L11.742 19.285L14.571 16.457z"
        fill="#42A5F5"
      />
    </svg>
  );

  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        {
          name: "Next.js",
          logo: (
            <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">▲</span>
            </div>
          ),
          bgColor: "bg-slate-800",
        },
        {
          name: "React",
          logo: <ReactLogo />,
          bgColor: "bg-slate-800",
        },
        {
          name: "Angular",
          logo: <AngularLogo />,
          bgColor: "bg-slate-800",
        },
        {
          name: "Flutter",
          logo: <FlutterLogo />,
          bgColor: "bg-slate-800",
        },
        {
          name: "JavaScript",
          logo: (
            <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center">
              <span className="text-black font-bold text-xs">JS</span>
            </div>
          ),
          bgColor: "bg-slate-800",
        },
        {
          name: "TypeScript",
          logo: (
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xs">TS</span>
            </div>
          ),
          bgColor: "bg-slate-800",
        },
        {
          name: "Tailwind CSS",
          logo: (
            <div className="w-10 h-10 bg-cyan-500 rounded-lg flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C7.666,17.818,9.027,19.2,12.001,19.2c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
              </svg>
            </div>
          ),
          bgColor: "bg-slate-800",
        },
        {
          name: "Bootstrap",
          logo: (
            <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">B</span>
            </div>
          ),
          bgColor: "bg-slate-800",
        },
        {
          name: "HTML5",
          logo: (
            <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                <path d="M3.183 2l1.604 18L12 22l7.212-2.001L20.817 2H3.183zm2.717 4.896h11.2l-.276 3.131H9.262l.276 3.131h6.97l-.552 6.239L12 20.645l-3.956-1.248-.276-3.131h1.93l.138 1.566L12 18.354l2.164-.522.276-3.131H6.624L6.9 6.896z" />
              </svg>
            </div>
          ),
          bgColor: "bg-slate-800",
        },
        {
          name: "CSS3",
          logo: <CSS3Logo />,
          bgColor: "bg-slate-800",
        },
        {
          name: "jQuery",
          logo: (
            <div className="w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xs">jQ</span>
            </div>
          ),
          bgColor: "bg-slate-800",
        },
      ],
    },
    {
      title: "Backend Development",
      skills: [
        {
          name: "Spring Boot",
          logo: (
            <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                <path d="M20.205 16.392c-2.469 3.289-7.741 2.179-11.122 2.338 0 0-.599.034-1.201.133 0 0 .228-.097.519-.198 2.374-.821 3.496-.986 4.939-1.727 2.71-1.388 5.408-4.413 5.957-7.555-1.032 3.022-4.17 5.623-7.027 6.679-1.4.515-3.909 1.002-3.909 1.002-.738-.404-.395-1.336.577-1.676 2.729-.946 3.725-1.132 5.113-2.056 3.263-2.172 4.867-6.011 5.051-9.403-.171 2.807-1.444 5.434-3.298 7.632-1.771 2.1-4.972 3.632-7.598 3.632-.254 0-.503-.015-.747-.045-.709-.086-1.203-.412-1.149-1.219.062-.93 1.278-.986 2.066-1.12.902-.154 1.809-.411 2.654-.758 3.416-1.404 6.262-4.91 6.262-9.161C17.131 2.064 14.694.276 12 .276c-4.278 0-7.742 3.467-7.742 7.742 0 1.278.31 2.481.857 3.544.47.913 1.118 1.718 1.918 2.384.8.665 1.739 1.19 2.785 1.552.3.104.609.187.925.249.711.14 1.445.171 2.185.093.74-.078 1.48-.256 2.18-.532 2.379-.938 4.285-3.184 4.285-6.117 0-3.598-2.906-6.504-6.504-6.504-1.447 0-2.774.473-3.847 1.274-.537.4-.994.897-1.347 1.470-.176.286-.327.588-.447.904-.06.158-.108.32-.143.486-.035.166-.058.334-.068.504-.01.17-.007.341.009.511.032.34.088.677.168 1.006.16.658.416 1.28.755 1.848.678 1.136 1.668 2.043 2.863 2.627 1.195.584 2.569.845 3.943.758 1.374-.087 2.717-.477 3.896-1.126 2.358-1.298 4.065-3.601 4.065-6.305 0-4.278-3.467-7.742-7.742-7.742C4.278 4.534.81 8.001.81 12.278c0 2.704 1.336 5.092 3.372 6.52 2.036 1.428 4.543 1.686 6.922 1.23 2.379-.456 4.629-1.456 6.369-2.774.87-.659 1.631-1.411 2.259-2.238.628-.827 1.124-1.725 1.473-2.681z" />
              </svg>
            </div>
          ),
          bgColor: "bg-slate-800",
        },
        {
          name: "Node.js",
          logo: <NodeLogo />,
          bgColor: "bg-slate-800",
        },
        {
          name: "Express.js",
          logo: (
            <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xs">Ex</span>
            </div>
          ),
          bgColor: "bg-slate-800",
        },
        {
          name: "Laravel",
          logo: (
            <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                <path d="M23.642 5.43a.364.364 0 01.014.1v5.149c0 .135-.073.26-.189.326l-4.323 2.49v4.934a.378.378 0 01-.188.326L9.93 23.949a.316.316 0 01-.066.027c-.008.002-.016.008-.024.01a.348.348 0 01-.192 0c-.011-.002-.02-.008-.03-.012-.02-.008-.042-.014-.062-.025L.533 18.755a.376.376 0 01-.189-.326V2.974c0-.033.005-.066.014-.098.003-.012.01-.02.014-.032a.369.369 0 01.023-.058c.004-.013.015-.022.023-.033l.033-.045c.012-.01.025-.018.037-.027.014-.012.027-.024.041-.034H.53L5.043.05a.375.375 0 01.375 0L9.93 2.647h.002c.015.01.027.021.04.033.012.009.025.018.037.027.013.014.02.03.033.045.008.011.02.021.025.033.01.02.017.038.024.058.003.011.01.021.013.032.01.031.014.064.014.098v9.652l3.76-2.164V5.527c0-.033.004-.066.013-.098.003-.01.01-.02.013-.032a.487.487 0 01.024-.059c.007-.012.018-.021.025-.033.012-.015.021-.030.033-.043.012-.012.025-.02.037-.027.014-.013.026-.023.041-.034h.001l4.513-2.598a.375.375 0 01.375 0l4.513 2.598c.016.01.027.021.042.031.012.01.025.018.036.027.013.014.022.03.034.046.008.012.018.021.024.033.011.02.018.04.024.058.003.01.01.021.013.032.01.031.014.064.014.098zM21.5 6.23l-1.88 1.082 1.88 1.081v-2.163zm-4.513-1.188L12.674 7.15l4.313 2.107 4.312-2.107-4.312-2.107zM10.674 5.188L6.362 7.295l4.312 2.107 4.313-2.107-4.313-2.107zM1.5 3.578v10.349l4.312 2.498V6.076L1.5 3.578zm5.812 2.498v10.349l3.75 2.17v-10.35l-3.75-2.169zM9.25 18.906l9.75-5.64v-10.35l-1.5.865v8.563a.375.375 0 01-.188.325l-8.062 4.662v1.575zM21.5 8.329l-3.75 2.17v10.35l3.75-2.17V8.329z" />
              </svg>
            </div>
          ),
          bgColor: "bg-slate-800",
        },
        {
          name: "REST API",
          logo: (
            <div className="w-10 h-10 bg-indigo-500 rounded-lg flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                <path d="M13.5 2c-5.621 0-10.211 4.443-10.475 10h-3.025l4 5.917 4-5.917h-2.973c.257-3.912 3.559-7 7.473-7 4.136 0 7.5 3.364 7.5 7.5s-3.364 7.5-7.5 7.5c-1.863 0-3.542-.688-4.842-1.789l-1.658 1.658c1.73 1.556 4.011 2.531 6.5 2.531 5.238 0 9.5-4.262 9.5-9.5s-4.262-9.5-9.5-9.5z" />
              </svg>
            </div>
          ),
          bgColor: "bg-slate-800",
        },
        {
          name: "JWT",
          logo: (
            <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                <path d="M12 1l3 9h9l-7.5 5.5L19 24l-7-5-7 5 2.5-8.5L0 10h9l3-9z" />
              </svg>
            </div>
          ),
          bgColor: "bg-slate-800",
        },
        {
          name: "WebSocket",
          logo: (
            <div className="w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                <path d="M12 2l3.09 6.26L22 9l-5.91 5.9 1.5 7.1L12 19L6.41 22l1.5-7.1L2 9l6.91-.74L12 2z" />
              </svg>
            </div>
          ),
          bgColor: "bg-slate-800",
        },
      ],
    },
    {
      title: "Programming Languages",
      skills: [
        {
          name: "Java",
          logo: (
            <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                <path d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0-.001-8.216 2.051-4.292 6.573M19.33 20.504s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.75-.89 1.254-.998.527-.114.828-.093.828-.093-.953-.671-6.156 1.317-2.643 1.887 9.58 1.553 17.462-.7 14.977-1.82M9.292 13.21s-4.362 1.036-1.544 1.412c1.189.159 3.561.123 5.77-.062 1.806-.152 3.618-.477 3.618-.477s-.637.272-1.098.587c-4.429 1.165-12.986.623-10.522-.568 2.082-1.006 3.776-.892 3.776-.892M17.116 17.584c4.503-2.34 2.421-4.589.968-4.285-.355.074-.515.138-.515.138s.132-.207.385-.297c2.875-1.011 5.086 2.981-.928 4.562 0-.001.07-.062.09-.118M14.401 0s2.494 2.494-2.365 6.33c-3.896 3.077-.888 4.832-.001 6.836-2.274-2.053-3.943-3.858-2.824-5.539 1.644-2.469 6.197-3.665 5.19-7.627M9.734 23.924c4.322.277 10.959-.153 11.116-2.198 0 0-.302.775-3.572 1.391-3.688.694-8.239.613-10.937.168 0-.001.553.457 3.393.639" />
              </svg>
            </div>
          ),
          bgColor: "bg-slate-800",
        },
        {
          name: "PHP",
          logo: (
            <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                <path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .982-.122 1.292-.391.421-.375.533-.961.533-1.531 0-.405-.157-.646-.422-.646-.156 0-.332.05-.782.05v1.87zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.013.47-.196.846-.543 1.079-.293.197-.685.295-1.176.295H5.5l-.252 1.299H3.764L5.213 8.96h2.355c.649 0 1.094.122 1.345.391.252.269.379.631.379 1.114l-.004.045c0 .867-.165 1.346-.548 1.629zm3.739.064h-2.101l.464-2.388h2.1l.252-1.299H9.78l.464-2.388h-1.484L7.311 8.96h4.956l-.252 1.299H9.78l-.464 2.388h2.235l-.252 1.299z" />
              </svg>
            </div>
          ),
          bgColor: "bg-slate-800",
        },
        {
          name: "Python",
          logo: (
            <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05L0 11.97l.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05 1.07.13zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09-.33.22zM21.1 6.11l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08-.33.23z" />
              </svg>
            </div>
          ),
          bgColor: "bg-slate-800",
        },
        {
          name: "C",
          logo: (
            <div className="w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">C</span>
            </div>
          ),
          bgColor: "bg-slate-800",
        },
      ],
    },
    {
      title: "Databases & Tools",
      skills: [
        {
          name: "PostgreSQL",
          logo: <PostgreSQLLogo />,
          bgColor: "bg-slate-800",
        },
        {
          name: "MySQL",
          logo: <MySQLLogo />,
          bgColor: "bg-slate-800",
        },
        {
          name: "Git",
          logo: (
            <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.67-1.337-.396-1.983l-2.481-2.481v6.529c.176.088.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-1.985L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187" />
              </svg>
            </div>
          ),
          bgColor: "bg-slate-800",
        },
        {
          name: "GitHub",
          logo: (
            <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </div>
          ),
          bgColor: "bg-slate-800",
        },
        {
          name: "VS Code",
          logo: (
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .327 8.74L3.899 12 .327 15.26a1 1 0 0 0 0 1.479l1.322 1.202a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z" />
              </svg>
            </div>
          ),
          bgColor: "bg-slate-800",
        },
        {
          name: "IntelliJ IDEA",
          logo: (
            <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xs">IJ</span>
            </div>
          ),
          bgColor: "bg-slate-800",
        },
        {
          name: "WebStorm",
          logo: (
            <div className="w-10 h-10 bg-cyan-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xs">WS</span>
            </div>
          ),
          bgColor: "bg-slate-800",
        },
        {
          name: "PyCharm",
          logo: (
            <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xs">PC</span>
            </div>
          ),
          bgColor: "bg-slate-800",
        },
      ],
    },
  ];

  const methodologies = [
    { name: "MVC Architecture", logo: "🏗️" },
    { name: "Scrum/Agile", logo: "🔄" },
    { name: "UML", logo: "📊" },
    { name: "Merise", logo: "📈" },
    { name: "Trello", logo: "📋" },
    { name: "shadcn/ui", logo: "🎨" },
  ];

  return (
    <section id="skills" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Skills & Technologies
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-violet-500 to-purple-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Technologies and tools I work with to bring ideas to life.
            </p>
          </motion.div>

          {/* Skills Categories */}
          <div className="space-y-12">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                variants={itemVariants}
                className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700"
              >
                <h3 className="text-2xl font-semibold text-white mb-6 text-center">
                  {category.title}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                  {category.skills.map((skill, index) => {
                    const itemId = `${categoryIndex}-${index}`;
                    const isAnimated = animatedItems.has(itemId);

                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30, scale: 0.8 }}
                        animate={
                          isInView
                            ? {
                                opacity: 1,
                                y: 0,
                                scale: 1,
                              }
                            : {}
                        }
                        transition={{
                          delay: categoryIndex * 0.2 + index * 0.1,
                          duration: 0.6,
                          ease: "easeOut",
                        }}
                        onAnimationComplete={() =>
                          handleAnimationComplete(itemId)
                        }
                        whileHover={{
                          scale: 1.05,
                          y: -5,
                          transition: { duration: 0.2 },
                        }}
                        className="group cursor-default"
                      >
                        <div
                          className={`relative ${skill.bgColor} rounded-xl p-6 h-full flex flex-col items-center justify-center text-center border border-slate-600 group-hover:border-violet-500/50 transition-all duration-300 shadow-lg group-hover:shadow-violet-500/20`}
                        >
                          {/* Technology Logo */}
                          <motion.div
                            className="mb-3"
                            style={{
                              clipPath: isAnimated
                                ? "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
                                : "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
                            }}
                            transition={{
                              delay: categoryIndex * 0.2 + index * 0.1 + 0.8,
                              duration: 0.6,
                              ease: "easeInOut",
                            }}
                          >
                            {skill.logo}
                          </motion.div>

                          {/* Technology Name */}
                          <span className="text-white text-sm font-medium group-hover:text-violet-300 transition-colors duration-300">
                            {skill.name}
                          </span>

                          {/* Hover Glow Effect */}
                          <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-violet-500/10 to-purple-500/10" />
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Methodologies & Tools */}
          <motion.div variants={itemVariants} className="mt-16">
            <h3 className="text-2xl font-semibold text-white text-center mb-8">
              Methodologies & Practices
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {methodologies.map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 1 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-3 px-6 py-3 rounded-full bg-slate-800 border border-slate-600 hover:border-violet-500/50 text-white font-medium transition-all duration-200 cursor-default shadow-lg hover:shadow-violet-500/20"
                >
                  <span className="text-lg">{method.logo}</span>
                  <span>{method.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
