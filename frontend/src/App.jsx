import { useState, useRef, useEffect } from "react";
import Navbar from "./components/Navbar";
import EventForm from "./components/EventForm";
import GeneratedAssets from "./components/GeneratedAssets";

function App() {
  const [assets, setAssets] = useState(null);
  const resultsRef = useRef(null);

  // scroll when assets update
  useEffect(() => {
    if (assets && resultsRef.current) {
      resultsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [assets]);

  return (
    <div>
      <Navbar />
      <EventForm onGenerate={setAssets} />

      <div ref={resultsRef}>
        {assets && <GeneratedAssets assets={assets} />}
      </div>
    </div>
  );
}

export default App;