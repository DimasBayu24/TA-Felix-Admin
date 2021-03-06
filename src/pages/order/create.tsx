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
          label="Fullname"
          name="Fullname"
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
                label: 'Not Done',
                value: 'Not_Done',
              },
              {
                label: 'Done',
                value: 'Done',
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
