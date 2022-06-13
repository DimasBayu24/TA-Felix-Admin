import { IResourceComponentsProps, useApiUrl } from '@pankod/refine-core';
import {
  Edit,
  Form,
  getValueFromEvent,
  Input,
  Select,
  Upload,
  useForm,
  useSelect,
} from '@pankod/refine-antd';

import 'react-mde/lib/styles/css/react-mde-all.css';

import { ICategory, IProduct } from 'interfaces';

export const ProductEdit: React.FC<IResourceComponentsProps> = () => {
  const { formProps, saveButtonProps, form } = useForm<IProduct>();
  const { selectProps: categorySelectProps } = useSelect<ICategory>({
    resource: 'product-category',
    fetchSize: 100,
  });
  const apiUrl = useApiUrl('default');
  return (
    <Edit saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item
          label="Name"
          name="name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Brand"
          name="brand"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Category"
          name="categoryId"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select {...categorySelectProps} />
        </Form.Item>
        <Form.Item
          label="Description"
          name="description"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Weight"
          name="weight"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input type="number" />
        </Form.Item>
        <Form.Item label="Image" name="imageId">
          <Form.Item
            name="imageFilesNormalizer"
            valuePropName="fileList"
            normalize={(value) => {
              if (Array.isArray(value) && value.length === 1 && value[0].status === 'done') {
                const { result } = value[0].response;

                if (Array.isArray(result) && result.length > 0) {
                  form.setFieldsValue({ imageId: result[0].id });
                }
              }
              return value;
            }}
            getValueFromEvent={getValueFromEvent}
            noStyle
          >
            <Upload.Dragger
              name="files"
              data={{
                type: 'img',
                category: 'user-avatar',
              }}
              action={`${apiUrl}/api/v1/general/upload-files`}
              listType="picture"
              withCredentials={true}
              maxCount={1}
              // multiple
            >
              <p className="ant-upload-text">Drag & drop a file in this area</p>
            </Upload.Dragger>
          </Form.Item>
        </Form.Item>
        <Form.Item
          label="Owner Email"
          name="ownerEmail"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Stock"
          name="stock"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input type="number" />
        </Form.Item>
        <Form.Item
          label="Price"
          name="price"
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
