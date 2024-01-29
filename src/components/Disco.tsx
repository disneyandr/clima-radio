import React from "react";
import TextButton from "./TextButton";

interface DiscoProps{
    image: string;
    titulo: string;
    subTitulo: string;
}

const Disco: React.FC<DiscoProps> =({image, titulo, subTitulo}) => {

    const discoStyle: React.CSSProperties ={
        backgroundColor: '#151515',
        display: 'flex',
        flexDirection: 'column',
        padding: '1rem',
        maxWidth: '12rem',
        borderRadius: '0.5rem',
    }
    const imageStyle: React.CSSProperties ={
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

    return(
        <div style={discoStyle}>
            <img src={image} alt="capa" style={imageStyle} width={100} height={100} />
            <div style={text_container}>
                <TextButton text={titulo} textColor="#FFF" fontWeigth="bold" />
                <TextButton text={subTitulo} textColor="#808080"  />

            </div>
        </div>
    )
}

export default Disco;