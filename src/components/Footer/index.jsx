import React, {useState, useMemo} from "react";
import data from "../../data/mock-data.json";

let PageSize = 4;

export default function Footer () {

  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  return (
  <footer >
    <div>
     {/*<Pagination className="pagination-bar"
        currentPage={currentPage}
        totalCount={data.length}
        pageSize={PageSize}
        onPageChange={page => setCurrentPage(page)}/>
        */} 
    
    </div>
  </footer>
  );
  }
