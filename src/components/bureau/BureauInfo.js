import React,{useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import EditIcon from '@material-ui/icons/Edit';
import './Bureau.css';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      padding:"2%",
    },
    paper: {
      height: 140,
      width: 100,
    },
    control: {
      padding: theme.spacing(2),
    },
  }));


const BureauInfo = ({ bureauData }) => {
  const [spacing, setSpacing] = useState(2);
  const classes = useStyles();



  return (
    <div className={classes.root} >

      <Grid container spacing={2} className="info-container">
        <Grid item xs={2} className="identity-section">
          <div className="edit-icon"> <EditIcon/></div>

          <div className="identity-img">
          <paper> <img src="" alt="logo" /></paper>
          </div>
          <div className="identity-ids">
            <p>org name</p>
            <p>ort type </p>
            <p>Fumana acc no: </p>
            <p>Date joined:</p>
          </div>
          <div className="identity-social">social_1 social_2 social_3</div>
        </Grid>

        <Grid item xs={10} className="contact-section">
          <div className="contact-col">
            <h4>Primary Email</h4>
            <p>name@email.com</p>

            <h4>Secondary Email</h4>
            <p>name@email.com</p>

            <h4>Website</h4>
            <p>http//ame.com</p>
          </div>

          <div className="contact-col">
            <h4>Contact person</h4>
            <p>Person name </p>
            <p>Position in the organization</p>
            <h4>Phone number 1</h4>
            <p>xxxxxxxxx</p>

            <h4>Phone number 2</h4>
            <p>xxxxxxxxxxxx</p>
          </div>

        <div className="contact-col">
          <h4>Business address</h4>
          <p>Address details </p>
        </div>

        </Grid>


        <Grid xs={12} className="description-section">
          <h4>description section</h4>
          <p>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          <h4>Tags</h4>
          <p>tag_1 Tag_2 Tag_3</p>
        </Grid>
      </Grid>
    </div>
  );
};

export default BureauInfo