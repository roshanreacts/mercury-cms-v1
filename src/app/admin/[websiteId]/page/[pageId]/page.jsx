import React from 'react'

const page = (props) => {
  const editPage = props.searchParams.edit?props.searchParams.edit:false;
  console.log(props.searchParams, "sgd");

  return (
    <div>
      <h1>Page Data of {props.params.pageId}</h1>
    </div>
  )
}

export default page
