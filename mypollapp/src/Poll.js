import React from 'react'
import './poll.css'
export default function Poll() {
    return (
        <div>
          <div><h1>Create Poll</h1></div>
          <form>
          <label htmlFor="title">Title</label>
          <input type="text" className="form-control input-lg" placeholder="Title"/>
          <label >{"Adjust Number of Options"}</label><br/>
          <input type="button" className="btn btn-primary" value="+"/>
          <input type="button" className="btn btn-danger" value="-"/>
          3<input type="button" className="btn btn-success pull-right" value="Create Poll"/>
        </form>
      </div>
    )
}
