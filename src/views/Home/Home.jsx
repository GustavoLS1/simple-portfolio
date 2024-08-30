import Header from '../../components/Header/Header';
import './Home.css';

export default function Home () {
    return (
        <div className='home'>
            <Header/>
            <main className='container-main secondary-color'><p className='secondary-font'>Prueba #2</p>
                <button className='primary-btn'>uwu</button>
            </main>
        </div>
    );
}