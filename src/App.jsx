import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ExpenseItem from './ExpenseItem/ExpenseItem';
import FormData from './FormData/FormData';
import { Container,Image,Table } from 'react-bootstrap';
import { useState,useEffect } from 'react';


const mahasiswaDUMMY = [
  {
    nama: 'Muhammad Fadhlan Aqila',
    nim: '50420186',
    kelas: '3IA01',
    angkatan : '2020',
    mahasiswa : 'aktif',
  }
]

function App() {

  const [data, setData] = useState(mahasiswaDUMMY)
  const [filterData, setFilterData] = useState([])
  const [trigger,setTrigger] = useState(true) 

  useEffect(() => {
    setData(data)
  },[data])

  const addDataHandler = (data) => {
    setData((prevData) => {
      return [data, ...prevData]
    })
  }

  const filterDataHandler = (angkatan) => {
    let filterData = data.filter(e => {
      return angkatan === e.angkatan
    })
    
    setFilterData(filterData)
    setTrigger(angkatan === '0')
  }

  const deleteDataHandler = (nim) => {
    let searchNim = data.findIndex((e) => e.nim === nim)

    data.splice(searchNim, 1);
    setData([...data])
  }


  return (
    <div className="text-center" style={{marginTop:"100px"}}>
      <Container>
        <h2>Mahasiswa Tadika Mesra</h2>
        <FormData onAddData={addDataHandler} onFilterData={filterDataHandler} />
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th width={'20%'}>Nama</th>
                    <th width={'20%'}>Nim</th>
                    <th width={'20%'}>Kelas</th>
                    <th width={'10%'}>Mahasiswa</th>
                    <th width={'10%'}>Angkatan</th>
                    <th width={'20%'}>Angkatan</th>
                </tr>
            </thead>
            <tbody>
                {filterData.length === 0 ? 
                  (trigger) ? data.map((e) => {
                    return <ExpenseItem nama={e.nama} nim={e.nim} kelas={e.kelas} angkatan={e.angkatan} mahasiswa={e.mahasiswa} deleteAction={deleteDataHandler}/>
                  }) :  <tr>
                            <td colSpan={6}>Data tidak ditemukan</td>
                        </tr>
                  : filterData.map((e) => {
                    return <ExpenseItem nama={e.nama} nim={e.nim} kelas={e.kelas} angkatan={e.angkatan} mahasiswa={e.mahasiswa} deleteAction={deleteDataHandler}/>
                  })
                }
            </tbody>
        </Table>
        
        
      </Container>
    </div>
  );
}

export default App;
