import homeModule from './Home.module.css';
function Home(){
    return (
        <div className={homeModule.container}>
            <h1 className={homeModule.title}> Home</h1>
            <p className={homeModule.paragraph}>Bienvenido a la página home de nuestra aplicación</p>
        </div>
    );
}

export default Home;