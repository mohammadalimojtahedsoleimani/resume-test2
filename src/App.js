
import Navbar from "./component/Navbar/Navbar";
import Main from "./component/Main/Main";
import style from './App.css'
function App () {
    return (
        <div className={style.App}>
            <div className={style.container}>
                <Navbar/>
                <div className={style.other}>
                    <Main/>
                </div>
            </div>





        </div>
    );
}

export default App;
