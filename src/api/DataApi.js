import * as soda from 'soda-js';

// NASA Datasets: 
// EVA - q8u9-7uq7
// Meteorite - 2af2-m89m

export const getData = (filter) => {
  const consumer = new soda.Consumer('data.nasa.gov');
  switch (filter) {
    case 'ALL':
      return new Promise((resolve, reject) => {
        consumer.query()
          .withDataset('2af2-m89m')
          .order('date_time_peak_brightness_ut')
          .getRows()
            .on('success', (data) => {
              resolve(data);
            })
            .on('error', (err) => reject(err));
      }).then(result => {
        return result.map(val => {
          val.calculated_total_impact_energy_kt = parseFloat(val.calculated_total_impact_energy_kt);
          return val;
        });
      });

    default: 
      return null;
  }
};