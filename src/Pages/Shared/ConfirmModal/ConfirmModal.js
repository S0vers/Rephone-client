import React from 'react';

const ConfirmModal = ({ title, message, closeModal, modalData, successAction, successButtonName }) => {
    return (
        <div>
            <input type='checkbox' id='confirm-Modal' className='modal-toggle'></input>
            <div className='modal'>
                <div className="modal-box">
                    <h3 className='font-bold text-lg'>{title}</h3>
                    <p className='py-4'>{message}</p>
                    <div className="modal-action">
                        <button onClick={closeModal} className='btn btn-primary'>Cancel</button>
                        <label
                            onClick={() => successAction(modalData)}
                            htmlFor="confirm-Modal"
                            className="btn btn-warning">{successButtonName}</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmModal;