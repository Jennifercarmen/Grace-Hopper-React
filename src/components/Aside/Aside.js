import React, { Component } from 'react';
import './Aside.css';
import GraceHopper from '../../assets/images/image.jpg'
import image from '../../assets/images/United_States.png'


class Aside extends Component {
  render() {
    return(
      <aside className="summary">
      <table className="summary-table">
        <thead>
          <tr>
            <th colSpan="2">Grace Murray Hooper</th>
          </tr>
        </thead>
          <tbody>
            <tr>
              <td colSpan="2">
              <img src={GraceHopper} alt="Commodore Grace Hopper" />
              <p>Rear Admiral Grace M. Hopper, 1984</p>
              <hr></hr>
            </td>
            </tr>
            <tr>
              <th>Nickname</th>
              <td>"Amazing Grace"</td>
            </tr>
            <tr>
              <th>Born</th>
            <td>1906-12-09 December 9, 1906</td>
          </tr>
          <tr>
            <th>Allegiance</th>
            <td><img  src={image} alt="EEUU" />United States America</td>
          </tr>
          <tr>
            <th>Service/branch</th>
            <td><a>United States Navy</a></td>
            </tr>
            <tr>
            <th>Years&#160;of service</th>
            <td>1943–1966, 1967–1971, 1972–1986</td>
            </tr>
            <tr>
            <th>Rank</th>
            <td><a>Rear admiral</a> (lower half)</td>
            </tr>
            <tr>
            <th>Awards</th>
            <td>Defense Distinguished Service Medal</td>
            </tr>
        </tbody>
      </table>
    </aside>
        
    );
  }
}

export default Aside;