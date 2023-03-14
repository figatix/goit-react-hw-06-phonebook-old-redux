
export const setFilterState = text => {
  return {
    type: 'filter/setFilterState',
    payload: text,
  };
};

export const addNewContact = (contact) =>{
  return {
    type: 'contacts/addNewContact',
    payload: contact
  }
}

export const deleteContact = (productId)=>{
  return {
    type: 'contacts/deleteContact',
    payload: productId,
  }
}
