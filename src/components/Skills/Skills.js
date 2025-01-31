import uniqid from 'uniqid'
import { devSkills,secSkills } from '../../portfolio'
import './Skills.css'

const DevSkills = () => {
  if (!devSkills.length) return null

  return (
    <section className='section skills' id='skills'>
      <h2 className='section__title'>Dev Skills</h2>
      <ul className='skills__list'>
        {devSkills.map((skill) => (
          <li key={uniqid()} className='skills__list-item btn btn--plain'>
            {skill}
          </li>
        ))}
      </ul>
    </section>
  )
}

const SecSkills = () => {
  if (!secSkills.length) return null

  return (
    <section className='section skills' id='skills'>
      <h2 className='section__title'>Sec Skills</h2>
      <ul className='skills__list'>
        {secSkills.map((skill) => (
          <li key={uniqid()} className='skills__list-item btn btn--plain'>
            {skill}
          </li>
        ))}
      </ul>
    </section>
  )
}
export { DevSkills, SecSkills }