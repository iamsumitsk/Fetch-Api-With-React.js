import React, {useState, useEffect} from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import { match } from 'minimatch';

function UserDetail({match}) {

    useEffect(() => {
      fetchItem();
    
    }, [])

    const [item, setItem] = useState([]);

    const fetchItem = async () => {

      const fetchItem = await fetch(`https://jsonplaceholder.typicode.com/users/?name=${match.params.name}`);
      const item = await fetchItem.json();
      setItem(item);

      console.log(item);
    };

      return (
        <div>
            <h1>Details</h1>
              {item.map(person => (
                <ul>
                  <li>ID: {person.id}</li>
                  <li>Name: {person.name}</li>
                  <li>UserName: {person.username}</li>
                  <li>Email: {person.email}</li>
                  <li>Street: {person.address.street}</li>
                  <li>Suite: {person.address.suite}</li>
                  <li>City: {person.address.city}</li>
                  <li>Zipcode: {person.address.zipcode}</li>
                  <li>Latitude: {person.address.geo.lat}</li>
                  <li>Longitude: {person.address.geo.lng}</li>
                  <li>Phone: {person.phone}</li>
                  <li>Website: {person.website}</li>
                  <li>Company-Name: {person.company.name}</li>
                  <li>Company-Phrase: {person.company.catchPhrase}</li>
                  <li>Company-bs: {person.company.bs}</li>
                  </ul>
              ))}
        </div>
      );     
}
 

export default UserDetail;