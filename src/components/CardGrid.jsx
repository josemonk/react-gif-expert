import React from 'react'

const CardGrid = ({title,url,id}) => {
  return (
    <div className='card'>
        <img src={url} alt={title}/>
        <p>{ title } </p>
         </div>
  )
}

export default CardGrid