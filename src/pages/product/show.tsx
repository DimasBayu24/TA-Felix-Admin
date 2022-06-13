import { IResourceComponentsProps, useOne, useShow } from '@pankod/refine-core';
import { Show, Typography } from '@pankod/refine-antd';

import { ICategory, IProduct } from 'interfaces';

const { Title, Text } = Typography;

export const ProductShow: React.FC<IResourceComponentsProps> = () => {
  const { queryResult } = useShow<IProduct>();
  const { data, isLoading } = queryResult;
  const record = data?.data;

  const { data: productCategoryData } = useOne<ICategory>({
    resource: 'product-category',
    id: record?.categoryId ?? '',
    queryOptions: {
      enabled: !!record?.categoryId,
    },
  });

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>Name</Title>
      <Text>{record?.name}</Text>

      <Title level={5}>Brand</Title>
      <Text>{record?.brand}</Text>

      <Title level={5}>Category</Title>
      <Text>{productCategoryData?.data.title}</Text>

      <Title level={5}>Description</Title>
      <Text>{record?.description}</Text>

      <Title level={5}>weight</Title>
      <Text>{record?.weight}</Text>

      <Title level={5}>imageId</Title>
      <Text>{record?.imageId}</Text>

      <Title level={5}>Owner Email</Title>
      <Text>{record?.ownerEmail}</Text>

      <Title level={5}>Stock</Title>
      <Text>{record?.stock}</Text>

      <Title level={5}>Price</Title>
      <Text>{record?.price}</Text>
    </Show>
  );
};
