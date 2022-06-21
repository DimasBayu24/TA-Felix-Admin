import { IResourceComponentsProps, useOne, useShow } from '@pankod/refine-core';
import { Show, Typography } from '@pankod/refine-antd';

import { IProductPackage } from 'interfaces';

const { Title, Text } = Typography;

export const ProductPackageShow: React.FC<IResourceComponentsProps> = () => {
  const { queryResult } = useShow<IProductPackage>();
  const { data, isLoading } = queryResult;
  const record = data?.data;

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>Package</Title>
      <Text>{record?.Package}</Text>

      <Title level={5}>Destination City</Title>
      <Text>{record?.DestinationCity}</Text>

      <Title level={5}>Description</Title>
      <Text>{record?.Description}</Text>

      <Title level={5}>Price</Title>
      <Text>{record?.PricePackage}</Text>

      <Title level={5}>TransportationID</Title>
      <Text>{record?.TransportationID}</Text>

      <Title level={5}>Picture URL</Title>
      <Text>{record?.PictureUrl}</Text>
      <img src={record?.PictureUrl} />
    </Show>
  );
};
