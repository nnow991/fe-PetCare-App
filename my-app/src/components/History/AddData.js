import React, { useState, useEffect } from 'react';
import firebase from '../Firebase/firebase'
import { Button, Header, Modal } from 'semantic-ui-react'
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';



const AddData = () => {
  const [data, setData] = useState('');
  const [admissionDate, setAdmissionDate] = useState('');
  const [dischargeDate, setDischargeDate] = useState('');
  const [vet, setVet] = useState('');
  const [doctor, setDoctor] = useState('');
  const [patientsCondition, setPatientsCondition] = useState('');
  const [diagnosis, setDiagnosis] = useState('');
  const [recommendations, setRecommendations] = useState('');



  function onsubmit(e) {
    e.preventDefault()

    firebase.firestore()
      .collection('history')
      .add({
        admissionDate,
        dischargeDate,
        vet,
        doctor,
        patientsCondition,
        diagnosis,
        recommendations
      })

      .then(() => {
        setAdmissionDate('')
        setDischargeDate('')
        setVet('')
        setDoctor('')
        setPatientsCondition('')
        setDiagnosis('')
        setRecommendations('')

      }
      )
  }
  const { t } = useTranslation();

  function handleClick(lang) {
    i18next.changeLanguage(lang)
  }
  return (
    <div>
      <Modal trigger={<Button>{t('Dodaj historię.34')}</Button>}>
        <Modal.Content>
          <Modal.Description>
            <Header>{t('Dodaj historię.34')}</Header>

            <div>
              <form className="doctors" onSubmit={onsubmit}><div>
                <p>{t('Data przyjęcia.12')}:</p>
                <input value={admissionDate} onChange={e => setAdmissionDate(e.currentTarget.value)}></input></div>
                <div>      <p>{t('Data wypisu.13')}:</p>

                  <input value={dischargeDate} onChange={e => setDischargeDate(e.currentTarget.value)}></input></div>

                <p>{t('Lecznica.11')}:</p>
                <div><input value={vet} onChange={e => setVet(e.currentTarget.value)}></input></div>

                <p>{t('Lekarz.14')}:</p>
                <div><input value={doctor} onChange={e => setDoctor(e.currentTarget.value)}></input></div>

                <p>{t('Informacja o stanie pacjenta.15')}:</p>
                <div><input value={patientsCondition} onChange={e => setPatientsCondition(e.currentTarget.value)}></input></div>

                <p>{t('Diagnoza.16')}:</p>
                <div><input value={diagnosis} onChange={e => setDiagnosis(e.currentTarget.value)}></input></div>

                <p>{t('Zalecenia.17')}:</p>
                <div><input value={recommendations} onChange={e => setRecommendations(e.currentTarget.value)}></input></div>


                <button onSubmit={onsubmit}>{t('Zapisz.33')}</button></form>
            </div>
          </Modal.Description>
        </Modal.Content>
      </Modal>


    </div>




  );
}

export default AddData;
