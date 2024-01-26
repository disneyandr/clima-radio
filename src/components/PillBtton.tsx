import React from "react";

interface PillButtonProps {
    backgroundColor: string;
    text?: string;
    textColor?: string;
    icon?: React.ReactNode;
}
const PillButton: React.FC<PillButtonProps> = ({ backgroundColor, text, textColor, icon }) => {
    const buttonStyle: React.CSSProperties = {
        backgroundColor,
        color: textColor,
        borderRadius: '20px', // Ajuste o valor conforme necessário
        padding: '10px 20px', // Ajuste o valor conforme necessário
        border: 'none',
        cursor: 'pointer',
        fontSize: '14px', // Ajuste o valor conforme necessário
        display: 'flex',
        alignItems: 'center',
    };

    const iconStyle: React.CSSProperties ={
        marginRight: '8px',
    };

    return(
        <button style={buttonStyle}>
            {icon && <span style={iconStyle}>{icon}</span>}
            {text}
        </button>
    )
}

export default PillButton;