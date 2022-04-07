import './App.css';
import { SectionWrapper, Download, Features } from './components'
import assets from './assets'
import styles from './styles/Global'

function App() {
  return (
    <div>
      <SectionWrapper 
        title="You own store of Nifty NFTs. Start selling & Growing"
        description="Buy, store, collect NFTs,
        exchange & earn crypto. Join 25+ million people using ProNEf MarketPlace."

        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
        
        />

      <SectionWrapper 
        title="Smart User Interface Marketplace"
        description="Experience a buttery UI of ProNef NFT Marketplace. Smooth constant colors of a fluent UI design "
        reverse
        mockupImg={assets.homeCards}
        />
        <Features  />
        <SectionWrapper 
          title="Deployment"
          description="ProNef is built using Expo which runs natively on all users' devices. You can easily get your app into people's hands"
          mockupImg={assets.feature}
          reverse
        />
        <SectionWrapper 
          title="Creative way to showcase the store"
          description="The app contains two screens. The first screen lists all NFTs while the second one shows the details of a specific NFT."
          mockupImg={assets.mockup}
          banner="banner02"
        />
        <Download />

        <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
          <p className={`${styles.pText} ${styles.whiteText}`}>Made with love by {" "}
          <span className="bold">Milkias Hailu</span>
          </p>
        </div>
      </div>
  );
}

export default App;
