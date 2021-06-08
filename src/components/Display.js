import React,{useState} from 'react'
import { Button } from '@material-ui/core';

import useStyles from './styles1'



const Display = () => {
    const classes = useStyles();
    var evaluate;


    const [input, setinput] = useState("")
    const [show, setShow] = useState(false)//will toggle the scientific button
    const [first,setFirst] = useState(true)//will avoid the first input from being an operator


    const handleClick = (event) =>{
        if(first === true){
            evaluate = input.concat(event.target.name)  //this code is only for first input,if first input is any operator 
            setinput(evaluate)                          //then it will make the state empty again
            if(evaluate === "+"){
                setinput("")
            }
                else if(event.target.name === "-"){
                setinput("")
                }
                    else if(event.target.name === "*"){
                    setinput("")
                    }
                        else if(event.target.name === "/"){
                         setinput("")

                        }
                        else if(event.target.name === "="){
                            setinput("")
   
                           }
                             else {
                                setinput(eval(evaluate).toString())
                                setFirst(false)
                             }
           
                        
                  
         //if input is not + - * / then evaluate otherwise keep adding  
         //for example, 1st input is 10,2nd input is "+" and third input is 20  
         //in first input it will go inside,for second it will not go inside and
         //for third it will not go inside.and everytime it goes inside it evaluates
        }else if(first === false){
            evaluate = input.concat(event.target.name)
            setinput(evaluate)                                 
            if(event.target.name !== "+") {                    
                if(event.target.name !== "-"){                 
                    if(event.target.name !== "*"){             
                        if(event.target.name !== "/"){
                             if(evaluate.length > evaluate.length - 1){
                                setinput(eval(evaluate).toString())                                
                             }
           
                        }
                }   }
            }

        }
    }

    const clear=(e)=>{
        setinput('');
        setFirst(true)

    }

    const backspace = (e) =>{
        setinput(input.slice(0,input.length - 1))
    }

    const calculate = (e) =>{
        setinput(eval(input).toString())
    }

    const squareRoot = (e) =>{
        setinput(Math.sqrt(input).toString())
        
    }

    const square  = (e) =>{
        setinput((input*input).toString())
    }

    function SignClick(){
        setinput((eval(input)*(-1)).toString());
        setFirst(false)
      }

    return (
        <div className="main-div">
            <div className="center-div">
            <br></br>
            <h1 className="h1">Calculator</h1>
            <br></br>
            <input type="text" className = "input" value={input} autoComplete="off" placeholder="0"></input>
            <div>
                <div>
                    <button className="button" onClick={handleClick} name = "1">1</button>
                    <button className="button" onClick={handleClick} name = "2">2</button>
                    <button className="button" onClick={handleClick} name = "3">3</button>
                    <button className="button" onClick={handleClick} name = "+">+</button>
                </div>   
                <div> 
                    <button className="button" onClick={handleClick} name = "4">4</button>
                    <button className="button" onClick={handleClick} name = "5">5</button>
                    <button className="button" onClick={handleClick} name = "6">6</button>
                    <button className="button" onClick={handleClick} name = "-">-</button>
                </div>
                <div>
                    <button className="button" onClick={handleClick} name = "7">7</button>
                    <button className="button" onClick={handleClick} name = "8">8</button>
                    <button className="button" onClick={handleClick} name = "9">9</button>
                    <button className="button" onClick={handleClick} name = "*">*</button>
                </div>
                <div>
                    <button className="button" onClick={handleClick} name = "0">0</button>
                    <button className="button" onClick={calculate} >=</button>
                    <button className="button" onClick={backspace} >C</button>
                    <button className="button" onClick={handleClick} name = "/">/</button>
                </div>
                <div>
                    <Button className={classes.root}  onClick={clear} >clear</Button>
                    <Button className={classes.root} onClick={() => setShow(!show)}>Scientific Mode</Button>
                </div>
        
               {show?
                    <div>
                        <button className="button03" onClick= { SignClick } >Sign</button>
                        <button className="button03" onClick= { square } >Square</button>
                        <button className="button03" onClick= { squareRoot }>Square Root</button>
                    </div>
                :null}

            </div>  

            </div>  
        </div>
    )
}


export default Display;