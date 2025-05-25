import React from 'react'

interface ButtonProps {
    text: string
    onClick?: () => void
    className?: string
    loading?: boolean
    disabled?: boolean
    type?: "button" | "submit" | "reset"
}

const Button: React.FC<ButtonProps> = ({
    text,
    onClick,
    className = "",
    loading = false,
    disabled = false,
    type = "button"
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled || loading}
            className={`
                px-6 py-2 rounded-md bg-green-700 text-white font-semibold
                hover:bg-green-800 transition-colors duration-200
                disabled:bg-green-300 disabled:cursor-not-allowed
                ${className}
            `}
        >
            {loading ? (
                <span className="flex items-center justify-center">
                    <svg className="animate-spin h-5 w-5 mr-2 text-white" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                    </svg>
                    Loading...
                </span>
            ) : (
                text
            )}
        </button>
    )
}

export default Button