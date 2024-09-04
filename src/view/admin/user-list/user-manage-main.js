import { useSearchParams } from "react-router-dom";
import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid
import { useState } from "react";

function UserManageMain () {
  const [searchParams, setSearchParams] = useSearchParams();
  // const titleName = searchParams.has("userName") ? searchParams.get("userName") : '제목이 없어요';
  const pTagValue = <p>{searchParams.get('userName')}</p>;
   // Row Data: The data to be displayed.
 const [rowData, setRowData] = useState([
  { userId: "kdh01", userName: "김다훈", userEmail: 'kdh1@naver.com', userPhone: '010-1234-5555' },
  { userId: "kdh02", userName: "다훈킴", userEmail: 'kdh3@naver.com', userPhone: '010-1234-5555' },
  { userId: "dmh01", userName: "킴다훈", userEmail: 'kdh2@naver.com', userPhone: '010-1234-5555' },
]);

// Column Definitions: Defines the columns to be displayed.
const [colDefs, setColDefs] = useState([
  { field: "userId" },
  { field: "userName" },
  { field: "userEmail" },
  { field: "userPhone" }
]);

    return (


        <div className="user-manage-main">
          <div >
          <div>
            {pTagValue}
          </div>
          <div
            className="ag-theme-quartz" // applying the Data Grid theme
            style={{ height: 500 }} // the Data Grid will fill the size of the parent container
          >
            <AgGridReact
              rowData={rowData}
              columnDefs={colDefs}
            />
         </div>
         </div>
        </div>
        
    );

}

export default UserManageMain;