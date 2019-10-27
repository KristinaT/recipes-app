import styled, { css } from "styled-components";

const reusableStyles = css``;

export const RecipeDiv = styled.div`
  margin: 1rem;
  display: flex;
  flex-direction: column;
  width: 50vw;

  ${reusableStyles};
`;

export const TestP = styled(RecipeDiv.withComponent("p"))``;

export const RecipeHeader = styled.header`
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 1rem;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
`;

export const RecipeLabel = styled.label`
  margin: 0.5rem;
  font-size: 1rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 4px;
  text-align: center;
`;

export const RecipeInput = styled.input`
  margin-left: 1rem;
  border: none;
  outline: none;
  background: none;
  display: block;
  width: 100%;
  margin-top: 0.5rem;
  padding-bottom: 0.5rem;
  font-size: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.4);
  text-align: center;
`;

export const RecipeTextarea = styled.textarea`
  margin-left: 0.5rem;
  height: 10rem;
  outline: none;
  background: none;
  font-family: "Open Sans", Helvetica, Arial, sans-serif;
  display: block;
  width: 100%;
  margin-top: 0.5rem;
  padding: 2rem;
  font-size: 1rem;
  text-align: center;
`;

export const RecipeButton = styled.input`
  width: 6rem;
  margin: 1rem;
  color: white;
  font-size: 15px;
  background-color: #50617a;
  width: 200px;
  height: 60px;
  border: none;
  border-radius: 5px;
  align-self: center;
  text-transform: uppercase;

  :hover,
  :focus {
    cursor: pointer;
  }
`;
