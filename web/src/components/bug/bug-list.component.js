import BugTable from './bug-table.component'

import { Container } from 'react-bootstrap';

export default function BugList() {
  return (
    <Container>
      <div className="text-center">
        This will be the bug list in the future.
      </div>
      <BugTable />
    </Container>
  );
}