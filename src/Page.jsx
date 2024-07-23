import Pagination from "@mui/material/Pagination";
import { useState } from "react";

export default function Page() {
  const employees = [
    { id: 2, name: "Bob", country: "Belgium" },
    { id: 3, name: "Carl", country: "Canada" },
    { id: 1, name: "Alice", country: "Austria" },
    { id: 2, name: "Mike", country: "USA" },
    { id: 3, name: "Sam", country: "India" },
    { id: 1, name: "Jake", country: "Japan" },
  ];
  const [emp] = useState(employees);
  const rowsPerPage = 3;
  const [page, setPage] = useState(1);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const sortedData = [...emp].sort((a, b) => (a.name > b.name ? 1 : -1)); //for number use arr.sort((a, b) => a - b) and descending order (a.name > b.name ? -1 : 1)
  const startIndex = (page - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const displayedRows = sortedData.slice(startIndex, endIndex);

  return (
    <>
      <table>
        <thead>
          <th>ID</th>
          <th>Name</th>
          <th>Country</th>
        </thead>
        {displayedRows.map((data, i) => (
          <tbody key={i}>
            <tr>
              <td>{data.id}</td>
              <td>{data.name}</td>
              <td>{data.country}</td>
            </tr>
          </tbody>
        ))}
      </table>
      <Pagination
        count={Math.ceil(emp.length / rowsPerPage)}
        color="primary"
        variant="outlined"
        page={page}
        onChange={handleChangePage}
      />
    </>
  );
}
