import hotel from  "./images/hotel1.jpg"

const Heading = () => {
return <header className="App-header">
    <img src={hotel} style={{height: 40,  marginBottom:10 }} />
</header>
}
export default Heading;