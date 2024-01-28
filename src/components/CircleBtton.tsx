import React from "react";

interface CircleButtonProps {
    backgroundColor: string;
    fontSize?: string;
    textColor?: string;
    icon?: React.ReactNode;
    maxWidht?: string;
}
const CircleButton: React.FC<CircleButtonProps> = ({ backgroundColor, fontSize, textColor, icon, maxWidht }) => {
    const buttonStyle: React.CSSProperties = {
        backgroundColor,
        color: textColor,
        borderRadius: '100%', // Ajuste o valor conforme necessário
        padding: '0.5rem', // Ajuste o valor conforme necessário
        border: 'none',
        cursor: 'pointer',
        fontSize: fontSize, // Ajuste o valor conforme necessário
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: maxWidht,
        fontWeight: 'bold'
    };

    
    return(
        <button style={buttonStyle}>
            {icon}
            
        </button>
    )
}

export default CircleButton;