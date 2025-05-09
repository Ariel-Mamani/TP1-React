import homeModule from './home.module.css'; 
import ListaPyS from '../../components/ListaPyS/ListaPyS.jsx';
function Home(){
    return (
        <div className={homeModule.container}>
            {/* <Title text="Página Home" /> */}
            <div className={homeModule.pelisOseries}>
                <p className={homeModule.paragraph}>Bienvenido a la página home de nuestra aplicación</p>
                <h1 className={homeModule.title}>Agregar peliculas o series</h1>
            </div>
                <ListaPyS/>
        </div>
    );
}
export default Home;