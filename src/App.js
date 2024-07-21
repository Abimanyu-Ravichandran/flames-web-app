import { useState } from 'react';
import './App.css';
import db from './firebase/Firebase';




function App() {


    const [name1, setName1] = useState('');
    const [name2, setName2] = useState('');
    const [result, setResult] = useState('');
    const [notification, setNotifcation] = useState('');
    // const messageref =useRef();
    // const ref = collection(firestore,"messages");
   



    
    const calculateFlames = (e) => {
      e.preventDefault();
    
     
    
      let str1 = name1.toLowerCase().replace(/[^a-z]/g, '');
      let str2 = name2.toLowerCase().replace(/[^a-z]/g, '');
  
      if (str1 === '' || str2 === '') {
        setResult('Please enter both names');
        return;
      }
  
      let totalLength = str1.length + str2.length;
      for (let i = 0; i < str1.length; i++) {
        if (str2.includes(str1[i])) {
          str2 = str2.replace(str1[i], '');
          totalLength -= 2;
        }
      }
  
      const flamesArr = ['Are Friends', ' Are Lovers', 'Are Affectionate', ' relatipnship will end up in Marriage', 'Are Enemies', 'Are Siblings'];
      let index = (totalLength % flamesArr.length) - 1;
  
      if (index >= 0) {
        setResult(flamesArr[index]);
      } else {
        setResult(flamesArr[flamesArr.length - 1]);
 
      }

      db.collection("flames-user-names").add({
        First_Name:name1,
        Seconda_Name:name2,
        Realtionship:result,
        
      })
      .then((docRef)=>
      {
        setNotifcation("Thank You For your Response!")
      })
      .catch((error)=>{
      alert(error)
      
      }) 
    
    };


  return (  
<>
<br />
    <div className="container ">
    <div className="row">
    <div className="col-md-12">
      
      <h1 className='buttonpro text-center p-4 fs-2 '>Flames Calculator</h1>
      </div>
      </div>
      </div>

<br />
<br />
<br />  

<div className="container">

<div className="row">

<div className="col-md-4 col-sm-12 text-center  ">
<form onSubmit={calculateFlames}>
        <input className='input '
          type="text"
          placeholder="Your Good Name"
          value={name1}
          onChange={(e) => setName1(e.target.value)} 
        />
        <br />
        <br />
        <br />
        <input
          type="text" className='input'
          placeholder="Favourite Person Name"
          value={name2}
          onChange={(e) => setName2(e.target.value)}
        />
        <br />
        <br />

       
        
        <button  type="submit" className="buttonpro pe-5 ps-5  mt-3  btn-center  ">
  <span>
      Find Realtionship 
  </span>
</button>

      </form>
      

  
</div>

<div className="col-md-4 colbg">



</div>

<div className="col-md-4 ">

{result && <p className="result buttonpro   mt-4 p-4 partyimg "> <span className='ms-2'> {name1} </span>  <span className='ms-2'> {name2}</span>          <span className='ms-2'>   {result}</span>         </p>}
  
  <p className='text-warning warmessage text-center mt-4 shadow-lg'>{notification}</p>
  
</div>

</div>

</div>





     
    
      </>




  );
}

export default App;
