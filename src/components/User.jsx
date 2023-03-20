import React from 'react'

// using useParams for custom url where we use dynamic urls value when fetchingdata
// useNavigate is used for navigating page with current url = current url + new content
import { useNavigate, useParams } from 'react-router-dom'

const User = () => {
    const params = useParams();
    const navigation = useNavigate();

    console.log(params.mazaNaav)

  return (
    <div className='user'>
        {params.mazaNaav}
        <button onClick={()=> navigation("/about")}>Home</button>
        <button onClick={()=> navigation(-1)}>Go Back</button>
    </div>
  )
}

export default User