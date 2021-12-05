import ImageHeader from '../images/image-header-desktop.jpg';

const _Main = () => {
  return (
    <div className='container'>
      <div className="card-content">
        <h2 className='card-title'>Get <span className='accent'>insights</span> that help your business grow.</h2>

        <p className="paragraph">
          Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.
        </p>      

        <div className="stats">
          <div className='stats-div'><span className='stats-heading'>10k+</span><span className='uppercase'>companies</span></div>
          <div className='stats-div'><span className='stats-heading'>314</span><span className='uppercase'>templates</span></div>
          <div className='stats-div'><span className='stats-heading uppercase'>12m+</span><span className='uppercase'>queries</span></div>
        </div>
      </div>
      <img className="landing-img" src={ImageHeader} alt="table with three women looking at statistics" />
    </div>
  )
}

export default _Main
