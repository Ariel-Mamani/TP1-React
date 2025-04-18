import homeModule from './home.module.css';
import Title from '../../components/Title/Title.jsx';
import ListaPyS from '../../components/ListaPyS/ListaPyS.jsx';
import Header from '../../components/Header/Header.jsx';
function Home(){
    return (
        <div className={homeModule.container}>
            {/* <Title text="Página Home" /> */}
            <h1 className={homeModule.title}></h1>
            <p className={homeModule.paragraph}>Bienvenido a la página home de nuestra aplicación</p>
            <div >
                <h1>Agregar peliculas o series</h1>
                <ListaPyS/>
            </div>
        </div>
    );
}
export default Home;