import styled from "styled-components";

export const Wrapper = styled.ul`
  margin: 2rem;
  padding: 2rem;
  border-radius: 5px;
  background-color: black;
  flex-grow: 1;
  overflow-y: auto;
  scrollbar-width: thin;
`;

export const Item = styled.li`
  font-size: 1rem;
  color: #dee0e4;
  display: flex;
`;

export const Title = styled.span`
  font-weight: 600;
  margin-right: .7rem;
`;

export const Value = styled.span`
`;

