import React from 'react';
import styled from 'styled-components';
import { Form, Input, Button } from 'antd';

const Box = styled.div`
  padding: 20px;
`;

class FirstForm extends React.Component {
  state = {
    name: {
      value: '',
      validateStatus: '',
      help: ''
    },
    email: {
      value: '',
      validateStatus: '',
      help: ''
    }
  };

  validateName = () => {
    const { name } = this.state;
    const field = 'name';

    if (!name.value) {
      this.setValidateInfo(field, 'error', '请输入用户名');
      return false;
    }
    if (name.value.length > 10) {
      this.setValidateInfo(field, 'error', '用户名超过了10个字符');
      return false;
    }

    this.resetValidateInfo(field);
    return true;
  };

  validateEmail = () => {
    const { email } = this.state;
    const field = 'email';

    if (!email.value) {
      this.setValidateInfo(field, 'error', '请输入邮箱地址');
      return false;
    }
    if (!/.+@.+\.com/.test(email.value)) {
      this.setValidateInfo(field, 'error', '请输入正确的邮箱地址');
      return false;
    }

    this.resetValidateInfo(field);
    return true;
  };

  changeFieldValue = (field, value, callback) => {
    this.setState(
      {
        [field]: { value }
      },
      callback || null
    );
  };

  setValidateInfo = (field, status = '', tip = '') => {
    this.setState({
      [field]: {
        value: this.state[field].value,
        validateStatus: status,
        help: tip
      }
    });
  };

  resetValidateInfo = field => {
    this.setValidateInfo(field);
  };

  validate = () => {
    const statuses = [];
    statuses.push(this.validateName());
    statuses.push(this.validateEmail());

    return statuses.every(o => o);
  };

  save = () => {
    const { name, email } = this.state;

    const status = this.validate();
    if (!status) return;

    console.log('保存的数据如下：', {
      name,
      email
    });
    alert('数据已提交');
  };

  render() {
    console.log('render');
    const { name, email } = this.state;

    return (
      <Box>
        <Form>
          <Form.Item
            label="用户名"
            required
            validateStatus={name.validateStatus}
            help={name.help}
          >
            <Input
              value={name.value}
              onChange={e =>
                this.changeFieldValue('name', e.target.value, this.validateName)
              }
              placeholder="用户名长度最长为10个字符"
            />
          </Form.Item>

          <Form.Item
            label="邮箱"
            required
            validateStatus={email.validateStatus}
            help={email.help}
          >
            <Input
              value={email.value}
              onChange={e =>
                this.changeFieldValue(
                  'email',
                  e.target.value,
                  this.validateEmail
                )
              }
              placeholder="请输入正确的邮箱地址"
            />
          </Form.Item>

          <Form.Item label="地区">
            <Input />
          </Form.Item>
        </Form>

        <div>
          <Button type="primary" onClick={this.save}>
            保存
          </Button>
        </div>
      </Box>
    );
  }
}

export default FirstForm;
