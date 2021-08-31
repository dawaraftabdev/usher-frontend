import styled from 'styled-components'
export const MainStepsBody = styled.div``
export const StepBody = styled.div``
export const StepsDots = styled.ul`
  position: absolute;
  right: -7px;
  list-style: none;
`
export const StepDot = styled.li`
  width: 12px;
  height: 12px;
  border-radius: 100%;
  background: ${({ complete }) => (complete ? '#3f3cec' : '#a6a6bf')};
  margin-bottom: 8px;
  cursor: pointer;
`
