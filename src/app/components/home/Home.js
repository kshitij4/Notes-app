import Card from '../common/UI/Card/Card';
import InputNotes from '../notes/InputNotes';
import classes from './Home.module.css';

const Home = (props) => {

  const addedNote = (title, description) => {
    props.onAddNote(title,description);
  }
  return (
    <>
      <Card className={classes.home}>
        <h1>Welcome to Notes App </h1>
      </Card>
      <InputNotes onAddNote = {addedNote}/>
    </>
  );
};

export default Home;
