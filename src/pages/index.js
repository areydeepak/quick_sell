import React,{ useState } from 'react'
import './index.css'
import Box from './box'
import Axios from 'axios'
import { Loader } from '../loader'


function Index() {
    const intial=()=>{
        Axios({
            method:'get',
            url:'https://interview-8e4c5-default-rtdb.firebaseio.com/front-end/counter1.json'
        })
        .then(function(data){
            //console.log(data.data)
            if(data.data===null)
                setCount(1)
            else setCount(data.data)
        })
    }
    const [count, setCount] = useState(intial)
    const [loading, setLoading] = useState(false);

    const submit=(val)=>{
        setLoading(true);
        setCount(Number(val))
        const body={"areydeeepak": val}
        Axios.put(
            'https://interview-8e4c5-default-rtdb.firebaseio.com/front-end.json',
            body
        )
        .then(function(data){
            console.log(data);
            setLoading(false);
        })
    }

    return (
        <div className="body">
            <div className="counter">
                <div className="box">
                    <div className="top" style={{visibility: loading ? 'visible' : 'hidden'}}>
                        <Loader />
                        <h5>Saving counter value</h5>
                    </div>
                    <div className="box_items_container">
                    <Box classname="box_minus"
                        txt="-"
                        textMode
                        onclick={()=>submit(Number(count)-1)}
                    />
                    <Box classname="value">
                        <input type="number" value={count} onChange={(e) => submit(e.target.value)} className="box_input" />
                    </Box>
                    <Box classname="box_plus"
                        txt="+"
                        textMode
                        onclick={()=>submit(Number(count)+1)}
                    />
                    </div>
                    {/* {submit()} */}
                    <div className="bottom">
                        <h5>Counter value : {count}</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index
