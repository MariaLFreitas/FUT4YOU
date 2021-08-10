import { ButtonHTMLAttributes } from 'react';
import '../styles/button-google.css';

type ButtonGoogleProps = ButtonHTMLAttributes<HTMLButtonElement>
export function ButtonGoogle(props: ButtonGoogleProps) {
    return (
        <button className="button-google" {...props}></button>
    )
}