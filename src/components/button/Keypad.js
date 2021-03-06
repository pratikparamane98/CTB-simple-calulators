import React,{useState} from 'react'
import { Button } from '@material-ui/core';
import UseStyles from './styles1'



 const Keypad = (props) => {
    const classes = UseStyles();
    const data=['0','1','2','3','4','5','6','7','8','9']
    const data2=['+','-','*','/']

    const [show, setShow] = useState(false)//will toggle the scientific button



    return (
        <div>
            <div>
                <div>
                    <button className="button" onClick={()=>props.allowed(data[1])}>1</button>
                    <button className="button" onClick={()=>props.allowed(data[2])}>2</button>
                    <button className="button" onClick={()=>props.allowed(data[3])}>3</button> 
                     <button className="button" onClick={()=>props.operator(data2[0])}>+</button>
                </div>   
                <div> 
                    <button className="button" onClick={()=>props.allowed(data[4])}>4</button>
                    <button className="button" onClick={()=>props.allowed(data[5])}>5</button>
                    <button className="button" onClick={()=>props.allowed(data[6])}>6</button>
                    <button className="button" onClick={()=>props.operator(data2[1])}>-</button>
                </div>
                <div>
                    <button className="button" onClick={()=>props.allowed(data[7])}>7</button>
                    <button className="button" onClick={()=>props.allowed(data[8])}>8</button>
                    <button className="button" onClick={()=>props.allowed(data[9])}>9</button>
                    <button className="button" onClick={()=>props.operator(data2[2])}>*</button>
                </div>
                <div>
                    <button className="button" onClick={()=>props.allowed(data[0])}>0</button>
                    <button className="button" onClick={()=>props.equal()}>=</button>
                    <button className="button" onClick={()=>props.backsp()} >C</button>
                    <button className="button" onClick={()=>props.operator(data2[3])}>/</button>
                </div>
                 <div>
                    <Button className={classes.root}  onClick={()=>props.clearr()}>clear</Button>
                    <Button className={classes.root} onClick={() => setShow(!show)}>Scientific Mode</Button>
                </div>
                <br></br>      
                {show?
                    <div>
                        <Button color="primary"onClick={()=>props.signCl()}>Sign</Button>
                        <Button color="primary" onClick={()=>props.sqr()} >Square</Button>
                        <Button  color="primary" onClick={()=>props.sqrt()}>Square Root</Button>
                    </div>
                :null} 
                <br></br>
            </div>  
        </div>
    )
}

export default Keypad;