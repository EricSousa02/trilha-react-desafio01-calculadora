import Input from './components/Input';
import Button from './components/Button';
import { Container, Content, Row } from './styles';
import { useState } from 'react';

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');
  const [previousResult, setPreviousResult] = useState(null);

  const handleOnClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('');
    setPreviousResult(null);
  };

  const handleAddNumber = (num) => {
    setCurrentNumber((prev) => `${prev === '0' ? '' : prev}${num}`);
  };

  const handleOperation = (op) => {
    if (previousResult !== null) {
      setFirstNumber(String(previousResult));
      setPreviousResult(null);
    } else {
      setFirstNumber(currentNumber);
    }

    setCurrentNumber('0');
    setOperation(op);
  };

  const performOperation = (op) => {
    const operations = {
      '+': (a, b) => a + b,
      '-': (a, b) => a - b,
      '*': (a, b) => a * b,
      '/': (a, b) => a / b,
    };

    const result = operations[op](
      Number(firstNumber),
      Number(currentNumber)
    );

    setPreviousResult(result);
    setCurrentNumber(String(result));
    setOperation('');
  };

  const handleEquals = () => {
    if (firstNumber !== '0' && operation !== '' && currentNumber !== '0') {
      performOperation(operation);
    }
  };

  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button label="c" onClick={handleOnClear} />
          <Button label="0" onClick={() => handleAddNumber('0')} />
          <Button label="/" onClick={() => handleOperation('/')} />
          <Button label="*" onClick={() => handleOperation('*')} />
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')} />
          <Button label="8" onClick={() => handleAddNumber('8')} />
          <Button label="9" onClick={() => handleAddNumber('9')} />
          <Button label="-" onClick={() => handleOperation('-')} />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')} />
          <Button label="5" onClick={() => handleAddNumber('5')} />
          <Button label="6" onClick={() => handleAddNumber('6')} />
          <Button label="+" onClick={() => handleOperation('+')} />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')} />
          <Button label="2" onClick={() => handleAddNumber('2')} />
          <Button label="3" onClick={() => handleAddNumber('3')} />
          <Button label="=" onClick={handleEquals} />
        </Row>
      </Content>
    </Container>
  );
};

export default App;
