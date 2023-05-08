import logo from './logo.svg';
import './App.css';
import Chapter01Task01 from './komponenty/Chapter01Task01';
import Chapter01Task02 from './komponenty/Chapter01Task02';
import Chapter01Task03 from './komponenty/Chapter01Task03';
import Chapter01Task04 from './komponenty/Chapter01Task04';
import Chapter01Task05 from './komponenty/Chapter01Task05';
import Chapter02Task01 from './komponenty/Chapter02Task01';
import Chapter02Task02 from './komponenty/Chapter02Task02';
import Chapter02Task03 from './komponenty/Chapter02Task03';
import Chapter02Task04 from './komponenty/Chapter02Task04';
import Chapter03Task01 from './komponenty/Chapter03Task01';
import Chapter03Task02 from './komponenty/Chapter03Task02';
import Chapter03Task03 from './komponenty/Chapter03Task03';
import Chapter03Task04 from './komponenty/Chapter03Task04';
import Menu from './komponenty/Chapter04/Menu';
import Wyszukaj from './komponenty/Chapter04/Wyszukaj';
import LikeBox from './komponenty/Chapter04/LikeBox';
// import Hello from './komponenty/Chapter05/Hello';
import CurrencyConverter from './komponenty/Chapter05/CurrencyConverter';
import AddNumbers from './komponenty/Chapter05/AddNumbers';
import Sum from './komponenty/Chapter05/Sum';
import menuDane from './data/menuDane';
import ParentComponent from './komponenty/Chapter06/ParentComponent';
import ChildComponent from './komponenty/Chapter06/ChildComponent';
import GrandchildComponent from './komponenty/Chapter06/GrandchildComponent';
import ShopItem from'./komponenty/Chapter06/ShopItem';
import ShopList from './komponenty/Chapter06/ShopList';
import shopLista from './data/shopLista';
import HelloWorld from './komponenty/Chapter07/HelloWorld';
import Modal from './komponenty/Chapter07/Modal';
import Box from './komponenty/Chapter07/Box';
import Clock from './komponenty/Chapter07/Clock';
import Buttons from './komponenty/Chapter08/Buttons';
import ShowUserFunc from './komponenty/Chapter08/ShowUserFunc';
import HoverEvent from './komponenty/Chapter08/HoverEvent';
import EventsTest from './komponenty/Chapter08/EventsTest';
import Counter from './komponenty/Chapter08/Counter';
import CurrentDate from './komponenty/Chapter08/CurrentDate';
import CountThings from './komponenty/Chapter08/CountThings';
import TextTyper from './komponenty/Chapter08/TextTyper';
import ToDoList from './komponenty/Chapter08/ToDoList';
import RandomNumbers from './komponenty/Chapter08/RandomNumbers';
import ColorfulBoxes from './komponenty/Chapter08/ColorfulBoxes';
import CrazyDiv from './komponenty/Chapter08/CrazyDiv';
import ButtonCounter from './komponenty/Chapter09/ButtonCounter';
import Shop from './komponenty/Chapter09/Shop';
import TodoApp from './komponenty/Chapter09/TodoApp';
import Hello from './komponenty/Chapter11/Hello';
import CarList from './komponenty/Chapter11/CarList';
import AddTwoNumbers from './komponenty/Chapter11/AddTwoNumbers';


const shopItemElement = {
  title: "MacBook Pro",
  image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2022/6/pr_2022_6_6_23_35_26_667_05.jpg",
  description: "Moc i mobilność – MacBook Pro wyraźnie podnosi tu poprzeczkę. Teraz możesz jeszcze szybciej realizować swoje pomysły. Pomogą Ci w tym wydajne procesory i układy pamięci, zaawansowana grafika, błyskawicznie działająca pamięć masowa i inne doskonałe rozwiązania.",
  price: 9999
};
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <Chapter01Task01 />
        <Chapter01Task02 />
        <Chapter01Task03 />
        <Chapter01Task04 />
        <Chapter01Task05 />
        <Chapter02Task01 />
        <Chapter02Task02 /> */}
        {/* <Chapter02Task03 /> */}
        {/* <Chapter02Task04 /> */}
        {/* <Chapter03Task01 /> */}
        {/* <Chapter03Task02 /> */}
        {/* <Chapter03Task03 /> */}
        {/* <Chapter03Task04 /> */}
        {/* <Menu menu= {menuDane} /> */}
        {/* <Wyszukaj /> */}
        {/* <LikeBox ilosc={500} /> */}
        {/* <Hello name="Michał" surname="Nowak" />
        <Hello name="Jan" surname="Kowalski" /> */}
        {/* <CurrencyConverter 
            from="EUR" 
            to="USD" 
            value={200} 
            rate={1.12275} />
        <CurrencyConverter 
          from="PLN" 
          to="EUR" 
          value={200} 
          rate={0.22} />
        <CurrencyConverter 
          from="KAT" 
          to="PLN" 
          value={200} 
          rate={10} /> */}
        {/* <AddNumbers liczbaA={2} liczbaB={120} /> */}
        {/* <Sum numbers={[1,2,3,4,99]} /> */}
        {/* <ParentComponent /> */}
        {/* <ParentComponent>
          <ChildComponent>
              <GrandchildComponent />
          </ChildComponent>
        </ParentComponent> */}
        {/* <ShopItem item={shopItemElement} /> */}
        {/* <ShopList shopList={shopLista} /> */}
        {/* <HelloWorld /> */}
        {/* <Modal heading="Zapisz się do newslettera"/> */}
        {/* <Box /> */}
        {/* <Clock /> */}
        {/* <Buttons /> */}
        {/* <ShowUserFunc imie="Michał" nazwisko="Nowak" /> */}
        {/* <HoverEvent /> */}
        {/* <EventsTest /> */}
        {/* <Counter /> */}
        {/* <CurrentDate /> */}
        {/* <CountThings /> */}
        {/* <TextTyper text="Witaj!" /> */}
        {/* <ToDoList /> */}
        {/* <RandomNumbers /> */}
        {/* <ColorfulBoxes /> */}
        {/* <CrazyDiv /> */}
        {/* <ButtonCounter /> */}
        {/* <Shop /> */}
        {/* <TodoApp /> */}
        <Hello />
        <CarList />
        <AddTwoNumbers />
      </header>
    </div>
  );
}

export default App;
