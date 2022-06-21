import { IResourceComponentsProps, useApiUrl } from '@pankod/refine-core';
import { Edit, Form, Input, useForm, getValueFromEvent, Upload } from '@pankod/refine-antd';

import 'react-mde/lib/styles/css/react-mde-all.css';

import { IDestination } from 'interfaces';

export const DestinationEdit: React.FC<IResourceComponentsProps> = () => {
  const { formProps, saveButtonProps, form } = useForm<IDestination>();
  const apiUrl = useApiUrl('default');
  console.log({ ...formProps });
  console.log({ form });

  return (
    <Edit saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item
          label="Place"
          name="Place"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Place Option"
          name="PlaceOption"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Price"
          name="Price"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input type="number" />
        </Form.Item>
        <Form.Item
          label="Description"
          name="Description"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input style={{ height: 150 }} />
        </Form.Item>
        <Form.Item label="PictureUrl" name="PictureUrl">
          <Form.Item
            name="imageFilesNormalizer"
            valuePropName="fileList"
            normalize={(value) => {
              if (Array.isArray(value) && value.length === 1 && value[0].status === 'done') {
                const result = value[0].response;
                console.log('apa ini woi', value[0].response);

                if (result.statusCode === 200) {
                  form.setFieldsValue({ PictureUrl: result.data.data });
                  console.log('apa ini woi lagi ya', result.data.data);
                }
              }
              return value;
            }}
            getValueFromEvent={getValueFromEvent}
            noStyle
          >
            <Upload.Dragger
              name="file"
              data={{
                type: 'img',
                category: 'product',
              }}
              action={`${apiUrl}/upload`}
              listType="picture"
              withCredentials={true}
              maxCount={1}
              // multiple
            >
              <p className="ant-upload-text">Drag & drop a file in this area</p>
            </Upload.Dragger>
          </Form.Item>
        </Form.Item>
      </Form>
    </Edit>
  );
};
