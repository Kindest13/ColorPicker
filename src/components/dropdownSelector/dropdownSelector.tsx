import React, { useState, useRef, FC } from 'react';
import useOnClickOutside from 'use-onclickoutside';
import { IProps, ChangeColorHandler } from './types';
import ColorBox from '../colorBox/colorBox';
import { presets } from '../../constants';
import styled from 'styled-components';

const Dropdown = styled.div`
  position: relative;
  flex-grow: 1;
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
const Toggler = styled.button`
  padding: 0.5em 0.75em;
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
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
      <Toggler onClick={toggle}>
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
