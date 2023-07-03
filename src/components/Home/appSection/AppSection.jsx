
import AppHeader from './AppHeader'
import AppSection1 from './AppSection1'
import AppSection2 from './AppSection2'
import AppSection3 from './AppSection3'

function AppSection() {
  return (
    <section className='full-width'>
      <AppHeader />
      <AppSection1/>
      <AppSection2/>
      <AppSection3/>
    </section>
  )
}

export default AppSection