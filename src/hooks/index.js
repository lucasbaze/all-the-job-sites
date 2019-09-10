import { useState } from 'react';

export const useForm = (initialvalues, callback) => {
    let [formValues, setFormValues] = useState('');

    let setAll = (obj, val) => {
        Object.keys(obj).forEach(k => (obj[k] = val));
    };
    let setNull = obj => setAll(obj, null);

    const handleChange = event => {
        event.persist();
        setFormValues({
            ...formValues,
            [event.target.name]: event.target.value,
        });
        console.log(formValues);
    };

    const handleSubmit = event => {
        event && event.preventDefault();
        callback(formValues);

        //Reset all form values to empty strings
        setAll(formValues, '');
        setFormValues({ ...formValues });
    };

    return [formValues, handleChange, handleSubmit];
};
