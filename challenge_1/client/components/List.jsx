import React from 'react';

const List = ({ events }) => {
  return (
    <div>
      <ul>
        {events.map((event, idx) =>
          <li key={idx}>
            {event.date}, {event.description}
          </li>
        )}
      </ul>
    </div>
  )
}

export default List;
