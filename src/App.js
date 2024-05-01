import { Container,Content, Row} from "./styles";
import Input from "./components/Input";
import Button from "./components/Button";
import { useState } from "react";



const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0')
  const [firstNumber, setFirstNumber] = useState('0')
  const [operation, setOperation] = useState('')

  const HandleEquals = () =>{
    if(firstNumber !== '0' && operation !== '' && currentNumber !== '0'){
      switch(operation){
        case "+":
          handleSum();
        break;
        case '-':
          handleSub();
        break;
        case '*':
          handleMulti();
        break;
        case '/':
          handleDiv();
        break;
        default:
          break;
      }
    }

  }

  const handleSum = () =>{
    if(firstNumber === '0'){
      setFirstNumber(currentNumber)
      setCurrentNumber('0')
      setOperation('+')
    }else{
      const sum = Number(firstNumber) + Number(currentNumber)
      setCurrentNumber(String(sum))
      setOperation('')
    }
  }
  const handleDiv = () =>{
    if(firstNumber === '0'){
      setFirstNumber(currentNumber)
      setCurrentNumber('0')
      setOperation('/')
    }else{
      const sum = Number(firstNumber) / Number(currentNumber)
      setCurrentNumber(String(sum))
      setOperation('')
    }
  }
  const handleMulti = () =>{
    if(firstNumber === '0'){
      setFirstNumber(currentNumber)
      setCurrentNumber('0')
      setOperation('*')
    }else{
      const sum = Number(firstNumber) * Number(currentNumber)
      setCurrentNumber(String(sum))
      setOperation('')
    }
  }

  const handleSub = () =>{
    if(firstNumber === '0'){
      setFirstNumber(currentNumber)
      setCurrentNumber('0')
      setOperation('-')
    }else{
      const sum = Number(firstNumber) - Number(currentNumber)
      setCurrentNumber(String(sum))
      setOperation('')
    }
  }

  const handleAddNumber= (number) =>{
    setCurrentNumber(
      prev => `${prev === '0' ? '' : prev}${number}`)
  }

  const  handleClear = () => {
    setCurrentNumber('0')
    setFirstNumber('0')
  }
  console.log(HandleEquals);
  return (
    <>
    <Container>
        <Content>
          <Input value={currentNumber}/>
          <Row>
            <Button 
            label="x"
            onClick={handleMulti}>
            </Button>
            <Button 
            label="/"
            onClick={handleDiv}>
            </Button>
            <Button 
            label="C"
            onClick={handleClear}> 
            </Button>
            <Button 
            label="X"
            >
            </Button>
          </Row>
          <Row>
            <Button 
            label="7"
            onClick={() => handleAddNumber('7')}>
            </Button>
            <Button 
            label="8"
            onClick={() => handleAddNumber('8')}>
            </Button>
            <Button 
            label="9"
            onClick={() => handleAddNumber('9')}>
            </Button>
            <Button 
            label="-"
            onClick={handleSub}>
            </Button>
          </Row>
          <Row>
            <Button 
            label="4"
            onClick={() => handleAddNumber('4')}>
            </Button>
            <Button 
            label="5"
            onClick={() => handleAddNumber('5')}>
            </Button>
            <Button 
            label="6"
            onClick={() => handleAddNumber('6')}>
            </Button>
            <Button 
            label="+"
            onClick={handleSum}>
            </Button>
          </Row>
          <Row>
            <Button 
            label="1"
            onClick={() => handleAddNumber('1')}>
            </Button>
            <Button 
            label="2"
            onClick={() => handleAddNumber('2')}>
            </Button>
            <Button
             label="3"
             onClick={() => handleAddNumber('3')}>
            </Button>
            <Button 
                label="=" 
                onClick={HandleEquals}>
            </Button>
          </Row>
        </Content>
    </Container>
    </>
  );
}

export default App;
