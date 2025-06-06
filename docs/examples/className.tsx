import React from 'react';
import type { TableProps } from 'rc-table';
import Table from 'rc-table';
import '../../assets/index.less';

const columns: TableProps['columns'] = [
  {
    title: 'title1',
    dataIndex: 'a',
    className: 'a',
    key: 'a',
    width: 100,
  },
  {
    title: 'title2',
    dataIndex: 'b',
    className: 'b',
    key: 'b',
    width: 100,
  },
  {
    title: 'title3',
    dataIndex: 'c',
    className: 'c',
    key: 'c',
    width: 200,
  },
  {
    title: 'Operations',
    dataIndex: '',
    className: 'd',
    key: 'd',
    render() {
      return <a href="#">Operations</a>;
    },
  },
];

const data = [
  { a: '123', key: '1' },
  { a: 'cdd', b: 'edd', key: '2' },
  { a: '1333', c: 'eee', d: 2, key: '3' },
];

const Demo = () => (
  <div>
    <h2>rowClassName and className</h2>
    <Table
      columns={columns}
      rowClassName={(record, i) => `row-${i}`}
      expandedRowRender={record => <p>extra: {record.a}</p>}
      expandedRowClassName={(record, i) => `ex-row-${i}`}
      data={data}
      className="table"
      title={() => <span>title</span>}
      footer={() => <span>footer</span>}
    />
    <h2>scroll</h2>
     <Table
      columns={columns}
      rowClassName={(record, i) => `row-${i}`}
      expandedRowRender={record => <p>extra: {record.a}</p>}
      expandedRowClassName={(record, i) => `ex-row-${i}`}
      data={Array(5).fill(data)}
      className="table"
      scroll={{ x: 'calc(700px + 50%)', y: 47 * 5 }}
      title={() => <span>title</span>}
      footer={() => <span>footer</span>}
    />
  </div>
);

export default Demo;
