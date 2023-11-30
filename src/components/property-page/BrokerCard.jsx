import React from 'react';
import '../property-page/BrokerCard.css' 
import { Language } from '@mui/icons-material';


export default function BrokerCard({ brokerRecords }){
  let brokerName, email, phoneNumber, yearsOfExperience,language; // Declare these variables in the parent scope

  if (!brokerRecords) { // evaluates to true if brokerList is null
     //Placeholder name to handle the case where brokerList is empty
     brokerName = "Albus Dumbledore";
     email = "itsleviosa@hogwarts.com";
     phoneNumber = "514-252-2525";
     yearsOfExperience = "150";
  }
  else{
  
    brokerName = brokerRecords.BrokerName;
    email = brokerRecords.BrokerEmail;
    phoneNumber = brokerRecords.PhoneNumber;
    yearsOfExperience = brokerRecords.BrokerYearsExperience;
    language = brokerRecords.BrokerLanguage
   }
   /*The fields:
     Broker_id integer PK
  First_Name VARCHAR
  Last_Name VARCHAR
  Phone_Number VARCHAR
  Email Varchar
   */
    

  const modifytest = async(nametest, email,phone)=>
  {console.log(nametest,email,phone);}

  console.log('Data in broker cards:', brokerRecords);
    const profilePicture = "https://pointrussell.opencities.com/files/content/public/v/5/council/elected-members/albus-dumbledore/albus-dumbledore.jpg?dimension=pageimage&w=480";


    return(
        <>
        <div className="brokerCard">
       <div className="cardTitle">Property Broker</div>
  <div className="profilePic">
  
    <img src={profilePicture} alt={brokerName} />
  </div>
  <div className="brokerName">
    <h2>{brokerName}</h2>
  </div>
  <div className="brokerInfo">
   <p>{email}</p>
   <p>{yearsOfExperience} Years of experience</p>
  </div>
  <div className="social">
    <ul>
      <li><i class="fab fa-facebook"></i></li>
      <li><i class="fas fa-envelope"></i></li>
            <li><i class="fas fa-phone"></i></li>
      <li><i class="fas fa-link"></i></li>
    </ul>
  </div>
  <button onClick={()=>{modifytest(brokerName,email,phoneNumber);}}
  
  >Modify</button>
</div>

</>
        
        );
        }
        