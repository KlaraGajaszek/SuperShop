/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { LinkHeader } from '../../../utils/data';
import { showModal } from '../../../store/actions/setModalState';
import { ModalName } from '../../../modals/modalNames';

export type HeaderType = {
  link?: string;
  title: string;
};

const Header = () => {
  let history = useHistory();
  const dispatch = useDispatch();

  const handleClick = () => {
    history.push('/home');
  };

  const data = {
    modal: ModalName.ADD_PRODUCT_FORM as ModalName.ADD_PRODUCT_FORM,
    payload: { name: 'test' },
  };

  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-gray-500 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white"
              href="/"
            >
              LOGO
            </a>
          </div>
          <div
            className={'lg:flex flex-grow items-center'}
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              {LinkHeader.map((link) => (
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href={link.route}
                  key={link.key}
                >
                  {link.title}
                </a>
              ))}
              <button
                className=" focus:outline-none"
                onClick={() => dispatch(showModal(data))}
              >
                <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white ">
                  Add Product
                </a>
              </button>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
