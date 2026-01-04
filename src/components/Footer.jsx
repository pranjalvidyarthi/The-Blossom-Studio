import React from 'react'

const Footer = () => {
  return (
    <div>
            {/* FOOTER */}
      <footer className="bg-dark text-white text-center py-4">
        <h5>The Blossom Studio</h5>
        <p className="opacity-75">Your Private Dining Experience Awaits</p>
        <small>© {new Date().getFullYear()} All Rights Reserved</small>
      </footer>
    </div>
  )
}

export default Footer
