import React from 'react'
import { ALL_COMPONENTS } from '../../../common'
import { BodyQuestionnaireLeft } from '../../styles'

const QuestionnaireLeftComponent = props => {
  const componentMap = ALL_COMPONENTS
  return (
    <BodyQuestionnaireLeft>
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
    </BodyQuestionnaireLeft>
  )
}
export default QuestionnaireLeftComponent
