import { Typography } from '@mui/material'
import { useRouteError } from 'react-router-dom'
import { styled } from '@mui/material/styles'

const Child = styled('div')({
  width: '350px',
})
const Parent = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  height: '90vh',
  alignItems: 'center',
})

export interface IError {
  statusText: string
  message: string
  status: number
}

export default function ErrorPage() {
  const error: IError = useRouteError() as IError
  console.error(error)

  return (
    <Parent id='error-page'>
      <Child>
        <h1>Oops!</h1>
        <h3>Sorry, an unexpected error has occurred.</h3>
        <Typography>
          <i>{error.statusText || error.message}</i>
        </Typography>
      </Child>
    </Parent>
  )
}
