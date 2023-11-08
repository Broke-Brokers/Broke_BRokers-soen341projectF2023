import React, {forwardRef, useImperativeHandle}from 'react';
import BrokerCard from '../property-page/BrokerCard.jsx';
import './Admin_Brokers_Grid.css';
import {useState, useEffect} from "react";
//allows connection to firebase
import {db} from '../../firebase_configuration.js'
import { collection, doc, getDocs, addDoc, updateDoc} from "firebase/firestore";


// Broker card is parent component
// Child component is admin_broker_grid
// function in admin broker grid is called in broker card
// ForwardRef: use to reference child component to access it
// use imperative handle: allows function in child component (broker grid) 
//to be called by parent component (broker card)



const Admin_Brokers_Grid = forwardRef((ref_BrokerGrid) => {





  
 // Reading brokers
   const [data, setData] = useState([]);
    const [records, setRecords] = useState([])
    async function getBroker(db) {
      const myBrokers = collection(db, 'Broker');
      const brokerSnapshot = await getDocs(myBrokers);
      const brokerList = brokerSnapshot.docs.map(doc => doc.data());
      return brokerList;
    }
  
    useEffect(() => {
      // Call the getBroker function to fetch the data when the component mounts
      const fetchData = async () => {
        const brokerData = await getBroker(db);
        setData(brokerData); // Set the data in state
        setRecords(brokerData);
      };
      fetchData();
    }, [db]); // Include 'db' as a dependency to ensure useEffect is called when it changes
  

//MANUAL CRUD: to store in firebase
   //1. FOR CREATE Take user input from setNew to have a new variable using new...
const[newBrokerID, setNewBrokerID]= useState(0)
const[newUserTypeID, setNewUserTypeID]= useState(0)
const[newClientFileID, setNewClientFileID]= useState(0)
const[newFirstName, setNewFirstName]= useState("")
const[newLastName, setNewLastName]= useState("")
const[newUserName, setNewUserName]= useState("")
const[newEmail, setNewEmail]= useState("")
const[newPassword, setNewPassword]= useState("")
const[newPhoneNumber, setNewPhone]= useState("")
//2.FOR UPDATE
const[firebaseID, setFirebaseID]= useState("")
const [show,setShow] = useState(false)




 const [brokers, setBrokers]=useState([]);
 //reference the broker collection in the databse of firebase
 const brokersCollectionRef = collection (db,"Broker")



 useEffect(() => {
  const getBrokers = async()=>{
    //get all the data in broker collection
    const data = await getDocs(brokersCollectionRef);
    //setting brokers array = array of document data & id for each document
    setBrokers(data.docs.map((doc)=>({...doc.data(), id:doc.id})));
    const myBrokerList = data.docs.map(doc => doc.data());

    
  };
  getBrokers();
 },[])



//MANUAL CRUD: 
//1.FOR CREATE: function that create a broker when click on create broker
const createBroker = async()=>{
  await addDoc(brokersCollectionRef,{
    BrokerID: newBrokerID,
    UsertypeID: newUserTypeID,
    ClientFileID: newClientFileID,
    FirstName:newFirstName,
    LastName:newLastName,
    Username:newUserName,
    Email:newEmail,
    Password:newPassword,
    PhoneNumber:newPhoneNumber
  });
  }
  //2.FOR UPDATE
     //2.1 Get id of document in firebase and previous inputs
  
      const modifyBroker = async( 
        FirstName, Email, PhoneNumber )=>{
      

          console.log(FirstName,Email,PhoneNumber);
          //setFirebaseID(firebaseID)
          //setNewBrokerID(BrokerID)
         // setNewUserTypeID(UsertypeID)
         // setNewClientFileID(ClientFileID)
         // setNewFirstName(FirstName)
          //setNewLastName(LastName)
          //setNewUserName(Username)
        //  setNewEmail(Email)
          //setNewPassword(Password)
         // setNewPhone(PhoneNumber)
         // setShow(true)
      }

 // will call modify function in broker card 
      //write function that will be called from Broker card parent component
      // use imperative handle parameters: reference & function which we want to call in parent component
      //modify function is defined below
      useImperativeHandle(ref_BrokerGrid,()=>({
        modifyBroker
        
      }));
      




  
  const updateBroker = async()=>{
  const updateData= doc(db,"Broker",firebaseID)
  await updateDoc(updateData,{
    BrokerID: newBrokerID,
    UsertypeID: newUserTypeID,
    ClientFileID: newClientFileID,
    FirstName:newFirstName,
    LastName:newLastName,
    Username:newUserName,
    Email:newEmail,
    Password:newPassword,
    PhoneNumber:newPhoneNumber
  })
  setShow(false)
  setNewBrokerID(0)
  setNewUserTypeID(0)
  setNewClientFileID(0)
  setNewFirstName("")
  setNewLastName("")
  setNewUserName("")
  setNewEmail("")
  setNewPassword("")
  setNewPhone("")
}


  return (


   



     //CRUD MANUALLY NOT INSIDE GRID
      //1. FOR CREATE: setNew...the value entered by user 
    <div>
     {records.map((broker, index) => (
        <BrokerCard key={index} brokerList={broker} /> // Use a unique 'key' prop for each element
      ))}
  
  
  <div className="Admin_Brokers_Grid">


    <input type='number' placeholder='Broker ID...'
       onChange={(event)=> {
        setNewBrokerID(event.target.value);
      }}
    />
    <input type='numberevent' placeholder='User type ID...'
    onChange={(event)=>{
      setNewUserTypeID(event.target.value);
    }}
    />
    <input type='number' placeholder='Client File ID...'
    onChange={(event)=> {
      setNewClientFileID(event.target.value);
    }}
    />
    <input placeholder='First name...'
     onChange={(event)=> {
      setNewFirstName(event.target.value);
    }}
    />
    <input placeholder='Last name...'
     onChange={(event)=> {
      setNewLastName(event.target.value);
    }}
    />
    <input placeholder='username...'
     onChange={(event)=> {
      setNewUserName
    (event.target.value);
    }}
    />
    <input placeholder='email...'
     onChange={(event)=> {
      setNewEmail(event.target.value);
    }}
    />
    <input placeholder='password...'
     onChange={(event)=> {
      setNewPassword(event.target.value);
    }}
    />
    <input placeholder='Phone number(xxx-xxx-xxxx)...'
    onChange={(event)=> {
      setNewPhone(event.target.value);
    }}
    />

{!show?<button onClick={createBroker}> Create Broker</button>:
        <button onClick={()=>{updateBroker()}}>Update</button>
}

   
</div>





    {brokers.map((broker)=>{
      return (
      <div> 
        {""}
        <h2> Broker ID: {broker.BrokerID} </h2>
        <h2> User Type ID: {broker.UsertypeID} </h2>
        <h2> Client File ID: {broker.ClientFileID} </h2>
        <h2> First name: {broker.FirstName} </h2>
        <h2> Last Name: {broker.LastName} </h2>
        <h2> Username: {broker.Username} </h2>
        <h2> Email: {broker.Email} </h2>
        <h2> Password: {broker.Password} </h2>
        <h2> Phone Number: {broker.PhoneNumber} </h2>
       

       
       
        


        
      </div>
      );
      })}
  </div>
  );
});

export default Admin_Brokers_Grid;