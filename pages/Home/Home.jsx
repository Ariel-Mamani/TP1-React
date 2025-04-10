import homeModule from './Home.module.css';
import Title from '../../components/Title/Title.jsx';
import Button from '../../components/Button/Button.jsx';

function Home(){
    return (
        <div className={homeModule.container}>
            <Title text="Página Home" />
            <h1 className={homeModule.title}></h1>
            <p className={homeModule.paragraph}>Bienvenido a la página home de nuestra aplicación</p>
            <Button text="Click aquí" onClick={() => alert('¡Botón clickeado!')} />
        </div>
    );
}

export default Home;