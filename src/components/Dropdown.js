import dropdown from "react-bootstrap/Dropdown";

export default function Dropdown(props) {
  console.log(props.elements);
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {props.elements.map((element) => {
          <Dropdown.Item href={element.id}>{element.name}</Dropdown.Item>;
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
}
