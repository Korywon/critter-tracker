import { useState } from 'react';
import { Container } from 'react-bootstrap';
import BreadcrumbMenu from '../breadcrumb.component';
import ConfigDropdown from '../config-dropdown.component';

import FishTable from './fish-table.component';

function FishList() {
  const [hemisphere, setHemisphere] = useState('north');
  const [timeFormat, setTimeFormat] = useState(12);

  return (
    <Container>
      <div className="text-center">
        <p>
          Fish list under construction!
        </p>
      </div>
      <BreadcrumbMenu />
      <ConfigDropdown onHemisphereChange={setHemisphere} onTimeFormatChange={setTimeFormat} />
      <br />
      <FishTable config={{hemisphere: hemisphere, timeFormat: timeFormat}} />
    </Container>
  );
}

export default FishList;