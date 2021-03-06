import * as React from 'react';
import { Dropdown, Grid } from '@fluentui/react-northstar';

const inputItems = [
  'Bruce Wayne',
  'Natasha Romanoff',
  'Steven Strange',
  'Alfred Pennyworth',
  `Scarlett O'Hara`,
  'Imperator Furiosa',
  'Bruce Banner',
  'Peter Parker',
  'Selina Kyle',
];

const DropdownExampleInverted = () => (
  <div>
    <Grid
      styles={({ theme: { siteVariables } }) => ({
        backgroundColor: siteVariables.colorScheme.default.background2,
        padding: '20px',
      })}
    >
      <Dropdown inverted items={inputItems} placeholder="Select your hero" />
    </Grid>
  </div>
);

export default DropdownExampleInverted;
