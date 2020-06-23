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
        setFifoList(fifoCtrl.collection())
        // fifoList.push(fifoNode);
        // console.log(fifoList)

        setLifoNode(lifoNode);
        lifoCtrl.putIn(lifoNode);
    }

    return (
        <div>
            <FifoLifoDisplay
            fifo = {fifoList}
            lifo = {lifoList}
            onSave = {onSave}
            onFifoChange = {onFifoChange}
            onLifoChange = {onLifoChange} />
        </div>
    )
}
