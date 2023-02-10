import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {deleteUser} from '../../services/apiServices';
import { toast } from 'react-toastify';

const ModalDeleteUser = (props) => {

  const {show, setShow , dataDelete} = props;

  const handleClose = () => setShow(false);
  
  const handleSumitDeleteUser = async() => {
    let data = await deleteUser( dataDelete.id);
        console.log("component res: " , data)
        if(data && data.EC === 0){
          toast.success(data.EM);
          handleClose();
        //   await props.fetchListUsers();
        props.setCurrentPage(1);
        await props.fetchListUserWithPaginate(1);
        }
        if(data && data.EC !==0){
            toast.error(data.EM);
            
          }
  }
  console.log(props.dataDelete)

  return (
    <>
      
      <Modal 
      show={show} 
      onHide={handleClose}
      backdrop="static"
      >
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete the User?</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure to delete this use. <b> { 
        dataDelete && dataDelete.email ? dataDelete.email : ""}
        </b></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={() => {handleSumitDeleteUser()}}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalDeleteUser;