import Pagination from 'react-bootstrap/Pagination';
import styled from 'styled-components';

const Pag = styled(Pagination)`
    .page-item.active .page-link {
        background-color: hsl(45, 100%, 50%);
        border-color: hsl(45, 100%, 50%);
    }
`;

const HelloPagi = () => {
    
    return <Pag><Pagination className="mt-5">
      <Pagination.First />
      <Pagination.Prev />
      <Pagination.Item active>{1}</Pagination.Item>
      <Pagination.Item>{2}</Pagination.Item>
      <Pagination.Item>{3}</Pagination.Item>
      <Pagination.Next />
      <Pagination.Last />
    </Pagination>
    </Pag>
    
}

export default HelloPagi;