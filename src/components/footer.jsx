import React from 'react'

export default function footer() {
  return (
    <>
    <footer>
      <div className='footer-social boxed-up'>
        <a href="https://www.instagram.com/svevents_" rel="noreferrer"  target='_blank' aria-label="Instagram">Instagram</a>
        <a href="https://www.facebook.com/profile.php?id=100069938236657" rel="noreferrer"  target='_blank' aria-label="Facebook">Facebook</a>
        {/* <a href="/" rel="noreferrer"  target='_blank' aria-label="Twitter">Twitter</a> */}
      </div>
      <p>©2018 - {new Date().getFullYear()} SV Events, All rights reserved</p>
      </footer>
    </>
  )
}
