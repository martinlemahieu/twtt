import { createStyles } from '@mantine/core';
import React from 'react';

const useStyles = createStyles(() => ({
  infoList: {
    '& > dt': {
      fontWeight: 'bold',
    },
    '& > dd': {
      marginLeft: '1em',
    },
  },
}));

const InfoList = ({ infos }) => {
  const { classes } = useStyles();

  return (
    <dl className={classes.infoList}>
      {infos.map((info, index) => (
        <React.Fragment key={index}>
          <dt>{info.term}</dt>
          <dd>{info.description}</dd>
        </React.Fragment>
      ))}
    </dl>
  );
};

export default InfoList;
