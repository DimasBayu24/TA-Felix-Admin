import { IResourceComponentsProps } from '@pankod/refine-core';
import { Edit, Form, Input, useForm } from '@pankod/refine-antd';

import 'react-mde/lib/styles/css/react-mde-all.css';

import { IOrder } from 'interfaces';

export const OrderEdit: React.FC<IResourceComponentsProps> = () => {
  const { formProps, saveButtonProps, form } = useForm<IOrder>();
  console.log({ ...formProps });
  console.log({ form });

  return (
    <Edit saveButtonProps={saveButtonProps}>
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
          <Input />
        </Form.Item>
        <Form.Item
          label="Total Price"
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
          <Input type="number" />
        </Form.Item>
      </Form>
    </Edit>
  );
};
