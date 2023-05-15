import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container'
import Stack from 'react-bootstrap/Stack'
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

function FormData(props){

    // Modal Add data
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

 

    // Modal filter data
    const [showFilter, setShowFilter] = useState(false);
    const handleCloseFilter = () => setShow(false);
    const handleShowFilter = () => setShow(true);
    const [checked, setChecked] = useState(false);

    const [namaMahasiswa, setNamaMahasiswa] = useState('')
    const [nimMahasiswa, setNimMahasiswa] = useState('')
    const [kelasMahasiswa, setKelasMahasiswa] = useState('')
    const [angkatanMahasiswa, setAngkatanMahasiswa] = useState('')



    const namaChangeHandler = (e) =>{
        setNamaMahasiswa(e.target.value)
    }
    const nimChangeHandler = (e) =>{
        setNimMahasiswa(e.target.value)
    }
    const kelasChangeHandler = (e) =>{
        setKelasMahasiswa(e.target.value)
    }

    const filterHandler = (e) => {
        props.onFilterData(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        

        const mahasiswaData = {
            nama : namaMahasiswa,
            nim : nimMahasiswa,
            kelas : kelasMahasiswa,
            angkatan : angkatanMahasiswa,
            mahasiswa : checked ? 'aktif':'tidak-aktif'
        }
        
        props.onAddData(mahasiswaData)
        console.log(namaMahasiswa,nimMahasiswa,kelasMahasiswa,angkatanMahasiswa,mahasiswaData.mahasiswa)
        
        setNamaMahasiswa('')
        setNimMahasiswa('')
        setKelasMahasiswa('')
        setChecked(false)
        
    }

  
    return (
        <>
            <Container className="my-5 py-5 bg-secondary">
                <Stack direction="horizontal" >
                    <h2 className="text-white">Action </h2>
                    <Form.Select className="ms-auto mx-2" onChange={filterHandler} style={{ width:'30vw' }} aria-label="Default select example">
                        <option value="0">Filter Pilih Tahun</option>
                        <option value="2020">2020</option>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                        <option value="2023">2023</option>
                    </Form.Select>
                    <Button variant="primary" onClick={handleShow}>
                        Tambah Data
                    </Button>
                </Stack>
            </Container>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Tambah Data Mahasiswa</Modal.Title>
                </Modal.Header>
                <Form onSubmit={submitHandler}>
                    <Modal.Body>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Nama Mahasiswa</Form.Label>
                            <Form.Control type="text" placeholder="Masukan Nama Mahasiswa" onChange={namaChangeHandler} value={namaMahasiswa}/>
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>NIM</Form.Label>
                            <Form.Control type="text" placeholder="Masukan NIM Mahasiswa"  onChange={nimChangeHandler} value={nimMahasiswa}/>
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Kelas</Form.Label>
                            <Form.Control type="text" placeholder="Masukan Kelas Mahasiswa"  onChange={kelasChangeHandler} value={kelasMahasiswa}/>
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Kelas</Form.Label>
                            <Form.Select className="ms-auto mx-2" onChange={e => { setAngkatanMahasiswa(e.target.value)}} aria-label="Default select example" required>
                                <option>Pilih Angkatan</option>
                                <option value="2020">2020</option>
                                <option value="2021">2021</option>
                                <option value="2022">2022</option>
                                <option value="2023">2023</option>
                            </Form.Select>
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                        <Form.Group>
                        <Form.Label>Mahasiswa</Form.Label>
                            <br></br>
                            <ToggleButton
                                className="mb-2"
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-primary"
                                checked={checked}
                                value="1"
                                onChange={(e) => setChecked(e.currentTarget.checked)}
                            >
                                Aktif
                            </ToggleButton>
                        </Form.Group>
                        
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button type='submit' variant="primary" onClick={handleClose}>
                            Submit
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>

            
        </>
    )
}



export default FormData