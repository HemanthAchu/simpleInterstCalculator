
import { TextField,Button,Stack } from '@mui/material'
import './App.css'
import { useState } from 'react'

function App() {
const [interest,setinterest]=useState(0)
const [principle,setprinciple]=useState(0)
const [rate,setrate]=useState(0)
const [year,setyear]=useState(0)
const[validprinciple,setvalidprinciple]=useState(true)
const[validrate,setvalidrate]=useState(true)
const[validyear,setvalidyear]=useState(true)

const reset=()=>{
  setinterest(0)
  setprinciple(0)
  setrate(0)
  setyear(0)
  setvalidprinciple(true)
  setvalidrate(true)
  setvalidyear(true)
}
const handleCalculate=(e)=>{
e.preventDefault()
if (!principle||!rate||!year) {
  alert('please enter')
}else{
  setinterest(principle*rate*year/100)
}
}

  const validateUserInputs =(e)=>{
    const {name,value}=e.target
    console.log(`${name}, ${typeof value}`);
    console.log(!!value.match(/^[0-9]*.?[0-9]+$/));
    if (!!value.match(/^[0-9]*.?[0-9]+$/)) {
        if(name==='principle'){
          setprinciple(value)
          setvalidprinciple(true)
        }if (name==='rate') {
          setrate(value)
          setvalidrate(true)
        }if (name==='year') {
          setyear(value)
          setvalidyear(true)
        }
      }else{
        if(name==='principle'){
          setprinciple(value)
          setvalidprinciple(false)
        }if (name==='rate') {
          setrate(value)
          setvalidrate(false)
        }if (name==='year') {
          setyear(value)
          setvalidyear(false)
        }
    }
    
  }


  return (
    <div style={{width:'100%',height:'100vh'}} className='d-flex justify-content-center align-items-center bg-dark' >
      <div style={{width:'600px'}} className='bg-light p-5 rounded'><h1 style={{height:'55px'}}>simple intersted calculator</h1>
      <p>Calculate your simple interest easily</p>
      <div style={{width:'100%',height:'150px'}} className='d-flex justify-content-center align-items-center bg-warning mt-5 text-light shadow rounded flex-column'>
        <h1 style={{height:'55px'}}>₹{interest}</h1>
        <p className='fw-bolder'>total simple interest</p>
      </div>
      <form className="mt-5" onSubmit={handleCalculate}>
        <div className='mt-3'>
        <TextField id="outlined-basic-principle" label="principle" variant="outlined" className='w-100' name='principle' value={principle||""} onChange={e=>validateUserInputs(e)} />
        </div>
        { !validprinciple&&<div className='mb-3 text-danger fw-bolder'>Invalid User Input</div>}
       
        <div className='mt-3'>
        <TextField id="outlined-basic-rate" label="Rate of interest(%)" variant="outlined" className='w-100' name='rate' value={rate||""} onChange={e=>validateUserInputs(e)} />
        </div>
        { !validrate&&<div className='mb-3 text-danger fw-bolder'>Invalid User Input</div>}
        <div className='mt-3'>
        <TextField id="outlined-basic-time" label="Time-period (yr)" variant="outlined" className='w-100' name='year'  value={year||""} onChange={e=>validateUserInputs(e)}/>
        </div>
        { !validyear&&<div className='mb-3 text-danger fw-bolder'>Invalid User Input</div>}
        <Stack direction={'row'} spacing={2} className='mt-2'>
        <Button disabled={validprinciple&&validrate&&validyear?false:true} type='submit' style={{width:'50%',height:'55px'}} variant="contained" className='bg-dark'>Calculate</Button>
<Button  style={{width:'50%',height:'55px'}} variant="outlined" className='text-dark ' onClick={reset}>Reset</Button>
        </Stack>
      </form>
      </div>
    </div>
  )
}

export default App
