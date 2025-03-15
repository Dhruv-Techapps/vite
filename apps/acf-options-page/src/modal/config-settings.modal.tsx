import React from 'react';

import { LOAD_TYPES, START_TYPES, URL_MATCH, defaultHotkey } from '@dhruv-techapps/acf-common';
import { Card, Col, Form, FormControl, InputGroup, Modal, Row } from 'react-bootstrap';
import { Trans, useTranslation } from 'react-i18next';
import { useTimeout } from '../_hooks/message.hooks';
import { useAppDispatch, useAppSelector } from '../hooks';
import { HotkeyPopover } from '../popover';
import { configSettingsSelector, selectedConfigSelector, setConfigSettingsMessage, switchConfigSettingsModal, updateConfigSettings } from '../store/config';
import { REGEX } from '../util';
import { getFieldNameValue } from '../util/element';

const FORM_ID = 'config-settings';

const ConfigSettingsModal = () => {
  const { t } = useTranslation();

  const { visible, message } = useAppSelector(configSettingsSelector);
  const config = useAppSelector(selectedConfigSelector);
  const dispatch = useAppDispatch();

  useTimeout(() => {
    dispatch(setConfigSettingsMessage());
  }, message);

  const handleClose = () => {
    dispatch(switchConfigSettingsModal());
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    let value = '';
    if (e.ctrlKey) {
      value += 'Ctrl + ';
    } else if (e.altKey) {
      value += 'Alt + ';
    }
    if (e.shiftKey) {
      value += 'Shift + ';
    }
    if (value) {
      if (e.keyCode >= 65 && e.keyCode < 91) {
        value += String.fromCharCode(e.keyCode);
        if (e.currentTarget) {
          e.currentTarget.value = value;
        }
      }
    }
    return false;
  };

  const onUpdate = (e) => {
    const update = getFieldNameValue(e, config);
    if (update) {
      dispatch(updateConfigSettings(update));
    }
  };

  const onBypassUpdate = () => {
    const bypass = {};
    document.querySelectorAll("[id^='bypass.']").forEach((element) => {
      const { name, checked } = element as HTMLInputElement;
      bypass[name] = checked;
    });
    dispatch(updateConfigSettings({ name: 'bypass', value: bypass }));
  };

  const onShow = () => {
    //:TODO
  };

  if (!config) {
    return null;
  }

  return (
    <Modal show={visible} size='lg' onHide={handleClose} onShow={onShow} data-testid='config-settings-modal'>
      <Form id={FORM_ID}>
        <Modal.Header closeButton>
          <Modal.Title as='h6'>{t('modal.configSettings.title')}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card className='mb-2'>
            <Card.Body>
              <Row>
                <Col md={12} sm={12}>
                  {t('modal.configSettings.start')}&nbsp;
                  <Form.Check
                    inline
                    type='radio'
                    id='startAuto'
                    name='startType'
                    value={START_TYPES.AUTO}
                    onChange={onUpdate}
                    checked={config.startType === START_TYPES.AUTO}
                    label={t('modal.configSettings.auto')}
                  />
                  <Form.Check
                    inline
                    type='radio'
                    id='startManual'
                    name='startType'
                    onChange={onUpdate}
                    value={START_TYPES.MANUAL}
                    checked={config.startType === START_TYPES.MANUAL}
                    label={t('modal.configSettings.manual')}
                  />
                  <small>
                    <ul className='mb-0 mt-2'>
                      <li>
                        <Trans i18nKey='modal.configSettings.autoHint' components={{ b: <b /> }} />
                      </li>
                      <li>
                        <Trans i18nKey='modal.configSettings.manualHint' components={{ b: <b /> }} />
                      </li>
                    </ul>
                  </small>
                </Col>
              </Row>
              <hr />
              <Row>
                <Col md={12} sm={12} hidden={config.startType === START_TYPES.AUTO}>
                  <InputGroup>
                    <InputGroup.Text>{t('modal.configSettings.hotkey')}</InputGroup.Text>
                    <FormControl placeholder={defaultHotkey} onKeyDown={onKeyDown} defaultValue={config.hotkey || defaultHotkey} name='hotkey' onBlur={onUpdate} pattern={REGEX.HOTKEY} />
                    <InputGroup.Text>
                      <HotkeyPopover />
                    </InputGroup.Text>
                  </InputGroup>
                </Col>
                <Col md={12} sm={12} hidden={config.startType === START_TYPES.MANUAL}>
                  {t('modal.configSettings.extensionLoad')}&nbsp;
                  <Form.Check
                    inline
                    type='radio'
                    id='loadTypeWindow'
                    value={LOAD_TYPES.WINDOW}
                    onChange={onUpdate}
                    checked={config.loadType === LOAD_TYPES.WINDOW}
                    name='loadType'
                    label={t('modal.configSettings.window')}
                  />
                  <Form.Check
                    inline
                    type='radio'
                    id='loadTypeDocument'
                    value={LOAD_TYPES.DOCUMENT}
                    onChange={onUpdate}
                    checked={config.loadType === LOAD_TYPES.DOCUMENT}
                    name='loadType'
                    label={t('modal.configSettings.document')}
                  />
                  <small>
                    <ul className='mb-0 mt-2'>
                      <li>
                        <Trans i18nKey='modal.configSettings.windowHint' components={{ b: <b /> }} />
                      </li>
                      <li>
                        <Trans i18nKey='modal.configSettings.documentHint' components={{ b: <b /> }} />
                      </li>
                    </ul>
                  </small>
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <Card className='mb-2'>
            <Card.Body>
              <Row>
                <Col md='12' sm='12'>
                  <InputGroup>
                    <InputGroup.Text>Google Sheets ID</InputGroup.Text>
                    <FormControl name='spreadsheetId' defaultValue={config.spreadsheetId} autoComplete='off' onBlur={onUpdate} placeholder='Google Sheets ID' />
                  </InputGroup>
                  <small className='text-muted'>
                    https://docs.google.com/spreadsheets/d/<code>1J2OcSNJsnYQCcQmA4K9Fhtv8yqvg0NouB--H4B0jsZA</code>/
                  </small>
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <Card className='mb-2'>
            <Card.Body>
              <Row>
                <Col md='12' sm='12'>
                  <InputGroup>
                    <InputGroup.Text>{t('modal.configSettings.urlMatch')}</InputGroup.Text>
                    <Form.Select value={config.url_match} onChange={onUpdate} name='url_match' required>
                      {Object.entries(URL_MATCH).map((condition) => (
                        <option key={condition[1]} value={condition[1]}>
                          {t(`modal.configSettings.${condition[0].toLowerCase()}`)}
                        </option>
                      ))}
                    </Form.Select>
                  </InputGroup>
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <Card className='mb-2'>
            <Card.Body>
              <Row>
                <Col md='12' sm='12'>
                  <Form.Label>Bypass browser default</Form.Label>
                  <div className='d-flex'>
                    <Form.Check inline type='switch' id='bypass.alert' value='alert' onChange={onBypassUpdate} checked={config.bypass?.alert || false} name='alert' label=' alert' />
                    <Form.Check inline type='switch' id='bypass.confirm' value='confirm' onChange={onBypassUpdate} checked={config.bypass?.confirm || false} name='confirm' label='confirm' />
                    <Form.Check inline type='switch' id='bypass.prompt' value='prompt' onChange={onBypassUpdate} checked={config.bypass?.prompt || false} name='prompt' label='prompt' />
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Modal.Body>
        {message && (
          <Modal.Footer>
            <span className='text-success'>{message}</span>
          </Modal.Footer>
        )}
      </Form>
    </Modal>
  );
};
export { ConfigSettingsModal };
