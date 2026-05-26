import type { Category } from '@/types'

import logo from './images/logo.png'
import header from './images/header.png'
import hofladenInfo from './images/hofladen-info.png'
import aboutPic from './images/about-pic.jpg'
import pinIcon from './images/pin-icon.png'
import callIcon from './images/call-icon.png'
import emailIcon from './images/email-icon.png'
import aboutHeaderTop from './images/about-header-top.png'
import background from './images/background.jpg'
import bannerBackground from './images/banner-background.png'
import discountBg from './images/discount_bg.png'
import underline from './images/underline.png'
import checkIcon from './images/check-icon.png'

import checkmark from './svg/checkmark.svg'
import gearIcon from './svg/gear-icon.svg'

import fleischSvg from './svg/categories/fleisch.svg'
import wurstSvg from './svg/categories/wurst.svg'
import eierSvg from './svg/categories/eier.svg'
import obstSvg from './svg/categories/obst.svg'
import getraenkSvg from './svg/categories/getraenk.svg'
import aufstrichSvg from './svg/categories/aufstrich.svg'
import geschenkSvg from './svg/categories/geschenk.svg'

export const categoryImages: Record<Category, string> = {
  fleisch: fleischSvg,
  wurst: wurstSvg,
  eier: eierSvg,
  obst: obstSvg,
  getraenk: getraenkSvg,
  aufstrich: aufstrichSvg,
  geschenk: geschenkSvg,
}

export const images = {
  logo,
  header,
  hofladenInfo,
  aboutPic,
  pinIcon,
  callIcon,
  emailIcon,
  aboutHeaderTop,
  background,
  bannerBackground,
  discountBg,
  underline,
  checkIcon,
  checkmark,
  gearIcon,
}
