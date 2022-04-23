import axios from 'axios';
import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import SellForm from '../components/SellForm';

export default () => {
    const history = useHistory();
    const [errors, setErrors] = useState([]);

    const createItem = item => {
        axios.post('http://localhost:8000/api/item/new', item)
            .then(res => {
                history.push('/sellerdashboard')
            })
            .catch(err => {
                console.log(err.response.data.errors)
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for(const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            })
    }

    return (
        <div>
            <SellForm 
                onSubmitProp={createItem}
                initialName=''
                initialPrice=''
                initialDescription=''
                initialCategory=''
                errors={errors}
            />
        </div>
    )
}