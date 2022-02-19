import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './MissionCardStyle.css';

class MissionCard extends Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div className="mission-card" data-testid="mission-card">
        <p data-testid="mission-name"><strong>{ `${name}` }</strong></p>
        <hr />
        <p data-testid="mission-year">{ `Year: ${year}` }</p>
        <p data-testid="mission-country">{ `Country: ${country}` }</p>
        <p data-testid="mission-destination">{ `Destination: ${destination}` }</p>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string,
  year: PropTypes.number,
  country: PropTypes.number,
  destination: PropTypes.number,
}.isRequired;

export default MissionCard;
