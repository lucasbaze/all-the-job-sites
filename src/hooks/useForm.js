import { useState } from 'react';

export const useForm = (initialvalues, callback) => {
    let [formValues, setFormValues] = useState('');

    const handleChange = e => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
        console.log(formValues);
    };

    const handleSubmit = e => {
        e.preventDefault();
        callback(formValues);
        setFormValues('');
    };

    return [formValues, handleChange, handleSubmit];
};
