import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ExpenseItem from './components/ExpenseItem/ExpenseItem';
import FormData from './components/FormData/FormData';
import { Container,Image,Table } from 'react-bootstrap';
import { useState } from 'react';


const mahasiswaDUMMY = [
  {
    nama: 'Muhammad Fadhlan Aqila',
    nim: '50420186',
    kelas: '3IA01',
  }
]

function App() {

  const [data, setData] = useState(mahasiswaDUMMY)

  const addDataHandler = (data) => {
    setData((prevData) => {
      return [data, ...prevData]
    })
  }

  return (
    <div className="text-center" style={{marginTop:"100px"}}>
      <Container>
        <h2>Mahasiswa</h2>
        <FormData onAddData={addDataHandler} />
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Nama</th>
                    <th>Nim</th>
                    <th>Kelas</th>
                </tr>
            </thead>
            <tbody>
                {data.map(e => {
                  return (
                    <ExpenseItem nama={e.nama} nim={e.nim} kelas={e.kelas}/>
                    )
                })}
            </tbody>
        </Table>
        
        
      </Container>
    </div>
  );
}

export default App;
