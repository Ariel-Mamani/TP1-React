import homeModule from './home.module.css';
import Title from '../../components/Title/Title.jsx';
import Button from '../../components/Button/Button.jsx';
import ListaPyS from '../../components/ListaPyS/ListaPyS.jsx';

function Home(){
    return (
        <div className={homeModule.container}>
            <Title text="Página Home" />
            <h1 className={homeModule.title}></h1>
            <p className={homeModule.paragraph}>Bienvenido a la página home de nuestra aplicación</p>
            <div className={homeModule.peliculasLista}>
                <h1>Agregar pelicuas o series</h1>
                <ListaPyS/>
            </div>
            <Button text="Click aquí" onClick={() => alert('¡Botón clickeado!')} />
            <div className={homeModule.listaSection}>
                <p>Por ver</p>
            </div>
            <div className={homeModule.listaSection}>
                <p>Vistas</p>
            </div>
        </div>
    );
}
export default Home;