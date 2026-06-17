import icon from './assets/icon.svg'

function App() {

  return (
    <div style={{ width: '100%', margin: '0px', backgroundColor: '#0f222c', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <img style={{ width: '150px', height: '150px' }} src={icon} alt="Icon" />
      <h1 className="text-white text-3xl font-bold text-center">Welcome to Claudé Bar!</h1>
    </div>
  )
}

export default App
