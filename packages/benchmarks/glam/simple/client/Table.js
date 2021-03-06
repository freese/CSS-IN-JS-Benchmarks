import React from 'react';
import css from '@threepointone/glam';

const tableClass = css`
  display: table;
  margin-top: 10px;
`;

const rowClass = css`
  display: table-row;
`;

const cellClass = css`
  display: table-cell;
  padding: 10px;
`;

const Table = ({ table, toPercent }) => (
  <div className={tableClass}>
    {table.map((row, i) => (
      <div className={rowClass} key={i}>
        {row.map((x, j) => {
          const cellBgClass = css`background: rgba(74, 174, 53, ${x})`;
          return (
            <div className={`${cellClass} ${cellBgClass}`} key={`${i}${j}`}>
              {toPercent(x)}
            </div>
          );
        })}
      </div>
    ))}
  </div>
);

export default Table;
