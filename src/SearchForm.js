import React from 'react'

export default function SearchForm() {

  return (
    <section className='section search'>
      <form className='search-form' >
        <div className='form-control'>
          <label htmlFor='name'>search the blogs</label>
          <input
            type='text'
            name='name'
            id='name'
        
          />
        </div>
      </form>
    </section>
  )
}
