import type { ButtonHTMLAttributes, ReactNode, Dispatch, SetStateAction } from "react"

interface ButtonProps {
    children: ReactNode,
    value?: string,
    className?: string,
    type?: ButtonHTMLAttributes<HTMLButtonElement>["type"],
    onClick?: Dispatch<SetStateAction<boolean>>,
}

const Button:React.FC<ButtonProps> = (props) => {
    return (
        <button 
            onClick={() => (props.onClick ? props.onClick(true) : null)}
            className={`${props.className} text-sm py-0.5 px-3 text-neutral-400 border cursor-pointer rounded transition duration-300 border-transparent hover:text-neutral-500 hover:border-gray-200`}>
            {props.children}
        </button>
    )
}

export default Button