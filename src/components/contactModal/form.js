import {
  Modal, Form, Input, Menu, Button
} from 'antd'
import './form.css'
import React, { Component } from 'react'
import TextArea from 'antd/lib/input/TextArea'
import axios from 'axios'

const slack = axios.create({baseURL : process.env.REACT_APP_SLACK_BASEURL})

const CollectionCreateForm = Form.create({ name: 'form_in_modal' })(
  // eslint-disable-next-line
  class extends React.Component {
    render() {
      const {
        visible, onCancel, onCreate, form,
      } = this.props;
      const { getFieldDecorator } = form;
      return (
        <Modal
          visible={visible}
          title="Contacter l'UTT Net Group"
          okText="Envoyer"
          cancelText="Annuler"
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Form layout="vertical">
            <Form.Item label="Prénom Nom">
              {getFieldDecorator('name', {
                rules: [{ required: true, message: 'Veuillez saisir votre prénom et votre nom' }],
              })(
                <Input />
              )}
            </Form.Item>
            <Form.Item label="Adresse e-mail">
              {getFieldDecorator('email', {
                rules: [{ required: true, message: 'Veuillez saisir une adresse e-mail valide', pattern:  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ }],
              })(
                <Input type='email' />
              )}
            </Form.Item>
            <Form.Item label="Message">
              {getFieldDecorator('message', { rules: [{ required: true, message: 'Veuillez saisir un message' }]})(<TextArea type="textarea" />)}
            </Form.Item>
          </Form>
        </Modal>
      );
    }
  }
);

class CollectionsPage extends React.Component {

  handleCreate = () => {
    const form = this.formRef.props.form;
    form.validateFields(async (err, values) => {
      if (err) {
        return;
      }
      try {
        let result = await slack.post(
          process.env.REACT_APP_SLACK_CHANNEL,
          {
            text : `Message envoyé depuis ung.utt.fr \n Nom : ${values.name} \n Adresse mail : ${values.email} \n Message : ${values.message}`
          },
          {
            headers : {'Content-type': 'application/x-www-form-urlencoded'}
          }
        );
      }
      catch(err) {console.error(err)}
      form.resetFields();
      this.props.handleCancel();
    });
  }

  saveFormRef = (formRef) => {
    this.formRef = formRef;
  }

  render() {
    return (
        <CollectionCreateForm
          wrappedComponentRef={this.saveFormRef}
          visible={this.props.visible}
          onCancel={this.props.handleCancel}
          onCreate={this.handleCreate}
        />
    );
  }
}

export default CollectionsPage