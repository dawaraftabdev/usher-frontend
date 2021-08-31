import React from 'react'
import { ALL_COMPONENTS } from '../../common'
import { BodyQuestionnaire } from '../styles'

const QuestionnaireComponent = props => {
  const componentMap = ALL_COMPONENTS
  return (
    <BodyQuestionnaire>
      {props &&
        props.components &&
        props.components.map((c, i) => {
          const Component = componentMap[c.type]
          const props = c.props
          if (!Component) {
            return null
          }
          return <Component {...props} key={c.id} />
        })}
    </BodyQuestionnaire>
  )
}
export default QuestionnaireComponent
