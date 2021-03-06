import React, { useState, useEffect, Fragment } from "react";
import { Table, Button } from 'semantic-ui-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { Icon, Modal } from 'semantic-ui-react'
import { useTranslation } from 'react-i18next';


const ContactTableRow = props => {
  const [data, setData] = useState(props.currentData);

  useEffect(() => {
    setData(props.currentData);
  }, [props]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };


  const { t } = useTranslation();

  return props.editing && props.currentData.id === props.item.id ? (
    <Fragment>
      <Table.Row key={props.item.id}>
        <Table.Cell><div className="ui input">
          <input
            type="text"
            name="firstname"
            value={data.firstname}
            onChange={handleInputChange}
            placeholder={t('Imię.2')}
          /></div>
        </Table.Cell>
        <Table.Cell><div className="ui input">
          <input
            type="text"
            name="surname"
            value={data.surname}
            onChange={handleInputChange}
            placeholder={t('Nazwisko.10')}
          /></div>
        </Table.Cell>
        <Table.Cell><div className="ui input">
          <input
            type="text"
            name="vetClinic"
            value={data.vetClinic}
            onChange={handleInputChange}
            placeholder={t('Lecznica.11')}

          /></div>
        </Table.Cell>
        <Table.Cell>
          <Button basic color='green'
            onClick={() => props.updatedData(data)}
          >
            {t('Zapisz.33')}
          </Button>
          <Button basic color='red'
            onClick={() => props.setEditing(false)}
          >
            {t('Zrezygnuj.44')}
          </Button>
        </Table.Cell>
      </Table.Row>
    </Fragment>
  ) : (
      <Fragment>
        <Table.Row key={props.item.id}>
          <Table.Cell>
            {props.item.firstname}</Table.Cell>

          <Table.Cell>
            {props.item.surname}</Table.Cell>

          <Table.Cell>
            {props.item.vetClinic}</Table.Cell>

          <Table.Cell>
            <FontAwesomeIcon icon={faEdit} size='2x' color="lightgrey"
              onClick={() => {
                props.editRow(props.item);
              }}
            />
            <Modal trigger={<FontAwesomeIcon icon={faTrashAlt} size='2x' color="lightgrey" />
            } closeIcon>
              <Modal.Content>
                <p>
                  {t('Czy na pewno chcesz usunąć dane?.45')}
                </p>
              </Modal.Content>
              <Modal.Actions>
                <Button onClick={() => props.deleteData(props.item.id)} color='green' >
                  <Icon name='checkmark' /> {t('Tak.46')}
                </Button>
              </Modal.Actions>
            </Modal>
          </Table.Cell>
        </Table.Row>
      </Fragment>
    );
};

export default ContactTableRow;
