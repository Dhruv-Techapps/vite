import { ADDON_CONDITIONS } from '@dhruv-techapps/acf-common';
import { Alert, Button, Card, Col, Form, InputGroup, Modal, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import { FormEvent, useEffect } from 'react';
import { useTimeout } from '../_hooks/message.hooks';
import { useAppDispatch, useAppSelector } from '../hooks';
import { ValueExtractorPopover } from '../popover';
import { actionAddonSelector, setActionAddonMessage, switchActionAddonModal, syncActionAddon, updateActionAddon } from '../store/config';
import { getFieldNameValue, updateForm } from '../util/element';
import { AddonRecheck } from './addon/recheck';
import { AddonValueExtractorFlags } from './addon/value-extractor-flags';

const FORM_ID = 'addon';

const AddonModal = () => {
  const { t } = useTranslation();
  const { visible, message, error, addon } = useAppSelector(actionAddonSelector);

  const dispatch = useAppDispatch();

  useTimeout(() => {
    dispatch(setActionAddonMessage());
  }, message);

  const onUpdate = (e) => {
    const update = getFieldNameValue(e, addon);
    if (update) {
      dispatch(updateActionAddon(update));
    }
  };

  useEffect(() => {
    updateForm(FORM_ID, addon);
  }, [addon]);

  const onReset = () => {
    dispatch(syncActionAddon());
    onHide();
  };

  const onHide = () => {
    dispatch(switchActionAddonModal());
  };

  const onShow = () => {
    //:TODO
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    form.checkValidity();
    dispatch(syncActionAddon(addon));
  };

  return (
    <Modal show={visible} size='lg' onHide={onHide} onShow={onShow} data-testid='addon-modal'>
      <Form id={FORM_ID} onSubmit={onSubmit} onReset={onReset}>
        <Modal.Header closeButton>
          <Modal.Title as='h6'>{t('modal.addon.title')}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className='text-muted'>{t('modal.addon.info')}</p>
          <Card>
            <Card.Body>
              <Row className='mb-3'>
                <Col md={6} sm={12}>
                  <Form.Group controlId='addon-element'>
                    <Form.Label>
                      {t('modal.addon.elementFinder')} <small className='text-danger'>*</small>
                    </Form.Label>
                    <Form.Control type='text' placeholder='Element Finder' defaultValue={addon.elementFinder} onBlur={onUpdate} list='elementFinder' name='elementFinder' required />
                    <Form.Control.Feedback type='invalid'>{t('error.elementFinder')}</Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col md={6} sm={12}>
                  <Form.Group controlId='addon-condition'>
                    <Form.Label>
                      {t('modal.addon.condition')} <small className='text-danger'>*</small>
                    </Form.Label>
                    <Form.Select value={addon.condition} onChange={onUpdate} name='condition' required>
                      {Object.entries(ADDON_CONDITIONS).map((condition) => (
                        <option key={condition[1]} value={condition[1]}>
                          {condition[0]}
                        </option>
                      ))}
                    </Form.Select>
                    <Form.Control.Feedback type='invalid'>{t('error.condition')}</Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md sm={12}>
                  <Form.Group controlId='addon-value'>
                    <Form.Label>
                      {t('modal.addon.value')} <small className='text-danger'>*</small>
                    </Form.Label>
                    <Form.Control type='text' placeholder='Value' defaultValue={addon.value} onBlur={onUpdate} name='value' required list='value' />
                    <Form.Control.Feedback type='invalid'>{t('error.value')}</Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col md sm={12}>
                  <Form.Group controlId='addon-value-extractor' className='addon-value-extractor'>
                    <Form.Label>{t('modal.addon.valueExtractor')}</Form.Label>
                    <InputGroup>
                      <Form.Control type='text' placeholder='Value Extractor' defaultValue={addon.valueExtractor} name='valueExtractor' list='valueExtractor' onBlur={onUpdate} />
                      {addon?.valueExtractor ? (
                        <AddonValueExtractorFlags />
                      ) : (
                        <InputGroup.Text>
                          <ValueExtractorPopover />
                        </InputGroup.Text>
                      )}
                    </InputGroup>
                    <Form.Control.Feedback type='invalid'>{t('error.valueExtractor')}</Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <div hidden={!(addon.elementFinder && addon.condition && addon.value)} data-testid='addon-recheck'>
            <AddonRecheck />
          </div>
          {error && (
            <Alert className='mt-3' variant='danger'>
              {error}
            </Alert>
          )}
          {message && (
            <Alert className='mt-3' variant='success'>
              {message}
            </Alert>
          )}
        </Modal.Body>
        <Modal.Footer className='justify-content-between'>
          <Button type='reset' variant='outline-primary' className='px-5' data-testid='action-addon-reset'>
            {t('common.clear')}
          </Button>
          <Button type='submit' variant='primary' className='px-5' data-testid='action-addon-save'>
            {t('common.save')}
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export { AddonModal };
