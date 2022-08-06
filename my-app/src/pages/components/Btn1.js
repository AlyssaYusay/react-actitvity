

const Btn1 = (prop) => {
    return (
      <div className="text-center">
        <button onClick={() => { alert('You clicked on Button ' + prop.number); }}>Button{prop.number}</button>
      </div>
    )
  };
  
  export default Btn1;