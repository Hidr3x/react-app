import React from "react"
import s from "./Sidebar.module.css"
import SidebarItem from "./SidebarItem"


const  Sidebar = (props) => {
    const sideBar = props.state.sideBar.map((side) => (
        <SidebarItem name={side.name} ID={side.ID} image={side.image} />))
    return (
        <div className= {s.sidebar}>
        <h3>friends</h3>
        {sideBar}
        </div>
    )
}

export default Sidebar;