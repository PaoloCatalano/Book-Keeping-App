import styled from "styled-components";

const Wrapper = styled.article`
  background: var(--white);
  border-radius: var(--borderRadius);
  display: grid;
  grid-template-rows: 1fr auto;
  box-shadow: var(--shadow-2);
  border-right: 1px solid #168d6a;

  header {
    padding: 1rem 1.5rem;
    border-bottom: 1px solid var(--grey-100);
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    h5 {
      letter-spacing: 0;
    }
  }
  .main-icon {
    width: 120px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: space-around;
    align-items: baseline;
    justify-content: center;
    gap: 3px;
    background: var(--primary-500);
    border-radius: var(--borderRadius);
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--white);
    margin-right: 2rem;

    span {
      font-size: 15px;
      font-weight: 300;
    }
  }
  .info {
    h5 {
      margin-bottom: 0.25rem;
    }
    p {
      margin: 0;
      text-transform: capitalize;
      color: var(--grey-400);
      letter-spacing: var(--letterSpacing);
    }
  }
  .food {
    background: #fcefc7;
    color: #e9b949;
  }
  .restaurant {
    background: #e0e8f9;
    color: #647acb;
    border: 1px solid #647acb;
  }
  .fun {
    color: #d66a6a;
    background: #ffeeee;
    border: 1px solid #d66a6a;
  }
  .bills {
    color: #107181;
    background: #a2dae3;
  }
  .others {
    color: #168d6a;
    background: #a6e9d5;
  }
  .content {
    padding: 1rem 1.5rem;
  }
  .content-center {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 0.5rem;
    @media (min-width: 576px) {
      grid-template-columns: 1fr 1fr;
    }
    @media (min-width: 992px) {
      grid-template-columns: 1fr;
    }
    @media (min-width: 1120px) {
      grid-template-columns: 1fr 1fr;
    }
  }

  .status {
    border-radius: var(--borderRadius);
    text-transform: capitalize;
    letter-spacing: var(--letterSpacing);
    text-align: center;
    width: 100px;
    height: 30px;
  }
  footer {
    margin-top: 1rem;
  }
  .actions {
    display: flex;
    justify-content: space-between;
  }
  .edit-btn,
  .delete-btn {
    letter-spacing: var(--letterSpacing);
    cursor: pointer;
    height: 30px;
  }
  .edit-btn {
    color: var(--green-dark);
    background: var(--green-light);
    margin-right: 0.5rem;
  }
  .delete-btn {
    color: var(--red-dark);
    background: var(--red-light);
  }
  &:hover .actions {
    visibility: visible;
  }
`;

export default Wrapper;
