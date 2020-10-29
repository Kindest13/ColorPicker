import React, { useState, useRef, FC } from 'react';
import useOnClickOutside from 'use-onclickoutside';
import { IProps, ChangeColorHandler } from './types';
import ColorBox from '../colorBox/colorBox';
import Toggler from '../toggler/toggler';
import { presets } from '../../constants';
import styled from 'styled-components';

const Dropdown = styled.div`
  position: relative;
`

const SelectList = styled.ul`
  background-color: #EFEFEF;
  position: absolute;
  padding: 0;
  margin: 0;
  list-style: none;
  top: 130%;
  right: 0;
  width: 150px;
`

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 7px 15px;
  &:hover {
    background-color: #3C46FF;
    cursor: pointer;
    color: #ffffff;
  }
`

const DropdownSelector: FC<IProps> = ({ onColorChange }) => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);
  const list = useRef(null);
  const changeColorHandler: ChangeColorHandler = (event) => {
    toggle();
    onColorChange(event)
  }

  useOnClickOutside(list, () => {
    if(!open) return;
    setOpen(false);
  });

  return (
    <Dropdown ref={list}>
      <Toggler toggle={toggle}>
        <i className={`fas fa-angle-${open ? 'up' : 'down'}`}></i>
      </Toggler>
      {
        open && (
          <SelectList onClick={changeColorHandler}>
            {
              presets.map(({ label, value }) => (
                <ListItem
                  key={label}
                  value={value}>
                    <span>{label}</span>
                  <ColorBox hex={value} />
                </ListItem>
              ))
            }
          </SelectList>
        )
      }
    </Dropdown>
  );
}

export default DropdownSelector;
