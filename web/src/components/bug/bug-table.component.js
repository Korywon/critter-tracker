import { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

function buildRows(bugs) {
  return bugs.map((currBug, index) => {
    return (
      <tr key={`${index+currBug.number+currBug.name}`}>
        <td>{currBug.number}</td>
        <td className="text-center">
          <img
            width={50}
            height={50}
            className="mr-3"
            src={currBug.image}
            alt={`${currBug.name}+`}
          />
          <br />
          {currBug.name}
        </td>
        <td></td>
        <td></td>
        <td>{currBug.location}</td>
        <td>{currBug.weather}</td>
        <td>
          <img
            width={25}
            height={25}
            className="mr-3"
            src={'/image/bell_bag.png'}
            alt="bell_bag"
          />
          {currBug.price}
        </td>
        <td>{currBug.time}</td>
      </tr>
    );
  });
}

export default function BugTable() {
  const [bugs, setBugs] = useState([]);

  useEffect(() => {
    fetch('/data/bug.json')
      .then(response => response.json())
      .then(data => setBugs(data))
  }, []);

  return (
    <>
      <Table striped bordered responsive hover size="sm">
        <thead className="thead-dark">
          <tr>
            <th width={1}>#</th>
            <th width={220}>Name</th>
            <th width={160}>Status</th>
            <th>Months</th>
            <th width={1}>Location</th>
            <th width={1}>Weather</th>
            <th width={100}>Price</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {buildRows(bugs)}
        </tbody>
      </Table>
    </>
  );
}