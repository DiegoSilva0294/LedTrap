import classes from './BatteryIcon.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const BatteryIcon = ({ percentage }) => {
  let batteryIcon;

  if (percentage === 0) {
    batteryIcon = 'battery-empty';
  } else if (percentage <= 25) {
    batteryIcon = 'battery-quarter';
  } else if (percentage <= 50) {
    batteryIcon = 'battery-half';
  } else if (percentage <= 75) {
    batteryIcon = 'battery-three-quarters';
  } else {
    batteryIcon = 'battery-full';
  }

  return (
    <div className={classes.batteryIcon}>
      <FontAwesomeIcon icon={`fas fa-${batteryIcon}`} className={classes.batteryIcono} />
      <span className={classes.batteryLetter}>{percentage}%</span>
    </div>
  );
};

export default BatteryIcon;