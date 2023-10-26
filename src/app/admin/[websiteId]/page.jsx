import React from 'react'

const page = (props) => {
    console.log(props, "dgsads");
  return (
    <div>
      <h1>Website and its pages {props?.params.websiteId}</h1>
    </div>
  )
}

export default page
