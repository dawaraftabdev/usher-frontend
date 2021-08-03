import styled from 'styled-components'
import footerDecoration from '../../images/footer__bg.png'

export const Footer = styled.footer`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
`
export const FooterRow = styled.div`
  background-image: url('${footerDecoration}');
  background-repeat: no-repeat;
  background-position: 100% 0;
  padding: 0px 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 215px;
  background-size: contain;
`
export const FooterLeft = styled.div``
export const FooterRight = styled.div`
  align-self: flex-end;
  padding-bottom: 15px;
`
