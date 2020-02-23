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
  }

  changeName = (e) => {
    this.setState({ name: e.target.value });
  }

  changeEmail = (e) => {
    this.setState({ email: e.target.value });
  }

  save = () => {
    const { name, email } = this.state;
    console.log('保存的数据如下：', {
      name,
      email
    });
  }


  render() {
    const { name, email } = this.state;

    return (
      <Box>
        <Form>
          <Form.Item label="用户名" required>
            <Input value={name} onChange={this.changeName} />
          </Form.Item>

          <Form.Item label="邮箱">
            <Input value={email} onChange={this.changeEmail} />
          </Form.Item>

          <Form.Item label="地区">
            <Input />
          </Form.Item>
        </Form>

        <div>
          <Button type="primary" onClick={this.save}>保存</Button>
        </div>
      </Box>
    );
  }
}

export default FirstForm;
