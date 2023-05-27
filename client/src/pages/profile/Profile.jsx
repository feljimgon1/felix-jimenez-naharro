import React from 'react';
import ActionsProfile from '../../components/actions/profile/ActionsProfile';
import './Profile.scss';

export default function Profile() {

  const user = {
    name: 'Félix',
    surname: 'Jiménez Naharro',
    avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png'
  };

  const company = {
    name: 'SV-Tech',
    cnae: '8349287423847239'
  }

  return (
    <div className='profile-contaniner'>
      <div className="profile-main-title">Mi perfil</div>
      <div className="section-container">
        <div className="profile-user-container">
          <ActionsProfile edit={true} delete={true}/>
          <div className="profile-card-title">
            Información de usuario
          </div>
          <div className="profile-card-information">
            <img src={user.avatar} alt="profile-avatar" className="profile-user-avatar" />
            <div className="profile-user-information">
              <div className="user-name">
                {user.name} {user.surname}
              </div>
            </div>
          </div>
        </div>

        <div className="profile-company-container">
          <ActionsProfile edit={true} delete={false} />
          <div className="profile-card-title">
            Información de la compañía
          </div>
          <div className="profile-card-information">
            <div className="profile-company-information">
              <div className="field">
                {company.name}
              </div>
              <div className="field">
                {company.cnae}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
