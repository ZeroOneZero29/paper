import News from "./News";
import "../css/News.css"
import {   useEffect, useRef, useState} from "react";



export default function Container(){
    const [elem, setElem] = useState([])
    const childRef = useRef()
    const curent = childRef
    useEffect(() => {
        setElem(curent.current.children[1].children)
        console.dir(curent.current.children[1].children)
    }, [curent])

   // Object.values(elem).forEach(val => console.log(val))

    console.log(elem);
    
     function checkBorder(elem) {
        for (let i = 0; i < elem.length; i ++){
             if (elem[i].offsetTop + elem[i].offsetHeight >= 1500) {
                elem[i].style.display = "none"
            }
            console.log(elem[i].offsetTop);
        }
    }

    useEffect(() => {
        checkBorder(elem)
    }, [elem])

    
    //function testPosition(elem, index) {
    //    console.log(elem[index]);
    //}

    
    //const tye = testArr.forEach((el, index) => testPosition(el, index))
    

    return (
        <div className="child-container">
            <News ref={childRef}/>
        </div>
    )
}