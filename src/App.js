import Form from "./Form";
import DateTime from "./DateTime";
import Container from "./Container";

function App() {
  return (
    <Container>
      <Form date={<DateTime />} />
    </Container>
  )
}

export default App;
