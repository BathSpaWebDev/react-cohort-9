import logo from './logo.svg';
import './App.scss';
import Box from './components/Box'; //imports the Box.js 
import Form from './components/Form'; //imports the index.js from the Form folder
import Accordion from './components/Accordion';

function App() {
  return (
    <div className="App">
          <h1>Cohort 9 work</h1>

          {/* <Box>This is the first box</Box> */}

          {/* <Form /> */}

          <Accordion title="How do I contact you?"/>
          <Accordion title="What is the best way to use your product?"/>
          <Accordion title="Is there a phone number?"/>

    </div>
  );
}

export default App;
