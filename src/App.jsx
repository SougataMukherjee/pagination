import { useState, useEffect, useMemo } from "react";
import Page from "./Page";

const App = () => {
  //or in useEffect  fetch and set data
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Ayesha",
      body: "Ahmed",
    },
    {
      id: 2,
      title: "Sam",
      body: "Ahmed",
    },
    {
      id: 3,
      title: "Poo",
      body: "Ahmed",
    },
    {
      id: 4,
      title: "Ram",
      body: "Ahmed",
    },
  ]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 2;

  const getCurrentPosts = () => {
    //first render curr=1,perPage=2,so startIndex=(1-1)*2=0,endIndex=0+2=2,slice(0,2) so 2objs.map()
    //at the time of 2nd button click startIndex=(2-1)*2=2,endIndex=2+2=4  slice(2,4)
    const startIndex = (currentPage - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    return posts.slice(startIndex, endIndex);
  };

  const getPageNumbers = () => {
    //totalPage=(4/2)=2, so in forloop push(1 and 2)
    const totalPages = Math.ceil(posts.length / postsPerPage);
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  return (
    <div>
      <h1>Emp List</h1>
      <ul>
        {getCurrentPosts().map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <div>
        {getPageNumbers().map((number) => (
          <button key={number} onClick={() => setCurrentPage(number)}>
            {number}
          </button>
        ))}
      </div>
      <Page />
    </div>
  );
};

export default App;
