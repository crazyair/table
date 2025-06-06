import React from 'react';
import type { TableProps } from 'rc-table';
import Table from 'rc-table';
import '../../assets/index.less';

const columns: TableProps['columns'] = [
  { title: 'title1', dataIndex: 'a', key: 'a', width: 60, fixed: 'start' },
  { title: 'title2', dataIndex: 'b', key: 'b', width: 80, fixed: 'start' },
  { title: 'title3', dataIndex: 'c', key: 'c', width: 120 },
  { title: 'title4', dataIndex: 'b', key: 'd', width: 100, fixed: 'start' },
  { title: 'title5', dataIndex: 'b', key: 'e' },
  { title: 'title6', dataIndex: 'b', key: 'f' },
  { title: 'title7', dataIndex: 'b', key: 'g', width: 100 },
  { title: 'title8', dataIndex: 'b', key: 'h', width: 100 },
  { title: 'title9', dataIndex: 'b', key: 'i', width: 100 },
  { title: 'title10', dataIndex: 'b', key: 'j', width: 100, fixed: 'end' },
  { title: 'title11', dataIndex: 'b', key: 'k', width: 100 },
  { title: 'title12', dataIndex: 'b', key: 'l', width: 100, fixed: 'end' },
];

const data = [
  { a: '123', b: 'xxxxxxxx xxxxxxxx', d: 3, key: '1' },
  { a: 'cdd', b: 'edd12221 edd12221', d: 3, key: '2' },
  { a: '133', c: 'edd12221 edd12221', d: 2, key: '3' },
  { a: '133', c: 'edd12221 edd12221', d: 2, key: '4' },
  { a: '133', c: 'edd12221 edd12221', d: 2, key: '5' },
  { a: '133', c: 'edd12221 edd12221', d: 2, key: '6' },
  { a: '133', c: 'edd12221 edd12221', d: 2, key: '7' },
  { a: '133', c: 'edd12221 edd12221', d: 2, key: '8' },
  { a: '133', c: 'edd12221 edd12221', d: 2, key: '9' },
];

const Demo = () => {
  const [visible, setVisible] = React.useState(true);
  const [rtl, setRtl] = React.useState(true);

  return (
    <div>
      <h2>Scroll X/Y</h2>
      <button
        type="button"
        onClick={() => {
          setVisible(!visible);
        }}
      >
        Trigger Visible
      </button>
      <button
        type="button"
        onClick={() => {
          setRtl(!rtl);
        }}
      >
        {rtl ? 'RTL' : 'LTR'}
      </button>

      <div style={{ display: visible ? undefined : 'none' }}>
        <Table
          direction={rtl ? 'rtl' : 'ltr'}
          style={{ width: 800 }}
          scroll={{ x: 1500, y: 300 }}
          columns={columns}
          data={data}
        />
      </div>
    </div>
  );
};

export default Demo;
