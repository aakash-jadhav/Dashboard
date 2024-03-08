import React, { useState } from "react"
import "./datatable.scss"
import { DataGrid } from "@mui/x-data-grid"
import { userColumns, userRows } from "../../datatablesource"
import { Link } from "react-router-dom"
function Datatable() {
  const [data, setData] = useState(userRows)

  const handleClick = (id) => {
    setData(data.filter((item) => item.id !== id))
  }

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleClick(params.row.id)}
            >
              Delete
            </div>
          </div>
        )
      },
    },
  ]
  return (
    <div className="datatable">
      <div className="dataTableTitle">
        Add new User
        <Link to="/users/new" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        className="datagrid"
      />
    </div>
  )
}

export default Datatable
