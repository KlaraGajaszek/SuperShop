/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { LinkHeader } from '../../../utils/data'
import { showModal } from '../../../store/actions/setModalState'
import { ModalName } from '../../../modals/modalNames'

export type HeaderType = {
  link?: string
  title: string
}

const Header = () => {
  let history = useHistory()
  const dispatch = useDispatch()

  const handleClick = () => {
    history.push('/home')
  }

  const data = {
    modal: ModalName.ADD_PRODUCT_FORM as ModalName.ADD_PRODUCT_FORM,
    payload: { name: 'test' },
  }

  return (
    <div className="flex flex-wrap items-center justify-between px-12 h-32  relative bg-yellow-700">
      <div className="w-full md:w-auto">
        <a
          href="#"
          className="block text-center text-black text-lg no-underline"
        >
          Exultant Collective
        </a>
      </div>

      <ul className="flex-1 flex justify-center md:justify-end list-reset">
        {LinkHeader.map((link: any) => (
          <li>
            <a
              href={link.route}
              className="text-sm text-gray-800 no-underline hover:text-black ml-8"
            >
              {link.title}
            </a>
          </li>
        ))}
        <li
          className="ml-4 pb-5 hidden md:inline"
          onClick={() => dispatch(showModal(data))}
        >
          <button className="text-sm font-bold px-4 py-2 no-underline text-white bg-black hover:bg-gray-800">
            Login
          </button>
        </li>
      </ul>
    </div>
  )
}

export default Header
