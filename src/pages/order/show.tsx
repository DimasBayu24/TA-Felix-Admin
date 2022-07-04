import { IResourceComponentsProps, useOne, useShow } from '@pankod/refine-core';
import { Show, Typography } from '@pankod/refine-antd';

import { IOrder } from 'interfaces';

const { Title, Text } = Typography;

export const OrderShow: React.FC<IResourceComponentsProps> = () => {
  const { queryResult } = useShow<IOrder>();
  const { data, isLoading } = queryResult;
  const record = data?.data;

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>ID</Title>
      <Text>{record?.ID}</Text>

      <Title level={5}>Full Name</Title>
      <Text>{record?.Fullname}</Text>

      <Title level={5}>Status</Title>
      <Text>{record?.Status}</Text>

      <Title level={5}>Total Price</Title>
      <Text>{record?.TotalPrice}</Text>

      <Title level={5}>Transportation ID</Title>
      <Text>{record?.TransportationID}</Text>

      <Title level={5}>Transportation Qty</Title>
      <Text>{record?.TransportationQty}</Text>

      <Title level={5}>Payment Picture</Title>
      <Text>{record?.PictureUrl}</Text>
      <img src={record?.PictureUrl} />
    </Show>
  );
};
