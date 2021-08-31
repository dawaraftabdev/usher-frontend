import styled from 'styled-components'
import footerDecoration from '../../images/footer__bg.png'

export const Footer = styled.footer`
background-image: url('${footerDecoration}');
background-repeat: no-repeat;
background-size: cover;
  padding: 7% 30px 30px;
  background-position: 50% 0%;
`
export const FooterRow = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: end;
  -ms-flex-align: end;
  align-items: flex-end;
`
export const FooterLeft = styled.div``
export const FooterRight = styled.div`
  align-self: flex-end;
  padding-bottom: 2.5vh;
`
