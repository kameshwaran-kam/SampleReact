import React, { useEffect, useState } from 'react';

const List1 = () => {
  const [data, setData] = useState([]);   // to store fetched data
  const [loading, setLoading] = useState(true); // loading state
  const [error, setError] = useState(null);     // error state

  useEffect(() => {
    fetch('https://microsoftedge.github.io/Demos/json-dummy-data/64KB.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((jsonData) => {
        setData(jsonData);  // store data
        setLoading(false);  // stop loading
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []); // empty dependency array → runs once after mount

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Data List</h2>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            {/* Assuming each item has 'name' and 'id' fields, adjust based on actual JSON */}
            ID: {item.id}, Name: {item.name} , Language: {item.language}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List1;
