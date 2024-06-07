import React from 'react'
import Button from './Button'
const Form = ({reqType,setReqType}) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
        <Button 
            buttonText="Users"
            setReqType={setReqType}
             reqType={reqType}/>
        <Button 
            buttonText="posts"
            setReqType={setReqType}
             reqType={reqType}/>
        <Button 
            buttonText="comments"
            setReqType={setReqType}
             reqType={reqType}/>


    </form>
  )
}

export default Form