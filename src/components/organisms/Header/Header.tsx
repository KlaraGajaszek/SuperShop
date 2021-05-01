import React from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { showModal } from '../../../store/actions/setModalState'
import { ModalName } from '../../../modals/modalNames'
import { Button } from '../../atoms/FormButton/Button'

export type HeaderType = {
  link?: string
  title: string
}

export const Header = () => {
  let history = useHistory()
  const dispatch = useDispatch()

  function handleClick(route: string) {
    history.push(route)
  }

  const data = {
    modal: ModalName.ADD_PRODUCT_FORM as ModalName.ADD_PRODUCT_FORM,
    payload: { name: 'test' },
  }

  return (
    <div className="flex flex-wrap items-center justify-between px-12 h-20 ring-1 ring-pink-500 bg-pink-20">
      <div className="w-full md:w-auto">Super Shop</div>
      <div className="flex ">
        <div className="flex-2 mr-5">
          <Button
            content="Add product"
            size="sm"
            textColor="white"
            bgColor="gray-500"
            onClick={() => {
              dispatch(showModal(data))
            }}
          />
        </div>
        <div className="flex-2">
          <Button
            content="Sign in"
            size="sm"
            textColor="white"
            bgColor="gray-500"
            onClick={() => handleClick('/signin')}
          />
        </div>
      </div>
    </div>
  )
}
