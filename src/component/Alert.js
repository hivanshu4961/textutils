import React from 'react'

export default function Alert(props) {
  return (
     props.Alert && 
     <div class={`alert alert-${props.Alert.type} alert-dismissible  fade show`} role="alert" style={{backgroundColor:'grey', color:'white'}}>
         <strong>{props.Alert.type}</strong>{props.Alert.msg}
    </div>
  )
}
