import React,{ useEffect, useState, useMemo } from "react"
import Container from "../ContentLow/ContentLow"

import './style.css'
import '../styleResponsive.css'


function Search() {
    const [userInp, setUserInp] = useState()
    const [infosUser, setInfoUser] = useState({})

    const userFake = {
        login: 'login user',
        name: 'Name user',
        imgProfile: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
        joindUser: '17/05/1999',
        bioUser: 'bios user',
        reposUser: '199',
        followersUser: '77',
        followingUSer: '66',
        locationUser: 'Location to user',
        companyUser: 'Company',
        urlUser: 'url profile',
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        // if(userInp.length === 0) return false
        

        fetch(`https://api.github.com/users/${userInp}`)
            .then((res) => res.json())
            .then((res) => {
                console.log(res)
                
                setInfoUser({
                    login: res.login,
                    name: res.name,
                    imgProfile: res.avatar_url,
                    joindUser: res.created_at,
                    bioUser: res.bio,
                    reposUser: res.public_repos,
                    followersUser: res.followers,
                    followingUSer: res.following,
                    locationUser: res.location,
                    companyUser: res.company,
                    urlUser: res.url,
                })

                // if(res.login === undefined) {
                //     return console.log('')
                // }
                // else {
                //     setInfoUser({
                //         login: res.login,
                //         name: res.name,
                //         imgProfile: res.avatar_url,
                //         joindUser: res.created_at,
                //         bioUser: res.bio,
                //         reposUser: res.public_repos,
                //         followersUser: res.followers,
                //         followingUSer: res.following,
                //         locationUser: res.location,
                //         companyUser: res.company,
                //         urlUser: res.url,
                   
                // }
                     
            })
            .catch((error) => error)

    }
 
    // useEffect(() => {
    //     fetch(`https://api.github.com/users/${userInp}`)
    //         .then((res) => res.json())
    //         .then((res) => {
    //             // console.log(res)
    //             setInfoUser({
    //                 login: res.login,
    //                 name: res.name,
    //                 imgProfile: res.avatar_url,
    //                 joindUser: res.created_at,
    //                 bioUser: res.bio,
    //                 reposUser: res.public_repos,
    //                 followersUser: res.followers,
    //                 followingUSer: res.following,
    //                 locationUser: res.location,
    //                 companyUser: res.company,
    //                 urlUser: res.url,
                   
    //             })
    //         })
    //         .catch((error) => console.log(error))

    // }, )

    function teste() {
        if(Object.entries(infosUser).length === 0) {
            return <Container infos={userFake} />
        } else {
            return <Container user={infosUser.login} imgProfile={infosUser.imgProfile} infos={infosUser} /> 
        }
    }

    // console.log(Object.entries(infosUser).length === 0)

    return (
        <div className="containerAll">

            <section className="searchView" >
                <form action="" onSubmit={handleSubmit}>
                    <input 
                        type="text"
                        placeholder="Search GitHub UserName...."
                        id="inputSearch"
                        onChange={(e) => setUserInp(e.target.value)}
                    />
                    <button id="btnSearch" type="submit"  >Enviar</button>
                </form>
            </section>

            {
                teste()
            }
            

        </div>
    )
}



export default Search

