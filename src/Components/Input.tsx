import {InputHTMLAttributes} from 'react';
import {LabelHTMLAttributes} from 'react';
import '../styles/input.css';

type InputProps = InputHTMLAttributes<HTMLInputElement>
type LabelProps = LabelHTMLAttributes<HTMLLabelElement>

// export function Input(props => ({InputProps, LabelProps}){
//     return(
//         <label className="label "{...props}></label>
//         <input className="input" {...props} />
//     )
// }
export function Input(props: InputProps){
        return(
            <input className="input" {...props} />
        )
    }