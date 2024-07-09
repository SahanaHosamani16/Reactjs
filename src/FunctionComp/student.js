import React,{useState} from 'react'

export default function Student() {
    const[name, setName] = useState("Sahana");
    const [age, setAge]=useState(22);
    function sayHello(){
        setName("hello"+ name);
    }
    function growUp(){
        setAge(age+1);
    }

    
  return (
    <div>
        <h1>{name}</h1>
        <h1>{age}</h1>
    <button onClick={sayHello}>Say Hello</button>
    <button onClick={growUp}>growup</button>
</div>
  )
}
