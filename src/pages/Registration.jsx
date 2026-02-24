import { useState } from 'react'
import '../App.css'
import './Registration.css'
import banner from '../assets/banner.jpg'
// Supabase client placeholder; uncomment and configure when ready
// import { supabase } from '../lib/supabaseClient'

function Registration() {
  const [form, setForm] = useState({
    teamName: '',
    p1name: '',
    p1ign: '',
    p1discord: '',
    p1phone: '',
    p1email: '',
    p2name: '',
    p2ign: '',
    p2discord: '',
    p2phone: '',
    p2email: '',
    sub1name: '',
    sub1ign: '',
    sub1discord: '',
  })

  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('')

  const required = [
    'teamName',
    'p1name',
    'p1ign',
    'p1discord',
    'p1phone',
    'p1email',
    'p2name',
    'p2ign',
    'p2discord',
    'p2phone',
    'p2email',
  ]

  function handleChange(e) {
    const { name, value } = e.target
    setForm((s) => ({ ...s, [name]: value }))
  }

  function validate() {
    const next = {}
    required.forEach((k) => {
      if (!form[k] || form[k].trim() === '') next[k] = 'Required'
    })
    if (form.p1email && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.p1email)) next.p1email = 'Invalid email'
    if (form.p2email && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.p2email)) next.p2email = 'Invalid email'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('')
    if (!validate()) {
      setStatus('Please fix errors')
      return
    }

    // TODO: connect to Supabase here. Example:
    // const { data, error } = await supabase.from('registrations').insert([{ ...form }])

    console.log('Registration payload:', form)
    setStatus('Registration ready — payload logged to console')
    // clear or keep form as desired
  }

  return (
    <main className="reg-page">
      <header className="reg-hero">
        <img className="hero-img" src={banner} alt="tournament banner" />
      </header>
      {/* Info block (like the top of a Google Form) */}
      <section className="info-block-wrap">
          <div className="info-block">
          <h2>ZENETIC Challengers Series - Valorant Skirmish Showdown 2vs2</h2>
          <p>
            Check if all the information you provided are correct. If not, then your registration will be declared invalid. For any queries, contact Zenetic Esports.
          </p>
          <p>
            <a
              className="rule-btn"
              href="https://drive.google.com/file/d/1nY5XS1Q19FySaymGbyU91OPGNlSi2C1y/view?fbclid=IwY2xjawOvtHhleHRuA2FlbQIxMABicmlkETFnVE15Y2F1MTNHRW84dHh5c3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHmbXldEIX77vIKfTrENHOoG3lAZUPwfKbEaX9M2QTAGPl7mqwIzHkWXRL3cJ_aem_n4IJO50jr2UOS-MFZU-5Lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Rulebook.
            </a>
          </p>
        </div>
      </section>

      <section className="reg-container">
        <form className="reg-form" onSubmit={handleSubmit} noValidate>
          <div className="section-row">
            <label className="full">
              Team name <span className="req">*</span>
              <div className="input-wrap">
                <i className="bx bx-group label-icon" aria-hidden="true" />
                <input className="icon icon-team" placeholder="Enter team name" name="teamName" value={form.teamName} onChange={handleChange} />
              </div>
              {errors.teamName && <small className="err">{errors.teamName}</small>}
            </label>
          </div>

          <fieldset className="players-grid">
            <legend>Main Players</legend>

            <div className="player">
              <h3>Player 1 <span className="req">*</span></h3>
              <label>
                Full name *
                <div className="input-wrap">
                  <i className="bx bx-user label-icon" aria-hidden="true" />
                  <input className="icon icon-user" placeholder="Player full name" name="p1name" value={form.p1name} onChange={handleChange} />
                </div>
                {errors.p1name && <small className="err">{errors.p1name}</small>}
              </label>
              <label>
                IGN *
                <div className="input-wrap">
                  <i className="bx bx-game label-icon" aria-hidden="true" />
                  <input className="icon icon-game" placeholder="In-game name" name="p1ign" value={form.p1ign} onChange={handleChange} />
                </div>
                {errors.p1ign && <small className="err">{errors.p1ign}</small>}
              </label>
              <label>
                Discord *
                <div className="input-wrap">
                  <i className="bx bxl-discord label-icon" aria-hidden="true" />
                  <input className="icon icon-chat" placeholder="Discord username#1234" name="p1discord" value={form.p1discord} onChange={handleChange} />
                </div>
                {errors.p1discord && <small className="err">{errors.p1discord}</small>}
              </label>
              <label>
                Phone Number *
                <div className="input-wrap">
                  <i className="bx bx-phone label-icon" aria-hidden="true" />
                  <input className="icon icon-phone" placeholder="+8801XXXXXXXXX" name="p1phone" value={form.p1phone} onChange={handleChange} />
                </div>
                {errors.p1phone && <small className="err">{errors.p1phone}</small>}
              </label>
              <label>
                Email *
                <div className="input-wrap">
                  <i className="bx bx-envelope label-icon" aria-hidden="true" />
                  <input className="icon icon-mail" placeholder="player@example.com" name="p1email" value={form.p1email} onChange={handleChange} />
                </div>
                {errors.p1email && <small className="err">{errors.p1email}</small>}
              </label>
            </div>

            <div className="player">
              <h3>Player 2 <span className="req">*</span></h3>
              <label>
                Full name *
                <div className="input-wrap">
                  <i className="bx bx-user label-icon" aria-hidden="true" />
                  <input className="icon icon-user" placeholder="Player full name" name="p2name" value={form.p2name} onChange={handleChange} />
                </div>
                {errors.p2name && <small className="err">{errors.p2name}</small>}
              </label>
              <label>
                IGN *
                <div className="input-wrap">
                  <i className="bx bx-game label-icon" aria-hidden="true" />
                  <input className="icon icon-game" placeholder="In-game name" name="p2ign" value={form.p2ign} onChange={handleChange} />
                </div>
                {errors.p2ign && <small className="err">{errors.p2ign}</small>}
              </label>
              <label>
                Discord *
                <div className="input-wrap">
                  <i className="bx bxl-discord label-icon" aria-hidden="true" />
                  <input className="icon icon-chat" placeholder="Discord username#1234" name="p2discord" value={form.p2discord} onChange={handleChange} />
                </div>
                {errors.p2discord && <small className="err">{errors.p2discord}</small>}
              </label>
              <label>
                Phone Number *
                <div className="input-wrap">
                  <i className="bx bx-phone label-icon" aria-hidden="true" />
                  <input className="icon icon-phone" placeholder="+8801XXXXXXXXX" name="p2phone" value={form.p2phone} onChange={handleChange} />
                </div>
                {errors.p2phone && <small className="err">{errors.p2phone}</small>}
              </label>
              <label>
                Email *
                <div className="input-wrap">
                  <i className="bx bx-envelope label-icon" aria-hidden="true" />
                  <input className="icon icon-mail" placeholder="player@example.com" name="p2email" value={form.p2email} onChange={handleChange} />
                </div>
                {errors.p2email && <small className="err">{errors.p2email}</small>}
              </label>
            </div>
          </fieldset>

          <fieldset className="subs">
            <legend>Substitutes</legend>
            <div className="sub">
              <h4>Sub 1</h4>
              <label>
                Full name
                <div className="input-wrap">
                  <i className="bx bx-user label-icon" aria-hidden="true" />
                  <input className="icon icon-user" placeholder="Substitute full name" name="sub1name" value={form.sub1name} onChange={handleChange} />
                </div>
              </label>
              <label>
                IGN
                <div className="input-wrap">
                  <i className="bx bx-game label-icon" aria-hidden="true" />
                  <input className="icon icon-game" placeholder="In-game name" name="sub1ign" value={form.sub1ign} onChange={handleChange} />
                </div>
              </label>
              <label>
                Discord
                <div className="input-wrap">
                  <i className="bx bxl-discord label-icon" aria-hidden="true" />
                  <input className="icon icon-chat" placeholder="Discord username#1234" name="sub1discord" value={form.sub1discord} onChange={handleChange} />
                </div>
              </label>
            </div>
          </fieldset>

          <div className="form-actions">
            <button type="submit" className="primary">Register Team</button>
            <p className="status">{status}</p>
          </div>
        </form>
      </section>
    </main>
  )
}

export default Registration
