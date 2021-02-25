import React, {useState, useEffect} from  "react"
import ComboBox from "./ComboBox";
import Cuisines from "./Cuisines"
import axios from "axios"

function Home(){
    const [cuisine, setCuisine] = useState("")
    const [city, setCity] = useState("")
    // const [dish, setDish] = useState(null)
    var obj = {
        cuisine: cuisine,
        city: city
      }
    function getCuisine(val){
        setCuisine(val)
      }
    function abc(){  
        var isValid = false
        for(var i=0; i<Cuisines.length; i++){
            if(Cuisines[i].title.toLowerCase()==cuisine.toLowerCase()){
            isValid = true
            }
        }
        if(isValid){
            axios.post("http://localhost:9000/connect", obj) 
            .then(response=>{
                // setDish(response.data)
                console.log(response.data.url)
                document.querySelector("h4").innerHTML = response.data.data + "<a href=http://zomato.com" + response.data.url +"> Order Now!! </a>"
            })
            .catch((error) => {
                console.log(error)
            })
        }
        else{
            console.log("Invalid input")
        }
    }
    return(
        <div>
            <h1>Welcome to home page</h1>
            <input onChange={e=>setCity(e.target.value)} type="text" name="city" val={city} />
            <ComboBox getCuisine={getCuisine}/>
            <button onClick={abc}>Go!</button>
            <h4></h4>
        </div>
    )
}

export default Home