import { useRouter } from 'next/router'

const ERROR_CLASS =
  'mensaje-error mb-4 px-4 py-3 rounded relative'
const ErrorPage = ({ message }) => {
  const { push } = useRouter()

  const handleBack = e => {
    e.preventDefault()
    push('/')
  }

  return (
    <div className="max-w-4xl mx-auto min-h-96">
      <div className={ERROR_CLASS}> {message}</div>
      <button
        type="button"
        onClick={handleBack}
        className="btn-primario"
      >
        {' '}
        Volver atrás
      </button>
    </div>
  )
}

// ErrorPage.getInitialProps = ({ res, err }) => {
//   const statusCode = res ? res.statusCode : err ? err.statusCode : 404
//   return { statusCode }
// }

export default ErrorPage
