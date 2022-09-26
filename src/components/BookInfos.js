import { createStyles } from '@mantine/core';

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

const BookInfos = ({ infos }) => {
  const { classes } = useStyles();

  return (
    <dl className={classes.infoList}>
      {infos.map((info, index) => (
        <>
          <dt>{info.term}</dt>
          <dd>{info.description}</dd>
        </>
      ))}
    </dl>
  );
};

export default BookInfos;
