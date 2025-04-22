import "./styles.css"

type ButtonProps = {
    text: string;
    handle: () => void;
    disabled?: boolean;
}

export function ButtonGlobal({ text, handle, disabled = false }: ButtonProps) {
    return (
        <button 
            onClick={handle}
            disabled={disabled}
            className='button'
        >
            {text}
        </button>
    )
}