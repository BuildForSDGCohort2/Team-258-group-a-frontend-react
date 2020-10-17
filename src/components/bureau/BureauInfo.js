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

  const info = {
      id: 0,
      name: "Test0",
      logoImg: "some_URL",
      type: "some type",
      date_joined: "28-07-2020",
      contact: {
        primary_email: "someone-email1@email.com",
        secondary_email: "someone-email2@email.com"
      },
      website: "www.someone.com",
      address: [{
        address: "Line 1",
        address_line_2: "Line 2",
        city: "Some city",
        country: "Some country",
      }],
      description: "Some description"
    }

const BureauInfo = ({data}) => {
  const [spacing, setSpacing] = useState(2);
  const classes = useStyles();
  // const info = data;



  return (
    <div className={classes.root} >

      <Grid container spacing={2} className="info-container">
        <Grid item xs={2} className="identity-section">
          <div className="edit-icon"> <EditIcon/></div>

          <div className="identity-img">
          <img src={info.logoImg} alt="logo" />
          </div>
          <div className="identity-ids">
            <p>org name: {info.name}</p>
            <p>Org type: {info.type} </p>
            <p>Fumana acc no:{info.id} </p>
            <p>Date joined:{info.date_joined}</p>
          </div>
          <div className="identity-social">social_1 social_2 social_3</div>
        </Grid>

        <Grid item xs={10} className="contact-section">
          <div className="contact-col">
            <h4>Primary Email</h4>
            <p>{info.contact.primary_email}</p>

            <h4>Secondary Email</h4>
            <p>{info.contact.secondary_email}</p>

            <h4>Website</h4>
            <p>{info.website}</p>
          </div>

          <div className="contact-col">
            <h4>Contact person</h4>
            <p>{info.contact.contact_person} </p>
            <p>Position in the organization</p>
            <h4>Phone number 1</h4>
            <p>{info.contact.phone_number_1}</p>

            <h4>Phone number 2</h4>
            <p>{info.contact.phone_number_2}</p>
          </div>

        <div className="contact-col">
          <h4>Business address</h4>
          <p>{info.address[0].address}</p>
            <p>{info.address[0].address_line_2}</p>
            <p>{info.address[0].city}</p>
            <p>{info.address[0].country}</p>
        </div>

        </Grid>


        <Grid xs={12} className="description-section">
          <h4>description section</h4>
            <p>{info.description}</p>
          <h4>Tags</h4>
          <p>tag_1 Tag_2 Tag_3</p>
        </Grid>
      </Grid>
    </div>
  );
};

export default BureauInfo