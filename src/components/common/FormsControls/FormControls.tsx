import React from 'react';
import style from './FormContros.module.css'


const FormControls: React.FC<any> = ({input, meta,child, ...props}) => {

    const hasError = meta.touched && meta.error

    return (
        <div className={style.formControl + ' ' + (hasError ? style.error : '')}>
            <div>
                {props.children}
            </div>
            <div>{hasError && <span>{meta.error}</span>}</div>
        </div>
    );
};

export const Textarea = (props: any) => {
    const {input, meta,child, ...restProps} = props
    return <FormControls {...props}><textarea {...input} {...restProps}/></FormControls>

}
export const Input = (props: any) => {

    const {input, meta,child, ...restProps} = props
    return <FormControls {...props}><input {...input} {...restProps}/></FormControls>

}

