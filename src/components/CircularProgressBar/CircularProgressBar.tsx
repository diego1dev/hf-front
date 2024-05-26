/* eslint-disable react/require-default-props */
import './CircularProgressBar.css';

interface CircularProgressBarProps {
  size ?: number,
  progress ?: number,
  trackWidth ?: number,
  trackColor ?: string,
  indicatorWidth ?: number,
  indicatorColor ?: string,
  indicatorCap ?: 'inherit' | 'round' | 'butt' | 'square' | undefined,
  label ?: string,
  labelColor ?: string,
  spinnerMode ?: boolean,
  value?:string
}
function CircularProgressBar(props:CircularProgressBarProps) {
  const {
    size = 120,
    progress = 60,
    trackWidth = 1,
    trackColor = '#ddd',
    indicatorWidth = 7,
    indicatorColor = 'black',
    indicatorCap = 'round',
    label = 'Loading...',
    labelColor = '#333',
    spinnerMode = false,
    value,
  } = props;

  const center = size / 2;
  const radius = center - (trackWidth > indicatorWidth ? trackWidth : indicatorWidth);
  const dashArray = 2 * Math.PI * radius;
  const dashOffset = dashArray * ((100 - progress) / 100);

  const hideLabel = !!((size < 100 || !label.length || spinnerMode));

  return (
    <div
      className="svg-pi-wrapper"
      style={{ width: size, height: size }}
    >
      <svg
        className="svg-pi"
        style={{ width: size, height: size }}
      >
        <circle
          className="svg-pi-track"
          cx={center}
          cy={center}
          fill="transparent"
          r={radius}
          stroke={trackColor}
          strokeWidth={trackWidth}
        />
        <circle
          className={`svg-pi-indicator ${
            spinnerMode ? 'svg-pi-indicator--spinner' : ''
          }`}
          cx={center}
          cy={center}
          fill="transparent"
          r={radius}
          stroke={indicatorColor}
          strokeWidth={indicatorWidth}
          strokeDasharray={dashArray}
          strokeDashoffset={dashOffset}
          strokeLinecap={indicatorCap}
        />
      </svg>

      {!hideLabel && (
      <div
        className="svg-pi-label"
        style={{ color: labelColor }}
      >
        {!spinnerMode && (
        <span className="svg-pi-label__progress">
          {value ?? `${
            progress > 100 ? 100 : progress
          }%`}
        </span>
        )}
        <span className="svg-pi-label__loading">
          {label}
        </span>
      </div>
      )}
    </div>
  );
}

export default CircularProgressBar;
