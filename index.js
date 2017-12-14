import React, { Component, PropTypes } from 'react';
import Image from 'components/Image';

class ModuleDemo extends Component {

  render(){
	  
    return (
      <div className='FranklyModulesDemo'>
	<h2 className='demo_text'>{this.props.text}</h2>
	<p>This text is not editable!</p>
	<Image class="nadia" width={280} src={'http://tropicsgourmet.com/wp-content/uploads/2016/02/Ha_Long_Bay_Vietnam.jpg'} alt={'alt'} />
	<Image class="muzna" width={280} src={'http://franklydemo.images.worldnow.com/images/15208935_G.jpeg'} alt={'alt'} />
	<Image class="muzna" width={280} src={'http://wnow.images.worldnow.com/images/5863946_G.gif} alt={'alt'} />    
      </div>
    );
	  
  }
}

export default ModuleDemo;
