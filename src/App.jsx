import React, { useState, useEffect } from 'react';
import DataDisplay from './DataDisplay';

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchData() {
    try {
      setIsLoading(true);
      let response = await fetch('https://jsonplaceholder.typicode.com/posts');
      let finalResponse = await response.json();
      setData(finalResponse);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    // fetchData();
    console.log('Data:', data);
    console.log('Is Loading:', isLoading);
    console.log('Error:', error);
  },  [data, isLoading, error]); 

  return (
    <>
      <div className='flex justify-center mt-4 '>
        <button onClick={fetchData} className='p-4 bg-green-400 rounded '>Display Data</button>
      </div>
      <DataDisplay data={data} />
    </>
  );
}

export default App;
