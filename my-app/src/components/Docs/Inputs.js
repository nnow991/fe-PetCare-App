import React, { useState, useEffect, Fragment } from "react";
import { Table, Button } from 'semantic-ui-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { faEdit } from '@fortawesome/free-solid-svg-icons'


const ContactTableRow = props => {
  const [data, setData] = useState(props.currentData);

  useEffect(() => {
    setData(props.currentData);
  }, [props]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  return props.editing && props.currentData.id === props.item.id ? (
    <Fragment>
      <Table.Row key={props.item.id}>
        <Table.Cell><div class="ui input">
          <input
            type="text"
            name="date"
            value={data.date}
            onChange={handleInputChange}
          /></div>
        </Table.Cell>
        <Table.Cell><div class="ui input">
          <input
            type="text"
            name="type"
            value={data.type}
            onChange={handleInputChange}
          /></div>
        </Table.Cell>

        <Table.Cell>
          <Button basic color='green'
            onClick={() => props.updatedData(data)}
          >
            Zapisz
          </Button>
          <Button basic color='red'
            onClick={() => props.setEditing(false)}
          >
            Zrezygnuj
          </Button>
        </Table.Cell>
      </Table.Row>
    </Fragment>
  ) : (
      <Fragment>
        <Table.Row key={props.item.id}>
          <Table.Cell>
            {props.item.date}</Table.Cell>

          <Table.Cell>
            {props.item.type}</Table.Cell>


          <Table.Cell>

            <FontAwesomeIcon icon={faEdit} size='2x' color="lightgrey"
              onClick={() => {
                props.editRow(props.item);
              }}
            />
            <FontAwesomeIcon icon={faTrashAlt} size='2x' color="lightgrey"
              onClick={() => props.deleteData(props.item.id)}
            />

          </Table.Cell>
        </Table.Row>
      </Fragment>
    );
};

export default ContactTableRow;
