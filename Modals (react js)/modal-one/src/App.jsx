import { useState } from "react";
import Popup from "./components/Popup";
import "./App.css";

function App() {
  const [isOpen, setOpen] = useState(false);

  return (
    <main>
      <button className="btn-open" onClick={() => setOpen(true)}>
        Proceed to continue
      </button>

      {isOpen && <Popup closeModal={setOpen} />}
    </main>
  );
}

export default App;
