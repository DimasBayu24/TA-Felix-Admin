import { IResourceComponentsProps, useApiUrl } from '@pankod/refine-core';
import { Create, Form, Input, useForm, Select } from '@pankod/refine-antd';

import 'react-mde/lib/styles/css/react-mde-all.css';

import { IOrder } from 'interfaces';

export const OrderCreate: React.FC<IResourceComponentsProps> = () => {
  const { formProps, saveButtonProps, form } = useForm<IOrder>();
  return (
    <Create saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item
          label="User ID"
          name="UserID"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Status"
          name="Status"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select
            options={[
              {
                label: 'not done',
                value: 'not_done',
              },
              {
                label: 'done',
                value: 'done',
              },
            ]}
          />
        </Form.Item>
        <Form.Item
          label="TotalPrice"
          name="TotalPrice"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input type="number" />
        </Form.Item>
        <Form.Item
          label="Transportation ID"
          name="TransportationID"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Transportation Qty"
          name="TransportationQty"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Create>
  );
};
