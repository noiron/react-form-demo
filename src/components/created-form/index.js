/**
 * 使用 antd 提供的 Form.create() 来处理表单数据的收集
 */
import React from 'react';
import styled from 'styled-components';
import { Form, Input, Button } from 'antd';

const Box = styled.div`
  padding: 20px;
`;

class CreatedForm extends React.Component {
  save = async () => {
    const { form } = this.props;

    form.validateFields(async (err, values) => {
      if (err) {
        console.log(err);
        return;
      }
      const formData = form.getFieldsValue();
      console.log('提交的数据如下：', formData);
    });
  };

  validateName = (rule, val, callback) => {
    if (!val) {
      return callback('请输入用户名')
    }
    if (val.length > 10) {
      return callback('用户名超过了10个字符');
    }
    callback();
  };

  validateEmail = (rule, val, callback) => {
    if (!val) {
      return callback('请输入邮箱地址')
    }
    if (!/.+@.+\.com/.test(val)) {
      return callback('请输入正确的邮箱地址');
    }
    return callback();
  };

  render() {
    const { form } = this.props;
    const { getFieldDecorator } = form;

    return (
      <Box>
        <Form>
          <Form.Item label="用户名">
            {getFieldDecorator('name', {
              rules: [
                { required: true, validator: this.validateName },
              ]
            })(<Input />)}
          </Form.Item>

          <Form.Item label="邮箱">
            {getFieldDecorator('email', {
              rules: [
                { required: true, validator: this.validateEmail },
              ]
            })(<Input />)}
          </Form.Item>

          <Form.Item>
            <Button type="primary" onClick={this.save}>
              保存
            </Button>
          </Form.Item>
        </Form>
      </Box>
    );
  }
}

export default Form.create()(CreatedForm);
