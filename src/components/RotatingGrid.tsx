"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

interface CardConfig {
  id: string;
  title: string;
  colStart: number;
  colEnd: number;
  rowStart: number;
  rowEnd: number;
  techName: string;
  techIcon: string;
  techBg: string;
  delay: number;
}

const cardsData: CardConfig[] = [
  // Row 1 & 2 Center - XL (2x2)
  {
    id: "xl-center",
    title: "Face Center",
    colStart: 3,
    colEnd: 5,
    rowStart: 1,
    rowEnd: 3,
    techName: "React.js",
    techIcon: "⚛️",
    techBg: "linear-gradient(135deg, rgba(219, 234, 254, 0.95), rgba(255, 255, 255, 0.95))",
    delay: 100,
  },
  // Row 2 & 3 Left - L (2x2)
  {
    id: "l-left",
    title: "Left Shoulder",
    colStart: 1,
    colEnd: 3,
    rowStart: 2,
    rowEnd: 4,
    techName: "JavaScript",
    techIcon: "JS",
    techBg: "linear-gradient(135deg, rgba(254, 240, 138, 0.95), rgba(255, 255, 255, 0.95))",
    delay: 40,
  },
  // Row 2 & 3 Right - L (2x2)
  {
    id: "l-right",
    title: "Right Shoulder",
    colStart: 5,
    colEnd: 7,
    rowStart: 2,
    rowEnd: 4,
    techName: "Node.js",
    techIcon: "🟢",
    techBg: "linear-gradient(135deg, rgba(209, 250, 229, 0.95), rgba(255, 255, 255, 0.95))",
    delay: 160,
  },
  // Row 1 Mediums (1x1)
  {
    id: "m-row1-col1",
    title: "Top Left 1",
    colStart: 1,
    colEnd: 2,
    rowStart: 1,
    rowEnd: 2,
    techName: "HTML5",
    techIcon: "HTML",
    techBg: "linear-gradient(135deg, rgba(254, 215, 170, 0.95), rgba(255, 255, 255, 0.95))",
    delay: 0,
  },
  {
    id: "m-row1-col2",
    title: "Top Left 2",
    colStart: 2,
    colEnd: 3,
    rowStart: 1,
    rowEnd: 2,
    techName: "CSS3",
    techIcon: "CSS",
    techBg: "linear-gradient(135deg, rgba(219, 234, 254, 0.95), rgba(255, 255, 255, 0.95))",
    delay: 50,
  },
  {
    id: "m-row1-col5",
    title: "Top Right 1",
    colStart: 5,
    colEnd: 6,
    rowStart: 1,
    rowEnd: 2,
    techName: "Tailwind CSS",
    techIcon: "🎨",
    techBg: "linear-gradient(135deg, rgba(204, 251, 241, 0.95), rgba(255, 255, 255, 0.95))",
    delay: 150,
  },
  {
    id: "m-row1-col6",
    title: "Top Right 2",
    colStart: 6,
    colEnd: 7,
    rowStart: 1,
    rowEnd: 2,
    techName: "Python",
    techIcon: "🐍",
    techBg: "linear-gradient(135deg, rgba(243, 232, 255, 0.95), rgba(255, 255, 255, 0.95))",
    delay: 200,
  },
  // Row 3 Smalls (1x1)
  {
    id: "s-row3-col3",
    title: "Mid Center Left",
    colStart: 3,
    colEnd: 4,
    rowStart: 3,
    rowEnd: 4,
    techName: "ESP32",
    techIcon: "📟",
    techBg: "linear-gradient(135deg, rgba(254, 226, 226, 0.95), rgba(255, 255, 255, 0.95))",
    delay: 110,
  },
  {
    id: "s-row3-col4",
    title: "Mid Center Right",
    colStart: 4,
    colEnd: 5,
    rowStart: 3,
    rowEnd: 4,
    techName: "Arduino",
    techIcon: "∞",
    techBg: "linear-gradient(135deg, rgba(204, 251, 241, 0.95), rgba(255, 255, 255, 0.95))",
    delay: 130,
  },
  // Row 4 Smalls (1x1)
  {
    id: "s-row4-col1",
    title: "Bottom Col 1",
    colStart: 1,
    colEnd: 2,
    rowStart: 4,
    rowEnd: 5,
    techName: "Express.js",
    techIcon: "ex",
    techBg: "linear-gradient(135deg, rgba(241, 245, 249, 0.95), rgba(255, 255, 255, 0.95))",
    delay: 200,
  },
  {
    id: "s-row4-col2",
    title: "Bottom Col 2",
    colStart: 2,
    colEnd: 3,
    rowStart: 4,
    rowEnd: 5,
    techName: "MongoDB",
    techIcon: "🍃",
    techBg: "linear-gradient(135deg, rgba(209, 250, 229, 0.95), rgba(255, 255, 255, 0.95))",
    delay: 240,
  },
  {
    id: "s-row4-col3",
    title: "Bottom Col 3",
    colStart: 3,
    colEnd: 4,
    rowStart: 4,
    rowEnd: 5,
    techName: "Firebase",
    techIcon: "🔥",
    techBg: "linear-gradient(135deg, rgba(254, 243, 199, 0.95), rgba(255, 255, 255, 0.95))",
    delay: 280,
  },
  {
    id: "s-row4-col4",
    title: "Bottom Col 4",
    colStart: 4,
    colEnd: 5,
    rowStart: 4,
    rowEnd: 5,
    techName: "Git",
    techIcon: "🔗",
    techBg: "linear-gradient(135deg, rgba(254, 226, 226, 0.95), rgba(255, 255, 255, 0.95))",
    delay: 320,
  },
  {
    id: "s-row4-col5",
    title: "Bottom Col 5",
    colStart: 5,
    colEnd: 7,
    rowStart: 4,
    rowEnd: 5,
    techName: "GitHub",
    techIcon: "🐙",
    techBg: "linear-gradient(135deg, rgba(241, 245, 249, 0.95), rgba(255, 255, 255, 0.95))",
    delay: 360,
  },
];

