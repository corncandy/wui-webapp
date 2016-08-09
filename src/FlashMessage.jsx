import React from 'react'
// import classes from './FlashMessage.scss'
import successIcon from './FlashSuccessIcon.png'
import failIcon from './FlashFailIcon.png'
const classes = {}

export default class FlashMessage extends React.Component {
  componentDidUpdate (prevProps) {
    if (!prevProps.flash.show && this.props.flash.show) {
      clearTimeout(this.timer)
      this.timer = setTimeout(this.props.hideFlash, 2000)
    }
  }

  render () {
    const { show, success, title, message } = this.props.flash

    return (
      <div
        ref='flash-message'
        className={classes.locator + ' ' + (show ? '' : 'hidden')}
        style={{position: 'fixed', top: '60px', zIndex: 1060, width: '100%'}}>
        {
          success
            ? <div
              style={{
                position: 'relative',
                width: '360px',
                border: '1px solid #8dcdf3',
                borderRadius: '5px',
                boxShadow: '0 0 6px #279fe5',
                margin: '0 auto',
                background: '#FFFFFF',
                fontSize: '20px',
                color: '#279fe5',
                lineHeight: '60px',
                paddingLeft: '50px',
                overflow: 'hidden'
              }}
              className={classes['flash-message']}>
              <img src={successIcon} />
              {message}
            </div>
            : <div
              className={classes['flash-message'] + ' ' + classes.fail}>
              <img src={failIcon} />
              {message}
            </div>
        }
      </div>
    )
  }
}
