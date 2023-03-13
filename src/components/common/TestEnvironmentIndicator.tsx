import { styled } from '@mui/material/styles'
export default function TestEnvironmentIndicator() {
  const TestEnvironmentIndicator = styled('div')(({ theme }) => ({
    position: 'absolute',
    paddingTop: 0,
    borderBottomLeftRadius: theme.shape.borderRadius * 25,
    borderBottomRightRadius: theme.shape.borderRadius * 25,
    padding: theme.spacing(1),
    backgroundColor: '#012169',
    marginRight: theme.spacing(1),
    width: '800px',
    left: '150px;',
    height: '30px',
    top: '0px',

    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }))

  return (
    <>
      <TestEnvironmentIndicator>
        <div
          style={{
            fontSize: '14px',
            textAlign: 'center',
            top: '0px',
            left: '213px',
            width: '940px',
            height: '30px',
          }}
        >
          Disclaimer! - Please note that you are using MICS application{' '}
          <strong>test</strong> environment. Offers published here will{' '}
          <strong>not appear</strong> on the production site.
        </div>
      </TestEnvironmentIndicator>
    </>
  )
}
