import React from 'react'

export default function Alert(props) {
  return (
    <div style={{height: '50px'}}>
     {props.Alert && 
     <div class={`alert alert-${props.Alert.type} alert-dismissible  fade show`} role="alert" style={{backgroundColor:'#BEE3BA', color:'black'}}>
         <strong>{props.Alert.type}</strong>{props.Alert.msg}
    </div>}
    </div>
  )
}
