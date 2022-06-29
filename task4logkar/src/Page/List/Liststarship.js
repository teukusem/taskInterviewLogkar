import React, { useState } from "react";
import { ListGroup, Container, Spinner, Pagination } from "react-bootstrap";
import { data2 } from "../../component/Dummydata";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";

function Liststarship() {
  const title = "List Ship";
  document.title = "StarWars | " + title;

  const navigate = useNavigate();
  const [pagination, setPagination] = useState(1);

  let { data: shipList = [], isLoading } = useQuery(
    ["shipCache", pagination],
    async () => {
      const response = await axios.get(
        `https://swapi.dev/api/starships?page=${pagination}`
      );
      console.log(response.data.results);
      return response.data.results;
    }
  );

  const onChangePagination = (number) => {
    setPagination(number);
  };

  const PaginationItem = () => {
    let active = pagination;
    let items = [];
    for (let number = 1; number <= 4; number++) {
      items.push(
        <Pagination.Item
          onClick={() => onChangePagination(number)}
          key={number}
          active={number === active}
        >
          {number}
        </Pagination.Item>
      );
    }
    return items;
  };

  return (
    <div>
      {isLoading ? (
        <div className="App">
          <Spinner animation="border" variant="warning" />
        </div>
      ) : (
        <div className="text-light">
          <Container className="mt-4">
            <h2 className="text-light mb-4">List Ship</h2>
            <ListGroup>
              {shipList.map((item, index) => (
                <ListGroup.Item
                  variant="dark"
                  key={index}
                  action
                  onClick={() => navigate("/detail-ship?id=" + item.url)}
                >
                  {item.name}
                </ListGroup.Item>
              ))}
            </ListGroup>
            <Pagination className="justify-content-end mt-2">
              <PaginationItem />
            </Pagination>
          </Container>
        </div>
      )}
    </div>
  );
}

export default Liststarship;
