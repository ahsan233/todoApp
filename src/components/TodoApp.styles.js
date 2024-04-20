import styled from "styled-components";

export const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

export const Input = styled.input`
  margin-bottom: 10px;
  margin-right: 5px; /* Add right margin for spacing */
  padding: 5px;
  font-size: 16px;
`;

export const Button = styled.button`
  padding: 5px 10px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
`;

export const Filters = styled.div`
  margin-bottom: 10px;
  display: flex;
`;

export const FilterButton = styled.button`
  padding: 5px 10px;
  margin-right: 5px; /* Add right margin for spacing */
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
`;

export const SearchInput = styled.input`
  margin-bottom: 10px;
  margin-right: 5px; /* Add right margin for spacing */
  padding: 5px;
  font-size: 16px;
`;

export const TaskList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const TaskItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border: 1px solid #ccc;
  margin-bottom: 5px;
  text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
`;

export const TotalTasks = styled.p`
  margin-top: 20px;
`;
