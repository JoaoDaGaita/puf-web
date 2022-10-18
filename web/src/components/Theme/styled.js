const theme = prop => value => props => props.theme[prop][value] || value

export const th = {
  space: theme('spaces'),
  size: theme('fontSizes'),
  color: theme('colors'),
}
export const display = props => props.display && `display: ${props.display}`

export const flexbox = props => {
  const direction =
    typeof props.flexbox === Boolean ? props.flexDirection : props.flexbox

  const justifyContent = props.justifyContent || (props.center && 'center')
  const alignItems = props.alignItems || (props.center && 'center')

  return `
    ${(props.flexbox && 'display: flex;') || ''}
    ${(direction && `flex-direction: ${direction};`) || ''}
    ${(props.flex && `flex: ${props.flex};`) || ''}
    ${(justifyContent && `justify-content: ${justifyContent};`) || ''}
    ${(alignItems && `align-items: ${alignItems};`) || ''}
  `
}
export const background = props =>
  props.bg && `background: ${props.theme.colors[props.bg]};`

export const color = props =>
  props.color && `color: ${props.theme.colors[props.color] || props.color};`

export const fontSize = props =>
  props.fontSize && `font-size: ${props.theme.fontSizes[props.fontSize]};`

export const margin = props => {
  const mb = props.mb || props.mx || props.m || ''
  const mt = props.mt || props.mx || props.m || ''
  const ml = props.ml || props.mx || props.m || ''
  const mr = props.mr || props.mx || props.m || ''

  return `
  ${mb && `margin-bottom: ${props.theme.spaces[mb]}px;`}
  ${mt && `margin-top: ${props.theme.spaces[mt]}px;`}
  ${ml && `margin-left: ${props.theme.spaces[ml]}px;`}
  ${mr && `margin-right: ${props.theme.spaces[mr]}px;`}
  `
}

export const padding = props => {
  const pb = props.pb || props.px || props.p || ''
  const pt = props.pt || props.px || props.p || ''
  const pl = props.pl || props.px || props.p || ''
  const pr = props.pr || props.px || props.p || ''

  return `
  ${pb && `margin-bottom: ${props.theme.spaces[pb]}px;`}
  ${pt && `margin-top: ${props.theme.spaces[pt]}px;`}
  ${pl && `margin-left: ${props.theme.spaces[pl]}px;`}
  ${pr && `margin-right: ${props.theme.spaces[pr]}px;`}
  `
}
