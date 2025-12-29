import { useEffect, useState } from "react";

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
}

export const StarField = () => {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars: Star[] = [];
      for (let i = 0; i < 100; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 1,
          delay: Math.random() * 5,
          duration: Math.random() * 3 + 2,
        });
      }
      setStars(newStars);
    };
    generateStars();
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-star-white animate-twinkle"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`,
            boxShadow: `0 0 ${star.size * 2}px hsl(var(--star-white) / 0.5)`,
          }}
        />
      ))}
      {/* Floating planets */}
      <div 
        className="absolute w-16 h-16 rounded-full bg-gradient-to-br from-primary/40 to-nebula-pink/40 blur-sm animate-float"
        style={{ left: '10%', top: '20%', animationDelay: '0s' }}
      />
      <div 
        className="absolute w-24 h-24 rounded-full bg-gradient-to-br from-accent/30 to-nebula-blue/30 blur-md animate-float"
        style={{ left: '80%', top: '60%', animationDelay: '2s' }}
      />
      <div 
        className="absolute w-12 h-12 rounded-full bg-gradient-to-br from-star-gold/30 to-primary/30 blur-sm animate-float"
        style={{ left: '70%', top: '15%', animationDelay: '4s' }}
      />
    </div>
  );
};
