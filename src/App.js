import Apple from "./Views/Apple/Apple";
import Mango from "./Views/Mango/Mango";
import "./App.css"
function App(){
    return(

        <>
        <div className="Apple">
           <Apple />
           <Apple />
           <Apple />
           <Apple />
           <Apple />
        </div>
        <div className="Mango">
            <Mango/>
        </div>

        
        </>
    )
}

export default App;