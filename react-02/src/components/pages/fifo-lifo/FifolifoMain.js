import React, {useState} from 'react'
import functions from './business/fifo_lifo.js'
import FifoLifoDisplay from './FifoLifoDisplay'

export default function FifolifoMain() {

    const [fifoCtrl] = useState(new functions.FifoQueue())
    const [lifoCtrl] = useState(new functions.LifoStack())
    const [fifoList, setFifoList] = useState();
    const [lifoList, setLifoList] = useState();
    const [fifoNode, setFifoNode] = useState();
    const [lifoNode, setLifoNode] = useState();


    const onFifoChange = (e) => {
        setFifoNode(e.target.value);
    }

    const onLifoChange = (e) => {
        setLifoNode(e.target.value);
    }
// setFifoList([]);


    function onSave() {
        setFifoNode(fifoNode);
        fifoCtrl.putIn(fifoNode);

        for (let i=0; i < functions.array.length; i++) {
            return(
        <h2>{functions.array[i]}</h2>)
        }
        // let array = fifoCtrl.collection()
        functions.array.map((fifoNode) => (
            <h2>{fifoNode.value}</h2>
        ))

        // fifoList.push(fifoNode);
        // console.log(fifoList)

        setLifoNode(lifoNode);
        lifoCtrl.putIn(lifoNode);
    }

    function listEl () {
        let array = fifoCtrl.collection()
         array.map((fifoNode) => (
            <h2>{fifoNode}</h2>
        )
    
    )
    console.log(fifoNode)
         }

    return (
        <div>
            <FifoLifoDisplay
            fifo = {fifoList}
            lifo = {lifoList}
            onSave = {onSave}
            list = {listEl}
            onFifoChange = {onFifoChange}
            onLifoChange = {onLifoChange} />
        </div>
    )
}
