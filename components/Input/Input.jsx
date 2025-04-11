import './Styles.css';

const Input =({onChange,value})=>{
    const cuandoCambia = (evento)=>{
        onChange(evento.target.value)
    }
    
    const cuandoEscribe = () => {
        if (value === 'Buscar') {
            onChange('');
        }
    };
    return <input value={value} onChange={cuandoCambia} onClick={cuandoEscribe}/>;    
}
export default Input;