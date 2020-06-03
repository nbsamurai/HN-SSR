import React from 'react';
import { Line } from 'react-chartjs-2';
import { wrapper } from '../styles';

const Graph = ({ ids, votes }) => {
  return (
    <div style={wrapper}>
      <Line
        data={{
          labels: ids,
          datasets: [
            {
              label: 'Votes / ID',
              fill: false,
              data: votes,
              backgroundColor: 'rgba(35, 140, 188,0.4)',
              borderColor: 'rgba(35, 140, 188,1)',
            },
          ],
        }}
      />
    </div>
  );
};

export default Graph;
