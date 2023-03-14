
import React from "react";
import { setFilterState } from "redux/actions";
import { StyledFilterInput, StyledFilterInputTitle, StyledFilterLabel } from "./Filter.styled";

import {  getFilterState } from "redux/selectors";
import { useDispatch, useSelector } from "react-redux";



const Filter = () => {
  const filterState = useSelector(getFilterState)
  const dispatch = useDispatch();

  const onChangeFilter = ({ target: { value } }) => {
    dispatch(setFilterState(value))
  }

  return (
    <StyledFilterLabel>
      <StyledFilterInputTitle>Find contacts by name</StyledFilterInputTitle>
      <StyledFilterInput
        name="filter"
        value={filterState}
        onChange={onChangeFilter}
        type="text"
      />
    </StyledFilterLabel>
  )
}

export { Filter };
