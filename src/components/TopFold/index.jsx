import React from 'react'
import './topFold.css'
import Button from '../common/Buttons'

const TopFold = () => {
  return (
    <div className="topFold absolute-center">
      {/* left side */}
      <div className="tf-left">
        <div className="tf-heading">
          Discover Collect, & Sell <span className='heading-gradiant'>Extraordinary</span> NFTs
        </div>
        <div className="tf-desc">
          Please Make sure that you are buying and selling the most trending NFTs out there. The leading NFTs Marketplace on EthereumHome to the next generation of 
          Digital creators. Discover the best NFT collections.
        </div>
        <div className="tf-left-btns">
          <Button btnType="PRIMARY" btnText="EXPLORE" />
          <Button btnType="SECONDARY" btnText="Create" customeClass='tf-left-sec-btn'/>

        </div>
        <div className="tf-left-infoStats">
          <div className="tf-infoItem absolute-center">
            <div className="tf-infoItem-count">200K+</div>
            <div className="tf-infoItem-lable">Collections</div>
          </div>
          <div className="tf-infoItem absolute-center">
            <div className="tf-infoItem-count">10K+</div>
            <div className="tf-infoItem-lable">Artists</div>
          </div><div className="tf-infoItem absolute-center">
            <div className="tf-infoItem-count">240K+</div>
            <div className="tf-infoItem-lable">Comunity</div>
          </div>
        </div>
      </div>
      {/* right side */}
      <div className="tf-right"></div>
    </div>
  )
}

export default TopFold