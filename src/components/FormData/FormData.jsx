import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';



function FormData(props){

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [namaMahasiswa, setNamaMahasiswa] = useState('')
    const [nimMahasiswa, setNimMahasiswa] = useState('')
    const [kelasMahasiswa, setKelasMahasiswa] = useState('')
    const [tanggalMahasiswa, setTanggalMahasiswa] = useState('')



    const namaChangeHandler = (e) =>{
        setNamaMahasiswa(e.target.value)
    }
    const nimChangeHandler = (e) =>{
        setNimMahasiswa(e.target.value)
    }
    const kelasChangeHandler = (e) =>{
        setKelasMahasiswa(e.target.value)
    }
    const tanggalChangeHandler = (e) =>{
        setTanggalMahasiswa(e.target.value)
    }
    const submitHandler = (e) => {
        e.preventDefault()
        console.log(namaMahasiswa,nimMahasiswa,kelasMahasiswa)
        const mahasiswaData = {
            nama : namaMahasiswa,
            nim : nimMahasiswa,
            kelas : kelasMahasiswa
        }

        props.onAddData(mahasiswaData)

        // props.onSaveExpenseData(mahasiswaData)
        setNamaMahasiswa('')
        setNimMahasiswa('')
        setKelasMahasiswa('')
    }

  
    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Tambah Data
            </Button>

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
            </Modal>
        </>
    )
}



export default FormData