import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class EditMeetup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: "",
            name: "",
            address: "",
            city:""
        }
    }
    componentWillMount() {
        this.getMeetupDetails();
    }

    handleInputChange(e) {        
        const value = e.target.value;
        const name = e.target.name;

        this.setState({
            [name]: value
        })
    }

    editMeetup(newMeetup) {
        axios.request({
            method: "put",
            url: `http://localhost:3000/api/meetupzs/${this.state.id}`,
            data: newMeetup
          }).then(response => {
            this.props.history.push("/");
          }).catch(err => console.log(err));
    
    }

    getMeetupDetails() {

        let meetupId = this.props.match.params.id;
        axios.get(`http://localhost:3000/api/meetupzs/${meetupId}`)
            .then(response => {
                this.setState({
                    id: response.data.id,
                    name: response.data.name,
                    city: response.data.city,
                    address: response.data.address
                });
            }).catch(err => console.log(err));
        }


        
    onSubmit(e) {
        const newMeetup = {
          name: this.refs.name.value,
          city: this.refs.city.value,
          address: this.refs.address.value
        }
        this.editMeetup(newMeetup);
        e.preventDefault();
        
      }




 

  render() {
    return (
      <div>
        <br/>
        <Link className="btn grey" to="/"> Back</Link>
       <h1>Edit Meetup</h1>
       <form onSubmit={this.onSubmit.bind(this)}>
       <div className="input-field">
       <input type="text" name="name" ref="name" value={this.state.name} onChange={this.handleInputChange.bind(this)}/>
       <label htmlFor="name">Name</label>
       </div>
       <div className="input-field">
       <input type="text" name="city" ref="city" value={this.state.city} onChange={this.handleInputChange.bind(this)}/>
       <label htmlFor="city">City</label>
       </div>
       <div className="input-field">
       <input type="text" name="address" ref="address"value={this.state.address} onChange={this.handleInputChange.bind(this)}/>
       <label htmlFor="address">Address</label>
       </div>
       <input type="submit" value="Save" className="btn" />
       </form>
      </div>
    );
  }
}


export default EditMeetup;
