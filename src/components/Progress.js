import { useEffect, useState } from 'react';

export default function Progress({ progress }) {
  const [animatedValue, setAnimatedValue] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Intersection Observer to trigger animation when component comes into view
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          // Animate the progress bar
          const timer = setTimeout(() => {
            setAnimatedValue(progress.value);
          }, 200);
          return () => clearTimeout(timer);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById(`progress-${progress.label.replace(/\s+/g, '-').toLowerCase()}`);
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [progress.value, progress.label, isVisible]);

  // Determine skill level for color coding
  const getSkillLevel = (value) => {
    if (value >= 80) return 'expert';
    if (value >= 60) return 'experienced';
    if (value >= 40) return 'intermediate';
    return 'beginner';
  };

  const getSkillLevelText = (value) => {
    if (value >= 80) return 'Expert';
    if (value >= 60) return 'Experienced';
    if (value >= 40) return 'Intermediate';
    return 'Beginner';
  };

  const skillLevel = getSkillLevel(progress.value);
  const skillLevelText = getSkillLevelText(progress.value);

  return (
    <div
      className="mb-4 col-sm-6 col-lg-4"
      id={`progress-${progress.label.replace(/\s+/g, '-').toLowerCase()}`}
      role="listitem"
    >
      <div className="skill-item">
        <div className="skill-header mb-2">
          <label
            htmlFor={`progress-bar-${progress.label.replace(/\s+/g, '-').toLowerCase()}`}
            className="skill-label fw-semibold mb-1 d-block"
          >
            {progress.label}
          </label>
          <div className="skill-info d-flex justify-content-between align-items-center">
            <span className={`badge skill-level skill-level-${skillLevel}`}>
              {skillLevelText}
            </span>
            <span className="skill-percentage fw-bold">
              {animatedValue}%
            </span>
          </div>
        </div>
        <div
          className={`progress enhanced-progress skill-${skillLevel}`}
          role="progressbar"
          aria-label={`${progress.label} skill progress: ${progress.value}% - ${skillLevelText} level`}
          aria-valuenow={animatedValue}
          aria-valuemin="0"
          aria-valuemax="100"
          id={`progress-bar-${progress.label.replace(/\s+/g, '-').toLowerCase()}`}
        >
          <div
            className={`progress-bar progress-bar-${skillLevel} progress-bar-animated`}
            style={{
              width: `${animatedValue}%`,
              transition: 'width 1.5s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
          >
            <div className="progress-bar-shine"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
