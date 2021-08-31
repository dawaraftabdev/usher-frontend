import styled, { css } from 'styled-components'
import { IMAGES } from '../../images'
export const MainBody = styled.div`
  padding: 0 32px;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  ${({ backgroundImage }) =>
    backgroundImage &&
    css`
      background-image: url("${IMAGES[backgroundImage]}");
      background-repeat: no-repeat;
      background-position: 100% 0;
    `}
`

export const BodyColumn = styled.div`
  max-width: 625px;
  margin: 0 auto;
  text-align: ${({ isCenterAligned }) =>
    isCenterAligned ? 'center' : 'normal'};
`

export const BodyQuestionnaire = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
`

export const BodyQuestionnaireLeft = styled.div`
  position: relative;
  -ms-flex-preferred-size: 60%;
  flex-basis: 60%;
  max-width: 60%;
  padding: 0 10%;
  border-right: 1px solid #ededf2;
`
export const BodyQuestionnaireRight = styled.div`
  -ms-flex-preferred-size: 40%;
  flex-basis: 40%;
  max-width: 40%;
  padding: 0 7%;
`
