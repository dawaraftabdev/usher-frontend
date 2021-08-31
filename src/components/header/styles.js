import styled from 'styled-components'
import rightDecoration from '../../images/decoration.right.png'

export const Header = styled.header`
  padding: 0 32px;
  background-image: url('${rightDecoration}');
  background-position: 100% 0;
  background-repeat: no-repeat;
`
export const HeaderRow = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  height: 96px;
`
export const HeaderColumn = styled.div``
