import React, { useState } from "react";

interface PillButtonProps {
    backgroundColor: string;
    text?: string;
    textColor?: string;
    icon?: React.ReactNode;
    width?: string;
}

const PillButton: React.FC<PillButtonProps> = ({ backgroundColor, text, textColor, icon, width }) => {
    const [isHovered, setIsHovered] = useState(false);

    const buttonStyle: React.CSSProperties = {
        backgroundColor,
        color: textColor,
        borderRadius: '20px',
        padding: '10px 20px',
        border: 'none',
        cursor: 'pointer',
        fontSize: '14px',
        display: 'flex',
        alignItems: 'center',
        width: width,
        fontWeight: 'bold',
        transform: isHovered ? 'scale(1.1)' : 'scale(1)', // Ajuste o valor conforme necessário
        transition: "transform 0.3s",
    };

    const iconStyle: React.CSSProperties = {
        marginRight: '8px',
    };

    return (
        <button
            style={buttonStyle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {icon && <span style={iconStyle}>{icon}</span>}
            {text}
        </button>
    );
}

export default PillButton;
