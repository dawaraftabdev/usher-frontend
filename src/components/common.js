import HeaderComponent from './header'
import HeaderColumnComponent from './header/headerColumn'

import BodyComponent from './body'
import BodyColumnComponent from './body/bodyColumn'

import SocialLoginsComponent from './socialLogins'
import FooterComponent from './footer'
import FooterRightComponent from './footer/footerRight'
import FooterLeftComponent from './footer/footerLeft'

import TextComponent from './text'
import UserWelcomeTextComponent from './userWelcomeText'
import HeadingComponent from './heading'
import FormComponent from './form'
import LogoComponent from './logo'
import AddressComponent from './address'
import LinksComponent from './links'
import DescriptorsComponent from './descriptors'
import InputFieldComponent from './inputField'
import ButtonsComponent from './buttons'
import SocialButtonComponent from './socialButton'

import StepsComponent from './steps'
import StepComponent from './steps/step'
import DatePickerComponent from './datePicker'

export const ALL_COMPONENTS = {
  header: HeaderComponent,
  body: BodyComponent,
  footer: FooterComponent,
  text: TextComponent,
  userWelcomeText: UserWelcomeTextComponent,
  heading: HeadingComponent,
  form: FormComponent,
  logo: LogoComponent,
  address: AddressComponent,
  footerLeft: FooterLeftComponent,
  footerRight: FooterRightComponent,
  descriptors: DescriptorsComponent,
  links: LinksComponent,
  inputField: InputFieldComponent,
  button: ButtonsComponent,
  headerLeft: HeaderColumnComponent,
  headerRight: HeaderColumnComponent,
  socialLogins: SocialLoginsComponent,
  socialButton: SocialButtonComponent,
  bodyColumn: BodyColumnComponent,
  steps: StepsComponent,
  step: StepComponent,
  datePicker: DatePickerComponent
}
