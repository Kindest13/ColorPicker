import React, { useState, useRef, FC } from 'react';
import useOnClickOutside from 'use-onclickoutside';
import { IProps, ChangeColorHandler } from './types';
import ColorBox from '../colorBox/colorBox';
import Toggler from '../toggler/toggler';
import { presets } from '../../../constants';
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

const DropdownSelector: FC<IProps> = ({ onChangeColor }) => {
  const [open, setOpen] = useState(false);
  const handleToggle = () => setOpen(!open);
  const list = useRef(null);
  
  const changeColorHandler: ChangeColorHandler = (event) => {
    let list = event.target as HTMLLIElement;
    
    if(list.tagName !== "LI") {
      list = list.parentNode as HTMLLIElement;
    }
    const color = list.getAttribute("value");
    onChangeColor(color);
    handleToggle();
  }

  useOnClickOutside(list, () => {
    if(!open) return;
    setOpen(false);
  });

  return (
    <Dropdown ref={list}>
      <Toggler onToggle={handleToggle}>
        <i className={`fas fa-angle-${open ? 'up' : 'down'}`}></i>
      </Toggler>
      {
        open && (
          <SelectList>
            {
              presets.map(({ label, value }) => (
                <ListItem
                  key={label}
                  value={value}
                  onClick={changeColorHandler}>
                    <span>{label}</span>
                    <ColorBox color={value} />
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
