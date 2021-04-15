import React, {useState, useEffect} from 'react'

const Jokes = () => {
  const [jokes, setJokes] = useState([])
  const [isHidden, setIsHidden] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://official-joke-api.appspot.com/random_joke')
    .then(res => {
      return res.json()
    }).then( data => {
      setJokes(data)
      setLoading(false)
    })
  },[])
  
  const handleBtnClick = () => {
    fetch('https://official-joke-api.appspot.com/random_joke')
    .then(res => {
      return res.json()
    }).then( data => {
      console.log(data);
      setJokes(data)
    })
  }

  const handlePunchline = () => {
    console.log('clicked');
    setIsHidden(!isHidden)
    // setShowPunchLine(true)
  }

  const Loading = () => {
    return (
      <div className='loading-text'>
        Loading...
      </div>
    )
  }

  const PunchLine = () => {
    return (
      <div className="jokes-bottom">
        <div className='leftQ'></div>
        <p>{jokes.setup}</p>
        <div className='punchline-btn'>
          <button onClick={handlePunchline}>Show Punchline</button>
        </div>
        <p className='punchline-text'>{isHidden ? jokes.punchline : null}</p>
      </div>
    )
  }

  return (
    <div className='jokes-container'>
      <div className='jokes-top'>
        <button onClick={handleBtnClick}>Get a new random joke</button>
        <p><a href="https://github.com/15Dkatz/official_joke_api">View api docs</a></p>
      </div>
      {loading ? <Loading/> : <PunchLine/>}
    </div>
  )
}

export default Jokes