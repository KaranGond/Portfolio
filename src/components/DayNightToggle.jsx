import React from 'react';
import styled from 'styled-components';

const ToggleContainer = styled.div`
  position: fixed;
  top: 10px;
  right: 10px;
`;

const ToggleLabel = styled.label`
  display: inline-block;
  position: relative;
  width: 60px;
  height: 34px;
`;

const ToggleInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + span {
    background-color: #f39c12;
  }

  &:focus + span {
    box-shadow: 0 0 1px #f39c12;
  }

  &:checked + span:before {
    transform: translateX(26px);
  }
`;

const ToggleSpan = styled.span`
  border-radius: 34px;
  display: block;
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
  &:before {
    position: absolute;
    content: '';
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
  }
`;

const DayNightToggle = ({ checked, onChange }) => {
  return (
    <ToggleContainer>
      <ToggleLabel>
        <ToggleInput type="checkbox" checked={checked} onChange={onChange} />
        <ToggleSpan />
      </ToggleLabel>
    </ToggleContainer>
  );
};

export default DayNightToggle;
