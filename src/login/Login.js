import React,{useState} from 'react';
import loginImage from "../images/login.jpg";
import styled from 'styled-components';
// import tw from "twin.macro";
import db from "../FirebaseConfig";
import { addDoc, collection } from 'firebase/firestore';
import background from "../images/background.jpg"

async function addData(name,email,password){
  try{
    const docRef = await addDoc(collection(db,"todo"),{
      Name:name,
      Email:email,
      Password:password
    });

    console.log("Doc id",docRef.id);
  }catch(error){
    console.log(error);
  }
}


const Wrapper = styled.div.attrs({
  className:'w-5/6 h-3/4 max-w-screen-lg max-h-screen-lg flex justify-center place-items-center'
})`
`

const Section1 = styled.section.attrs({
  className:'w-1/2 h-full rounded-lg'
})``

const Section2 = styled.section.attrs({
  className:'w-1/2 h-full rounded-lg bg-color-blue flex flex-col p-12'
})``

const Section3 = styled.section.attrs({
  className:'passwordStrength h-15 flex'
})``

const Input = styled.input.attrs({
  className:'mt-8 rounded-full h-12 placeholder-blue-600 outline-0 pl-6'
})``

const StrengthMeter = styled.div.attrs({
  className:'h-1'
})`
  flex:0.3; 
`

const Section4 = styled.div.attrs({
  className:'buttons h-20 flex'
})``

const Button = styled.div.attrs({
  className:'border-2 border-slate-900 w-40 h-12 rounded-full'
})``

const BackgroundImage = styled.div`
  width:100vw;
  height:100vh;
  background:url(${background});
  position:absolute;
  z-index:-1;
  background-size:cover;
  background-repeat:no-repeat;
`



const flex1 = {
  flex:0.4
}

const flex2 = {
  flex:0.6
}

const color1 = {
  background:"linear-gradient(90deg,red,orange)"
}

const color2 = {
  background:"linear-gradient(90deg,orange,yellow)"
}

const color3 = {
  background:"linear-gradient(90deg,yellow,green)"
}

const Button1 = {
  background:" linear-gradient(90deg,#ffc002,#fe9a00)",
}

const Button2 = {
  
}

function Login() {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const NameChange = e => {
    setName(e.target.value)
  }
  
  const EmailChange = e => {
    setEmail(e.target.value);
  }

  const PaswordChange = e => {
    setPassword(e.target.value);
  }

  function Submit(){
    console.log("submit");
    addData(Name,Email,Password);

    setName('');
    setEmail('');
    setPassword('');
  }


  return (
    <Wrapper>
      <BackgroundImage/>
      <Section1>
        <img className='bg-cover w-full h-full' src={loginImage} alt="haha"/>
      </Section1>
      <Section2 >
        <div className="box h-15">
          <h1 className='text-white text-6xl font-medium'>Welcome!</h1>
        </div>

        <div className="form h-1/2">
          <form action="" method="post" className='flex flex-col justify-between'>
            <Input type={"text"} placeholder='Your name' onChange={NameChange} value={Name}></Input>
            <Input type={"email"} placeholder='Your Email' onChange={EmailChange} value={Email}></Input>
            <Input type={"password"} placeholder='Create Password' onChange={PaswordChange} value={Password}></Input>
          </form>
        </div>

        <Section3>
          <div className="box flex justify-center items-center" style={flex1}>
            <span>Password strength</span>
          </div>
          <div className="box flex items-center justify-between" style={flex2}>
            <StrengthMeter style={color1}/>
            <StrengthMeter style={color2}/>
            <StrengthMeter style={color3}/>
          </div>
        </Section3>

        <Section4 className='flex items-center justify-around w-'>
          <Button className='border-none flex items-center justify-center cursor-pointer' style={Button1} onClick={Submit}>
            <span>Create account</span>
          </Button>
          <Button className='border-white flex items-center justify-center hover:bg-white cursor-pointer' style={Button2}>
            <span>Sign in</span>
          </Button>
        </Section4>
      </Section2>
    </Wrapper>
  )
}




export default Login;