import React, {useState} from 'react'
import functions from './business/fifo_lifo.js'
import FifoLifoDisplay from './FifoLifoDisplay'

export default function FifolifoMain() {

    const [fifoCtrl] = useState(new functions.FifoQueue())
    const [lifoCtrl] = useState(new functions.LifoStack())
    const [fifoList, setFifoList] = useState([]);
    const [lifoList, setLifoList] = useState([]);
    const [fifoNode, setFifoNode] = useState();
    const [lifoNode, setLifoNode] = useState();


    const onFifoChange = () => {
        setFifoNode(document.getElementById('idFifoName').value);
    }

    const onLifoChange = () => {
        setLifoNode(document.getElementById('idLifoName').value);
        
    }


    function onSave(e) {
    let todo = e.target.getAttribute('todo')
    console.log(todo)
    if (todo === 'queue') {
        fifoCtrl.putIn(fifoNode);
        console.log(fifoNode)
        // console.log(fifoList)
        fifoList.push(fifoNode)

        setFifoNode('')
        console.log('this is fifo:', fifoList)

    } else if (todo === 'stack') {

        lifoCtrl.putIn(lifoNode);
        console.log(lifoNode);
        lifoList.unshift(lifoNode);
        setLifoNode('')

        console.log('this is Lifo:', lifoList)
    }
    clearFields()
    }
    
    function onDelete (e) {
        let todo = e.target.getAttribute('todo')
        console.log(todo)
        if (todo === 'deleteQueue') {
            fifoCtrl.putOut();
            setFifoList(fifoCtrl.collection())

        }
        else if (todo === 'deleteStack') {
            lifoCtrl.putOut();
            setLifoList(lifoCtrl.collection())
        }

    }
    const clearFields = () => {
        document.getElementById('idFifoName').value = ''
        document.getElementById('idLifoName').value = ''
    }


    return (
        <div>
            <FifoLifoDisplay
            onSave = {onSave}
            onDelete = {onDelete}
            fifoList = {fifoList}
            lifoList = {lifoList}

            onFifoChange = {onFifoChange}
            onLifoChange = {onLifoChange} />
        </div>
    )
}
