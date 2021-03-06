import React from 'react';

import './RadioInputForm.css';

const RadioInputForm = ({ id, options, currentValue, onChange }) => {
    return (
        <form className='radio-input-form'>
            {options.map((option) => (
                <label
                    key={option.value}
                    htmlFor={id}
                    className='radio-input-form__label'
                >
                    <input
                        id={`${id}-${option.value}`}
                        type='radio'
                        value={option.value}
                        checked={currentValue === option.value}
                        onChange={onChange}
                    />
                    <span className='radio-input-form__label-text'>
                        {option.text}
                    </span>
                </label>
            ))}
        </form>
    );
};

export default RadioInputForm;
