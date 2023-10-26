import React from "react";
import Add_Button from '../../components/buttons/Add_Button'

import {useState, useEffect} from "react";
import {db} from '../../firebase_configuration.js'
import { collection, getDocs, addDoc} from "firebase/firestore";

function Creation_Property()  {


    const [Properties, setProperties] = useState([]);
    const PropertiesCollectionRef = collection(db, "Properties")
  
    const [newPropertyType, setNewPropertyType] = useState("")
    const [newListingType, setNewListingType] = useState("")
    const [newPrice, setNewPrice] = useState("") 
    const [newAdress, setNewAdress] = useState(0)
    const [newCity, setNewCity] = useState("")
    const [newProvince, setNewProvince] = useState("")
    const [newNeighborhood, setNewNeighborhood] = useState("")
    const [newBedrooms, setNewBedrooms] = useState(0)
    const [newNBathrooms, setNewNBathrooms]= useState(0)
    
  
    const createProperty = async () => {
  
        // To add the fetch values to the database
      await addDoc( PropertiesCollectionRef, { 
        PropertyType: newPropertyType, 
        ListingType: newListingType,
        Price: newPrice,  Adress: newAdress, City: newCity, 
        Province: newProvince, Neighborhood: newNeighborhood,
        Bedrooms: newBedrooms, Bathrooms: newNBathrooms   }) ;
  
    }
  
    return (

    

        <div>
    
        <input placeholder ="Property type..." 
        
        onChange={(event) => {
        setNewPropertyType(event.target.value);
    
          }}
         />
    
    <br />
          
      <input placeholder ="Listing type..." 
        
        onChange={(event) => {
        setNewListingType(event.target.value);
    
          }}
         />
    
    <br />
    
        <input type = "number" placeholder ="Price..." 
        
          onChange={(event) => {
          
          setNewPrice(event.target.value);
        
          }}
        /> 
      
          <br />
    
        
    
        <input placeholder ="Adress..." 
        
          onChange={(event) => {
          
          setNewAdress(event.target.value);
        
          }}
        />
    
          <br />
    
         <input placeholder ="City..." 
        
          onChange={(event) => {
           setNewCity(event.target.value);
      
            }}
          />
    
    <br />
    
        <input placeholder ="Province..." 
    
          onChange={(event) => {
          setNewProvince(event.target.value);
    
           }}
          />
    
    <br />
    
        <input placeholder ="Neighborhood..." 
    
          onChange={(event) => {
          setNewNeighborhood(event.target.value);
    
           }}
          />
        
       <br />
    
       <input placeholder ="No of Beds..." 
    
        onChange={(event) => {
        setNewBedrooms(event.target.value);
    
          }}
        />
    
    <br />
        <input placeholder ="No of Baths..." 
        
        onChange={(event) => {
        setNewNBathrooms(event.target.value);
    
          }}
        />
    
    <br />
        <button onClick={createProperty}> Create Property</button>
    
                {/*====FOR SYTEM ADMIIN======*/}
    
            {/*The + button is at the top left corner of the page */}
            {/*brokers showed alphabetically*/}
            {/*click on card : edit button is a pen*/}
             {/*click on card delete button  is a trash*/}
    
             
     
          
        
        </div>
        )

}

export default Creation_Property