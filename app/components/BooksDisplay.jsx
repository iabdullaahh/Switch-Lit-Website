"use client"

import React, { useState, useEffect } from 'react';

function Library() {
  const [books, setBooks] = useState([]);
  const [sortBy, setSortBy] = useState('mostRecent');

  useEffect(() => {
    // Fetch the initial list of books (replace with your data source)
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await fetch('https://your-api-endpoint.com/books'); // Replace with your API endpoint
      const data = await response.json();
      setBooks(data);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  const handleSortByChange = (value) => {
    setSortBy(value);
  };

  const sortedBooks = sortBy === 'mostRecent'
    ? books.sort((a, b) => b.releaseDate - a.releaseDate)
    : books.sort((a, b) => b.wordCount - a.wordCount);

  return (
    <div className='pt-40'>
<div class="sort-bar flex justify-center items-center space-x-1">
<p className="text-gray-600 text-xs italic font-bold uppercase ">sort by: </p>
  <button class=" text-sm font-bold tracking-tight text-gray-600 px-2 py-1 rounded-full border border-gray-300 hover:border-green-900 hover:bg-[#31E992] focus:outline-none" onclick="sortBy('mostRecent')">Most Recent</button>
  <button class=" text-sm font-bold tracking-tight text-gray-600 px-2 py-1 rounded-full border border-gray-300 hover:border-green-900 hover:bg-[#31E992] focus:outline-none" onclick="sortBy('wordCount')">Word Count</button>
</div>
      <table className='mt-10 mb-40'>
        <thead className=''>
 
          <tr className=' text-gray-600 italic uppercase flex  gap-80  font-semibold text-xs px-10 '>
            <th className='border-gray-600 border-b-[1px]'>Authors</th>
            <th className='border-gray-600 border-b-[1px]'>Title</ th>
            <th className='border-gray-600 border-b-[1px]'>Word Count</th>
            <th className='border-gray-600 border-b-[1px]'>Release Date</th>
            
          </tr>
        </thead>
        <tbody>
          {sortedBooks.map((book) => (
            <tr key={book.id}>
              <td>{book.authors}</td>
              <td>{book.title}</td>
              <td>{book.wordCount}</td>
              <td>{book.releaseDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Library;