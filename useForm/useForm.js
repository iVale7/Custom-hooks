import { useState } from "react";

export const useForm = (initialForm = {}) => {
    const [formState, setFormState] = useState(initialForm);

    const onInputChange = ({ target }) => {
        setFormState(prevState => ({
            ...prevState,
            [target.name]: target.value
        }));
    };

    const onResetForm = () => {
        setFormState(initialForm);
    };

    return {
        ...formState,
        onInputChange,
        onResetForm,
        setFormState,
    };
};
