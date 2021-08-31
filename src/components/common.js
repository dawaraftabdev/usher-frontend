import HeaderComponent from './header'
import HeaderColumnComponent from './header/headerColumn'

import BodyComponent from './body'
import BodyColumnComponent from './body/bodyColumn'

import { Box } from '@theguarantors/ui-kit-v3'

import QuestionnaireComponent from './body/questionnaire'
import QuestionnaireRightComponent from './body/questionnaire/questionnaireRight'
import QuestionnaireLeftComponent from './body/questionnaire/questionnaireLeft'

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
import CheckboxComponent from './checkbox'
import RadioComponent from './radio'
import FacebookButtonComponent from './socialButton/buttons/facebook'
import GoogleButtonComponent from './socialButton/buttons/google'

import StepsDotsComponent from './steps/stepDots'
import StepDotComponent from './steps/stepDots/stepDot'

import MapComponent from './map'
import ScrollableAreaComponent from './scrollableArea'

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
  datePicker: DatePickerComponent,
  checkbox: CheckboxComponent,
  radio: RadioComponent,
  facebookButton: FacebookButtonComponent,
  googleButton: GoogleButtonComponent,
  questionnaire: QuestionnaireComponent,
  questionnaireLeft: QuestionnaireLeftComponent,
  questionnaireRight: QuestionnaireRightComponent,
  stepDots: StepsDotsComponent,
  stepDot: StepDotComponent,
  map: MapComponent,
  scrollableArea: ScrollableAreaComponent,
  box: Box
}
