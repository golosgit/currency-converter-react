import Form from "./Form";
import DateTime from "./DateTime";

function App() {
  return (
    <div className="container">
      <Form date={<DateTime />} />
    </div>
  );
}

export default App;
