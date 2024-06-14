import { Outlet } from 'react-router-dom'

const FormLayout = () => {
  return (
    <>
      <div>FormLayout</div>

      <section className='flex flex-1 justify-center items-center flex-col z-10 gap-4 p-4 min-h-screen'>
        <Outlet />
      </section>
    </>
  )
}

export default FormLayout