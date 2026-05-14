import React from 'react';
import CustomDialogTrigger from '../global/customdialogtrigger';
import Trashrestore from './trashrestore';

type props=  {
  children: React.ReactNode; 
}

const Trash = ({ children }:props) => {
  return (
    <CustomDialogTrigger
      header="Trash"
      content={<Trashrestore />}
    >
      {children}
    </CustomDialogTrigger>
  );
};

export default Trash;