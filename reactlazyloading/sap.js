import React, { useEffect, useState } from 'react';

const URL = "https://jsonplaceholder.typicode.com/todos";

const Sap = () => {
  const [fdata, setfdata] = useState([]);
  const [showMore, setShowMore] = useState(false);

  const fetchUserData = async (url) => {
    try {
      const response = await fetch(url);
      const responseData = await response.json();
      setfdata(responseData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchUserData(URL);
  }, []);

  const handleLoadMore = () => {
    setShowMore(true);
  };

  return (
    <div>
      {fdata.slice(0, showMore ? fdata.length : 5).map((eachObj) => {
        const { userId, id, title } = eachObj;
        return (
          <ul key={id}>
            <li>UserID: {userId}</li>
            <li>Title: {title}</li>
            <li>ID: {id}</li>
          </ul>
        );
      })}
      {!showMore && <button onClick={handleLoadMore}>Load More</button>}
    </div>
  );
};

export default Sap;
