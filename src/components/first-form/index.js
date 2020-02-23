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
    this.setState({ email: e.target.value });
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

  save = () => {
    const { name, email } = this.state;
    console.log('保存的数据如下：', {
      name,
      email
    });
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

          <Form.Item label="邮箱">
            <Input value={email} onChange={this.changeEmail} />
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
