// Declaramos el componente BotonMultiuso

// Destructuramos directamente en los parámetros. Si tengo que destructurar muchas props, es mejor hacerlo con el objeto props
const BotonMultiuso = ({label, isDisabled, children }) => {
    
    // O podríamos destructurar las props declarando la variable. Donde props es el objeto que contiene todas las propiedades y se aloja en el primer parámetro
    // const { label, isDisabled, children } = props;

    
    const handleClick = () => {
        alert("Botón clickeado");
    }
    // Render
    return (
        <button className={addClass} onClick={handleClick} disabled={isDisabled}>
            {label || children || "Botón por defecto"}
        </button>
    )
}

export default BotonMultiuso