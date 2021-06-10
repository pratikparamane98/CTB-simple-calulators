import React,{useState} from 'react'
import Button from '../button/Keypad.js'





const Display = () => {
    var evaluate
    const [input, setinput] = useState("")
    


    const handleClick = (data) =>{
            console.log("data")
            evaluate=input.concat(data)
            setinput(evaluate)            
        }
       

    

    const operatorClick = (data2) =>{
        
        if(input==""){
            setinput("")
        }
        else{
            const character = input.charAt(input.length-1)
            if(character==="+"){
                  setinput(input.replace("+","+"));
             }
             else if(character==="-"){
              setinput(input.replace("-","-"));
             }
             else if(character ==="*"){
              setinput(input.replace("*","*"));
             }
             else if(character ==="/"){
              setinput(input.replace("/","/"));
             }
             else{
               setinput(eval(input).toString() + (data2));
             }
            }

    }




    const clear=()=>{
        setinput('');
    }

    const backspace = () =>{
        setinput(input.slice(0,input.length - 1))
    }

    const calculate = () =>{
        if(input==""){
            setinput("")
        }else{
        setinput(eval(input).toString())
        }
    }

    const squareRoot = (e) =>{
        setinput(Math.sqrt(input).toString())
        
    }

    const square  = (e) =>{
        setinput((input*input).toString())
    }

    function SignClick(){
        setinput((eval(input)*(-1)).toString());
      }

    return (
        <div className="main-div">
            <div className="center-div">
            <br></br>
            <h1 className="h1">Calculator</h1>
            <br></br>
            <input type="text" className = "input" value={input} autoComplete="off" placeholder="0"></input>
            <Button allowed = {handleClick}
                    equal = {calculate}
                    backsp={backspace}
                    clearr={clear}
                    signCl={SignClick}
                    sqr={square}
                    sqrt={squareRoot}
                    operator = {operatorClick}/>

            </div>  
        </div>
    )
}


export default Display;