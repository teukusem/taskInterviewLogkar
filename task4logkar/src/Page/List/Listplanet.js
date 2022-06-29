import React, { useState, useContext, useCallback } from "react";
import { ListGroup, Container, Pagination, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";

function Listplanet() {
  const title = "List Planet";
  document.title = "StarWars | " + title;

  const navigate = useNavigate();
  const [pagination, setPagination] = useState(1);

  let { data: planetList = [], isLoading } = useQuery(
    ["planetCache", pagination],
    async () => {
      const response = await axios.get(
        `https://swapi.dev/api/planets?page=${pagination}`
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
    for (let number = 1; number <= 6; number++) {
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
        <Container className="mt-4">
          <h2 className="text-light mb-4">List Planet</h2>
          <ListGroup>
            {planetList.map((item, index) => (
              <ListGroup.Item
                key={index}
                variant="dark"
                action
                onClick={() => navigate("/detail-planet?id=" + item.url)}
              >
                {`Planet ${item.name}`}
              </ListGroup.Item>
            ))}
          </ListGroup>
          <Pagination className="justify-content-end mt-2">
            <PaginationItem />
          </Pagination>
        </Container>
      )}
    </div>
  );
}

export default Listplanet;
