import React from 'react';
import styled from 'styled-components';
import { Form, Input, Button } from 'antd';

const Box = styled.div`
  padding: 20px;
`;

class FirstForm extends React.Component {
  state = {
    name: '',
    email: '',

    validateStatus: {
      name: '',
      email: ''
    },
    help: {
      name: '',
      email: ''
    }
  };

  changeName = e => {
    this.setState({ name: e.target.value }, this.validateName);
  };

  validateName = () => {
    const { name } = this.state;
    const field = 'name';

    if (!name) {
      this.setValidateInfo(field, 'error', '请输入用户名');
      return false;
    }
    if (name.length > 10) {
      this.setValidateInfo(field, 'error', '用户名超过了10个字符');
      return false;
    }

    this.resetValidateInfo(field);
    return true;
  };

  changeEmail = e => {
    this.setState({ email: e.target.value }, this.validateEmail);
  };

  validateEmail = () => {
    const { email } = this.state;
    const field = 'email';

    if (!email) {
      this.setValidateInfo(field, 'error', '请输入邮箱地址');
      return false;
    }
    if (!/.+@.+\.com/.test(email)) {
      this.setValidateInfo(field, 'error', '请输入正确的邮箱地址');
      return false;
    }

    this.resetValidateInfo(field);
    return true;
  };

  setValidateInfo = (field, status = '', tip = '') => {
    this.setState({
      validateStatus: {
        ...this.state.validateStatus,
        [field]: status
      },
      help: {
        ...this.state.help,
        [field]: tip
      }
    });
  };

  resetValidateInfo = field => {
    this.setValidateInfo(field);
  };

  validate = () => {
    const statuses = [];
    statuses.push(this.validateName());

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
    const { name, email, validateStatus, help } = this.state;

    return (
      <Box>
        <Form>
          <Form.Item
            label="用户名"
            required
            validateStatus={validateStatus.name}
            help={help.name}
          >
            <Input
              value={name}
              onChange={this.changeName}
              placeholder="用户名长度最长为10个字符"
            />
          </Form.Item>

          <Form.Item
            label="邮箱"
            validateStatus={validateStatus.email}
            help={help.email}
          >
            <Input
              value={email}
              onChange={this.changeEmail}
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
