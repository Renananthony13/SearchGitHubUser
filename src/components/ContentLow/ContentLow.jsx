import React,{ useState } from 'react'

import './style.css'
import '../Home/style.css'
import '../styleResponsive.css'

export default function Container(props) {
    const infosUser = props.infos;

   return (
    <div className='containerInfosUser'>
        {/* <img src={props.imgProfile} alt='profileUser' className='profileUser' /> */}
        
       {/* <div className=''> */}
            <section className='sectionProfile'>

                <div className='profile'>
                    <img src={infosUser.imgProfile} alt='profileUser' className='profileUser' />
                    <h1>{infosUser.login}</h1>
                    <h2>{infosUser.name}</h2>
                </div>

                <div className='sectionInfoProfile'>
                    <p className='bioUser'>{infosUser.bioUser}</p>
                    <p>{infosUser.joindUser}</p>

                </div>
            </section>

            <section className='sectionInfoFoll'>
                <ul>
                    <li>
                        <span>Repos:</span>
                        <span>{infosUser.reposUser}</span>
                    </li>
                    
                    <li>
                        <span>Followers:</span> 
                        <span>{infosUser.followersUser}</span>
                    </li>

                    <li>
                        <span>Folloawing:</span>
                        <span>{infosUser.followingUSer}</span>
                    </li>
                </ul>
            </section>

            {/* <section className='sectionInfoProfile'>
                <h1>Joined 25 jan 2011</h1>
                <p>this bio profile</p>
            </section> */}

           

            <section className='sectionInfoLocation'>
                <ul>
                    <li>{infosUser.locationUser}</li>
                    <li>{infosUser.companyUser}</li>
                    <li><a>{infosUser.urlUser}</a></li>
                    <li></li>
                </ul>
            </section>
       {/* </div> */}

        

    </div>

   )
}


