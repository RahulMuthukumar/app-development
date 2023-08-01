import React from 'react';

const CompanyTable = () => {
  return (
    <div>
      <h2>Existing Policies</h2>
      <table>
        <thead>
          <tr>
            <th>Policy Name</th>
            <th>Policy Id</th>
            <th>Policy Duration</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Child Insurance Plans.</td>
            <td>#14759</td>
            <td>10 Yrs</td>
          </tr>
          <tr>
            <td>Group life insurance.</td>
            <td>#09574</td>
            <td>5-8 Yrs</td>
          </tr>
          <tr>
            <td>Whole life insurance.</td>
            <td>#87205</td>
            <td>30 Yrs</td>
          </tr>
          <tr>
            <td>Moneyback policy.</td>
            <td>#70257</td>
            <td>8 Yrs</td>
          </tr>
          <tr>
            <td>Endowment plans.</td>
            <td>#10392</td>
            <td>5-10 Yrs</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CompanyTable;
