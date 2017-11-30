import React from 'react';
import { Link } from 'react-router-dom';
export default function PatientComponent({ patient, onRemovePatient }) {
  // console.log(patient, '<<<<< in RxPatientComponent');
  if (!patient) return <h5>"No Patients!!"</h5>;

  function handleRemove(event) {
    event.preventDefault();

    onRemovePatient(patient.id);
  }

  return (
    <div className="card PatientComponent">
      <div className="col s12 m7">
        <div className="card horizontal">
          <div className="card-content">
            <table className="highlight centered">
              <thead>
                <tr>
                  <th style={{ width: '180px' }}>Name </th>
                  <th style={{ width: '180px' }}>Date of Birth</th>
                  <th style={{ width: '200px' }}>Phone Number</th>
                  <th style={{ width: '260px' }}>Address</th>
                  <th style={{ width: '200px' }}>Action</th>

                  <th style={{ width: '200px' }}>Action</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>
                    {patient.name}
                  </td>
                  <td>
                    {patient.dob}
                  </td>
                  <td>
                    {patient.phone}
                  </td>
                  <td>
                    {patient.address}
                  </td>

                  <td>
                    <div className="card-action">
                      <a
                        href="."
                        className="waves-effect waves-light btn red darken-2"
                        onClick={handleRemove}
                        style={{ margin: 'auto' }}>
                        REMOVE
                      </a>
                    </div>
                  </td>

                  <td>
                    <Link
                      to={`/patients/${patient.id}`}
                      //to="/add-drug"
                      style={{
                        color: 'brown',

                        fontSize: '18px',
                        textDecoration: 'underline'
                      }}>
                      EDIT PATIENT
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
