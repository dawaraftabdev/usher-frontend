import React from 'react'
import { ALL_COMPONENTS } from '../../../common'
import { BodyQuestionnaireRight } from '../../styles'

const QuestionnaireRightComponent = props => {
  const componentMap = ALL_COMPONENTS
  return (
    <BodyQuestionnaireRight>
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
    </BodyQuestionnaireRight>
  )
}
export default QuestionnaireRightComponent
