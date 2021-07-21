import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Content = styled.div`
  width:100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export const Container = styled.div`
  width:100%;
  padding: 20px;
  text-align: center;
`;

export const Title = styled.h1`
text-align: center;
font-weight: bold;
font-family: sans-serif;
color: #000;
width:100%;
font-size: 24pt;
`;

export const Label = styled.label`
text-align: left;
font-family: sans-serif;
color: #555;
width:100%;
font-size: 14pt;
`;

export const Input = styled.input`
  border: 1px solid #ddd;
  height: 3rem;
  padding: 0 0.5rem;
  border-radius: .25rem;
  width: 98%;
  margin-bottom:5px;
  font-size: 14pt;
`;

export const Button = styled.button`
  cursor: pointer;
  border: 1px solid #000;
  height: 3rem;
  width: 100%;
  padding: 0 0.5rem;
  border-radius: .25rem;
  background: #000;
  color: #fff;
  font-weight: bold;
  font-size: 14pt;
  &:focus,
  &:active{
    outline: none;
    box-shadow: none;
  }
`;

export const LinkButton = styled(Link)`
  cursor: pointer;
  border: 1px solid #000;
  height: 3rem;
  width: 100%;
  padding: 0 0.5rem;
  border-radius: .25rem;
  background: #000;
  color: #fff;
  font-weight: bold;
  font-size: 14pt;
  &:focus,
  &:active{
    outline: none;
    box-shadow: none;
  }
`;

export const Table = styled.table`
  font-family: sans-serif;
  border-collapse: collapse;
  width: 100%;
`;

export const TableTd = styled.td`
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
`;

export const TableTr = styled.tr`
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
`;