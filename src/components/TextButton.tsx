import React, { useState } from "react";

interface TextButtonProps {
    text: string;
    textColor?: string;
    fontSize?: string;
    fontWeigth?: string;
}

const TextButton: React.FC<TextButtonProps> = ({ text, textColor, fontSize, fontWeigth }) => {
    const [isHovered, setIsHovered] = useState(false);

    const textStyle: React.CSSProperties = {
        fontWeight: fontWeigth,
        fontSize: fontSize,
        color: isHovered ? "#FFF" : textColor, // Altere "red" para a cor desejada no hover
        cursor: "pointer",
        transition: "color 0.3s", // Adicionando uma transição para suavizar o efeito
    };

    return (
        <span
            style={textStyle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {text}
        </span>
    );
};

export default TextButton;
