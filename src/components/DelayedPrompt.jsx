import { useState, useEffect } from 'react'

const DelayedPrompt = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Show the prompt after 69 seconds (69000 milliseconds)
    const timer = setTimeout(() => {
      setVisible(true)
    }, 69000)

    // Clean up the timer when component unmounts
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={`delayed-prompt ${visible ? 'visible' : ''}`}>
      psst... click on the cat
    </div>
  )
}

export default DelayedPrompt