import { useEffect, useState } from "react";

type ProgressBarsProps = {
  values: number[];
};

export default function ProgressBars({ values }: ProgressBarsProps) {
  const [progress, setProgress] = useState<number[]>(values.map(() => 0));

  useEffect(() => {
    const timeout = setTimeout(() => {
      setProgress(values);
    }, 300); // задержка перед стартом анимации
    return () => clearTimeout(timeout);
  }, [values]);

  return (
    <div className="progress-wrapper">
      {progress.map((val, i) => (
        <div key={i} className="progress-container">
          <div className="progress-bar" style={{ width: `${val}%` }} />
          {/* <span className="progress-label">{val}%</span> */}
        </div>
      ))}
    </div>
  );
}
