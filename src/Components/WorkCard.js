import React from 'react'
import "./workcard.css"
import { NavLink } from 'react-router-dom'
const WorkCard = () => {
    const clickHandle = () => {
        window.open("https://namanpuri31.github.io/calculate/")
    }
    const clickHandle2=()=>{
        window.open("https://namanpuri31.github.io/my-app/")
    }
    const clickHandle3=()=>{
        window.open("https://namanpuri31.github.io/todoreact/")
    }
    return (
        <div className='work-container'>
            <h1 className="project-heading">PROJECTS</h1>
            <div className="project-container">
                <div className="project-card">
                    <img src="https://images.unsplash.com/photo-1580193769210-b8d1c049a7d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80" alt="" />
                    <h2 className="project-title">Calculator</h2>
                    <div className="project-desc">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia impedit temporibus reprehenderit recusandae cumque nobis nemo possimus, debitis earum maiores id autem tenetur culpa quas deserunt doloremque, totam esse veritatis repellendus suscipit repellat, molestiae fuga! Pariatur aliquid laborum iusto dolorum.</p>
                        <div className="pro-button">
                            <button className='btn' onClick={clickHandle}>VIEW</button>
                        </div>

                    </div>
                </div>
                <div className="project-card">
                    <img src="https://cdn.dribbble.com/users/14268/screenshots/15780280/media/94999552f360ba84967c4b82f67e8fe0.png?compress=1&resize=400x300" alt="" />
                    <h2 className="project-title">Text Utility</h2>
                    <div className="project-desc">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia impedit temporibus reprehenderit recusandae cumque nobis nemo possimus, debitis earum maiores id autem tenetur culpa quas deserunt doloremque, totam esse veritatis repellendus suscipit repellat, molestiae fuga! Pariatur aliquid laborum iusto dolorum.</p>
                        <div className="pro-button">
                            <button className='btn' onClick={clickHandle2}>VIEW</button>
                        </div>

                    </div>
                </div>
                <div className="project-card">
                    <img src="https://clickup.com/blog/wp-content/uploads/2019/01/to-do-list-apps.png" alt="" />
                    <h2 className="project-title">TODO List</h2>
                    <div className="project-desc">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia impedit temporibus reprehenderit recusandae cumque nobis nemo possimus, debitis earum maiores id autem tenetur culpa quas deserunt doloremque, totam esse veritatis repellendus suscipit repellat, molestiae fuga! Pariatur aliquid laborum iusto dolorum.</p>
                        <div className="pro-button">
                            <button className='btn' onClick={clickHandle3}>VIEW</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkCard
