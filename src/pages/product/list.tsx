import { IResourceComponentsProps, useMany } from '@pankod/refine-core';
import {
  List,
  Table,
  TextField,
  useTable,
  getDefaultSortOrder,
  Space,
  EditButton,
  DeleteButton,
  ShowButton,
} from '@pankod/refine-antd';
import { ICategory, IProduct } from 'interfaces';

export const ProductList: React.FC<IResourceComponentsProps> = () => {
  const { tableProps, sorter } = useTable<IProduct>({
    initialSorter: [
      {
        field: 'id',
        order: 'desc',
      },
    ],
  });

  const categoryIds = tableProps?.dataSource?.map((item) => item.categoryId) ?? [];
  const { data: categoriesData, isLoading } = useMany<ICategory>({
    resource: 'product-category',
    ids: categoryIds,
    queryOptions: {
      enabled: categoryIds.length > 0,
    },
  });

  return (
    <List>
      <Table {...tableProps} rowKey="id">
        <Table.Column
          dataIndex="id"
          key="id"
          title="ID"
          render={(value) => <TextField value={value} />}
          defaultSortOrder={getDefaultSortOrder('id', sorter)}
          sorter
        />
        <Table.Column
          dataIndex="name"
          key="name"
          title="Name"
          render={(value) => <TextField value={value} />}
          defaultSortOrder={getDefaultSortOrder('name', sorter)}
          sorter
        />
        <Table.Column
          dataIndex="brand"
          key="brand"
          title="Brand"
          render={(value) => <TextField value={value} />}
          defaultSortOrder={getDefaultSortOrder('brand', sorter)}
          sorter
        />
        <Table.Column
          dataIndex="categoryId"
          title="Category"
          render={(value) => {
            if (isLoading) {
              return <TextField value="Loading..." />;
            }

            return (
              <TextField value={categoriesData?.data.find((item) => item.id === value)?.title} />
            );
          }}
        />
        <Table.Column
          dataIndex="ownerEmail"
          key="ownerEmail"
          title="Owner Email"
          render={(value) => <TextField value={value} />}
          defaultSortOrder={getDefaultSortOrder('ownerEmail', sorter)}
          sorter
        />
        <Table.Column
          dataIndex="stock"
          key="stock"
          title="Stock"
          render={(value) => <TextField value={value} />}
          defaultSortOrder={getDefaultSortOrder('stock', sorter)}
          sorter
        />
        <Table.Column
          dataIndex="price"
          key="price"
          title="Price"
          render={(value) => <TextField value={value} />}
          defaultSortOrder={getDefaultSortOrder('price', sorter)}
          sorter
        />
        <Table.Column<IProduct>
          title="Actions"
          dataIndex="actions"
          render={(_, record) => (
            <Space>
              <EditButton hideText size="small" recordItemId={record.id} />
              <ShowButton hideText size="small" recordItemId={record.id} />
              <DeleteButton hideText size="small" recordItemId={record.id} />
            </Space>
          )}
        />
      </Table>
    </List>
  );
};
