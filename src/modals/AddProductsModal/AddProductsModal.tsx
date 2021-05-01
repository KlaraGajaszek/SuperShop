import React from 'react'

import { Modal } from '../../components/moleculs/Modal/Modal'
import { closeModal } from '../../store/actions/setModalState'
import { useDispatch } from 'react-redux'
import { FormPage } from '../../pages/Form/FormPage'

export const AddProductsModal = () => {
  const dispatch = useDispatch()

  return (
    <Modal
      content={'Add product'}
      onClose={() => {
        dispatch(closeModal())
      }}
    >
      <FormPage />
    </Modal>
  )
}
