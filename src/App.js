import authFetch from "./Interceptors";
import { useState } from "react";

function App() {
  sessionStorage.setItem("Phone number", "8380860010");

  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [push, setPush] = useState(false);

  const getNumber = async () => {
    const res = await authFetch("/getNumber");
    console.log(res.data);
    setPhone(res.data);
    setPush(true);
  };

  const getName = async () => {
    if (push) {
      const res = await authFetch("/getName");
      setName(res.data);
      console.log(res);
    } else setName("Error!");
  };

  return (
    <div className="App">
      <br/>
      <div className="row ">
        <div className="col-2 ">
          <input
            type="button" value="GET NUMBER" className="btn btn-black" onClick={getNumber} />
        </div>
        <div className="col-1">
          <input type="button" value="GET NAME" className="btn btn-black" onClick={getName} />
        </div>
      </div>
      <br/>

      <div className="col-4 text-success"> <b>{phone}</b> </div>
      <div className={push === false ? "col-4 text-danger" : "col-4 text-success"}> <b>{name}</b></div>
    </div>
  );
}

export default App;
