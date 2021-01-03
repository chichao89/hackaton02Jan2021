import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';
import { TextField } from '@material-ui/core'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './App.css'

export default function Poll() {


    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    

    //to implement the add and remove function
    const [fields, setFields] = useState([{ value: null }]);
    
    function handleChange(i, event) {
      const values = [...fields];
      values[i].value = event.target.value;
      setFields(values);
    }

    function handleAdd() {
      const values = [...fields];
      values.push({ value: null });
      setFields(values);
    }

    function handleRemove(i) {
      const values = [...fields];
      values.splice(i, 1);
      setFields(values);
    }
     
    return (
        <div>
          <div><h1>Create Poll</h1></div>
          <form>
          <Grid container spacing={5} justify="center">            
            <Grid item class="space1"> 
             <TextField name="[user.title]" label="Enter Title" color="secondary" variant="filled" multiline fullWidth required />
            </Grid>
          
          {fields.map((field, idx) => {
            return(
          <Grid key={`${field}-${idx}`} container spacing={5} justify="center">
             <Grid item class="space1">
             <TextField label={`Option ${idx+1}`} fullWidth value={field.value || ""}
              onChange={e => handleChange(idx, e)} />
             </Grid>
         </Grid>
         )})}

          <Grid container spacing={2} justify="center">
            <Grid class="space" item>
            <Button onClick={() => handleAdd()} size="small" variant="contained" color="primary">+</Button>
            </Grid>
            <Grid class="space" item>
            <Button onClick={() => handleRemove()} size="small" variant="contained" color="primary">-</Button>
            </Grid>
          </Grid> 

        <Grid container spacing={6} justify="center">
              <Grid class="space" item> 
              <label htmlFor="title">StartDate:</label> 
              <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
              </Grid>
              <Grid class="space" item>
              <label htmlFor="title">EndDate:</label> 
              <DatePicker selected={endDate} onChange={date => setEndDate(date)} />
              </Grid>
        </Grid>
              

        <Grid container spacing={6} justify="center">
          <Grid class="space" item>
            <Button type="Submit" size="small" variant="contained" color="secondary">Submit</Button>
          </Grid>
        </Grid>

        </Grid> 
        </form>
      </div>
    )
}