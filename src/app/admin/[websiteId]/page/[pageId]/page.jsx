import React from 'react'
import { getTodos } from '~/app/actions';

const Page =async (props) => {
  const editPage = props.searchParams.edit?props.searchParams.edit:false;
  console.log(props.searchParams, "sgd");
  // const data = await getTodos();
  // console.log(data, "data");
  return (
    <div>
      <h1>Page Data of {props.params.pageId}</h1>
    </div>
  )
}

export default Page
