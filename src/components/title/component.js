import React from 'react'

const TitleComponent = props => {
  const { date, title } = props
  return (
    <div>
      <h6 className={date.className}>{date.label}</h6>
      <h1 className={title.className}>{title.label}</h1>
    </div>
  )
}

export default TitleComponent
