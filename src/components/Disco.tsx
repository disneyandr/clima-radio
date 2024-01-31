import React, { useState } from "react";
import { FaPlayCircle } from "react-icons/fa";

interface DiscoProps {
    image: string;
    titulo: string;
    subTitulo: string;
}

const Disco: React.FC<DiscoProps> = ({ image, titulo, subTitulo }) => {

    const [isHoevered, setIsHovered] = useState(false)
    const discoStyle: React.CSSProperties = {
        backgroundColor: '#424242',
        display: 'flex',
        flexDirection: 'column',
        padding: '1rem',
        maxWidth: '12rem',
        borderRadius: '0.5rem',
        transform: isHoevered ? 'scale(1.1)' : 'scale(1)',
        transition: 'transform 0.3s',
        
    }
    const imageStyle: React.CSSProperties = {
        marginBottom: '1rem',
        width: '10rem',
        height: '10rem',
        borderRadius: '0.5rem',
    }
    const text_container: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
    }

    const tituloStyle: React.CSSProperties = {
        fontWeight: 'bold',
        color: '#FFFFFF',

    }
    const sub_titulo: React.CSSProperties = {
        color: '#8F8F8F',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    }
    const play: React.CSSProperties = {
        color: '#3ce8ff',
        fontSize: isHoevered ? '3rem' : '0',
        visibility: isHoevered ? 'visible' : 'hidden',
        display: 'flex',
        justifyContent: 'center',
        transition: 'visibility 0.3s',
        cursor: 'pointer',
        transform: 'translateY(-50px)'

    }

    return (
        <div
            style={discoStyle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img src={image} alt="capa" style={imageStyle} width={100} height={100} />
            <div style={play}>

                <FaPlayCircle />
            </div>
            <div style={text_container}>
                <span style={tituloStyle}>{titulo}</span>
                <span style={sub_titulo} >{subTitulo}</span>


            </div>
        </div>
    )
}

export default Disco;