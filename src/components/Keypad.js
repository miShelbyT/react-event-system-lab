import React from 'react'

class Keypad extends React.Component {

  enter = () => console.log('Entering password...')

render (){
  return (
    <input onKeyUp={this.enter} type="password" />
  )
  }

}



export default Keypad
