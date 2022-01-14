import logo from './logo.svg';
import './App.css';
import menu from './hamburger-menu.svg'
import option1 from './happy-face.svg'
import option2 from './rocket.svg'
import option3 from './flexible-girl.svg'

function App() {
  return(
  <div>
  <MenuBar icon={menu}></MenuBar>
  <Header header='A new way of coding websites' paragraph='Lorem Ipsum is simply dummy text of the printing and 
      typesetting industry. Lorem Ipsum has been the industry 
      standard dummy text ever since the 1500s, 
      when an unknown printer took a galley of type and scrambled 
      it to make a type specimen book.' icon={logo}></Header>
    <ThreeOptions header='Why ReactJS?' icon1={option1} icon2={option2} icon3={option3}></ThreeOptions> 
    <Header2  header='Do not waste time on complicated matters' paragraph='Lorem Ipsum is simply dummy text of the printing and 
      typesetting industry. Lorem Ipsum has been the industry 
      standard dummy text ever since the 1500s, 
      when an unknown printer took a galley of type and scrambled 
      it to make a type specimen book.' icon={logo}></Header2>
    <Header header='Hop in the wonderfull React community!' paragraph='Lorem Ipsum is simply dummy text of the printing and 
      typesetting industry. Lorem Ipsum has been the industry 
      standard dummy text ever since the 1500s, 
      when an unknown printer took a galley of type and scrambled 
      it to make a type specimen book.' icon={logo}></Header>
  </div>


  );
}
function Header(props){
  return(
  <div className="App">
  <header className="App-header">
    <div className='header'>
    <h3>
     {props.header}
    </h3>
    <p>{props.paragraph}</p>
       <button> Try it out</button>
    </div>
   
    <img src={props.icon} className="App-logo" alt="logo" />
  </header>
</div>
)

}
function Header2(props){
  return(
    <div className="App">
    <header className="App-header2"> 
    <img src={props.icon} className="App-logo" alt="logo" />
      <div className='header'>
      <h3 >
       {props.header}
      </h3>
      <p>{props.paragraph}</p>
         <button>Learn more</button>
      </div>
    </header>
  </div>
  )
}

function MenuBar(props){ 
  return(
    <div className='MenuBar'>
      <div type='anchor' className='hamburger-container'>
        <img src={props.icon} className='hamburger' alt='menu' />
      </div>
    </div>
  )
}

function ThreeOptions(props){
  return(
    <div className='three-container'>
    <header>
      <h3 className='header'>
        {props.header}
      </h3>
    </header>
    <div className='options'>
      <div className='one'>
        <h3>It's easy</h3>
        <p>Lorem Ipsum is simply dummy text of the printing and 
        typesetting industry.</p>
        <img src={props.icon1} className='happy-face' alt='menu' width='120px' height='120px' />
      </div>
      <div className='two'>
        <h3>It's fast</h3>
        <p>Lorem Ipsum is simply dummy text of the printing and 
        typesetting industry.</p>
        <img src={props.icon2} className='rocket' alt='menu' width='120px' height='120px'/>
      </div>
      <div className='three'>
        <h3>It's flexible</h3>
        <p>Lorem Ipsum is simply dummy text of the printing and 
        typesetting industry.</p>
        <img src={props.icon3} className='sports' alt='menu' width='120px' height='120px' />
      </div>
    </div>
    </div>
  )
}

export default App;
