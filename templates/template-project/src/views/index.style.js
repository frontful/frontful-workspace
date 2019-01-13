import {style} from 'frontful-style'

export default style(({css}) => {
  css('html', {
    fontSize: '10px'
  })

  css('html, body', {
    height: '100%',
    minHeight: '100%',
  })

  css('body', {
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '1.4rem',
    fontWeight: '400',
    color: '#555555',
    backgroundColor: '#EDEDED',
  })

  css('input, textarea, select', {
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '1.4rem',
    fontWeight: '400',
    color: '#555555',
    outline: 'none',
  })

  css('*, ::after, ::before', {
    boxSizing: 'border-box',
  })

  css('input::-ms-clear', {
    display: 'none',
  })

  css('input[type="text"]', {
    WebkitAppearance: 'none',
    MozAppearance: 'none',
    appearance: 'none',
    boxShadow: 'none',
  })

  css('svg', {
    verticalAlign: 'middle',
  })

  css('#app', {
    minHeight: '100%',
    display: 'flex',
    flexDirection: 'column',
  })
})
