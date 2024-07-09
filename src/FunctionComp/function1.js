const Function1=({number,addToNumber,multiplyNumber})=>{
    addToNumber=(number)=>
        {
            number=number+1;
        }
        multiplyNumber=(number)=>
            {
                number=number*number;
            }
            return(
               
                <div>
                    
                    
                    <button onClick={addToNumber(10)}>Addnumber</button>
                    <button onClick={multiplyNumber(20)}>Multiply number</button>
                </div>
            )
}
export default Function1;