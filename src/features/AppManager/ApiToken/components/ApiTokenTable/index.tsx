import React, { HTMLAttributes } from 'react';
import { Circles } from 'react-loader-spinner';
import ApiLastUsedCell from './Cells/table.lastused.cell';
import ApiScopesCell from './Cells/table.scopes.cell';
import ApiTokenCell from './Cells/table.token.cell';
import Table from './Table';
import styles from './api-table.module.scss';
import useApiToken from '@site/src/hooks/useApiToken';
import { Column } from 'react-table';
import { TTokenType } from '@site/src/types';

export type TTokenColumn = Column<TTokenType>;

const tableColumns: TTokenColumn[] = [
  {
    Header: 'Name',
    accessor: 'display_name',
  },
  {
    Header: 'Token',
    accessor: 'token',
    Cell: ApiTokenCell,
  },
  {
    Header: 'Scopes',
    accessor: 'scopes',
    Cell: ApiScopesCell,
  },
  {
    Header: 'Last Used',
    accessor: 'last_used',
    Cell: ApiLastUsedCell,
  },
  {
    Header: 'Valid for IP',
    accessor: 'valid_for_ip',
  },
];

const ApiTokenTable = (props: HTMLAttributes<HTMLDivElement>) => {
  const { tokens, isLoadingTokens } = useApiToken();

  return (
    <div className={styles.api_table} {...props}>
      <Circles
        height='100'
        width='100'
        color='#d44c0d'
        ariaLabel='circles-loading'
        wrapperClass='loading'
        visible={isLoadingTokens}
      />
      <Table
        columns={tableColumns}
        data={tokens}
        initialState={{ hiddenColumns: ['valid_for_ip'] }}
      />
    </div>
  );
};

export default ApiTokenTable;