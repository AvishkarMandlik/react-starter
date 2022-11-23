import Apple from "./Views/Apple/Apple";
import Mango from "./Views/Mango/Mango";
import "./Component/App.css"
function App(){
    return(

        <>
        <div className="AppleMango">
           <Apple />
           <Apple />
           <Apple />
           <Apple />
           <Apple />
        </div>
        
        <div className="AppleMango">
            <Mango/>
            <Mango/>
            <Mango/>
            <Mango/>
            <Mango/>
        </div>

        
        </>
    )
}

export default App;