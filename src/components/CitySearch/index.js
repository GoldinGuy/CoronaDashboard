import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ListSubheader from '@material-ui/core/ListSubheader';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import { VariableSizeList } from 'react-window';
import { Typography } from '@material-ui/core';
import usaCities from './usaCities';
import Autocomplete, {
  createFilterOptions
} from '@material-ui/lab/Autocomplete';
import CustomizedInput from './CustomizedInput';

const useStyles = makeStyles(theme => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1
  },
  iconButton: {
    padding: 10
  },
  divider: {
    height: 28,
    margin: 4
  }
}));

export default function Virtualize() {
  const filterOptions = createFilterOptions({
    limit: 100
  });
  const [cityObject, setCityObject] = useState();

  return (
    <Autocomplete
      limit={100}
      id="virtualizedCityBox"
      options={usaCities}
      autoSelect
      autoHighlight
      onChange={(_, value) => setCityObject(value)}
      filterOptions={filterOptions}
      getOptionLabel={option => `${option.city}, ${option.state}`}
      style={{ width: '100%' }}
      groupBy={t => t.state}
      renderInput={params => (
        <CustomizedInput cityObject={cityObject} params={params} />
      )}
    />
  );
}