import { IResourceComponentsProps, useOne, useShow } from '@pankod/refine-core';
import { Show, Typography } from '@pankod/refine-antd';

import { IDestination } from 'interfaces';

const { Title, Text } = Typography;

export const DestinationShow: React.FC<IResourceComponentsProps> = () => {
  const { queryResult } = useShow<IDestination>();
  const { data, isLoading } = queryResult;
  const record = data?.data;

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>Place</Title>
      <Text>{record?.Place}</Text>

      <Title level={5}>Place Option</Title>
      <Text>{record?.PlaceOption}</Text>

      <Title level={5}>Price</Title>
      <Text>{record?.Price}</Text>

      <Title level={5}>Description</Title>
      <Text>{record?.Description}</Text>

      <Title level={5}>Picture URL</Title>
      <Text>{record?.PictureUrl}</Text>
      <img src={record?.PictureUrl} />
    </Show>
  );
};
