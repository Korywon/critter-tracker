import { Badge } from 'react-bootstrap';

/**
 * This class is used to generate badges based on the status that is passed in.
 */
function StatusBadges({id, status}) {
  let badges = [];

  /*
    * Badges for new, available, soon, or unavailable.
    */
  if (status.new && new Date().getDay() < 8) {
    badges.push(
      <span key={id + '-statusBadge-new'}>
        <Badge pill variant="primary">new</Badge>&nbsp;
      </span>
    );
  } else if (status.available) {
    badges.push(
      <span key={id + '-statusBadge-available'}>
        <Badge pill variant="success">available</Badge>&nbsp;
      </span>
    );
  } else if(status.soon) {
    badges.push(
      <span key={id + '-statusBadge-info'}>
        <Badge pill variant="info">next month</Badge>&nbsp;
      </span>
    );
  } else {
    badges.push(
      <span key={id + '-statusBadge-unavailable'}>
        <Badge pill variant="secondary">unavailable</Badge>&nbsp;
      </span>
    );
  }

  /*
    * If this is the last month to catch the fish.
    */
  if (status.lastMonth) {
    badges.push(
      <span key={id + '-statusBadge-lastMonth'}>
        <Badge pill variant="danger">last month</Badge>&nbsp;
      </span>
    );
  }

  /*
    * If this is the last hour to catch the fish.
    */
  if (status.lastHour) {
    badges.push(
      <span key={id + 'statusBadge-lastHour'}>
        <Badge pill variant="warning">last hour</Badge>&nbsp;
      </span>
    );
  }

  return(badges);
}

export default StatusBadges;
