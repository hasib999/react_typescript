import React from 'react'
type DataFetchProps = {
    status:"loading"| "error" | "success"
}
const DataFetch = ({status}:DataFetchProps) => {
    if(status === "loading"){
        return <h2>Data Is Loading...</h2>
    }
    else if(status === "error"){
        return <h2>Error. Data Could Not Fetch</h2>
    }
  return (
    <div>
        <h2>Data Fetched Successfully</h2>
    </div>
  )
}

export default DataFetch