interface CardProps {
  card: CardConfig;
  gridWidth: number;
  colWidth: number;
  rowHeight: number;
  gap: number;
  imageUrl: string;
}

const RotatingCard: React.FC<CardProps> = ({
  card,
  gridWidth,
  colWidth,
  rowHeight,
  gap,
  imageUrl,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  // Calculate pixel coordinates for this card
  const x = (card.colStart - 1) * (colWidth + gap);
  const y = (card.rowStart - 1) * (rowHeight + gap);
  const width = (card.colEnd - card.colStart) * colWidth + (card.colEnd - card.colStart - 1) * gap;
  const height = (card.rowEnd - card.rowStart) * rowHeight + (card.rowEnd - card.rowStart - 1) * gap;

  const gridHeight = 4 * rowHeight + 3 * gap;
  // We want the background image to "cover" the container.
  // The user's portrait is square (1:1 aspect ratio).
  // Since gridHeight (430px) > gridWidth (410px), the background image size must match gridHeight.
  const bgSize = gridHeight;
  const offsetX = (gridWidth - bgSize) / 2; // Centers the photo horizontally (-10px)
  const offsetY = 0; // Align to the very top to keep the head fully visible
  const bgPosX = -x + offsetX;
  const bgPosY = -y + offsetY;

  return (
    <div
      className="absolute perspective-1000 cursor-pointer"
      style={{
        left: `${x}px`,
        top: `${y}px`,
        width: `${width}px`,
        height: `${height}px`,
      }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className="relative w-full h-full preserve-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ type: "spring", stiffness: 120, damping: 14 }}
      >
        {/* Front Side: Portrait Image Segment */}
        <div
          className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden shadow-sm border border-white/30"
          style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: `${bgSize}px ${bgSize}px`,
            backgroundPosition: `${bgPosX}px ${bgPosY}px`,
            backgroundRepeat: "no-repeat",
          }}
        />

        {/* Back Side: Tech Info */}
        <div
          className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden flex flex-col items-center justify-center p-3 text-slate-800 border border-white/50 shadow-md"
          style={{
            background: card.techBg,
            transform: "rotateY(180deg)",
          }}
        >
          <span
            className={`${
              card.colEnd - card.colStart > 1 ? "text-4xl" : "text-2xl"
            } select-none`}
          >
            {card.techIcon}
          </span>
          <span
            className={`font-semibold text-slate-800 mt-2 select-none text-center ${
              card.colEnd - card.colStart > 1 ? "text-sm tracking-wide" : "text-[10px]"
            }`}
          >
            {card.techName}
          </span>
        </div>
      </motion.div>
    </div>
  );
};

export const RotatingGrid: React.FC = () => {
  const gridWidth = 410;
  const gridHeight = 430;
  const colWidth = 60;
  const rowHeight = 100;
  const gap = 10;
  const imageUrl = "/portrait.jpg";

  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const width = entry.contentRect.width || entry.target.clientWidth;
        if (width > 0) {
          setScale(width / gridWidth);
        }
      }
    });
    observer.observe(containerRef.current);

    if (containerRef.current.clientWidth > 0) {
      setScale(containerRef.current.clientWidth / gridWidth);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full max-w-[410px] relative overflow-visible select-none"
      style={{
        height: `${gridHeight * scale}px`,
      }}
    >
      <div
        className="absolute origin-top-left"
        style={{
          width: `${gridWidth}px`,
          height: `${gridHeight}px`,
          transform: `scale(${scale})`,
        }}
      >
        {cardsData.map((card) => (
          <RotatingCard
            key={card.id}
            card={card}
            gridWidth={gridWidth}
            colWidth={colWidth}
            rowHeight={rowHeight}
            gap={gap}
            imageUrl={imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default RotatingGrid;
