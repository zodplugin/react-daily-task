import { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from 'react-bootstrap/Card';

import './ExpenseItem.css';
import { Row,Col, Button } from 'react-bootstrap';

function ExpenseItem(props) {
    const [title, setTitle] = useState(props.title)

    // console.log(title)
    // console.log(title)
    const expenseDate = new Date(2023, 5, 10);
    const expenseTitle = 'Car Priceeeeeeee';
    const expenseAmount = 20.000;


    function makeid(length) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
          counter += 1;
        }
        return result;
    }

    // let title = props.title
    const clickHandler = () =>{ 
        console.log('ini di click')
        setTitle(!title)
    }
        
    return (

        <>
            <tr>
                <td>{ props.nama }</td>
                <td>{ props.nim }</td>
                <td>{ props.kelas }</td>
                <td>{ props.angkatan }</td>
            </tr>
        </>
    )
}

export default ExpenseItem;