import React from 'react';

export default function AppTable() {
  return (
    <div className="table-responsive table">
      <table className="">
        <thead>
          <tr>
            <th>Name</th>
            <th>Date</th>
            <th>Sale</th>
            <th className="">Action </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="max-h-max">reza</td>
            <td className="max-h-max" x-text="data.date">
              222
            </td>
            <td className="max-h-max" x-text="data.sale">
              w
            </td>
            <td className="max-h-max">s</td>
          </tr>
          <tr>
            <td className="max-h-max">reza</td>
            <td className="max-h-max" x-text="data.date">
              222
            </td>
            <td className="max-h-max" x-text="data.sale"></td>
            <td className="max-h-max">
              <button type="button" x-tooltip="Delete">
                {/* <svg> ... </svg> */}
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
