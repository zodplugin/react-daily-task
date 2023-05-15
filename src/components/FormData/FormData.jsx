import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container'
import Stack from 'react-bootstrap/Stack'



function FormData(props){

    // Modal Add data
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // Modal filter data
    const [showFilter, setShowFilter] = useState(false);
    const handleCloseFilter = () => setShow(false);
    const handleShowFilter = () => setShow(true);


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
        console.log(namaMahasiswa,nimMahasiswa,kelasMahasiswa,angkatanMahasiswa)
        
        const mahasiswaData = {
            nama : namaMahasiswa,
            nim : nimMahasiswa,
            kelas : kelasMahasiswa,
            angkatan : angkatanMahasiswa,
        }

        props.onAddData(mahasiswaData)

        setNamaMahasiswa('')
        setNimMahasiswa('')
        setKelasMahasiswa('')
    }

  
    return (
        <>
            <Container>
                <Stack direction="horizontal" >
                    <Form.Select className="ms-auto mx-2 mb-2" onChange={filterHandler} style={{ width:'30vw' }} aria-label="Default select example">
                        <option value="0">Filter Pilih Tahun</option>
                        <option value="2020">2020</option>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                        <option value="2023">2023</option>
                    </Form.Select>
                    <Button variant="primary" onClick={handleShow} className='mb-2'>
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
                            <Form.Label>Angkatan</Form.Label>
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

            {/* <Modal show={showFilter} onHide={handleCloseFilter}>
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
                            <Form.Label>Tanggal Masuk</Form.Label>
                            <Form.Control type="text" placeholder="Masukan Kelas Mahasiswa"  onChange={tanggalChangeHandler} value={tanggalMahasiswa}/>
                            <Form.Text className="text-muted">
                            </Form.Text>
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
            </Modal> */}
        </>
    )
}



export default FormData