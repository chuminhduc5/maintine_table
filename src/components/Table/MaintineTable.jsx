import React, { useEffect, useRef, useState } from "react";
import '../../components/Table/MaintineTable.css';
import fakeData from "../../MOCK_DATA.json";
import { MantineReactTable, useMantineReactTable } from 'mantine-react-table';
import { Trash, Pencil, Files } from "react-bootstrap-icons";
import { Box, ActionIcon } from '@mantine/core';

function MaintineTable() {
  const columns = React.useMemo(() => [
    {
      header: "Mã hồ sơ",
      accessorKey: "id",
    },
    {
      header: "Tên công việc",
      accessorKey: "job"
    },
    {
      header: "Tên quy trình",
      accessorKey: "process"
    },
    {
      header: "Loại ký",
      accessorKey: "type"
    },
    {
      header: "Ngày tạo",
      accessorKey: "date"
    },
    {
      header: "Ngày hết hạn",
      accessorKey: "expirationDate"
    },
    {
      header: "Thao tác",
      accessorKey: "actions",
      Cell: ({ row }) => (
        <Box sx={{ display: 'flex', flexWrap: 'nowrap', gap: '8px' }}>
          <ActionIcon
            color="blue"
            onClick={() =>
              window.open(
                `mailto:kevinvandy@mailinator.com?subject=Hello ${row.original.firstName}!`,
              )
            }
          >
            <Pencil />
          </ActionIcon>
          <ActionIcon
            color="orange"
            onClick={() => {
              table.setEditingRow(row);
            }}
          >
            <Files />
          </ActionIcon>
          <ActionIcon
            color="red"
            onClick={() => {
              data.splice(row.index, 1); //assuming simple data table
              setData([...data]);
            }}
          >
            <Trash />
          </ActionIcon>
        </Box>
      )
    },
  ], []);

  const rowVirtualizerInstanceRef = useRef(null);

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sorting, setSorting] = useState([]);
  const [rowSelection, setRowSelection] = useState({});

  useEffect(() => {
    //do something when the row selection changes...
    console.info({ rowSelection });
  }, [rowSelection]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setData(fakeData.slice(0, 100));
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    try {
      rowVirtualizerInstanceRef.current?.scrollToIndex(0);
    } catch (e) {
      console.log(e);
    }
  }, [sorting]);

  const table = useMantineReactTable({
    columns,
    data,
    positionGlobalFilter: 'left', //show the global filter on the left side of the top toolbar
    initialState: {
      showGlobalFilter: true, //show the global filter by default
    },
    enableRowSelection: true,
    enableBottomToolbar: true,
    paginationDisplayMode: 'pages',
    enableGlobalFilterModes: true,
    enablePagination: true,
    enableRowNumbers: false,
    enableRowVirtualization: true,
    onSortingChange: setSorting,
    state: { isLoading, sorting },
    rowVirtualizerProps: { overscan: 8 },
  });

  return (
    <div className="maintine-table">
      <MantineReactTable table={table}/>
    </div>
  );
}

export default MaintineTable;
